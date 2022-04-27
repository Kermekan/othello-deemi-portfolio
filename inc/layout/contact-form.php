<?php include __DIR__ . '../../resources/connection.php';?>

<div class="contact-form">
    <!-- Circles -->
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
    <div class="circle circle-4"></div>
    
    <!-- Form -->
    <form id="contact-form" action="#contact-form" method="POST">
        <?php include __DIR__ . '../../resources/form-submit.php';?>
        <!-- first name -->
        <label for="first-name" class="input-wrapper first-name">
            <input type="text" id="first-name" name="firstName" value="<?= $firstName ?>" class="input">
            <span class="place-holder">First Name</span>
        </label>
        <!-- last name -->
        <label for="last-name" class="input-wrapper last-name">
            <input type="text" id="last-name" name="lastName" value="<?= $lastName ?>" class="input">
            <span class="place-holder">Last Name</span>
        </label>
        <!-- Email -->
        <label for="email" class="input-wrapper email">
            <input type="email" id="email" name="email" value="<?= $email ?>" class="input">
            <span class="place-holder">Email</span>
        </label>
        <!-- Subject -->
        <label for="subject" class="input-wrapper subject">
            <input type="text" id="subject" name="subject" value="<?= $subject ?>" class="input" >
            <span class="place-holder">Subject</span>
        </label>
        <!-- Text Area -->
        <label for="message" class="input-wrapper textarea">
            <textarea name="message" id="message" value="<?= $message ?>" class="input"></textarea>
            <span class="place-holder">Message</span>
        </label>
        <!-- button -->
        <button type="submit" id="form-submit" name="submit" class="btn form-btn mt-3 text-uppercase">Submit</button>
    </form>
</div><!-- #contact-form -->  