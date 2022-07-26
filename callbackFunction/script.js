const printKen = () => {
    console.log("Ninja Ken");
};

// Tambahkan parameter callback ke function call
const call = (callback) => {
    console.log("Memanggil function callback.");
    // Panggil callback function
    callback();
};

// Teruskan printKen sebagai argument dan jalankan function call
call(printKen);

const printKen = () => {
    console.log("Ninja Ken");
};

const call = (callback) => {
    console.log("Memanggil callback function.");
    callback();
};

call(printKen);

// so basically you can declare a function inside
// the func
// Deklarasikan function didalam argument dan teruskan
call(() => {
    console.log("Guru Domba");
});
const call = (callback) => {
    callback("Ninja Ken", 14);
};

// Tambahkan sebuah function yang menerima dua argument didalam argument call
call((name, age) => {
    console.log(`${name} berusia ${age} tahun.`);
});
