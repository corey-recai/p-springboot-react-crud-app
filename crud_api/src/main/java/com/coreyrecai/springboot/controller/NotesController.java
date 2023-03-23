package com.coreyrecai.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.coreyrecai.springboot.entity.Note;
import com.coreyrecai.springboot.repository.NotesRepository;

@RestController
@RequestMapping("/api")
public class NotesController implements NotesRepository {
	
	@Autowired
	private NotesRepository nRepo;
	
	@GetMapping("/notes")
	public ResponseEntity<List<Note>> readNotes () {
		return new ResponseEntity<List<Note>>(nRepo.findAll(), HttpStatus.OK);
	}
}
