(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3c5b"],{"0434":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",{attrs:{type:"card"}},[n("template",{slot:"header"},[t._v("导入 xlsx")]),n("div",{staticClass:"d2-mb"},[n("el-button",{on:{click:t.download}},[n("d2-icon",{attrs:{name:"download"}}),t._v(" 下载演示 .xlsx 表格 ")],1)],1),n("div",{staticClass:"d2-mb"},[n("el-upload",{attrs:{"before-upload":t.handleUpload,action:"default"}},[n("el-button",{attrs:{type:"success"}},[n("d2-icon",{attrs:{name:"file-o"}}),t._v(" 选择要导入的 .xlsx 表格 ")],1)],1)],1),n("el-table",t._b({},"el-table",t.table,!1),t._l(t.table.columns,(function(t,e){return n("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label}})})),1)],2)},l=[],o=(n("d81d"),n("8bbf")),s=n.n(o),r=n("b0416"),i=n.n(r);s.a.use(i.a);var d={data:function(){return{table:{columns:[],data:[],size:"mini",stripe:!0,border:!0}}},methods:{handleUpload:function(t){var e=this;return this.$import.xlsx(t).then((function(t){var n=t.header,a=t.results;e.table.columns=n.map((function(t){return{label:t,prop:t}})),e.table.data=a})),!1},download:function(){window.location.href="http://fairyever.qiniudn.com/d2-admin-import-xlsx-demo.xlsx"}}},u=d,c=n("2877"),p=function(t){t.options.__source="src/views/demo/plugins/import/xlsx.vue"},b=p,m=Object(c["a"])(u,a,l,!1,null,null,null);"function"===typeof b&&b(m);e["default"]=m.exports}}]);