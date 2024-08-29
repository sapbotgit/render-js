var rjs_canvas = document.getElementById("canvas")
var rjs_ctx = canvas.getContext("2d");
var rjs_screenWidth = window.innerWidth
var rjs_screenHeight = window.innerHeight

var temp_width = rjs_canvas.width
var temp_height = rjs_canvas.height

console.log("Made with render.js, the open source graphical library for javascript")

if (document.currentScript.src != "https://cdn.jsdelivr.net/gh/sapbotgit/render-js@main/render.js") {
    console.log("WARNING: THIS PROJECT USING OUTDATED OR UNSUPPORTED VERSION OF RENDER.JS, GET NORMAL ONE IN https://github.com/sapbotgit/render-js")
}

function rjs_pixel(x, y, col) {
    rjs_ctx.fillStyle = color
    rjs_ctx.fillRect(x, y, 1, 1)
}

function rjs_clear(color) {
    rjs_ctx.fillStyle = color
    rjs_ctx.fillRect(0, 0, rjs_canvas.width, rjs_canvas.height)
}

function rjs_fullscreen() {
    rjs_canvas.width = rjs_screenWidth
    rjs_canvas.height = rjs_screenHeight
}

function rjs_resetsize() {
    rjs_canvas.width = temp_width
    rjs_canvas.height = temp_height
}
