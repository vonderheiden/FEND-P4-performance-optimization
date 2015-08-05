P4: Website Performance Optimization
=====================================

As part of the Udacity Front-End Web Developer Nanodegree, I optimized a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second. In particular, I optimized the critical rendering path and make this page render as quickly as possible by applying the techniques I've picked up in the Udacity Critical Rendering Path course.

Part 1: Optimize PageSpeed Insights score for index.html
--------------------------------------------------------

To inspect the website, I run a local server and used the following terminal commands
$> cd /path/to/your-project-folder
$> python -m SimpleHTTPServer 8080

Next, open a browser and visited localhost:8080

Download and install ngrok to make your local server accessible remotely.

Input the following:
$> cd /path/to/folder-where-you-installed-ngrok
$> ./ngrok http 8080

Copy the public URL ngrok gives you and try running it through PageSpeed Insights!

Key Performance Metrics:
Before Optimization Speed: 28/30 (mobile / desktop)
Target: > 90 page speed score for index.html
After-Optimization Speed: 93/94  (mobile / desktop)

Screenshots: Frontend-nanodegree-mobile-portfolio-v3/img

Completed Optimizations Steps:
 - Used Grunt to more to iteratively optimize website performance:
 - grunt-imageoptim --> optimized images (had to manually reduce images further)
 - grunt-uncss --> remove unnecessary CSS
 - grunt-contrib-uglify --> Minify Javascript
 - grunt-contrib-cssmin --> Minify CSS
 - grunt-inline --> automate inlining of CSS and Javascript
 - grunt-contrib-htmlmin --> Minify HTML
 - Added a src/ folder to contain pre-minified html/css/js files
 - Used a media query for print.css
 - Asynchronously loaded JavaScript Google Analytics files


Part 2: Optimize Frames per Second in pizza.html
-------------------------------------------------

Before Optimization Metrics:
-Average time to generate  at last 10 frames: 23 ms
- Time to resize pizzas: 89 ms
Target: Frame rate at 60fps when scrolling in pizza.html, Time to resize pizzas is less than 5 ms in pizza.html shown in the browser console.
Post-Optimization Metric:
-Average time to generate  at last 10 frames: 0.17 ms
-Time to resize pizzas: 0.09 ms

Screenshots: Frontend-nanodegree-mobile-portfolio-v3/img

Completed Optimizations Steps:
 - Used Grunt to more to iteratively optimize website performance:
 - grunt-imageoptim --> optimized images
 - grunt-uncss --> remove unnecessary CSS
 - grunt-contrib-uglify --> Minify Javascript
 - grunt-contrib-cssmin --> Minify CSS
 - Inlined a minified version of the critical CSS
 - grunt-inline --> automate inlining of CSS
 - grunt-contrib-htmlmin --> Minify HTML
 - Added a src/ folder to contain pre-minified html/css/js files
 - Wrote a new function determineNewWidth for resizing pizzas.
 - Changed main.js to remove unnecessary work from 'for' loops
 - Reduced the number of pizzas to 40 from 200
 
Sources:
--------
- Udacity Website Performance Optimization Course
https://www.udacity.com/course/website-performance-optimization--ud884-nd
- Browser Rendering Optimization Course
https://www.udacity.com/course/browser-rendering-optimization--ud860-nd
- Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).
- [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
- [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
- [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
- [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
- [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
- [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
- <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
- <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
- <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
- <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>
