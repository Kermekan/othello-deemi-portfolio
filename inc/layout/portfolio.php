<?php 
include ('inc/resources/connection.php'); 

// Projects Query
$projectsQuery = "SELECT * FROM projects ORDER BY id ASC";
$projectsResult = mysqli_query($conn, $projectsQuery);
?>
<!-- ------------------------------ Portfolio ------------------------------- -->
<section id="portfolio" class="portfolio">
    <div class="inner portfolio-inner">
        <div class="content">
            <!-- Heading -->
            <div class="heading">
                <h1 class="display-3 fw-bold text-capitalize text-center">Portfolio</h1>
                <div class="heading-line pt-1"></div>
                <p class="lead pt-3">A Showing of my work</p>
            </div>
            <!-- Desktop Cards -->
            <div class="portfolio-box portfolio-tilt grid hidden-xs hidden-sm hidden-md hidden-lg">
                               
                <?php 
                // include('inc/resources/portfolio-query.php');
                
                try {
                    while($projects = mysqli_fetch_assoc($projectsResult)) {
                        $description = htmlspecialchars($projects["description"]);
                        $title = htmlspecialchars($projects["title"]);
                        $link = htmlspecialchars($projects["link"]);
                        $img_src = htmlspecialchars($projects["img_src"]);
                        
                        echo ("
                        <div class='cards portflio-card flex'>
                            <!-- Image -->
                            <div class='img-container img-fluid'>
                                <img src='$img_src' alt='$title'>
                            </div>
                            <!-- Details-->
                            <div class='details'>
                                <div class='details-inner flex'>
                                    <h3 class='title text-capitalize'>$title</h3>
                                    <p class=''>
                                        $description
                                    </p>
                                    <!-- Button -->
                                    <div class='btn portfolio-btn'>
                                        <a href='$link' target='_blank' class='text-center flex text-uppercase'>
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div><!-- .details -->
                        </div><!-- .portfolio-card -->
                        ");
                    }
                } catch (\Exception $e) {
                    echo "<p>Error: " . $e->getMessage() . "</p>";
                }
                
                ?>
            </div><!-- .portfolio-box -->
            
            <!-- Mobile/Tablet Cards -->
            <div class="portfolio-box grid portfolio-carousel hidden-xl hidden-xxl">
                <!-- Card 1 -->
                <div class="cards portfolio-slide flex active">
                    <!-- Image -->
                    <div class="img-container img-fluid">
                        <img src="assets/images/portfolio/netmatters-home.png" alt="Netmatters Home Page">
                    </div>
                    <!-- Details -->
                    <div class="details">
                        <div class="details-inner flex">
                            <h3 class="title">Netmatters Homepage</h3>
                            <p class="">
                                I rebuilt the Netmatters homepage using the skills I learnt in this training course
                            </p>
                            <!-- Button -->
                            <div class="btn portfolio-btn">
                                <a href="netmatters.othello.deemi.netmatters-scs.co.uk/" target="_blank" class="text-center flex text-uppercase">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div><!-- .portfolio-card -->
                <!-- Card 2 -->
                <div class="cards portfolio-slide flex">
                    <!-- Image -->
                    <div class="img-container img-fluid">
                        <img src="assets/images/portfolio/arrays-reflection.png" alt="JavaScript Arrays Reflection">
                    </div>
                    <!-- Details -->
                    <div class="details">
                        <div class="details-inner flex">
                            <h3 class="title">Random Image Generator </h3>
                            <p class="">
                                I worte a random image generator using JavaScript Async Await to fetch images from the PicSum API and save them to a validated email address.
                            </p>
                            <!-- Button -->
                            <div class="btn portfolio-btn">
                                <a href="js-arrays.othello.deemi.netmatters-scs.co.uk/" class="text-center flex text-uppercase" target="_blank">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div><!-- .portfolio-card -->
                <!-- Card 3 -->
                <div class="cards portfolio-slide flex">
                    <!-- Image -->
                    <div class="img-container img-fluid">
                        <img src="assets/images/portfolio/portfolio-img.jpg" alt="Netmatters Home Page">
                    </div>
                    <!-- Details -->
                    <div class="details">
                        <div class="details-inner flex">
                            <h3 class="title">Portfolio 2</h3>
                            <p class="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, illum?
                            </p>
                            <!-- Button -->
                            <div class="btn portfolio-btn">
                                <a href="#" class="text-center flex text-uppercase">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div><!-- .portfolio-card -->
                <!-- Navigation buttons -->
                <div class="navigation flex">
                    <i class="fas fa-chevron-left prev-btn"></i>
                    <i class="fas fa-chevron-right next-btn"></i>
                </div>
                <!-- owl dots -->
                <div class="navigation-visibility flex">
                    <div class="slide-icon active"></div>
                    <div class="slide-icon"></div>
                    <div class="slide-icon"></div>
                </div>
            </div><!-- .portfolio-box --> 
        </div><!-- .content --> 
    </div><!-- .portfolio-inner -->
</section>