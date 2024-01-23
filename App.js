import { ScrollBtn } from "./js/ScrollBtn.js";

const mailBtn = document.getElementById('mail');
const scrollBtn = new ScrollBtn('\u25b2', 'scroll-btn');
const ratio = .5;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
  
const handleIntersection = function (entries, observer) {
    entries.forEach(function (entrie) {
        if (entrie.intersectionRatio > ratio) {
            entrie.target.children[0].children[1].classList.add('section__line-visible');
            observer.unobserve(entrie.target)
        }
    });
}
const observer = new IntersectionObserver(handleIntersection, options);
document.querySelectorAll('.section').forEach(function (elm) {
    observer.observe(elm);
})

mailBtn.addEventListener('click', () => {
    mailBtn.textContent = "vieetudianteiutbayonne@gmail.com";
    setTimeout(() => mailBtn.textContent = "Voir l'adresse mail", 10000);
})
