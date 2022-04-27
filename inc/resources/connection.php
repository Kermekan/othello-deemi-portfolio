<?php

// Local
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "portfolio";

// cPanel
/* $dbhost = "localhost";
$dbuser = "othellod_othellodeemi";
$dbpass = "270301Lonestar1!";
$dbname = "othellod_portfolio"; */

$conn =  mysqli_connect($dbhost, $dbuser, $dbpass, $dbname,);

/* if ($conn) {
    echo "Connected to database";
} else {
    echo "Connection failed";
} */