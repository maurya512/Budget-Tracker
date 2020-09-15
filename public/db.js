let db;
// we create a new db request for a database
const request = indexedDB.open("budget",1);

request.onupgradeneeded = function(event) {
    // create an object store called "pending" and set autoIncrement to true
    const db = event.target.result;
    db.createObjectStore("pending", {autoIncrement: true});
};