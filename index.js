import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const entries = [
];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {entries : entries});
});

app.post("/add", (req, res) => {
    res.render("add.ejs");
});

app.post("/submit-entry", (req, res) => {
    const date = new Date();

    let day = date.toLocaleDateString();
    let time = date.toLocaleTimeString();

    let timeStamp = `${day} - ${time}`;

    const newEntry = req.body;
    newEntry.time = timeStamp;
    console.log(newEntry);
    entries.push(newEntry);
    res.redirect("/");
});

app.post("/view-option", (req, res) => {
    res.render("viwe.ejs", {entries : entries});
});

app.get("/view", (req, res) => {
    res.render("view.ejs", {entries : entries});
});


app.get("/home", (req, res) => {
    res.redirect("/");
});

app.post("/view-memory", (req, res) => {
    const index = req.body.index;

    res.render("viewSpecific.ejs", {index: index, title: entries[index].title, content : entries[index].content});
});

app.post("/edit", (req, res) => {
    const index = req.body.index;
    const title = req.body.title;
    const content = req.body.content;

    res.render("edit.ejs", {index: index, title : title, content : content});
});

app.post("/view", (req, res) => {
    const index = req.body.index;
    const title = req.body.title;
    const content = req.body.content;

    entries[index].title = title;
    entries[index].content = content;

    res.redirect("/view");
});

app.post("/delete", (req, res) => {
    const index = req.body.index;

    entries.splice(index, 1);

    res.redirect("/view");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


