


type Shape = {
    type: 'rect',
    height: number,
    width: number,
    StartH: number,
    startW: number
} | {
    type: 'circle',
    centerX: number,
    centerY: number,
    radius: number
} | {
    type: 'line',
}
export function startDraw(canvas: HTMLCanvasElement, clickedShape: string) {
    if(canvas) {
     
        const ctx = canvas.getContext('2d');

       if(!ctx) {
        return;
    }
    
    let ExistingShapes: Shape[] = [];
    let startX = 0;
    let startY = 0;
    let clicked = false;
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas?.addEventListener('mousedown', (e) => {
      clicked = true
        startX = e.clientX;
        startY = e.clientY;
        console.log(startX)
    })
    
    canvas?.addEventListener("mouseup", (e) => {
    clicked = false;
    ExistingShapes.push({
        type: 'rect',
        height: e.clientY-startY,
        width: e.clientX-startX,
        startW: startX,
        StartH: startY,
    })
    })
    
    canvas?.addEventListener('mousemove', (e) => {
        if(clicked) {
            const w = e.clientX - startX;
            const h = e.clientY - startY;
          clearCanvas(canvas, ctx, ExistingShapes);
            ctx.strokeStyle = 'rgb(225, 225, 225)'
            ctx.strokeRect(startX, startY, w, h);
            
    
            console.log(w)
        }
    })

    function clearCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D , ExistingShapes: Shape[]) {
        ctx.clearRect(0, 0 , canvas.width, canvas.height);
          ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ExistingShapes.map((shape) => {
        if(shape.type == 'rect') {
            ctx.strokeStyle = 'rgba(225, 225, 225, 9)'
            ctx.strokeRect(shape.startW, shape.StartH, shape.width, shape.height);
        }
    })
          
    }
       
       }
}

function rectangle() {
    
}