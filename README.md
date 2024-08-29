# THIS IS WIP AND IT EVEN DONT FULLY WORK!
# render-js
The open-source graphical library
## Examples
### Empty template
```
<html>
  <head>
  </head>
  <body>
    <canvas id="canvas" width="640" height="480"></canvas>
    <script src="https://raw.githubusercontent.com/sapbotgit/render-js/main/render.js" type="text/javascript"></script>
  </body>
</html>
```
### Interactive Functions Demo 29.08.24
```
<html>
    <head>
        <style>
            a, canvas {
                border: solid 1px black;
            }
        </style>
    </head>
    <body>
        <canvas id="canvas" width="640" height="480"></canvas><br><br>
        <script src="https://raw.githubusercontent.com/sapbotgit/render-js/main/render.js" type="text/javascript"></script>
        <a onclick="rjs_fullscreen()">Fullscreen</a>
        <a onclick="rjs_resetsize()">Reset size (Undo fullscreen)</a>
        <a onclick="rjs_clear('green')">Clear with green</a>
        <a onclick="rjs_clear('blue')">Clear with blue</a>
    </body>
</html>
```
