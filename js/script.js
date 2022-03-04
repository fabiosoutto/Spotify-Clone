let audioPlayer = document.getElementById('audioplayer');
let loaded = false;

let playBtn = document.getElementById('playBtn');
let pauseBtn = document.getElementById('pauseBtn');

pauseBtn.addEventListener('click',(e)=>{
    e.preventDefault();  //evita o refresh da página

    playBtn.style.display = "inline";    //quando clica aparece o 'pause'
    pauseBtn.style.display = "none";     //quando clica aparece o 'play'
    audioPlayer.pause();

    return false;  //garantindo o efeito no Iphone e outros
});

playBtn.addEventListener('click',(e)=>{
    e.preventDefault();  //evita o refresh da página

    playBtn.style.display = "none";    //quando clica aparece o 'pause'
    pauseBtn.style.display = "inline";     //quando clica aparece o 'play'
    audioPlayer.play();

    return false;  //garantindo o efeito no Iphone e outros
});

const playsong = (file) =>{    //fazendo a música tocar

    if(loaded == false){
        audioPlayer.innerHTML = `<source src="`+file+`" type="audio/mp3"/>`
        loaded = true;
    }

    audioPlayer.play();
        playBtn.style.display = "none";    //desaparece o play
        pauseBtn.style.display = "inline";     //aparece o 'play'
}

//faz todar a música quando clicar no card
document.querySelectorAll('.main-col').forEach(item=>{
    item.addEventListener('click',event=>{
        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let song = item.getAttribute('data-song');
        let file = item.getAttribute('data-file');

        let playerArtistComponent = document.getElementsByClassName('player-artist');

        //usando a div vazia no html
        playerArtistComponent[0].innerHTML = `   
            <img src="`+image+`" />
            <h3>`+artist+`<br/><span>`+song+`</span></h3>
        `;

        playsong(file);
    })
});

//Utilizar setinterval a cada segundo e atualizar a barra de progresso.

audioPlayer.onloadstart = ()=>{
    
}

audioPlayer.oncanplaythrough = function() {
    audioPlayer.play();
};

audioPlayer.addEventListener('timeupdate',(e)=>{
    var currentTime = audioPlayer.currentTime;
    console.log(currentTime);

});

//barra de progresso = (segundo atual / segundo total) * 100