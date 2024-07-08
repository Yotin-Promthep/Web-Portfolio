<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the URL from the form input
    $url = filter_input(INPUT_POST, 'url', FILTER_VALIDATE_URL);
    
    // Validate the URL
    if ($url === false) {
        echo "Invalid URL.";
        exit;
    }

    // Your ScreenshotAPI key
    $apiKey = 'YOUR_SCREENSHOTAPI_KEY';

    // The ScreenshotAPI endpoint
    $apiUrl = "https://shot.screenshotapi.net/screenshot?token=$apiKey&url=" . urlencode($url);

    // Fetch the screenshot
    $response = file_get_contents($apiUrl);
    
    if ($response === false) {
        echo "Could not fetch the image.";
        exit;
    }

    // Decode the JSON response
    $responseData = json_decode($response, true);

    if (isset($responseData['screenshot'])) {
        $imageUrl = $responseData['screenshot'];

        // Display the image
        echo "<h1>Screenshot of $url</h1>";
        echo "<img src='$imageUrl' alt='Screenshot of $url'>";
    } else {
        echo "Could not fetch the image.";
    }
} else {
    echo "Please submit a URL.";
}
?>
