class Mushroom extends GameObject{

    hitCheck(){
        for(let i=0;i<mushroomArray.length;i++){
            let result=collisionCheck(mushroomArray[i],mario);
            if(result){
                mushroomArray[i].style.display="../images/Q1.png";
            }
        }
    }
}
