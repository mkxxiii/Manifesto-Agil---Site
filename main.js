const ImageControl = {
    position : 0,
    
    start : function(){
        this.interval = setInterval(main, 5000);
        this.interval = setInterval(changeRen, 500);
    },

    furag: false,
    furagsrc: null,
    furagContainer: null,
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
    },

    moveRen : function(){
        if(this.furag){
            this.furagsrc = "ren1.png";
            this.furag = false;
        }
        else{
            this.furagsrc = "ren2.png";
            this.furag = true;
        }

        this.furagContainer.setAttribute("src", "content/img/" + this.furagsrc);
    }
}

function start(){
    ImageControl.imgContainer = document.getElementById("imgShw");
    ImageControl.furagContainer = document.getElementById("sprFurag");
    ImageControl.start();    
}

function main(){
    ImageControl.moveImage();
}

function changeRen(){
    ImageControl.moveRen();
}

function newTab(link){
    window.open(link, "_blank");
}

function atalhoPreguica(text) {
    window.prompt("Copie para área de transferência seu preguiçoso: Ctrl+C e tecle Enter", text);
  }
