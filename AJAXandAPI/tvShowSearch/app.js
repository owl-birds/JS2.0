const form = document.querySelector("form");
const tvMazeAPI = "https://api.tvmaze.com/singlesearch/shows";
const results = document.querySelector(".results");
const notFound = document.querySelector(".error");
// WTH
notFound.classList.toggle("disapear");

// FUNCTIONS
const fetchShow = async (show) => {
    const config = {
        headers: {
            Accept: "application/json"
        },
        params: {
            q: show
        }
    }
    try {
        const res = await axios.get(tvMazeAPI, config);
        return res.data;
    } catch (err) {
        console.log(err);
        return undefined;
    }
}
const sliceTag = (tag) => {
    return tag.slice(3, tag.length - 4);
}
const createCard = (name, rate, summary) => {
    const box = document.createElement("div");
    box.className = "box";
    // show name
    const showName = document.createElement("div");
    showName.className = "showName";
    showName.innerText = name;
    // shhow rating
    const rating = document.createElement("div");
    rating.className = "rating";
    rating.innerText = rate;
    // summary
    const sumEle = document.createElement("div");
    sumEle.className = "summary";
    sumEle.innerHTML = sliceTag(summary);
    // adding to the page
    box.append(showName, rating, sumEle);
    results.append(box);
}

// LOGIC
form.addEventListener("submit", async (event)=> {
    event.preventDefault();
    // console.log(form.name.value);

    // search logic
    try {
        const data = await fetchShow(form.name.value);
        console.log(!data);
        if (!data) {
            // notFound.classList.toggle("disapear");
            notFound.style.display = "block";
        } else {
            try {
                createCard(data.name, data.rating.average, data.summary);
            } catch (err) {
                console.warn("Adding element ERROR!,");
                console.warn(err);
            }
        }
    } catch (err) {
        console.warn("ERROR!!!!, ", err);
    }
    
})
form.addEventListener("change", function () {
    notFound.style.display = "none";
})


// brainstorming
const test = async () => {
    return true;
}
const test2 = async () => {
    // const a = await test();
    const a = await fetchShow("jimmy");
    // console.log(a);
    if (a === undefined) {
        console.log("WTF, NOT FOUND");
    } else {
        console.log(a.summary === null);
    } 
}
// 


