package com.todaymind.thought.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ThoughtPageController {

	@GetMapping("/")
	public String index() {
		return "index";
	}

	@GetMapping("/thoughts/new")
	public String newThought() {
		return "thoughts/new";
	}

	@GetMapping("/thoughts")
	public String thoughts() {
		return "thoughts/list";
	}

	@GetMapping("/thoughts/complete")
	public String complete() {
		return "thoughts/complete";
	}

	@GetMapping("/thoughts/{thoughtId}")
	public String detail(@PathVariable String thoughtId) {
		return "thoughts/detail";
	}

	@GetMapping("/thoughts/{thoughtId}/edit")
	public String edit(@PathVariable String thoughtId) {
		return "thoughts/edit";
	}

	@GetMapping("/pages/privacy")
	public String privacy() {
		return "pages/privacy";
	}

	@GetMapping("/pages/about")
	public String about() {
		return "pages/about";
	}
}