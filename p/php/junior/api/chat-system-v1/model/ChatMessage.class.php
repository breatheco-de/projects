<?php

namespace ChatSystem;

class ChatMessage{

	private $timestamp;
	private $content;
	private $author;

	public function __construct(){
		$this->timestamp = new DateTime();
	}

	public function getContent() {
	    return $this->content;
	}
	public function setContent($content) {
	    $this->content = $content;
	    return $this;
	}

	public function getAuthor() {
	    return $this->author;
	}
	public function setAuthor($author) {
	    $this->author = $author;
	    return $this;
	}

	public function getTimestamp() {
	    return $this->timestamp;
	}
}