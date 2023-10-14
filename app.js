import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import {
  addNote,
  removeNote,
  listTitleOfNote,
  readNote
} from "./notes.js";

// Handler function for 'add' command
const addHandler = (argv) => {
  addNote(argv.title, argv.body)
};

// Handler function for 'remove' command
const removeHandler = (argv) => {
   removeNote(argv.title)
};
// Handler function for 'list' command
const listHandler = () => {
  listTitleOfNote()
};
// Handler function for 'list' command
const readHandler = (argv) => {
  readNote(argv.title)
};

// noteApp command in terminall [add,remove,list,read]
const noteApp = yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "add a note",
    builder: {
      title: {
        describe: "note title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "note body",
        demandOption: true,
        type: "string",
      },
    },
    handler: addHandler,
  })
  .command({
    command: "remove",
    describe: "remove a note",
    builder: {
      title: {
        describe: "note title",
        demandOption: true,
        type: "string",
      },
    },
    handler: removeHandler,
  })
  .command({
    command: "list",
    describe: "list the notes",
    handler: listHandler,
  })
  .command({
    command: "read",
    describe: "read the notes",
    builder: {
      title: {
        describe: "note title",
        demandOption: true,
        type: "string",
      },
    },
    handler: readHandler,
  }).argv;
  console.log('zero')