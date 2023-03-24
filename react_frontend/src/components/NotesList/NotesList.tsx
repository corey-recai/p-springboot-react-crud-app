import React, { useEffect, useState } from "react";
import { getAll } from "@services/NotesService";

import ListGroup from "react-bootstrap/ListGroup";

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
    <ListGroup variant='flush'>
      {notes &&
        notes.map(({ title, body, category, id }) => (
          <ListGroup.Item key={id}>
            <h6 className='text-truncate'>{body}</h6>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};
