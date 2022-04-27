<?php
$pageTitle = "Othello Deemi Portfolio | Coding Examples"; 

include __DIR__ . './inc/resources/head.php'; 
include __DIR__ . './inc/layout/sidebar.php'; 
?>


        <div class="main-sections flex">
            <section id="coding" class="coding">
                <div class="inner coding-inner">
                    <div class="content">
                        <!-- Heading -->
                        <div class="heading mt-3">
                            <h1 class="display-3 fw-bold text-capitalize text-center">Coding examples</h1>
                            <div class="heading-line pt-3"></div>
                        </div>
                        <!-- Examples -->
                        <div class="example-container flex">
                            <!-- Individual Examples -->
                            <div class="example example-1 flex">
                                <div class="text">
                                    <h3 class="lead fw-bold title text-capitalize mb-3">
                                        JavaScript Typewriter
                                    </h3>
                                    <div class="description">
                                        <p>
                                            This code was used to create the typewriter effect that's seen
                                            on the landing page.
                                        </p> 
                                        <p>
                                            The breakdown of it is that it's a function that takes whatever
                                            is in the loops and adds it to the webpage with the .join() method.
                                        </p>
                                        <p>
                                            The functionality of the loops is basically that the i iterator loops
                                            through the "phrases" array and the first nested loop adds each
                                            individual letter of the array object. Once it reaches the end of the
                                            object, then the second if statement deletes  each letter and the 3rd
                                            and 4th if statements will go on to the next object of the array.
                                        </p>
                                        <p>
                                            At the bottom of the function is where I stored all the variables that
                                            controls the speed of each statement to mimic a typing effect.
                                        </p>
                                     </div>
                                </div>
                                <div class="img">
                                    <!-- Lightbox -->
                                    <a href="assets/images/coding-examples/typewriter.png" data-lightbox="image-1" data-title="Typewriter Code">
                                        <img src="assets/images/coding-examples/typewriter.png" alt="TypeWriter Code">
                                    </a>
                                </div>
                            </div><!-- .example -->
                            <div class="example example-2 flex">
                                <div class="text">
                                    <h3 class="lead fw-bold title text-capitalize mb-3">
                                        Database Challenge
                                    </h3>
                                    <div class="description">
                                        <p>
                                            In this challenge I had to write a query that included a subquery,
                                            had formatted outputs and was sorted by a value.
                                        </p>
                                        <p>
                                            I chose to write a query that returned all movies within the 20th century
                                            that had a rating of 8 stars or higher, as well as the main actors of each of
                                            them, and were ordered from highest rating to lowest. 
                                        </p>
                                        <p>
                                            The subquery's role is to get and format the names of the main actors who played
                                            in these movies and concatenate them to one column.
                                        </p>
                                        <p>
                                            
                                        </p>
                                    </div>
                                    <!-- Table -->
                                    <div class="table-container">
                                        <table>
                                            <!-- Header -->
                                            <tr>
                                                <th>Title</th>
                                                <th>Actor</th>
                                                <th>Rating</th>
                                                <th>Released</th>
                                            </tr>
                                            <!-- Rows -->
                                            <tr>
                                                <td>The Usual Suspects</td>
                                                <td>Stephen Baldwin</td>
                                                <td>8.6</td>
                                                <td>1995</td>
                                            </tr>
                                            <tr>
                                                <td>Vertigo</td>
                                                <td>James Stewart</td>
                                                <td>8.4</td>
                                                <td>1958</td>
                                            </tr>
                                            <tr>
                                                <td>Princess Mononoke</td>
                                                <td>Claire Danes</td>
                                                <td>8.4</td>
                                                <td>1997</td>
                                            </tr>
                                            <tr>
                                                <td>Aliens</td>
                                                <td>Sigourney Weaver</td>
                                                <td>8.4</td>
                                                <td>1986</td>
                                            </tr>
                                            <tr>
                                                <td>Lawrence of Arabia</td>
                                                <td>Peter OToole</td>
                                                <td>8.3</td>
                                                <td>1962</td>
                                            </tr>
                                            <tr>
                                                <td>Blade Runner</td>
                                                <td>Harrison Ford</td>
                                                <td>8.2</td>
                                                <td>1982</td>
                                            </tr>
                                            <tr>
                                                <td>Annie Hall</td>
                                                <td>Woody Allen</td>
                                                <td>8.1</td>
                                                <td>1977</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div class="img flex">
                                    <!-- Movie DB -->
                                    <a href="assets/images/coding-examples/movie-db.png" data-lightbox="image-1" data-title="Movie Database">
                                        <img src="assets/images/coding-examples/movie-db.png" alt="Movie Database">
                                    </a>
                                    <!-- Lightbox -->
                                    <a href="assets/images/coding-examples/query.png" data-lightbox="image-1" data-title="Query">
                                        <img src="assets/images/coding-examples/query.png" alt="Query">
                                    </a>
                                </div>
                            </div><!-- .example -->
                        </div><!-- .example-container -->
                    </div>
                </div><!-- .inner -->
            </section>
        </div>
    </div><!-- .full-page -->
    
<!-- JS & end body -->
<?php include __DIR__ . './inc/resources/end-body.php';?>