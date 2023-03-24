import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { NotesList } from "@components/NotesList";
import { Root } from "@components/Root";
import { NotFound } from "@components/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <NotesList />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
