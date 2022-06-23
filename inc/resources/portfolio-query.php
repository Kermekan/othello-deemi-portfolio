<?php 
$projectsQuery = "SELECT * FROM projects ORDER BY id ASC";
$projectsResult = mysqli_query($conn, $projectsQuery);

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
                    <h3 class='title text-capitalize'>Netmatters Homepage</h3>
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
