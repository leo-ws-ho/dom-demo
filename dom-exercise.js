const data = [
    { "id": 1, "name": "Johnny Moustache", "email": "moustache_johnny@mail.com", "phone": "962390123" },
    { "id": 2, "name": "Mary Lucky", "email": "mary_l@mail.com", "phone": "928748910" },
    { "id": 3, "name": "Tom Vinegar", "email": "vingegartom@mail.com", "phone": "912901846" },
    { "id": 4, "name": "Katy Berry", "email": "kberry90@mail.com", "phone": "962490218" },
    { "id": 5, "name": "Barry Dotter", "email": "dotdotbarry@mail.com", "phone": "934628750" },
    { "id": 6, "name": "Tony Coast", "email": "tonycoast123@mail.com", "phone": "912034785" }
]

let container = document.getElementById('container');

for (let item of data) {
    let card = document.createElement('div');
    card.setAttribute('class', 'box');
    card.innerHTML = `<h1>${item.name}</h1><p>${item.email}</p><p>${item.phone}</p>`

    container.appendChild(card);
    // for (let prop in item) {
    //     // console.log(prop + " " + item[prop]);
    //     d
    // }
} 