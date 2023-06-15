class TopSensor extends Sensor{
    
    //머리에 벽돌 닿으면, 마리오의 위치를 그 닿은 벽돌의 하단에 놓는다
    hitCheck(){
        //벽돌과의 충돌체크
        for(let i=0;i<brickArray.length;i++){
            let result = collisionCheck(this,  brickArray[i]);
            
            if(result){ //머리가 닿음
                //console.log("머리가 닿앗어");
                mario.velY=0;            
                mario.y=brickArray[i].y + brickArray[i].height+10;
                console.log(brickArray[i].y + brickArray[i].height+10);
                break;
            }
        }

        //물음표와의 충돌체크 
        for(let i=0;i<questionArray.length;i++){
            let result = collisionCheck(this,  questionArray[i]);
            
            if(result){ //머리가 닿음
                console.log("물음표에 머리가 닿앗어");
                mario.velY=0;            
                mario.y=questionArray[i].y + questionArray[i].height+10;
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
    
    //this.x+5,this.y-3
    tick(){
        this.x=mario.x+5;
        this.y=mario.y-3;
    }

    render(){

        //충돌체크
        this.hitCheck();
        
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

    }    
}