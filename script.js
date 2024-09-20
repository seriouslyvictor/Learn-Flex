const allExercises = document.querySelectorAll('.ex--title');

const gerarNavBar = function (array) {
    const nav = document.querySelector(".sidebar")
    array.forEach(item => {
        console.log(item.closest("article"))
        const navLink = `#${item.closest("article").id}`;
        const navItemTitle = item.textContent;
        const navItem = document.createElement("a");
        navItem.textContent = navItemTitle;
        navItem.setAttribute("href", navLink)
        nav.append(navItem)
    });
}

gerarNavBar(allExercises)