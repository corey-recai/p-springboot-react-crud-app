import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { NotesList } from "@components/NotesList";
import { NotFound } from "@components/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NotesList />,
    errorElement: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
