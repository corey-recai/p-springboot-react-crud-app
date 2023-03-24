import React from "react";

import { NotesList } from "@components/NotesList";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export const Appbar: React.FC = () => {
  return (
    <>
      <Navbar bg='body' expand={false} className='mb-3'>
        <Container fluid>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand navbarScroll' />
          <Link to='/'>
            <Navbar.Brand>Notes</Navbar.Brand>
          </Link>
          <Button variant='light' size='lg'>
            <i className='bi bi-search'></i>
          </Button>
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand navbarScroll'
            aria-labelledby='offcanvasNavbarLabel-expand'
            placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                Notes
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <NotesList />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
