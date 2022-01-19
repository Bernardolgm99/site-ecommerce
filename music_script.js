const button = document.querySelector("button")
var cont = 0

function play(){
    if(cont == 0) {
        cont = 1
        const audio = document.querySelector("audio")
        audio.currentTime = 0.1
        audio.volume = 0.05
        audio.play()
        document.getElementById("btn_play").src="galery/dino.gif" 
    } else {
        cont = 0
        const audio = document.querySelector("audio")
        audio.currentTime = 0
        audio.pause()
        document.getElementById("btn_play").src="galery/play_btn.png" 
    }
}