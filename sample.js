const date = new Date();


let day = date.toLocaleDateString();
let time = date.toLocaleTimeString();

let timeStamp = `${day} :: ${time}`;


console.log(timeStamp);