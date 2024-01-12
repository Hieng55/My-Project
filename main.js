const products = [
    {
        id: 1,
        image: "img/sign-up.png",
        name: "Sign Up",
        tech: "HTML,CSS",
        color: "blueviolet",
        url: "https://hieng55.github.io/Sign-Up/",
    },
    {
        id: 2,
        image: "img/dailyui-15.png",
        name: "Dark Mode - Light Mode",
        tech: "HTML,CSS,JS",
        color: "#b290fc",
        url: "https://hieng55.github.io/Light-Dark-Mode/",
    },
    {
        id: 3,
        image: "img/DELICI-RESTAURANT.png",
        name: "Restaurant DELICI",
        tech: "HTML,CSS,BOOTSTRAP,JS,JQUERY",
        color: "#98111f",
        url: "https://hieng55.github.io/DELICI-RESTAURANT/",
    },
    {
        id: 4,
        image: "img/FLACIO.png",
        name: "FLACIO",
        tech: "HTML,CSS",
        color: "#6aa0b6",
        url: "https://hieng55.github.io/FLACIO/",
    },
    {
        id: 5,
        image: "img/game.png",
        name: "Game",
        tech: "HTML,CSS,JS",
        color: "#1a9991",
        url: "https://hieng55.github.io/Game/",
    },
    {
        id: 6,
        image: "img/todo.png",
        name: "TO DO LIST",
        tech: "HTML,CSS,JS",
        color: "#b0b0b3",
        url: "https://hieng55.github.io/TODO/",
    },
    {
        id: 7,
        image: "img/travel.png",
        name: "TRAVEL",
        tech: "HTML,CSS",
        color: "#e28473",
        url: "https://hieng55.github.io/PROJECT-TRAVEL/",
    },
    {
        id: 8,
        image: "img/shopping-water.png",
        name: "Shopping Water",
        tech: "HTML,CSS,JS",
        color: "#8160de",
        url: "https://hieng55.github.io/Order-Drinks/",
    },
    {
        id: 9,
        image: "https://rafaelalucas.com/dailyui/img/dailyui-2.jpg",
        name: "Card Credit",
        tech: "HTML,CSS,JS",
        color: "#e2a902",
        url: "https://hieng55.github.io/Card-Creadit/",
    },
    {
        id: 10,
        image: "img/ORFARM.png",
        name: "Market ORFARM",
        tech: "HTML,CSS,BOOTSTRAP,JS",
        color: "#359ed2",
        url: "https://hieng55.github.io/ORFARM/",
    },
    {
        id: 11,
        image: "img/Car.png",
        name: "Car Model",
        tech: "HTML,CSS,SASS,JS",
        color: "#e28473",
        url: "https://hieng55.github.io/Car-Model/",
    },
    {
        id: 12,
        image: "img/orfarmfe.png",
        name: "Or farm",
        tech: "HTML,CSS,JS,JQUERY",
        color: "orange",
        url: "https://hieng55.github.io/Market-Orfarm/",
    }
];
const list = document.querySelector(".list");
function renderProduct(items) {
    list.innerHTML = "";
    items.forEach((item) => {
        list.innerHTML += `
        <div class="box" onClick="view(${item.id})" >
        <div class="item" style="background-color:${item.color} ;">
            <img src="${item.image}" alt="" />
        </div>
        <div class="bg">
        </div>
        <h2>#${item.id}</h2>
        <h4>${item.name}</h4>
        <h4 class="text">${item.tech}<h4/>
    </div>
        `;
    });
}

function view(id) {
    const items = products.find((item) => item.id === id);
    console.log(items);
    window.open(`${items.url}`, "_blank");
}

renderProduct(products);
