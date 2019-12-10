class FieldPlayer {
    constructor() {
        this.posVec = createVector(random(100, 700), random(100, 400));
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
        let vecDist = p5.Vector.sub(ball.posVec, this.posVec);

        vecDist.setMag(this.speed);
        this.posVec.add(vecDist);

        if (this.posVec.dist(ball.posVec) <= this.ballContolDist) {
            this.state = 'hasBall';
        } else {
            this.state = 'withoutBall'
        }
    }

    hasBall(ball) {
        ball.setSpeed(2,0);

        if (this.posVec.dist(ball.posVec) <= this.ballContolDist) {
            this.state = 'hasBall';
        } else {
            this.state = 'withoutBall'
        }

    }

    drawFieldPlayer() {
        noStroke();
        fill(230, 10, 10);
        circle(this.posVec.x, this.posVec.y, 20);
        //triangle(this.x + 20, this.y)
    }
}