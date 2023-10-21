import * as fs from "fs";
// A carriage return ( \r ) makes the cursor jump to the first column (begin of the line) while the newline ( \n ) jumps to the next line and might also to the beginning of that line.
export const read_txt_arrline = (
  path: string = "./names/names1.txt"
): string[] => {
  //
  const result: string[] = [];
  try {
    const data = fs.readFileSync(path, "utf-8");
    return data.split("\r\n");
  } catch (_) {
    // console.log("error in reading file");
    throw new Error("FAILED IN READING TXT FILE @" + path);
  }
  // return result;
};

// console.log(read_txt_arrline());

// All 3 of them represent the end of a line. But...

// \r (Carriage Return) → moves the cursor to the beginning of the line without advancing to the next line
// \n (Line Feed) → moves the cursor down to the next line without returning to the beginning of the line — In a *nix environment \n moves to the beginning of the line.
// \r\n (End Of Line) → a combination of \r and \n
