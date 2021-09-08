const area = {
    element: document.getElementById('area'),
    width: 600,
    height: 400,
};

function initialize() {
    area.element.style.width = area.width + 'px'; 
    area.element.style.height = area.height + 'px';
    area.element.style.border = 'solid black 3px';
    area.element.style.position = 'absolute';
    document.body.appendChild(area.element);
    area.element.style.top = 0;
    area.element.style.left =0;
}

function createBall(color, dx, dy) {
const newBall = Object.create(this);
newBall.dx = dx;
newBall.dy = dy;
newBall.width = 40;
newBall.height = 40;

newBall.element = document.createElement('div');
newBall.element.style.backgroundColor = color;
newBall.element.style.width = newBall.width + 'px';
newBall.element.style.height = newBall.height + 'px';
newBall.element.style.position =  'absolute';
newBall.element.style.borderRadius = '50%';

area.element.appendChild(newBall.element);

return newBall
}

function moveTo(ball, x, y) {
    ball.element.style.left = x +'px';
    ball.element.style.top = y + 'px';
}

function changeDirection(ball, x, y) {
    if(x < 0 || x > area.width - ball.width){
       ball.dx = -ball.dx 
    }
    if(y < 0 || y > area.height - ball.height){
        ball.dy = -ball.dy;
    }
}

function update(ball, x, y) {
    moveTo(ball, x, y);

    setTimeout(function(){
        changeDirection(ball,x, y);
        update(ball, x + ball.dx, y + ball.dy);
    }, 1000/45);
}

initialize();

const balls = [];
for (let i=0; i < 20; i++) {
    const  newBall = createBall('red', i + .5, i + .5);
    const newBall2 = createBall('blue', i + .25, i + .25);
    const newBall3  = createBall('yellow', i, i);
    const newBall4 = createBall('orange', i + 5, i - 5);

    
    balls.push(newBall);
    balls.push(newBall2);
    balls.push(newBall3);
    balls.push(newBall4);

}

for (const ball of balls) {
    update(ball, 70, 0)
}

