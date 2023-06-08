const test_fetch_string = async (url: string) => {
  //
  const response = await fetch(url);
  const data_text = await response.text();
  console.log(data_text);
};
const test_fetch_return_string = async (url: string) => {
  //
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "txt/xml",
      // "Content-Type": "application/JSON",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  // console.log(response);
  // const data_text = await response.text();
  const data_text = await response.text();
  console.log(data_text);
  return data_text;
};

// TEST
const test_function_1 = async (url: string) => {
  try {
    // const is_error = !false;
    const is_error = false;
    // if (!true) {
    if (!is_error) {
      const fetch_result: string = await test_fetch_return_string(url);
      // console.log(fetch_result);
      return;
    }
    throw Error("WHATT ERROR WTH DUDE, GIT GUD");
  } catch (error: any) {
    console.log("FECK\n", error.message);
  }
};

// test_fetch_string(
//   "https://raw.githubusercontent.com/owl-birds/testing-csv-files/main/three-level.csv"
// );
test_function_1(
  // "https://github.com/owl-birds/testing-csv-json-files/raw/main/world-data-one-level.csv"
  "https://raw.githubusercontent.com/owl-birds/testing-csv-files/main/three-level.csv"
);
// TEST
