"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rename_filenames_sync = void 0;
var fs_1 = require("fs");
var rename_filenames_sync = function (
//
old_filename_path_list, new_filename_path_list) {
    //
    if (old_filename_path_list.length !== new_filename_path_list.length)
        throw new Error("INVALID PATH : \nold_path_len: " +
            old_filename_path_list.length +
            "\nnew_path_len:" +
            new_filename_path_list.length);
    try {
        for (var i = 0; i < new_filename_path_list.length; i += 1) {
            (0, fs_1.renameSync)(old_filename_path_list[i], new_filename_path_list[i]);
        }
    }
    catch (error) {
        throw new Error("Error : " + error.message);
    }
};
exports.rename_filenames_sync = rename_filenames_sync;
