class LeftSensor extends Sensor {

    hitCheck(){ //벽돌
        for(let i=0;i<brickArray.length;i++){
            let result=collisionCheck(this, brickArray[i]);
            if(result){ //좌측이 닿았다면..
                mario.x=brickArray[i].x+brickArray[i].width;
                break;
            }
        }

        //동전 충돌처리 
        for (let i = 0; i < coinArray.length; i++) {
            let result = collisionCheck(this, coinArray[i]);
            if (result) { 
                //mario.x = coinArray[i].x - mario.width - 5;
                coinArray[i].remove();
                break;
            }
        }        

    }

    //this.x-3, this.y+5
    tick() {
        
        this.x = mario.x - 3;
        this.y = mario.y + 5;
        
    }
    render() {
        this.hitCheck();

        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        
    }

}