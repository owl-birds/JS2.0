// /READ Text file and return it in an arr
// console.log("read_txt_arr_line.ts");
import { read_txt_arrline } from "../../read_txt_arr_line";
// console.log(read_txt_arrline());

// copy all files in a src directory
console.log("copy_files.ts");
import { copy_files_dest_cow } from "../../copy_files";
import { rename_filenames_sync } from "../../rename_files";
const src_path =
  "D:/codes/web_dummies/NEWER/JAVASCRIPT/small_projects/funcs/test_case/jpgs";
const dest_path =
  "D:/codes/web_dummies/NEWER/JAVASCRIPT/small_projects/funcs/test_case/jpgs/copied";
const ext: string[] = ["jpg", "txt"];

copy_files_dest_cow(
  src_path,
  dest_path,
  // ""
  ext[1]
)
  .then((res) => {
    // console.log(res);
    const { dest_path, filenames_in_src, file_ext } = res;
    const old_names_path_list: string[] = res.copied_files_path;
    const new_names: string[] = read_txt_arrline(
      "D:/codes/web_dummies/NEWER/JAVASCRIPT/small_projects/funcs/names/new_names1.txt"
    );
    const new_names_path_list: string[] = [];
    for (let nm of new_names) {
      if (new_names_path_list.length === old_names_path_list.length) break;
      new_names_path_list.push(`${dest_path}/${nm}.${file_ext}`);
    }
    console.log(old_names_path_list);
    console.log(new_names_path_list);
    console.log(dest_path);
    rename_filenames_sync(old_names_path_list, new_names_path_list);
    console.log("Files successfully copied", res.is_successful);
  })
  .catch((err) => {
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
