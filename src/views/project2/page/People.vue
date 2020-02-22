<template>
  <div>
    <el-card shadow="hover" :body-style="{padding: '0px'}" id="cardbg">
      <el-row>
        <el-col :span="6">
          <div class="crop-demo">
            <div class="crop-demo-btn">
              <img :src="cropImg" class="pre-img">
              <input class="crop-input" type="file" name="image" accept="image/*" @change="setImage"
                     multiple="multiplt"/>
            </div>
          </div>
          <el-button style="margin-left: 50px;width: 100px;margin-top: 30px">编辑资料</el-button>
        </el-col>
        <el-col :span="12">
          <div class="userInfo">
            <div><i class="el-icon-user userFont"> 账号：</i>
            </div>
            <div><i class="el-icon-s-custom userFont"> 用户名：</i>
            </div>
            <div><i class="el-icon-male userFont"> 性别：</i>
            </div>
            <div><i class="el-icon-printer userFont"> 邮箱：</i>
            </div>
            <div><i class="el-icon-tickets userFont"> 简介：</i>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-dialog title="裁剪图片" :visible.sync="dialogVisible" width="30%">
      <vue-cropper ref='cropper' :src="imgSrc" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage"
                   style="width:100%;height:300px;"></vue-cropper>
      <span slot="footer" class="dialog-footer">
                    <el-button @click="cancelCrop">取 消</el-button>
                    <el-button type="primary" @click="update">确 定</el-button>
                </span>
    </el-dialog>
  </div>
</template>

<script>
  import VueCropper from 'vue-cropperjs';
  import store from '@/store'

  export default {
    name: 'People',
    data: function () {
      return {
        defaultSrc: require('../../../assets/img/default.jpg'),
        fileList: [],
        imgSrc: '',
        cropImg: '',
        dialogVisible: false,
        file: ''
      }
    },
    components: {
      VueCropper
    },
    methods: {
      setImage(e) {
        var _this = this;
        const file = e.target.files[0];
        this.file = e.target.files[0];
        if (!file.type.includes('image/')) {
          _this.$message.error("不是图片")
          return;
        }
        if (file.size > 1024 * 500) {
          _this.$message.error("图片过大")
          return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
          this.dialogVisible = true;
          this.imgSrc = event.target.result;
          this.$refs.cropper && this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      },
      cropImage() {
        this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      },
      cancelCrop() {
        this.dialogVisible = false;
        this.cropImg = this.defaultSrc;
      },
      update() {
        this.dialogVisible = false;
        this.submitAddFile()
      },
      submitAddFile() {
        let formData = new FormData();
        formData.append('img', this.file, this.file.name);
        formData.append("userId", this.$store.state.userId)
        let config = {
          headers: {'Content-Type': 'multipart/form-data'}
        };  //添加请求头
        this.$axios.post('http://localhost:8081/admin/uploadIcon', formData, config)
          .then(response => {
            console.log(response.data);
          })
      },
      getUername() {
        var _this = this;
        this.$axios.get("http://localhost:8081/admin/getInfo", {
          params: {
            id: store.state.userId
          }
        }).then(function (res) {
          if (res.data.code == 200) {
            store.commit('setUserName', res.data.data.userName)
            _this.account = res.data.data.phone
          } else {
            _this.$message.error(res.data.msg);
          }
        }).catch(function (err) {
          _this.$message.error(err.data)
        })
      }
    },
    mounted() {
      //vue的生命周期，每次打开都调用
      this.getUername();
    },
    created() {
      this.cropImg = this.defaultSrc;
    }
  }
</script>

<style scoped>
  .pre-img {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #f8f8f8;
    border: 1px solid #eee;
    border-radius: 5px;
  }

  .crop-demo {
    display: flex;
    align-items: flex-end;
  }

  .crop-demo-btn {
    position: relative;
    width: 100px;
    height: 100px;
    line-height: 40px;
    padding: 0 20px;
    margin-left: 30px;
    margin-top: 30px;
    font-size: 14px;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .crop-input {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 17px;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }

  #cardbg {
    width: 800px;
    height: 300px;
  }

  .userInfo {
    margin-top: 50px;
  }

  .userFont {
    font-size: 17px;
    font-style: normal;
    color: #afb3bf;
    margin-bottom: 15px;
  }
</style>
