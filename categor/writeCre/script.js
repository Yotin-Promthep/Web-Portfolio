// script.js
function generateOutput() {
    var htmlCode = document.getElementById('htmlCode').value;
    var cssCode = document.getElementById('cssCode').value;
    var jsCode = document.getElementById('jsCode').value;
  
    var outputFrame = document.getElementById('output');
    outputFrame.innerHTML = htmlCode;
  
    var styleTag = document.createElement('style');
    styleTag.innerHTML = cssCode;
    outputFrame.appendChild(styleTag);
  
    var scriptTag = document.createElement('script');
    scriptTag.innerHTML = jsCode;
    outputFrame.appendChild(scriptTag);
  }
  