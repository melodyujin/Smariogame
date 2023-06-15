class BottomSensor extends Sensor{
    

    //발에 뭔가 닿으면, 마리오의 위치를 그 닿은 물체의 하단에 놓는다
    hitCheck(){

        //벽돌에 대한 충돌
        for(let i=0;i<brickArray.length;i++){
            let result = collisionCheck(this,  brickArray[i]);

            if(result){ //다리가 닿으면
                //console.log("다리가 닿앗어");
                mario.falled=true;
                
                mario.y=brickArray[i].y - mario.height-5 ;
                break;
            }
        }

        //물음표 충돌처리
        for(let i=0;i<questionArray.length;i++){
            let result = collisionCheck(this,  questionArray[i]);

            if(result){ //다리가 닿으면
                //console.log("다리가 닿앗어");
                mario.falled=true;
                
                mario.y=questionArray[i].y - mario.height-5 ;
                break;
            }
        }    
        
        //동전 충돌처리 
        for (let i = 0; i < coinArray.length; i++) {
            let result = collisionCheck(this, coinArray[i]);
            if (result) { //우측이 닿았다면..
                //mario.x = coinArray[i].x - mario.width - 5;
                coinArray[i].remove();
                break;
            }
        }        
        
    }

    // this.x+5,this.y+this.height
    tick(){
        
        this.x=mario.x+5;
        this.y=mario.y+mario.height;
    }
    
    render(){
        
        //충돌체크
        
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        
        this.hitCheck();

    }        
    
}