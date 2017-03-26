<?php

namespace ChatSystem;

class ChatGroup extends ChatTimeline{

	/**
	 * Unique id for each ChatGroup
	 * @var [type]
	 */
	private $hashTag;

	public function getHashTag() {
	    return $this->hashTag;
	}
	public function setHashTag($hashTag) {
	    $this->hashTag = $hashTag;
	    return $this;
	}
}