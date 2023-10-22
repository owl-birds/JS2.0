"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// /READ Text file and return it in an arr
// console.log("read_txt_arr_line.ts");
var read_txt_arr_line_1 = require("../../read_txt_arr_line");
// console.log(read_txt_arrline());
// copy all files in a src directory
console.log("copy_files.ts");
var copy_files_1 = require("../../copy_files");
var rename_files_1 = require("../../rename_files");
var src_path = "D:/codes/web_dummies/NEWER/JAVASCRIPT/small_projects/funcs/test_case/jpgs";
var dest_path = "D:/codes/web_dummies/NEWER/JAVASCRIPT/small_projects/funcs/test_case/jpgs/copied";
var ext = ["jpg", "txt"];
(0, copy_files_1.copy_files_dest_cow)(src_path, dest_path, 
// ""
ext[1])
    .then(function (res) {
    // console.log(res);
    var dest_path = res.dest_path, filenames_in_src = res.filenames_in_src, file_ext = res.file_ext;
    var old_names_path_list = res.copied_files_path;
    var new_names = (0, read_txt_arr_line_1.read_txt_arrline)("D:/codes/web_dummies/NEWER/JAVASCRIPT/small_projects/funcs/names/new_names1.txt");
    var new_names_path_list = [];
    for (var _i = 0, new_names_1 = new_names; _i < new_names_1.length; _i++) {
        var nm = new_names_1[_i];
        if (new_names_path_list.length === old_names_path_list.length)
            break;
        new_names_path_list.push("".concat(dest_path, "/").concat(nm, ".").concat(file_ext));
    }
    console.log(old_names_path_list);
    console.log(new_names_path_list);
    console.log(dest_path);
    (0, rename_files_1.rename_filenames_sync)(old_names_path_list, new_names_path_list);
    console.log("Files successfully copied", res.is_successful);
})
    .catch(function (err) {
    console.log(err.message);
});
// NOTES
//   const fs = require('fs');
// const folderName = '/Users/joe/test';
// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);
//   }
// } catch (err) {
//   console.error(err);
// }
