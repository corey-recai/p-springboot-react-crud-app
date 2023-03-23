import React, { useEffect, useState } from "react";
import { getAll } from "@services/NotesService";

export const NotesList: React.FC = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAll()
      .then((res: any) => {
        console.log("response", res.data);

        setNotes(res.data);
      })
      .catch((err: any) => {
        console.error("something went wrong", err);
      });
  }, []);
  return (
    <div>
      <h1>List of Notes</h1>
      <ul>
        {notes &&
          notes.map(({ title, body, category, id }) => (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
