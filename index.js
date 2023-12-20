var btn=document.getElementById('btn');
var input1=document.getElementById('pro');
var input2=document.getElementById('amt');

btn.addEventListener('click',addToCart);

function addToCart(){
    var product=input1.value;
    var amount=input2.value;
    console.log(product,amount);
}

