let fp;
let ball = {};
let pitch = {};
let goals = {
    one: {},
    two: {},
};
let teams = {
    one: [],
    two: [],
};
let bgPitch;

function setup() {
    createCanvas(880, 600);

    for (let i = 0; i < 11; i++) {
        teams.one.push(new FieldPlayer())
    }

    // Set ball stuff
    ball.pos = createVector(width / 2, height / 2);
    ball.speed = createVector(0, 0);
    ball.update = function () {
        // Add speed
        this.pos.add(this.speed);
        // Deaccel
        this.speed.lerp(0, 0, 0, 0.05);
    }
    ball.draw = function () {
        noStroke();
        fill(255);
        circle(this.pos.x, this.pos.y, 5);
    }
    ball.setSpeed = function (vec) {
        this.speed.set(vec);
    }

    // Set pitch stuff
    pitch.width = 800;
    pitch.height = 520;
    pitch.x = (width - pitch.width) / 2;
    pitch.y = (height - pitch.height) / 2;
    pitch.bg = loadImage('assets/pitch800x520.png');

    // Set goal stuff
    goals.height = 56;
    goals.width = 5;
    goals.one.x = pitch.x - goals.width;
    goals.one.y = ((pitch.height + pitch.y * 2) - goals.height) / 2;
    goals.two.x = pitch.x + pitch.width;
    goals.two.y = ((pitch.height + pitch.y * 2) - goals.height) / 2;
    goals.draw = function() {
        noStroke();
        fill(255);
        rect(this.one.x, this.one.y, this.width, this.height);
        rect(this.two.x, this.two.y, this.width, this.height);
    }
}

function draw() {
     /* 
    *
    *   Update
    * 
    */
    background(70);
    image(pitch.bg, pitch.x, pitch.y);

    teams.one.forEach(fp => {
        fp.updateFieldPlayer(ball);
    });

    oldBallPos = ball.pos;
    ball.update();
    // GOOOAL
    if (ball.pos.x > pitch.x + pitch.width) {
        //ball out check if goal

    }

    /* 
    *
    *   Draw
    * 
    */
    teams.one.forEach(fp => {
        fp.drawFieldPlayer();
    });
    
    ball.draw();
    goals.draw();
}