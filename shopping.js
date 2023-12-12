let openShopping= document.querySelector('.shopping');
let closeShopping= document.querySelector('.closeShopping');
let list= document.querySelector('.list');
let classList= document.querySelector('.listCard');
let body= document.querySelector('body');
let total= document.querySelector('total');
let quantity= document.querySelector('.quantity');

openShopping.addEventListener('.click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let product= [
    {
        id: 1,
        name: 'PRODUCT NAME 1'
        image: 'kl1.png',
        print: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2'
        image: 'kl2.png',
        print: 130000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3'
        image: 'kl1.png',
        print: 140000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4'
        image: 'kl2.png',
        print: 130000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5'
        image: 'kl2.png',
        print: 130000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6'
        image: 'kl2.png',
        print: 130000
    },
];

let listCard=[];
function initApp(){
    
}