(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{635:function(e,t,n){"use strict";n.r(t);var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l={name:"component-exhibition",components:{"firm-demo0":a({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("u-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:!1}},[n("template",{slot:"empty"},[e._v("\n            没有查询到符合条件的记录\n       ")]),e._v(" "),n("u-table-column",{attrs:{prop:"name",label:"名字",width:"180"}}),e._v(" "),n("u-table-column",{attrs:{prop:"sex",label:"性别",width:"180"}}),e._v(" "),n("u-table-column",{attrs:{prop:"age",label:"年龄"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{model:{value:t.row.sex,callback:function(n){e.$set(t.row,"sex",n)},expression:"scope.row.sex"}},e._l(e.sexList,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])})],2)]],2)},staticRenderFns:[]},{data:function(){return{sexList:[{value:1,label:"男"},{value:2,label:"女"},{value:3,label:"未知"}],tableData:[{sex:"男",name:"王小虎",age:"15"},{sex:"女",name:"王小明",age:"15"},{sex:"女",name:"王小丽",age:"15"},{sex:"未知",name:"王小狗",age:"15"}]}}}),"firm-demo1":a({render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[[t("u-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData,border:!0,stripe:""}},[t("u-table-column",{attrs:{prop:"name",label:"名字",width:"180"}}),this._v(" "),t("u-table-column",{attrs:{prop:"sex",label:"性别",width:"180"}}),this._v(" "),t("u-table-column",{attrs:{prop:"age",label:"年龄"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{tableData:[{sex:"男",name:"王小虎",age:"15"},{sex:"女",name:"王小明",age:"15"},{sex:"女",name:"王小丽",age:"15"},{sex:"未知",name:"王小狗",age:"15"}]}}})}},s=n(34),r=Object(s.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._m(0),t("div",[this._m(1),t("template",{slot:"source"},[t("firm-demo0")],1),t("template",{slot:"highlight"},[this._m(2)])],2),this._m(3),t("p",[this._v("使用带斑马纹的表格，可以更容易区分出不同行的数据。")]),t("div",[this._m(4),t("template",{slot:"source"},[t("firm-demo1")],1),t("template",{slot:"highlight"},[this._m(5)])],2)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"ji-chu-biao-ge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-biao-ge"}},[this._v("¶")]),this._v(" 基础表格")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("当"),n("code",[e._v("u-table")]),e._v("元素中注入"),n("code",[e._v("data")]),e._v("对象数组后，在"),n("code",[e._v("u-table-column")]),e._v("中用"),n("code",[e._v("prop")]),e._v("属性来对应对象中的键名即可填入数据，用"),n("code",[e._v("label")]),e._v("属性来定义表格的列名。可以使用"),n("code",[e._v("width")]),e._v("属性来定义列宽。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[this._v('  <template>\n    <u-table\n      :data="tableData"\n      :border="false"\n      style="width: 100%">\n      <template slot="empty">\n            没有查询到符合条件的记录\n       </template>\n      <u-table-column\n        prop="name"\n        label="名字"\n        width="180">\n      </u-table-column>\n      <u-table-column\n        prop="sex"\n        label="性别"\n        width="180">\n      </u-table-column>\n      <u-table-column\n        prop="age"\n        label="年龄">\n        <template v-slot="scope">\n            <el-select v-model="scope.row.sex">\n                             <el-option v-for="item in sexList" :key="item.value" :label="item.label" :value="item.value"></el-option>\n                           </el-select>\n        </template>\n      </u-table-column>\n    </u-table>\n  </template>\n\n  <script>\n    export default {\n      data() {\n        return {\n          sexList: [\n             { value: 1,label: \'男\' },\n             { value: 2,label: \'女\'},\n             { value: 3,label: \'未知\'}\n          ],\n          tableData: [{\n            sex: \'男\',\n            name: \'王小虎\',\n            age: \'15\'\n          }, {\n            sex: \'女\',\n            name: \'王小明\',\n            age: \'15\'\n          }, {\n            sex: \'女\',\n            name: \'王小丽\',\n            age: \'15\'\n          }, {\n            sex: \'未知\',\n            name: \'王小狗\',\n            age: \'15\'\n          }]\n        }\n      }\n    }\n  <\/script>\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"dai-ban-ma-wen-biao-ge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dai-ban-ma-wen-biao-ge"}},[this._v("¶")]),this._v(" 带斑马纹表格")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[n("code",[e._v("stripe")]),e._v("属性可以创建带斑马纹的表格。它接受一个"),n("code",[e._v("Boolean")]),e._v("，默认为"),n("code",[e._v("false")]),e._v("，设置为"),n("code",[e._v("true")]),e._v("即为启用。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[this._v("<template>\n    <u-table\n      :data=\"tableData\"\n      :border=\"true\"\n      stripe\n      style=\"width: 100%\">\n      <u-table-column\n        prop=\"name\"\n        label=\"名字\"\n        width=\"180\">\n      </u-table-column>\n      <u-table-column\n        prop=\"sex\"\n        label=\"性别\"\n        width=\"180\">\n      </u-table-column>\n      <u-table-column\n        prop=\"age\"\n        label=\"年龄\">\n      </u-table-column>\n    </u-table>\n  </template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n            sex: '男',\n            name: '王小虎',\n            age: '15'\n          }, {\n            sex: '女',\n            name: '王小明',\n            age: '15'\n          }, {\n            sex: '女',\n            name: '王小丽',\n            age: '15'\n          }, {\n            sex: '未知',\n            name: '王小狗',\n            age: '15'\n          }]\n      }\n    }\n  }\n<\/script>\n")])])}],!1,null,null,null);t.default=r.exports}}]);