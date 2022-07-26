import Dog from "./modules/class/dog";
import Animal from "./modules/class/animal";
// import dog from "./modules/dogData";
import doggy from "./modules/data/dogData";
import { dog2, dog3, dog4 } from "./modules/data/dogData2";

// ./ = current directory
// ../ go back one directory

// import constantName from "packageName";
import chalk from "chalk";
import readlineSync from "readline-sync";
// const name = readlineSync.question("ENTER :: ") enter inut from console
// console.log(chalk.yellow("HELLO WOLRD!"));

// Tulis ulang dengan menggunakan readlineSync.question
// const name = readlineSync.question("Ketik nama Anda: ");

// Tulis ulang dengan menggunakan readlineSync.questionInt
// const age = readlineSync.questionInt("Ketik usia Anda: ");


// export default value
// so you can use any name to import that value
// cause of that DEFAULT

const dog1 = Dog("dsad", 2321, "DSaDASD");
// dog.info();
dog1.info();
doggy.info();
dog2.info();
dog3.info();
dog4.info();