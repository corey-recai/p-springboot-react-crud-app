import React from "react";

import { Outlet, Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { Appbar } from "@components/Appbar";

export const Root: React.FC = () => {
  return (
    <>
      <Appbar />
      <Container fluid>
        <Outlet />
      </Container>
      <Link to='/'>
        <Button className='position-absolute bottom-0 end-0 mb-3 me-3 rounded-circle'>
          <i className='bi bi-file-earmark-plus-fill'></i>
        </Button>
      </Link>
    </>
  );
};
