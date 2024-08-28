var rjs_canvas = document.getElementById("canvas")
const rjs_ctx = canvas.getContext("2d");

console.log("Made with render.js, the open source graphical library for javascript")
console.log(document.currentScript.src)

function rjs_clear(color) {
    rjs_ctx.fillStyle = color
    rjs_ctx.fillRect(0, 0, rjs_canvas.width, rjs_canvas.height)
}
