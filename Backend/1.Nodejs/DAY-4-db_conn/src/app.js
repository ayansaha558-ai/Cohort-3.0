let express = require("express");
const connectDb = require("./config/db");
const NotesModel = require("./models/note.model");

let app = express();
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send("hello ami ekahne");
});

app.post("/create", async (req, res) => {
  let { title, description } = req.body;

  let newNotes = await NotesModel.create({
    title,
    description,
  });

  res.send({
    success: true,
    message: "Note created successfully",
    data: newNotes,
  });
});

module.exports = app;
