
let arr = [

]

let musicBox = document.querySelectorAll('.item-grid-card');
musicBox.forEach(box =>{
    let h2 = box.querySelector('.item-grid-card__title').innerText;
    let p = box.querySelector('.item-grid-music-preview__author').innerText;
    let mp3 = box.querySelector('.audio-player__wave');
    let finderMp3 = mp3.querySelector('audio');
    let mp3Src = finderMp3.getAttribute('src')



    arr.push({
        title: h2,
        author:p,
        mp3: mp3Src
    })
})

console.log(arr)




