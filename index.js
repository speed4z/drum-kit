var numOfDrums = document.querySelectorAll(".drum").length;

var tom1Sound = new Audio("sounds/tom-1.mp3");
var tom2Sound = new Audio("sounds/tom-2.mp3");
var tom3Sound = new Audio("sounds/tom-3.mp3");
var tom4Sound = new Audio("sounds/tom-4.mp3");
var snareSound = new Audio("sounds/snare.mp3");
var crashSound = new Audio("sounds/crash.mp3");
var kickbassSound = new Audio("sounds/kick-bass.mp3");

for(var i=0; i< numOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // console.log(this.innerHTML)
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown",function(event){
    // console.log(event);
    playSound(event.key);
    buttonAnimation(event.key);
        
});

function playSound(key){
    switch (key) {
        case 'w':
            tom1Sound.play();
            break;
        case 'a':
            tom2Sound.play();
            break;
        case 's':
            tom3Sound.play();
            break;
        case 'd':
            tom4Sound.play();
            break;
        case 'j':
            snareSound.play();
            break;
        case 'k':
            crashSound.play();
            break;
        case 'l':
            kickbassSound.play();
            break;
        default:
            break;
    };
}

function buttonAnimation(key){
    var currentButton = document.querySelector("." + key);
    currentButton.classList.add("pressed");
    setTimeout(function (){
        currentButton.classList.remove("pressed");
    },100);

}