var boardSize = 200;
var canvas = document.getElementById('canvas');
canvas.width = canvas.height = boardSize;
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgba(0, 0, 0, 1)';
//ctx.fillRect(100, 100, 50, 50);
for (var i = 0; i < boardSize; i++) {
    for (var j = 0; j < boardSize; j++) {
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(i, j, 50, 50);
    }
}
