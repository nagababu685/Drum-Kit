// document.querySelector("button").addEventListener("click",function (){alert("You got clicked!.");}); //Ananomus func

// x=['w','a','s','d','j','k','l'];


// document.querySelector("button").addEventListener("click",resp);

// function resp(){
//         alert("You got clicked!.");
//     }
    
    
var l=document.querySelectorAll(".drum").length;
function resp(x){
    switch(x){
        case 'w':
            var w=new Audio("./sounds/tom-1.mp3");
            w.play();
        break;
        case 'a':
            var a=new Audio("./sounds/tom-2.mp3");
            a.play();
        break;
        case 's':
            var s=new Audio("./sounds/tom-3.mp3");
            s.play();
        break;
        case 'd':
            var d=new Audio("./sounds/tom-4.mp3");
            d.play();
        break;
        case 'j':
            var j=new Audio("./sounds/snare.mp3");
            j.play();
        break;
        case 'k':
            var k=new Audio("./sounds/crash.mp3");
            k.play();
        break;
        case 'l':
            var l=new Audio("./sounds/kick-bass.mp3");
            l.play();
        break;
    }
}

function btnani(x){
    var sel=document.querySelector("."+x)
    sel.classList.add("pressed");
    setTimeout(function (){
        sel.classList.remove("pressed");
    },100);

}

for(var i=0;i<l;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var x=this.innerHTML;
        resp(x);
        btnani(x);
    }); //Ananomus func

}
    
document.addEventListener("keypress",function (event){
    var y=event.key;
    resp(y);
    btnani(y);
});