const allExercises = document.querySelectorAll('.ex--title');
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
    array.forEach(item => {
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
    });
}

const iniciarSliders = function () {
    const slider1 = document.querySelector("#slider1");
    const slider2 = document.querySelector("#slider2")
    const params = {
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        cellSelector: 'article',
        wrapAround: true,
    }
    const flicky1 = new Flickity(slider1, params)
    const carosel2 = new Flickity(slider2, params)
    const prevButton = slider1.querySelector('.prev-button');
    const nextButton = slider1.querySelector('.next-button');
    const prevButton2 = slider2.querySelector('.prev-button');
    const nextButton2 = slider2.querySelector('.next-button');
    prevButton.addEventListener('click', function () {
        flicky1.previous();  // Go to the previous slide
    });
    nextButton.addEventListener('click', function () {
        flicky1.next();  // Go to the next slide
    });
    prevButton2.addEventListener('click', function () {
        carosel2.previous();  // Go to the previous slide
    });
    nextButton2.addEventListener('click', function () {
        carosel2.next();  // Go to the next slide
    });


}


iniciarSliders()
gerarNavBar(allExercises)