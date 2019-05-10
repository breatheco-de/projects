<?php

class ASLogin{

	private $logs = array();

	public function add($message){
		array_push($this->logs, $message);
	}

	public function getLogs()
	{
		return $this->logs;
	}
}