let mongoose = require("mongoose");

let notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minLength: 10,
  },
});

let NotesModel = mongoose.model("notes", notesSchema);
module.exports = NotesModel;
