const ImageControl = {
    position : 0,
    
    start : function(){
        this.interval = setInterval(main, 5000);
    },


    counter: 0,
    imgContainer : null,

    images : ["1_uHNw655A-waKTJ99aEVzpg.png","agile-and-guiding-principles.png","images.jpg","images.png"],

    moveImage : function(){
        if(this.position == this.images.length - 1){
            this.position = 0;
        }
        else{
            this.position += 1;
        }

        if(this.counter == 4){
            window.alert("A cor desse site está uma bosta né!?");
            this.counter++;
        }
        else{
            this.counter++;
        }


        this.imgContainer.setAttribute("src", "content/img/" + this.images[this.position]);
    }
}

function start(){
    ImageControl.imgContainer = document.getElementById("imgShw");
    ImageControl.start();    
}

function main(){
    ImageControl.moveImage();
}

function newTab(link){
    window.open(link, "_blank");
}

function atalhoPreguica(text) {
    window.prompt("Copie para área de transferência seu preguiçoso: Ctrl+C e tecle Enter", text);
  }
