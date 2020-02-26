<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-button
          type="primary"
          icon="el-icon-delete"
          class="handle-del mr10"
          @click="delAllSelection"
        >批量删除
        </el-button>
        <el-select v-model="query.address" placeholder="地址" class="handle-select mr10">
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="湖南省" value="湖南省"></el-option>
        </el-select>
        <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="adddialogVisible = true" circle class="add"></el-button>
        <el-button type="primary" icon="el-icon-refresh" @click="getData" circle class="refresh"></el-button>
      </div>
      <el-table
        :data="tableData"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
        <el-table-column prop="account" label="账号"></el-table-column>
        <el-table-column label="用户名" prop="userName">
        </el-table-column>
        <el-table-column label="头像(查看大图)" align="center">
          <template slot-scope="scope">
            <el-image
              class="table-td-thumb"
              :src="scope.row.coverImg"
              :preview-src-list="[scope.row.coverImg]"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="身份"></el-table-column>
        <el-table-column label="状态" align="center">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.state==='1'?'success':(scope.row.state==='2'?'danger':'')"
            >{{scope.row.state}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="note" label="备注"></el-table-column>
        <el-table-column prop="createTime" label="注册时间"></el-table-column>
        <el-table-column prop="modifyTime" label="修改时间"></el-table-column>
        <el-table-column label="操作" width="180" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑
            </el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              class="red"
              @click="handleDelete(scope.$index, scope.row)"
            >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :current-page="query.pageIndex"
          :page-size="query.pageSize"
          :total="pageTotal"
          @current-change="handlePageChange"
        ></el-pagination>
      </div>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
      <el-form ref="form" :model="form" label-width="70px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
    </el-dialog>

    <el-dialog
      title="添加用户"
      :visible.sync="adddialogVisible"
      width="50%">
      <el-row class="editUserItem">
      <el-col :span="3" class="editUserItemLeft"><span>账号：</span></el-col>
      <el-col :span="12">
        <el-input
          size="small"
          v-model="account"
          clearable>
        </el-input>
      </el-col>
    </el-row>
      <el-row class="editUserItem">
        <el-col :span="3" class="editUserItemLeft"><span>密码：</span></el-col>
        <el-col :span="12">
          <el-input
            size="small"
            v-model="password"
            clearable>
          </el-input>
        </el-col>
      </el-row>
      <el-row class="editUserItem" style="margin-top: 50px">
        <el-col :span="3" class="editUserItemLeft"><span>身份：</span></el-col>
        <el-col :span="12">
          <el-radio v-model="identity" label="2">访客</el-radio>
          <el-radio v-model="identity" label="1">管理员</el-radio>
          <el-radio v-model="identity" label="0">超级管理员</el-radio>
        </el-col>
      </el-row>
      <el-row class="editUserItem">
        <el-col :span="3" class="editUserItemLeft"><span>备注：</span></el-col>
        <el-col :span="12">
          <el-input
            size="small"
            v-model="usernote"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            clearable>
          </el-input>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
    <el-button @click="adddialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="adduser">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'SystemUser',
    data() {
      return {
        query: {
          address: '',
          name: '',
          pageIndex: 1,
          pageSize: 10
        },
        account:"",
        password:"",
        identity:1,
        usernote:"",
        adddialogVisible:false,
        tableData: [],
        multipleSelection: [],
        delList: [],
        editVisible: false,
        pageTotal: 0,
        form: {},
        idx: -1,
        id: -1
      };
    },
    created() {
      this.getData();
    },
    methods: {
      adduser(){
        var _this = this;
        this.$axios.post("http://localhost:8081/admin/adduser", {
          account:_this.account,
          password:_this.password,
          isAdaim:_this.identity,
          note:_this.usernote
        }).then(function (res) {
          if (res.data.code == 200) {
            _this.getUername();
          } else {
            _this.$message.error(res.data.msg);
          }
        }).catch(function (err) {
          _this.$message.error(err.data)
        })
        _this.adddialogVisible = false
      },
      getData() {
        // var _this = this;
        // this.$axios.post("http://localhost:8081/admin/lists", {}).then(function (res) {
        //   if (res.data.code == 200) {
        //     console.log(res.data.data)
        //     this.tableData = res.data.data;
        //     // this.pageTotal = res.pageTotal || 50;
        //   } else {
        //     _this.$message.error(res.data.msg);
        //   }
        // }).catch(function (err) {
        //   _this.$message.error(err.data)
        // })
        var _this = this;
        let formData = new FormData();
        formData.append('page', 1);
        formData.append("limits", 3);
        let config = {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        };
        this.$axios.post("http://localhost:8081/admin/lists", formData, config
        ).then(function (res) {
          if (res.data.code == 200) {
            _this.$message.success(res.data.msg);
            console.log(res.data.data.lists)
            _this.tableData = res.data.data.lists;
            console.log(_this.tableData.size)

          } else {
            _this.$message.error(res.data.msg);
          }
        }).catch(function (err) {
          _this.$message.error(err.data)
        })
      },
      // 触发搜索按钮
      handleSearch() {
        this.$set(this.query, 'pageIndex', 1);
        this.getData();
      },
      // 删除操作
      handleDelete(index, row) {
        // 二次确认删除
        this.$confirm('确定要删除吗？', '提示', {
          type: 'warning'
        })
          .then(() => {
            this.$message.success('删除成功');
            this.tableData.splice(index, 1);
          })
          .catch(() => {
          });
      },
      // 多选操作
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      delAllSelection() {
        const length = this.multipleSelection.length;
        let str = '';
        this.delList = this.delList.concat(this.multipleSelection);
        for (let i = 0; i < length; i++) {
          str += this.multipleSelection[i].name + ' ';
        }
        this.$message.error(`删除了${str}`);
        this.multipleSelection = [];
      },
      // 编辑操作
      handleEdit(index, row) {
        this.idx = index;
        this.form = row;
        this.editVisible = true;
      },
      // 保存编辑
      saveEdit() {
        this.editVisible = false;
        this.$message.success(`修改第 ${this.idx + 1} 行成功`);
        this.$set(this.tableData, this.idx, this.form);
      },
      // 分页导航
      handlePageChange(val) {
        this.$set(this.query, 'pageIndex', val);
        this.getData();
      }
    }
  };
</script>

<style scoped>
  .handle-box {
    margin-bottom: 20px;
  }

  .handle-select {
    width: 120px;
  }

  .handle-input {
    width: 300px;
    display: inline-block;
  }

  .table {
    width: 100%;
    font-size: 14px;
  }

  .red {
    color: #ff0000;
  }

  .mr10 {
    margin-right: 10px;
  }

  .table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
  }
  .add {
    position: fixed;
    /*align-self: flex-end;*/
    right: 130px;
  }
  .refresh {
    position: fixed;
    /*align-self: flex-end;*/
    right: 80px;
  }
  .edit {
    margin-left: 50px;
    width: 100px;
    margin-top: 30px;
  }

  .editUserItemLeft {
    padding-left: 15px;
    margin-top: 5px;
  }

  .editUserItem {
    margin-bottom: 10px;
    padding-left: 15px;
  }
</style>
