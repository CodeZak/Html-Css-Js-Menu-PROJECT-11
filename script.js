food = [
    {
        id: 0,
        foodName: "Buttermilk Pancakes",
        foodPrice: "$15.99",
        foodDescription:
            "I'm baby woke mlkshk wolf bitters liveedge blue bottle, hammock freegan copper mug whatever cold-pressed",
        imgLink: "images/item-1.jpeg",
        catName: "breakfast",
    },
    {
        id: 1,
        foodName: "Diner Double",
        foodPrice: "$18.99",
        foodDescription:
            "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        imgLink: "images/item-2.jpeg",
        catName: "lunch",
    },
    {
        id: 2,
        foodName: "Godzilla Milkshake",
        foodPrice: "$15.99",
        foodDescription:
            "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        imgLink: "images/item-3.jpeg",
        catName: "shakes",
    },
    {
        id: 3,
        foodName: "Country Delight",
        foodPrice: "$17.99",
        foodDescription:
            "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        imgLink: "images/item-4.jpeg",
        catName: "breakfast",
    },
    {
        id: 4,
        foodName: "Egg Attack",
        foodPrice: "$18.99",
        foodDescription:
            "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        imgLink: "images/item-5.jpeg",
        catName: "lunch",
    },
    {
        id: 5,
        foodName: "Oreo Dream",
        foodPrice: "$14.99",
        foodDescription:
            "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        imgLink: "images/item-6.jpeg",
        catName: "shakes",
    },
    {
        id: 6,
        foodName: "Bacon Overflow",
        foodPrice: "$19.99",
        foodDescription:
            "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        imgLink: "images/item-7.jpeg",
        catName: "breakfast",
    },
    {
        id: 7,
        foodName: "American Classic",
        foodPrice: "$11.99",
        foodDescription:
            "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        imgLink: "images/item-8.jpeg",
        catName: "lunch",
    },
    {
        id: 8,
        foodName: "Quarantine Buddy",
        foodPrice: "$22.99",
        foodDescription:
            "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        imgLink: "images/item-9.jpeg",
        catName: "shakes",
    },
    {
        id: 9,
        foodName: "Bison Steak",
        foodPrice: "$22.99",
        foodDescription:
            "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        imgLink: "images/item-10.jpeg",
        catName: "dinner",
    },
  
];

// filter unique categories and add them to the nav

x = new Set();
let categories = food.forEach(function (element) {
    uniqueCatList = Array.from(x.add(element.catName));
});
console.log(uniqueCatList);
let catContent = `<li id="all"> <a href="#">all </li>`;

let Ucategories = uniqueCatList.forEach(function (element) {
    catContent += `
    <li id=${element.split(' ').join('_')}> <a href="#">${element}</a> </li>
`

;
});

myUl = document.querySelector("ul");
myUl.innerHTML = catContent;
// **************************** add articles

lis = document.querySelectorAll("ul li");

lis.forEach(function (li) {
    li.addEventListener("click", function (e) {
        let foodList = food.filter(function (element) {
            if (e.currentTarget.id === element.catName.split(' ').join('_')) {
                return true;
            } else if (e.currentTarget.id === "all") {
                return true;
            } else {
                return false;
            }
        });

        // add food to the page
        myMain = document.querySelector("main");
        let allContent = "";

        for (let i = 0; i < foodList.length; i++) {
            allContent += `<div class="card">

    <div class="food_img">
        <img src="${foodList[i].imgLink}" alt="" />
    </div>
    <div class="content">
        <div class="food_name_price">
            <div class="food_name">${foodList[i].foodName}</div>
            <div class="food_price">${foodList[i].foodPrice}</div>
        </div>
        <div class="desc">
            ${foodList[i].foodDescription}
        </div>
    </div>

</div>`;
        }
        myMain.innerHTML = allContent;
        foodList = [];
    });
});

// default listing

let allContent = "";
myMain = document.querySelector("main");

for (let i = 0; i < food.length; i++) {
    allContent += `<div class="card">
    
        <div class="food_img">
            <img src="${food[i].imgLink}" alt="" />
        </div>
        <div class="content">
            <div class="food_name_price">
                <div class="food_name">${food[i].foodName}</div>
                <div class="food_price">${food[i].foodPrice}</div>
            </div>
            <div class="desc">
                ${food[i].foodDescription}
            </div>
        </div>
    
    </div>`;
    myMain.innerHTML = allContent;
}
