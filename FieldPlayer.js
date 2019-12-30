class FieldPlayer {
    constructor() {
        this.pos = createVector(random(100, 700), random(100, 400));
        this.direction = 0;
        // Skills
        this.speed = 1;
        this.passing = 70;
        this.shooting = 60;
        this.defending = 40;
        this.patience = 50;
        // Potential skills
        this.ballContolDist = 10;
        // State
        this.state = 'withoutBall'
    }

    updateFieldPlayer(ball) {
        switch (this.state) {
            case 'withoutBall': this.withoutBall(ball);
                break;
            case 'hasBall': this.hasBall(ball);
                break;
        }
    }


    withoutBall(ball) {
        let vecDist = p5.Vector.sub(ball.pos, this.pos);

        vecDist.setMag(this.speed);
        this.pos.add(vecDist);

        if (this.pos.dist(ball.pos) <= this.ballContolDist) {
            this.state = 'hasBall';
        } else {
            this.state = 'withoutBall'
        }
    }

    hasBall(ball) {
        ball.setSpeed(2,0);

        if (this.pos.dist(ball.pos) <= this.ballContolDist) {
            this.state = 'hasBall';
        } else {
            this.state = 'withoutBall'
        }

    }

    drawFieldPlayer() {
        noStroke();
        fill(230, 10, 10);
        circle(this.pos.x, this.pos.y, 20);
        //triangle(this.x + 20, this.y)
    }
}