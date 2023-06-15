class Coin extends GameObject{



    remove(){
        //화면에서 제거
        this.container.removeChild(this.img);

        //동전스스로 자신이 배열의 몇번째에 들어있는지 조사 
        let myIndex=coinArray.indexOf(this);

        coinArray.splice(index , 1);
    }
}