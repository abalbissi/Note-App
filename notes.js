//to color the output the cmd or terminal
import chalk from "chalk";
//to read or write from file or many thing in file
import fs from "fs";

//add a note
export const addNote = (title, body) => {
  const notes = loadNote();


  
  const duplicatTitle = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicatTitle.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.inverse.green("adding note success"));
  } else {
    console.log(chalk.inverse.red("title is taken!"));
  }
};

//save the changes in note
const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

//to read the note
const loadNote = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataString = dataBuffer.toString();
    const data = JSON.parse(dataString);
    return data;
  } catch (e) {
    return [];
  }
};


//to remove the note
export const removeNote = (title) => {
  const notes = loadNote();

  const indexNote = notes.findIndex((note) => {
    return note.title === title;
  });

  if (indexNote !== -1) {
    notes.splice(indexNote, 1);
    saveNotes(notes);
    console.log(chalk.inverse.green("Removing note success"));
  } else {
    console.log(chalk.inverse.red("Title is not found!"));
  }
};


//to list the title of notes
export const listTitleOfNote = () => {
  console.log(chalk.inverse.green("your notes"));
  const notes = loadNote();

  notes.forEach((note) => {
    console.log(note.title);
  });
};


//to read the body of special note
export const readNote = (title) => {
  const notes = loadNote();
  const specialNote = notes.find((note) => note.title === title);
  if (specialNote) {
    console.log(specialNote.body);
  } else {
    console.log(chalk.inverse.red("Note not found!"));
  }
};
