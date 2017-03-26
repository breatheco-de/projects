<?php

namespace ChatSystem;

class PrivateChat extends ChatTimeline{

	public function addMember($user)
	{
		if(count($this->members)==2) throw new \Exception("A private chat can contain 2 members max", 1);
		
		array_push($this->members, $user);
		return $this;
	}
}