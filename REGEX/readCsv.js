const testRead = async (event) => {
  console.log(event.target.files[0]);
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target.result;
    console.log(text);
  };
  reader.readAsText(event.target.files[0]);
};
