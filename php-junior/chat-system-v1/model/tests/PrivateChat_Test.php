<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require '../vendor/autoload.php';
require_once('../Autoload.php');

class PrivateChat_test extends PHPUnit_Framework_TestCase{

	/**
	 * @return null
	 */
	public function test_addMemberToPrivateChat(){

		$pchat = new ChatSystem\PrivateChat();
		$member1 = new ChatSystem\ChatUser();
		$member2 = new ChatSystem\ChatUser();

		//Inicialized with 0 members
		$this->assertEquals(0,count($pchat->getAllMembers()));
		$pchat->addMember($member1);

		//No has one member
		$this->assertEquals(1,count($pchat->getAllMembers()));

		//Expecting an excption because no more htan 2 users per private chat
		$this->setExpectedException('Exception');
		$pchat->addMember($member1);
		$pchat->addMember($member1);

		return $pchat;
	}
	/**
	 * @depends test_addMemberToPrivateChat
	 */
	public function test_deleteMemberToPrivateChat(array $pchat){

		$members = $pchat->getAllMembers();
		$pchat->deleteMember($membes[0]);

		$this->assertEquals(2,count($pchat->getAllMembers()));

	}
}