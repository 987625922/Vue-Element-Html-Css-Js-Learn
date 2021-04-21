## 目录

1. **[id选择器](#id选择器)**
2. **[class选择器](#class选择器)**
3. **[CSS组合选择符](#CSS组合选择符)**
4. **[继承](#继承)**
2. **[CSS背景](#CSS背景)**
2. **[CSS文本格式](#CSS文本格式)**
2. **[CSS字体](#CSS字体)**
1. **[CSS链接](#CSS链接)**
1. **[CSS列表](#CSS列表)**
1. **[table表格](#table表格)**
1. **[border边框](#border边框)**
1. **[display](#display)**
1. **[position](#position)**
1. **[float](#Float浮动)**
1. **[水平居中](#水平居中)**
2. **[垂直居中](#垂直居中)**
3. **[水平垂直居中](#水平垂直居中)**
4. **[左列表右自适应](#左列表右自适应)**
5.  **[右列表左自适应](#右列表左自适应)**

### id选择器

```
#red {color:red;}
#green {color:green;}
```

```
<p id="red">这个段落是红色。</p>
<p id="green">这个段落是绿色。</p>
```

### class选择器
```
.center {text-align: center}
```

```
<h1 class="center">
This heading will be center-aligned
</h1>

<p class="center">
This paragraph will also be center-aligned.
</p>
```

### CSS组合选择符

```
div p{} 所有 <p> 元素插入到 <div> 元素中
div>p <div>元素中所有直接子元素<p> 二级的p不会被选取（子代选择器）
div+p 所有位于 <div> 元素后的第一个 <p> 元素
div~p div之后的所有p元素(后代选择器)
```
### 继承

```
继承性的属性

1、字体系列属性

font：组合字体

font-family：规定元素的字体系列

font-weight：设置字体的粗细

font-size：设置字体的尺寸

font-style：定义字体的风格

font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。

font-stretch：对当前的 font-family 进行伸缩变形。所有主流浏览器都不支持。

font-size-adjust：为某个元素规定一个 aspect 值，这样就可以保持首选字体的 x-height。

2、文本系列属性

text-indent：文本缩进

text-align：文本水平对齐

line-height：行高

word-spacing：增加或减少单词间的空白（即字间隔）

letter-spacing：增加或减少字符间的空白（字符间距）

text-transform：控制文本大小写

direction：规定文本的书写方向

color：文本颜色

3、元素可见性：visibility

4、表格布局属性：caption-side、border-collapse、border-spacing、empty-cells、table-layout

5、列表布局属性：list-style-type、list-style-image、list-style-position、list-style

6、生成内容属性：quotes

7、光标属性：cursor

8、页面样式属性：page、page-break-inside、windows、orphans

9、声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、pitch、pitch-range、stress、richness、、azimuth、elevation

 
```

#### CSS背景
```
background-color   body {background-color:#b0c4de;}
background-image   div {background-image: url(/i/eg_bg_04.gif);}
background-repeat  background-repeat:repeat-x;
background-attachment
background-position  background-position:right top;
```

#### CSS文本格式

```
h1 {color:#00ff00;}
h1 {text-align:center;}  文本可居中或对齐到左或右,两端对齐.
a {text-decoration:none;}  text-decoration属性主要是用来删除链接的下划线
p {text-indent:50px;}  文本缩进属性是用来指定文本的第一行的缩进

color	设置文本颜色
direction	设置文本方向。
letter-spacing	设置字符间距
line-height	设置行高
text-align	对齐元素中的文本
text-decoration	向文本添加修饰
text-indent	缩进元素中文本的首行
text-shadow	设置文本阴影
text-transform	控制元素中的字母
unicode-bidi	设置或返回文本是否被重写 
vertical-align	设置元素的垂直对齐
white-space	设置元素中空白的处理方式
word-spacing	设置字间距

```

#### CSS字体

```
font	在一个声明中设置所有的字体属性
font-family	指定文本的字体系列
font-size	指定文本的字体大小
font-style	指定文本的字体样式
font-variant	以小型大写字体或者正常字体显示文本。
font-weight	指定字体的粗细。

p{font-family:"Times New Roman", Times, serif;}
p.italic {font-style:italic;}
h1 {font-size:40px;} 1em的默认大小是16px
h1 {font-size:2.5em;} /* 40px/16=2.5em */

```

#### CSS链接

```
a:link {color:#000000;}      /* 未访问链接*/
a:visited {color:#00FF00;}  /* 已访问链接 */
a:hover {color:#FF00FF;}  /* 鼠标移动到链接上 */
a:active {color:#0000FF;}  /* 鼠标点击时 */
```
#### CSS列表

```
ul.a {list-style-type: circle;}   /*列表头的样式 */
ol.c {list-style-type: upper-roman;} /* 有序列表的样式 */
ul {list-style-image: url('sqpurple.gif');} /* 图片作为头样式 */
```
#### table表格

```
<style>
    table {
        border-collapse: collapse;
    }

    table,
    th,
    td {
        border: 1px solid black;
    }

    table {

        width: 100%;
    }

    th {
        height: 50px;
        background-color: green;
        color: white;
    }

    td {
        text-align: right;
        background-color: green;
        color: white;
    }
    </style>
    <table>
        <tr>
            <th>123</th>
            <th>123</th>
        </tr>
        <tr>
            <td>321</td>
            <td>321</td>
        </tr>
    </table>
```
#### border边框

###### p的标签支持以下属性
```
border	简写属性，用于把针对四个边的属性设置在一个声明。
border-style	用于设置元素所有边框的样式，或者单独地为各边设置边框样式。
border-width	简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度。
border-color	简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色。
border-bottom	简写属性，用于把下边框的所有属性设置到一个声明中。
border-bottom-color	设置元素的下边框的颜色。
border-bottom-style	设置元素的下边框的样式。
border-bottom-width	设置元素的下边框的宽度。
```

#### display

```
块级元素(block)特性：

总是独占一行，表现为另起一行开始，而且其后的元素也必须另起一行显示;
宽度(width)、高度(height)、内边距(padding)和外边距(margin)都可控制;
内联元素(inline)特性：

和相邻的内联元素在同一行;
宽度(width)、高度(height)、内边距的top/bottom(padding-top/padding-bottom)和外边距的top/bottom(margin-top/margin-bottom)都不可改变，就是里面文字或图片的大小;
块级元素主要有：

 address , blockquote , center , dir , div , dl , fieldset , form , h1 , h2 , h3 , h4 , h5 , h6 , hr , isindex , menu , noframes , noscript , ol , p , pre , table , ul , li
内联元素主要有：

a , abbr , acronym , b , bdo , big , br , cite , code , dfn , em , font , i , img , input , kbd , label , q , s , samp , select , small , span , strike , strong , sub , sup ,textarea , tt , u , var
```

#### position

```
position 属性的四个值：

static  默认
relative 相对定位元素的定位是相对其正常位置。相对定位元素的定位是相对其正常位置。
fixed 元素的位置相对于浏览器窗口是固定位置。
absolute 定位的元素和其他元素重叠
```
#### float

```
元素的水平方向浮动，意味着元素只能左右移动而不能上下移动。

一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

浮动元素之后的元素将围绕它。

浮动元素之前的元素将不会受到影响。

如果图像是右浮动，下面的文本流将环绕在它左边
```


### 水平居中

```
  <style>
    #parent {
      background: blue;
      text-align: center;
    }

    #content {
      display: inline-block;
    }
  </style>
  
  <div id="parent">
    <div id="content">
      11111
      <!-- <img src="img/main.jpg" alt="" style="width:100px;height:100px;"> -->
    </div>
```
### 垂直居中
##### 1.文字
```
  <style>
    #parent {
      background: blue;
      line-height: 150px;
      height: 150px;
    }

    #content {}
  </style>
  
```
##### 2.图片

```
<style>
    #parent {
      background: blue;
      line-height: 150px;
      height: 150px;
      font-size: 0;
    }

    #content {}

    img {
      vertical-align: middle;
    }
  </style>
</head>

<body>
  <div id="parent">
    <div id="content">
      <img src="img/main.jpg" alt="" style="width:100px;height:100px;">
    </div>

  </div>
</body>
```
### 水平垂直居中

```
<style>
    #parent {
      background: blue;
      line-height: 150px;
      height: 150px;
      font-size: 0;
      text-align: center; //其实只是上面图片的垂直居中加了这个
    }

    #content {}

    img {
      vertical-align: middle;
    }
  </style>
</head>

<body>
  <div id="parent">
    <div id="content">
      <img src="img/main.jpg" alt="" style="width:100px;height:100px;">
    </div>

  </div>
```
### 左列表右自适应

```
<style>
    #left{
      float: left;
      width: 100px;
      background: #123;
      height: 100%;
    }
    #right{
      margin-left: 100px;
      background: #321;
      height: 500px;
    }
    </style>
    <div id="left">左列定宽</div>
    <div id="right">右列自适应</div>
```
### 右列表左自适应

```
<style>
    #left {
        width: 100%;
        height: 500px;
        float: left;
        margin-left: -100px;
        /*正值等于#right的宽度*/
        background-color: #f00;
    }

    #right {
        height: 500px;
        width: 100px;
        float: right;
        background-color: #0f0;
    }

    #parent {
        height: 500px;
        padding-left: 100px;
        /*抵消#left的margin-left以达到#parent水平居中*/
    }
    </style>
</head>

<body>
    <div id="parent">
        <div id="left">左列定宽1111111111111111111</div>
        <div id="right">右列自适应</div>
    </div>
</body>
```
