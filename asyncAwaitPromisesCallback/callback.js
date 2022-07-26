// trying to mimic ... blogpost on the server
// and getting them and making a blogpost

// DOM : Document Object Model

// mimicking to fecth from a server
const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two"}
];

const getPosts = () => {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

const createPost = (post)=>{
    setTimeout(() => {
        posts.push(post);
     }, 2000);
}

// getPosts();
// createPost({ title: "post three", body: "this is post three" });

// the func above will show just two POST



// what happened is the dom is already loaded
// but the createPosts ll gonna take more time
// so by the time we run createPost the DOM is
// already created

// USING CALLBACK 
const createPost2 = (post, callback)=>{
    setTimeout(() => {
        posts.push(post);
        callback();
     }, 2000);
}
// so basically we want to call the function getPosts
// after we run the createPost funct
// so createPost first then callback next

// so it will show all the two post plus the post
// that we added through createPost func
createPost2(
    {
        title: "Post Three",
        body: "this is post three"
    },
    getPosts);
// will show three post plus the post we added 
// recently

// #### 3 sec
// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//         }, 1000);
//     }, 1000);
// }, 1000);


// nicer way callback
const delayedColorChange = (color, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        doNext();
    }, delay)
}
delayedColorChange("red", 1000, () => {
    delayedColorChange("blue",1000, () => {
        delayedColorChange("green",1000, () => {
            
        })
    })
});
// not with callback
// delayedColorChange("red", 1000);
// delayedColorChange("blue", 2000);
// delayedColorChange("green", 3000);
// so you have to keep track of the time


// more than one callback
// searchMovieAPI("upin", () => {
    // saveToMyDB(movies, () => {
        // if it works run this
    // }, () => {
        // it it doesnt work, run this
    // })
// }, () => {
    // if API is down, or req failed
// })
