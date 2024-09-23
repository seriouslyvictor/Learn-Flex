const slider1 = document.querySelector("#slider1");
const slider2 = document.querySelector("#slider2")
const params = {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    cellSelector: 'article',
    wrapAround: true,
    hash: true,
}
const sliders = [new Flickity(slider1, params), new Flickity(slider2, params)]
const allExercises = document.querySelectorAll('.ex--title');


sliders.forEach(slider => slider.element.addEventListener('click', (e) => avancarSlide(e)))

const adicionarDivisor = function (el) {
    console.log(el)
    let section = el.closest("section");
    let article = el.closest("article")
    let lastArticle = section.querySelector(`article:last-child`)
    if (article === lastArticle) {
        return true
    }
    return false
}

const gerarNavBar = function (array) {
    if (array.length <= 0) return;
    const nav = document.querySelector(".sidebar")
    array.forEach((item, idx) => {
        console.log(item.closest("article"))
        const navLink = `#${item.closest("article").id}`;
        const navItemTitle = item.textContent;
        const navItem = document.createElement("a");
        navItem.textContent = navItemTitle;
        navItem.setAttribute("href", navLink)
        nav.append(navItem)
        if (adicionarDivisor(item)) {
            const hr = document.createElement("hr")
            nav.append(hr)
        }
        const slider = findFlickityParent(item.closest("article"))
        navItem.addEventListener("click", (e) => irParaSlide(e, slider, idx))
    });
}

const irParaSlide = function (e, carossel, slideNum) {
    e.preventDefault();
    carossel.select(slideNum);
    carossel.element.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling effect
        block: 'center'     // Scroll the element to the center of the viewport
    });
}

const avancarSlide = function (e) {
    const gerador = e.target.closest(".slider--button")
    if (!gerador) return
    const flicker = findFlickityParent(gerador)
    gerador.classList.contains("next-button") ? flicker.next() : flicker.previous()

}

const findFlickityParent = function (el) {
    for (let i = 0; i < sliders.length; i++) {
        const slider = sliders[i];
        if (slider.element.contains(el)) {
            return slider;  // Return the Flickity instance
        }
    }
    return null;
}

gerarNavBar(allExercises)