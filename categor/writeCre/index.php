<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Output Page</title>
  <link rel="stylesheet" href="../writeCre/style.css"> <!-- Link to external CSS file -->
</head>
<body>
  <div class="container">
        <!-- Input container -->
        <div class="header">
            <h2>Input</h2>
            <button onclick="generateOutput()">Generate Output</button>
        </div>
        <div class="input-container">
            <textarea id="htmlCode" rows="10" placeholder="Enter HTML code here"></textarea><br>
            <textarea id="cssCode" rows="10" placeholder="Enter CSS code here"></textarea><br>
            <textarea id="jsCode" rows="10" placeholder="Enter JavaScript code here"></textarea><br>
        </div>
  </div>

  <!-- Output container -->
  <div class="output-container">
        <h2>Output:</h2>
        <div class="output" id="output">
        <!-- Output from JavaScript will appear here -->
        </div>
  </div>

  <script src="../writeCre/script.js"></script> <!-- Link to external JavaScript file -->
</body>
</html>
