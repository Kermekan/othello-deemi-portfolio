<?php 
include ('inc/resources/portfolio-query.php'); 


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
            <div class="portfolio-box grid hidden-xs hidden-sm hidden-md hidden-lg">
                <?php 
                projectsDesktop();
                ?>
            </div><!-- .portfolio-box -->
            
            <!-- Mobile/Tablet Cards -->
            <div class="portfolio-box grid portfolio-carousel hidden-xl hidden-xxl">
                <div class="swiper">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <?php 
                        projectsMobile();
                        ?>
                        
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>

                    <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>

                    <!-- If we need scrollbar -->
                    <!-- <div class="swiper-scrollbar"></div> -->
                    </div>
            </div><!-- .portfolio-box -->
        </div><!-- .content --> 
    </div><!-- .portfolio-inner -->
</section>