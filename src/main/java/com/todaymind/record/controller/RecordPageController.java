package com.todaymind.record.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class RecordPageController {

	@GetMapping("/")
	public String index() {
		return "index";
	}

	@GetMapping("/records/new")
	public String newRecord() {
		return "records/new";
	}

	@GetMapping("/records")
	public String records() {
		return "records/list";
	}

	@GetMapping("/records/complete")
	public String complete() {
		return "records/complete";
	}

	@GetMapping("/records/{recordId}/edit")
	public String editRecord(@PathVariable String recordId) {
		return "records/edit";
	}

	@GetMapping("/records/{recordId}")
	public String recordDetail(@PathVariable String recordId) {
		return "records/detail";
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