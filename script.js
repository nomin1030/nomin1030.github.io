let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    heart.classList.remove('active');
}


let shoppingCart=document.querySelector('.shopping-cart');
document.querySelector("#cart-btn").onclick=()=>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    heart.classList.remove('active');
}

let heart=document.querySelector('.heart');

document.querySelector('#heart-btn').onclick=()=>{
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    heart.classList.toggle('active');
}
window.onscroll=()=>{
    
searchForm.classList.remove('active');
shoppingCart.classList.remove('active');
heart.classList.remove('active');
}
