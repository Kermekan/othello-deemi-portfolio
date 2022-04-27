<?php
$pageTitle = "Othello Deemi Portfolio | About";


include('inc/resources/head.php'); 
include('inc/layout/sidebar.php'); 

// Calculate Age
$dateOfBirth = "27-03-2001";
$today = date("d-m-Y");
$age = date_diff(date_create($dateOfBirth), date_create($today));
?>

        <div class="main-sections flex about-page">
            <!-------------------------------- About Me -------------------------------->
            <section id="about-me" class="about-me-container flex">
                <div class="inner about-me-inner">
                    <div class="container">
                        <!-- Heading -->
                        <div class="row about-heading text-center mt-2">
                            <h1 class="display-3 fw-bold text-capitalize">Who am I?</h1>
                            <div class="heading-line pt-1"></div>
                        </div>
                        <!-- About Me -->
                        <div class="about-box row flex">
                            <p class="lead my-5">I am a <?php echo $age->format('%y'); ?> year old software developer based in Cambridge. I used to be an 
                                audio engineer before deciding to switch careers; and worked with and befriended many
                                software developers from web designers to game developers. It's because of these experiences that
                                lead me to pursue software development myself.
                            </p>
                        </div>
                    </div>
                    <!-- Treehouse Score | Some errors with JS --> 
                    <!-- <div class="team-treehouse">
                        <h1>Achievements</h1>
                        <h2><strong class='total'>0</strong> points have been earned</h2>

                        <div class="pieChart group">
                            <div class="pie"></div>
                            <div class="legend"></div>
                        </div>
                    </a>
                    </div> -->
                </div> <!-- .about-me-inner -->
                
                
            </section>
                       
        </div><!-- .main-sections -->
   
<!-- JS & end body -->
<?php include('inc/resources/end-body.php');?>