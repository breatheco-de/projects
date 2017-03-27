<?php

namespace ChatSystem;

class ChatUser{

	private $timelines; //Array
	private $username; 
	private $email;
	private $password;

	public function getEmail() { return $this->email; }
	public function setEmail($email) { $this->email = $email; return $this; }

	public function getPassword() { return $this->password; }
	public function setPassword($password) { $this->password = $password; return $this; }

	public function getUsername() { return $this->username; }
	public function setUsername($username) { $this->username = $username; return $this; }

	public function getTimelines() { return $this->timelines; }
	public function addTimeline($timeline)
	{
		array_push($this->timelines, $timeline);
		return $this;
	}
	public function removeTimeline($timeline)
	{
		$aux = array();
		foreach ($this->timeline as $tm) {
			if($tm !== $timeline){
				array_push($aux, $tm);
			}
		}
		return $this;
	}
}