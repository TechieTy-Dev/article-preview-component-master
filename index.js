// Initialize Share Options when clicked the share icon

const shareButton = document.getElementById('share-btn');
const socialBar = document.querySelector('.social-bar');
const returnBtn = document.querySelector('.return-btn');
if(shareButton){
    shareButton.addEventListener('click', () => {
      socialBar.classList.toggle('open');
    })
}
returnBtn.addEventListener('click', () =>{
if(socialBar.classList.contains('open')){
    socialBar.classList.remove('open')
}
});
