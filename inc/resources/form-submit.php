<?php

$firstName = $lastName = $email = $subject = $message = "";
$firstNameErr = $lastNameErr = $emailErr = $subjectErr = $messageErr = "";

if($_SERVER['REQUEST_METHOD'] == 'POST') { 
    
    
    // First Name
    if (!empty($_POST['firstName'])) {
        $firstName = test_input($_POST['firstName']);
        if (!preg_match("/^[a-zA-Z ]*$/",$firstName)) {
            $firstNameErr = "Please enter a valid First name.";
            echo "<div id='form-alert' class='alert error' role='alert'>"
                . "<p>$firstNameErr</p>"
                . "</div>"; 
        }
    } else {
        if(empty($_POST['firstName'])) {
            $firstNameErr = "Please enter your First name.";
            echo "<div id='form-alert' class='alert error' role='alert'>"
                . "<p>$firstNameErr</p>"
                . "</div>"; 
        }
    }
    // Last Name
    if (!empty($_POST['lastName'])) {
        $lastName = test_input($_POST['lastName']);
        if (!preg_match("/^[a-zA-Z ]*$/",$lastName)) {
            $lastNameErr = "Please add a valid Last name.";
            echo "<div id='form-alert' class='alert error' role='alert'>"
                . "<p>$lastNameErr</p>"
                . "</div>"; 
        }
    }
    // Email
    if (!empty($_POST["email"])) {
        $email = test_input($_POST["email"]);
        // Filter Email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format"; 
            echo "<div id='form-alert' class='alert error' role='alert'>"
                . "<p>$emailErr</p>"
                . "</div>"; 
        }
    }
    // Subject
    if (!empty($_POST["subject"])) {
        $subject = test_input($_POST["subject"]);
        if (strlen($subject) < 5) {
            $subjectErr = "Subject must be at least 5 characters long";
            echo "<div id='form-alert' class='alert error' role='alert'>"
                . "<p>$subjectErr</p>"
                // . "<i class='icon bi bi-x'></i>"
                . "</div>"; 
        }
    }
    // Message
    if (!empty($_POST["message"])) {
        $message = test_input($_POST["message"]);
        if (strlen($message) < 5) {
            $messageErr = "Message must be at least 5 characters long";
            echo "<div id='form-alert' class='alert error' role='alert'>"
                . "<p>$messageErr</p>"
                // . "<i class='icon bi bi-x'></i>"
                . "</div>"; 
        }
    }
    // If Validation is Successfull
    if ($firstNameErr == "" 
    && $lastNameErr == "" 
    && $emailErr == "" 
    && $subjectErr == "" 
    && $messageErr == "") {
        $query = "INSERT INTO contact_form(
            firstName, lastName, email, subject, message) 
            VALUES ('$firstName', '$lastName', '$email', '$subject', '$message')
            
        ";
        $contactResult = mysqli_query($conn, $query);
        
        // Success Message
        if ($contactResult) {
            echo "<div id='form-alert' class='alert success' role='alert'>"
            . "<p>Form submitted successfully</p>"
            . "</div>";
        } else {
            echo "<div id='form-alert' class='alert error' role='alert'>"
            . "<p>Form submission failed</p>"
            . "</div>";
        }
    }
    
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
