export class ScrollBtn {
    /**
     * @param {String} scrollBtnText
     * @param {String} scrollBtnClassName
     */
    constructor(scrollBtnText, scrollBtnClassName) {
        this._scrollBtn = document.createElement('button');
        this._scrollBtn.addEventListener('click', this.scrollToTop);
        this._scrollBtn.textContent = scrollBtnText??'\u21e7';
        this._scrollBtn.style.opacity = 0;
        this._scrollBtn.title = 'Haut de la page';
        this._scrollBtnClassName = scrollBtnClassName;
        this._scrollBtnSyle = {position: 'fixed', bottom: '2vh', right: '2vw'}
        document.body.appendChild(this._scrollBtn);
        !this._scrollBtnClassName ? this.addBtnStyle() : this._scrollBtn.className = this._scrollBtnClassName;
        this.displayBtn();
    }
    addBtnStyle() {
        for(let [key, value] of Object.entries(this._scrollBtnSyle)){this._scrollBtn.style[key] = `${value}`}
    }
    displayBtn() {
        window.addEventListener('scroll', _ => this._scrollBtn.style.opacity = window.scrollY > 300 ? 1 : 0)
    }
    scrollToTop() {
        window.scroll(window.scrollY > 300 ? {top: 0, behavior: 'smooth'} : {top: window.scrollY});
    }
}