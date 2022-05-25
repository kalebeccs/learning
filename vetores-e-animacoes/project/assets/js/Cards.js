class Cards {
    constructor() {
        this.sectionDicas = document.getElementById('section-dicas');
        this.cardEsq = document.querySelector('.card-esq')
        this.cardDir = document.querySelector('.card-dir')
    }

    scrollCards() {
        window.requestAnimationFrame(this.calculoScroll.bind(this))
    }

    calculoScroll() {
        const posicao = this.sectionDicas.getBoundingClientRect()['y'];
        if(posicao >= 25) {
            this.cardEsq.style.transform = `translate(${((-posicao) + 25) /8}%)`;
            this.cardDir.style.transform = `translate(${(posicao - 25) /8}%)`;
        }
    }
}

export { Cards }