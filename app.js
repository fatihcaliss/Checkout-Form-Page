let plus = document.querySelectorAll('.fa-plus');
let minus = document.querySelectorAll('.fa-minus');
let payment = document.querySelector('.payment');
let remove = document.querySelectorAll('.remove');
let shippingPrice = document.querySelector('.shipping');



plus.forEach((item) => {
    item.addEventListener('click', adding);
});

minus.forEach((item) => {
    item.addEventListener('click', subtracting);
})

remove.forEach((item) => {
    item.addEventListener('click', destroy);
})

function adding(item){
    let amount = this.parentElement.nextElementSibling;
    amount.innerText = parseInt(amount.innerText) + 1;
    let price = this.parentElement.parentElement.previousElementSibling.firstElementChild.innerText
    payment.innerText = '$' + (parseFloat(payment.innerText.slice(1)) + parseFloat(price.slice(1))).toFixed(2);
    if(amount != 0){
        shippingPrice.innerText = '$19.00';
    }
    
}

function subtracting(item){
    let amount = this.parentElement.previousElementSibling;
    if(parseInt(amount.innerText) > 0){
    amount.innerText = parseInt(amount.innerText) - 1;
    let price = this.parentElement.parentElement.previousElementSibling.firstElementChild.innerText
    payment.innerText = '$' + (parseFloat(payment.innerText.slice(1)) - parseFloat(price.slice(1))).toFixed(2)
    if(payment.innerText == '$19.00'){ 
        shippingPrice.innerText = '$0.00';
        payment.innerText = '$0.00';
    }else{
        shippingPrice.innerText = '$0.00';
        payment.innerText = '$0.00';
    }
}}

function destroy(item) {
    let price = this.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerText.slice(1)
    let amount = this.previousElementSibling.firstElementChild.nextElementSibling.innerText
    payment.innerText = '$' + (parseFloat(payment.innerText.slice(1)) - (price * amount)).toFixed(2)
    
    this.parentElement.parentElement.style.display = 'none';
    if(payment.innerText == '$19.00'){ 
        shippingPrice.innerText = '$0.00';
        payment.innerText = '$0.00';
    }
}

