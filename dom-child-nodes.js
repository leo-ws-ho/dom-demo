// let div = document.getElementsByTagName('div');
// let childList = pList[0].childNodes;

// // childNodes.forEach( element => {
// //     console.log(element);
// // });

// for (let node of childList) {
//     console.log(node);
// }

let pList = document.querySelectorAll('div > p');

for (let node of pList) {
    console.log(node);
}