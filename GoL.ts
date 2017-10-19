
    let boardSize=200;
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    canvas.width = canvas.height = boardSize;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    //ctx.fillRect(100, 100, 50, 50);

     for(let i=0;i<boardSize;i++){
         for(let j=0;j<boardSize;j++){
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(i, j, 50, 50);
        }
     }

     for(let i=0;i<boardSize;i++){
         for(let j=0;j<boardSize;j++){
             
         }
     }


