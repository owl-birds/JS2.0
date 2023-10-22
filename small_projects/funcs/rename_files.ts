import { renameSync } from "fs";

export const rename_filenames_sync = (
  //
  old_filename_path_list: string[],
  new_filename_path_list: string[]
) => {
  //
  if (old_filename_path_list.length !== new_filename_path_list.length)
    throw new Error(
      "INVALID PATH : \nold_path_len: " +
        old_filename_path_list.length +
        "\nnew_path_len:" +
        new_filename_path_list.length
    );
  try {
    for (let i = 0; i < new_filename_path_list.length; i += 1) {
      renameSync(old_filename_path_list[i], new_filename_path_list[i]);
    }
  } catch (error: any) {
    throw new Error("Error : " + error.message);
  }
};
