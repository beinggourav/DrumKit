var keys = document.querySelectorAll(".button");

var button = document.querySelectorAll('.button');
for (let i = 0; i < 9; i++) {
    button[i].addEventListener('click', function(){
        var key = this.querySelector('btn');
        play(key.innerHTML);
        animation(key.innerHTML);
    });
};

document.addEventListener('keypress', function(e){
    play(e.key);
    animation(e.key);
});
function play(key){
    var pressed = key;
    if (pressed === "a" || pressed === "A"){
        var sound = new Audio('sounds/clap.wav');
        sound.play();
    }
    else if (pressed === "s" || pressed === "S"){
        var sound = new Audio('sounds/hihat.wav');
        sound.play();
    }
    else if (pressed === "d" || pressed === "D"){
        var sound = new Audio('sounds/kick.wav');
        sound.play();
    }
    else if (pressed === "f" || pressed === "F"){
        var sound = new Audio('sounds/openhat.wav');
        sound.play();
    }
    else if (pressed === "g" || pressed === "G"){
        var sound = new Audio('sounds/boom.wav');
        sound.play();
    }
    else if (pressed === "h" || pressed === "H"){
        var sound = new Audio('sounds/ride.wav');
        sound.play();
    }
    else if (pressed === "j" || pressed === "J"){
        var sound = new Audio('sounds/snare.wav');
        sound.play();
    }
    else if (pressed === "k" || pressed === "K"){
        var sound = new Audio('sounds/tom.wav');
        sound.play();
    }
    else if (pressed === "l" || pressed === "L"){
        var sound = new Audio('sounds/tink.wav');
        sound.play();
    }else{
        console.log('Press displayed keys!');
    }
}

function animation(key){
    var target = document.querySelector("." + key);
    target.classList.add('playing');
    setTimeout(function(){
        target.classList.remove('playing')
    },100);
}