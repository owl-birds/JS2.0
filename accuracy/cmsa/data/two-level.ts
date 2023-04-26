import * as fs from "fs";
const csv_parser = require("csv-parser");
// import { csvParse, autoType } from "d3";
// import { csvParse, autoType } from "d3-dsv";

let commodity_two_level_data_string = "";

try {
  const data_text = fs.readFileSync("./twoLevel/twoLevelCommo.csv", "utf-8");
  commodity_two_level_data_string = data_text;
} catch (error) {
  console.log(error);
}

// console.log(csvParse(commodity_two_level_data_string, autoType));
const results_commo: any[] = [];
fs.createReadStream("./twoLevel/twoLevelCommo.csv")
  .pipe(csv_parser())
  .on("data", (data: any) => results_commo.push(data))
  .on("end", () => {
    // console.log(results_commo);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });

// TEST
// console.log(results_commo);
// console.log(csv_parser(commodity_two_level_data_string));
console.log(commodity_two_level_data_string);

//
export { commodity_two_level_data_string };
