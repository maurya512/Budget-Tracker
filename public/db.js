const { get } = require("mongoose");

let db;
// we create a new db request for a database
const request = indexedDB.open("budget",1);

request.onupgradeneeded = function(event) {
    // create an object store called "pending" and set autoIncrement to true
    const db = event.target.result;
    db.createObjectStore("pending", {autoIncrement: true});
};

request.onsuccess = function(event) {
    db = event.target.result;

    // check if the app is online and having access to the database
    if(navigator.onLine) {
        checkDatabase();
    }
};

function checkDatabase() {
    const transaction = db.transaction(["pending"], "readwrite");
    // access your "pending" object store
    const store = transaction.objectStore("pending");
    // get all records from store and set to a variable
    const getAll = store.getAll();

    getAll.onsuccess = function() {
        if(getAll.result.length > 0) {
            
        }
    }
}