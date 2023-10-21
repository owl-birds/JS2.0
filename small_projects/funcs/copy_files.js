"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copy_files_dest_cow = void 0;
var fs_1 = require("fs");
var copy_files_dest_cow = function (src_path, 
//
dest_path, file_ext) {
    if (src_path === void 0) { src_path = "./test_case/jpgs"; }
    if (dest_path === void 0) { dest_path = "./test_case/copy_res"; }
    if (file_ext === void 0) { file_ext = "txt"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var files_name, all_files, _i, all_files_1, filename, copied_files_path, _a, files_name_1, filename, src_file_path, dest_file_path;
        return __generator(this, function (_b) {
            // checking if the src dir exist
            if (!(0, fs_1.existsSync)(src_path)) {
                throw new Error("src directory doesnt exist");
            }
            files_name = undefined;
            try {
                all_files = (0, fs_1.readdirSync)(src_path, {
                    encoding: "utf8",
                    withFileTypes: false,
                    // recursive: false
                });
                // return { files_name: all_files, status: true };
                // files_name = [...all_files]; // cleaning : cleaning all file that arent
                // the same ast the exension provided in the func parameter
                files_name = [];
                for (_i = 0, all_files_1 = all_files; _i < all_files_1.length; _i++) {
                    filename = all_files_1[_i];
                    if (".".concat(filename.slice(filename.length - file_ext.length)) ===
                        ".".concat(file_ext)) {
                        files_name.push(filename);
                    }
                }
            }
            catch (error) {
                throw new Error("error in reading the files name in src directory\nsrc_path:" + src_path);
            }
            // copy
            try {
                if (!(0, fs_1.existsSync)(dest_path)) {
                    (0, fs_1.mkdirSync)(dest_path);
                }
            }
            catch (error) {
                throw new Error("Error in making destination directory");
            }
            copied_files_path = [];
            for (_a = 0, files_name_1 = files_name; _a < files_name_1.length; _a++) {
                filename = files_name_1[_a];
                src_file_path = "".concat(src_path, "/").concat(filename);
                dest_file_path = "".concat(dest_path, "/").concat(filename);
                // console.log(src_file_path);
                try {
                    (0, fs_1.copyFileSync)(src_file_path, dest_file_path, fs_1.constants.COPYFILE_FICLONE);
                    copied_files_path.push(dest_file_path);
                }
                catch (_) {
                    throw new Error("Failed to copy file, \nsrc_path:".concat(src_file_path, "\ndest_path:").concat(dest_file_path));
                }
            }
            return [2 /*return*/, {
                    src_path: src_path,
                    dest_path: dest_path,
                    copied_files_path: copied_files_path,
                    is_successful: true,
                    filenames_in_src: files_name,
                }];
        });
    });
};
exports.copy_files_dest_cow = copy_files_dest_cow;
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
