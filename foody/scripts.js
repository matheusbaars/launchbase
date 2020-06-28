const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for(let card of cards) {
    
    card.addEventListener('click', function(){
        const cardImage = card.getAttribute("id")
        const title = card.querySelector('p').textContent
        const author = card.querySelector('h4').textContent
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `/bootcamp-launchbase-desafios-02-master/layouts/assets/${cardImage}`
        modalOverlay.querySelector(".autor h4").innerHTML = title
        modalOverlay.querySelector(".food p").innerHTML = author
    })
}





document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})