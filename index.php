<?php

$pageTitle = "Othello Deemi Portfolio";

include __DIR__ . './inc/resources/head.php'; 
include __DIR__ . './inc/layout/sidebar.php'; 
?>
    
    <!-- Main Sections -->
<main class="main-sections flex">
    <!-- -------------------------------- Hero --------------------------------- -->
    <!-- back to top -->
    <a href="#home" id="top-btn" class="flex hidden"></a>
    <header id="home" class="hero">
        <div class="inner hero-inner flex">
            <!-- Title -->
            <h1 class="display-2 heading text-center">
                <span class="display-2--description">My Name is</span>
                <span class="display-2--title fw-bold">Othello Deemi</span>
                <!-- typewriter -->
                <span id="typewriter" class="display-2--subtitle"></span>
            </h1>
            <!-- Scroll down buton -->
            <a href="#portfolio">
                <span></span>
            </a>
        </div>
    </header>
    <?php include __DIR__ . './inc/layout/portfolio.php';?>
    <?php include __DIR__ . './inc/layout/contacts.php';?>
</main>


<!-- JS & end body -->
<?php include __DIR__ . './inc/resources/end-body.php';?>