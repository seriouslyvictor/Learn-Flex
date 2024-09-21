const allExercises = document.querySelectorAll('.ex--title');
const adicionarDivisor = function (el) {
    console.log(el)
    let section =  el.closest("section");
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


gerarNavBar(allExercises)