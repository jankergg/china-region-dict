var UglifyJS = require("uglify-js");
var fs = require('fs');
var Source = JSON.stringify(require("./src/area.json"));
var result = UglifyJS.minify(";var map=" + Source);
var fileStr = result.code + "export {map as default};"
//console.log(fileStr)

fs.writeFile("./dist/region.js", fileStr, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("文件压缩完毕！");
});

