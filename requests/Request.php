<?php

interface Request{

	public function getRequest(array $post);
	public function setResponse();
	public function checkValue(string $value);

} 


class LoginRequest implements Request{

	protected Database $db;

	public function __construct(){
		//$this->db = $db;
	}

	public function checkValue(string $value){

		echo strip_slashes($value);
	}

	public function getRequest(Array $post): array{

		if(isset($post['login']) && isset($post['password'])){

			$checked_login = preg_match('/^[a-zA-Z0-9\_\-]{2,50}$/') ? $post['login'] : NULL;

			$checked_pass = preg_match('/^[a-zA-Z0-9\_\-]{8,50}$/') ?
			$post['password'] : NULL;
		}
	}

	public function setResponse(){

	}
}


$log = new LoginRequest();

$log->checkValue('<script>hello</script>');











 ?>