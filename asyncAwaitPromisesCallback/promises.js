const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
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
const createPost2 = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      // Error checking
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
};

// SEEING HOW THE ERROR WENT ::: set error = true
// createPost2(
//     {
//         title: "Post ttthree", body: "this is post three"
//     }).then(getPosts)
//     .catch(err => console.log(err));

// ASYNC / AWAIT
// const init = async () => {
//     await createPost2({
//         title: "Post ttthree", body: "this is post three"
//     });
//     // we waiting till createPost2 done then the next
//     // will run
//     getPosts();
// };

// init();

// Async Await with fetch
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
};

fetchUsers();

// PROMISE ALL
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     return setTimeout(resolve, 2000, "Goodbye")
// });
// const promise4 = fetch
//     ("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json());
// // running bunch of promises
// Promise.all([promise1, promise2, promise3,promise4]).
//     then((values) => {
//         console.log(values);
//      });
