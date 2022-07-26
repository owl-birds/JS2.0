// JS is single THREADED
// WTF IS THIS??

// at any given point in time, that single JS thread 
// is running at most one line of JS code

// run one line code at a time
console.log("sending reqq to the server");
setTimeout(() => {
    console.log("HERE IS YOUR DATA");
}, 3000);
console.log("at the end of the file");
// hmm what happened

// so the browser that do the work
// so it not gonna wait for the seTimeout


// browsers come with web APIs that are able to handle
// certain task in the bg (like making request or
// setTimeout)

// the JS call stack recognise these web API functions
// and passes them off to the browser to take care of

// once the browser finishees those tasks, they returnn
// and are pushed onto the stack as a callback
