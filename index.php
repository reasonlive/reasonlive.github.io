
<?php
ini_set('display_errors', 1);       //need to disable
ini_set('error_reporting', E_ALL);  //need to enable
//log_errors                        //need to enable


require "./config.php";
require "./db/Database.php";
require "./db/initial_queries.php";

$db = new Database($HOST,$LOGIN,$PASS,$DBNAME);

//initiates db tables
$db->execute($reviews_table);
$db->execute($answers_table);
$db->execute($admins_table);
$db->execute($admins_row);

include('./pages/_main.php');

?>