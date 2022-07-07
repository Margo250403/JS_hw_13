import { useState } from "react";
import dataNotes from "../../../notes.json";

import { useStorage } from "../../../shared";

const useBlog = () => {
  const { setJsonItem, getJsonItem } = useStorage();

  if (!getJsonItem("notes")) {
    setJsonItem("notes", dataNotes);
  }

  const [notes, setNotes] = useState(getJsonItem("notes"));

  const [isClosePopup, setIsClosePopup] = useState(false);

  const addNote = (event) => {
    event.preventDefault();
    
    const ID = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    const note = {
        id: ID(),
        title: event.target.title.value,
        date: new Date().toLocaleDateString(),
        description: event.target.description.value, 
    }

    const newNotes = [...notes, note];

    setJsonItem("notes", newNotes);

    setNotes(newNotes);

    setIsClosePopup(true);

    setTimeout(() => {
      setIsClosePopup(false);
    }, 1000);
};

  return {
    notes,
    addNote, 
    isClosePopup,
  };
};

export default useBlog;



