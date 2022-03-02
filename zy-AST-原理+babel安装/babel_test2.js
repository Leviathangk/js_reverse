// 将JS源码转换成语法树
var parser = require("@babel/parser");
// 为parser提供模板引擎
var template = require("@babel/template").default;
// 遍历AST
var traverse = require("@babel/traverse").default;
// 操作节点，比如判断节点类型，生成新的节点等
var t = require("@babel/types");
// 可以直接用type声明一断新的代码
// 将语法树转换为源代码
var generator = require("@babel/generator").default;
// 操作文件
var fs = require("fs");

var jscode = fs.readFileSync("read.js", {     //更改读取文件
    encoding: "utf-8"
});

let ast = parser.parse(jscode);

console.log(ast);
