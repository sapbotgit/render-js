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
    <script src="https://sapbotgit.github.io/render.js" type="text/javascript"></script>
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
        <script src="https://sapbotgit.github.io/render.js" type="text/javascript"></script>
        <a onclick="rjs_fullscreen()">Fullscreen</a>
        <a onclick="rjs_resetsize()">Reset size (Undo fullscreen)</a>
        <a onclick="rjs_clear('green')">Clear with green</a>
        <a onclick="rjs_clear('blue')">Clear with blue</a>
    </body>
</html>
```
### Mandelbrot Set
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
        <script src="https://sapbotgit.github.io/render.js" type="text/javascript"></script>
        <script>
const MAX_ITERATION = 80
const REAL_SET = { start: -2, end: 1 }
const IMAGINARY_SET = { start: -1, end: 1 }
const colors = rjs_colors()
rjs_fullscreen()

function mandelbrot(c) {
    let z = { x: 0, y: 0 }, n = 0, p, d;
    do {
        p = {
            x: Math.pow(z.x, 2) - Math.pow(z.y, 2),
            y: 2 * z.x * z.y
        }
        z = {
            x: p.x + c.x,
            y: p.y + c.y
        }
        d = Math.sqrt(Math.pow(z.x, 2) + Math.pow(z.y, 2))
        n += 1
    } while (d <= 2 && n < MAX_ITERATION)
    return [n, d <= 2]
}

function draw() {
    for (let i = 0; i < rjs_canvas.width; i++) {
        for (let j = 0; j < rjs_canvas.height; j++) {
            complex = {
                x: REAL_SET.start + (i / rjs_canvas.width) * (REAL_SET.end - REAL_SET.start),
                y: IMAGINARY_SET.start + (j / rjs_canvas.height) * (IMAGINARY_SET.end - IMAGINARY_SET.start)
            }
            const [m, isMandelbrotSet] = mandelbrot(complex)
            rjs_pixel(i, j, colors[isMandelbrotSet ? 0 : (m % colors.length - 1) + 1])
        }
    }
}
draw()
        </script>
    </body>
</html>
```
