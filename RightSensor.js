class RightSensor extends Sensor {


    hitCheck() { 
        //벽돌
        for (let i = 0; i < brickArray.length; i++) {
            let result = collisionCheck(this, brickArray[i]);
            if (result) { //우측이 닿았다면..
                mario.x = brickArray[i].x - mario.width - 5;
                break;
            }
        }

        //코인
        for (let i = 0; i < coinArray.length; i++) {
            let result = collisionCheck(this, coinArray[i]);
            if (result) { //우측이 닿았다면..
                //mario.x = coinArray[i].x - mario.width - 5;
                coinArray[i].remove();
                break;
            }
        }

    }

    // this.x+this.width,  this.y+5
    tick() {
        this.x = mario.x + mario.width;
        this.y = mario.y + 5;
    }

    render() {
        this.hitCheck();

        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        
    }

}