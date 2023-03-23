import React, { useState } from "react";

export const NotesList: React.FC = () => {
  const [notes, setNotes] = useState([
    {
      title: "first note",
      body: "some description",
      category: "programming",
      id: 1,
    },
    {
      title: "second note",
      body: "some description",
      category: "programming",
      id: 2,
    },
    {
      title: "third note",
      body: "some description",
      category: "programming",
      id: 3,
    },
  ]);
  return (
    <div>
      <h1>List of Notes</h1>
      <ul>
        {notes.map(({ title, body, category, id }) => (
          <li key={id}>
            <p>{title}</p>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
