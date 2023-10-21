import {
  readdirSync,
  copyFileSync,
  constants,
  existsSync,
  mkdirSync,
} from "fs";

export const copy_files_dest_cow = async (
  src_path: string = "./test_case/jpgs",
  //
  dest_path: string = "./test_case/copy_res",
  file_ext: string = "txt"
) => {
  // checking if the src dir exist
  if (!existsSync(src_path)) {
    throw new Error("src directory doesnt exist");
  }
  // read all the filenames on src directory and
  // storre it in an array of string
  let files_name: string[] | undefined = undefined;
  try {
    const all_files: string[] = readdirSync(src_path, {
      encoding: "utf8",
      withFileTypes: false,
      // recursive: false
    });
    // return { files_name: all_files, status: true };
    // files_name = [...all_files]; // cleaning : cleaning all file that arent
    // the same ast the exension provided in the func parameter
    files_name = [];
    for (let filename of all_files) {
      if (
        `.${filename.slice(filename.length - file_ext.length)}` ===
        `.${file_ext}`
      ) {
        files_name.push(filename);
      }
    }
  } catch (error) {
    throw new Error(
      "error in reading the files name in src directory\nsrc_path:" + src_path
    );
  }

  // copy
  try {
    if (!existsSync(dest_path)) {
      mkdirSync(dest_path);
    }
  } catch (error) {
    throw new Error("Error in making destination directory");
  }
  const copied_files_path: string[] = [];
  for (let filename of files_name) {
    const src_file_path: string = `${src_path}/${filename}`;
    const dest_file_path: string = `${dest_path}/${filename}`;
    // console.log(src_file_path);
    try {
      copyFileSync(src_file_path, dest_file_path, constants.COPYFILE_FICLONE);
      copied_files_path.push(dest_file_path);
    } catch (_) {
      throw new Error(
        `Failed to copy file, \nsrc_path:${src_file_path}\ndest_path:${dest_file_path}`
      );
    }
  }

  return {
    src_path,
    dest_path,
    copied_files_path,
    is_successful: true,
    filenames_in_src: files_name,
  };
};

// Parameters: This method accepts three parameters as mentioned above and described below:

// src: It is a String, Buffer or URL that denotes the source filename to copy.
// dest: It is a String, Buffer or URL that denotes the destination filename that the copy operation would create.
// mode: It is an integer that specifies the behavior of the copy operation. The values can be given predefined constants that have their respective behaviours:
// fs.constants.COPYFILE_EXCL: This constant specifies that the copy operation would fail if the destination filename already exists.
// fs.constants.COPYFILE_FICLONE: This constant specifies that the copy operation would try to create a copy-on-write reflink. A fallback mechanism is used if the platform does not support copy-on-write.
// fs.constants.COPYFILE_FICLONE_FORCE: This constant specifies that the copy operation would try to create a copy-on-write reflink. The operation would fail if the platform does not support copy-on-write, unlike the previous one.
// These constants can also be combined with bitwise OR to create a mask of more than one value. It is an optional parameter. The default value of the parameter is 0.

// /https://towardsdatascience.com/reflinks-vs-symlinks-vs-hard-links-and-how-they-can-help-machine-learning-projects-b77b89cdbab1

// Copy-on-write (COW), sometimes referred to as
// implicit sharing[1] or shadowing, [2] is a resource
// - management technique used in computer programming
// to efficiently implement a "duplicate" or "copy"
// operation on modifiable resources.[3] If a resource
// is duplicated but not modified, it is not necessary
// to create a new resource; the resource can be shared
// between the copy and the original.Modifications
// must still create a copy, hence the technique:
// the copy operation is deferred until the first
// write.By sharing resources in this way, it is
// possible to significantly reduce the resource
// consumption of unmodified copies, while adding a
// small overhead to resource - modifying operations.
