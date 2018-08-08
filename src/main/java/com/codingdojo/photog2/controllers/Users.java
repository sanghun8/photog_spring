package com.codingdojo.photog2.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codingdojo.photog2.models.User;
import com.codingdojo.photog2.repositories.UserRepository;
import com.codingdojo.photog2.services.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class Users {
	private final UserService userService;
	
	@Autowired
	UserRepository repository;
	
	public Users(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping("/users")
	public List<User> getAllUsers() {
		System.out.println("Getting all users...");
		
		List<User> users = new ArrayList<>();
		repository.findAll().forEach(users::add);
		
		return users;
	}
	
	@PostMapping("/users/{id}")
	public User postUser(@RequestBody User user) {
		User _user = repository.save(new User(user.getName()));
		return _user;
	}
	
	@DeleteMapping("/users/delete")
	public ResponseEntity<String> deleteAllUsers() {
		System.out.println("Deleting all users... uh oh");
		
		repository.deleteAll();
		
		return new ResponseEntity<>("All customers have been deleted!", HttpStatus.OK);
	}

}
