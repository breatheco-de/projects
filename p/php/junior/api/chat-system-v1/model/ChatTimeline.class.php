<?php

namespace ChatSystem;

class ChatTimeline{

	/**
	 * All the members in the chat.
	 * @var array(ChatUser)
	 */
	protected $members;

	/**
	 * A A copy of all the messages in the timeline
	 * @var array(ChatMessage)
	 */
	protected $messages; 

	public function getAllMembers() { return $this->members; }
	public function addMember($user)
	{
		array_push($this->members, $user);
		return $this;
	}
	public function removeMember($user)
	{
		$aux = array();
		foreach ($this->members as $u) {
			if($u !== $user){
				array_push($aux, $a);
			}
		}
		return $this;
	}

	public function getAllMessages() { return $this->messages; }
	public function addMessage($message)
	{
		array_push($this->messages, $message);
		return $this;
	}
	public function removeMessage($message)
	{
		$aux = array();
		foreach ($this->messages as $m) {
			if($m !== $message){
				array_push($aux, $m);
			}
		}
		return $this;
	}

	public function __construct()
	{
		$this->members = array();
		$this->messages = array();
	}
}