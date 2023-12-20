var btn=document.getElementById('btn');
var input1=document.getElementById('pro');
var input2=document.getElementById('amt');
var label1=document.getElementById('l1');
var label2=document.getElementById('l2');
var result1=document.getElementById('tot');

var total=0;
var t=0;

label1.style.color='red';
label2.style.color='red';

    function update(){
         result1.innerText=total;
    }
    function clear()
        {
            input1.value='';
            input2.value='';
        }

btn.addEventListener('click',addToCart)

function addToCart()
{
console.log('0')

    var product=input1.value;
    var amount=input2.value;
    console.log(product,amount);
    var res1=document.querySelector('.inner4');
    var cart_inner=document.querySelector('.inner3-1');
    
    var cart1=document.createElement('div');
    cart1.className='c-div';
    cart1.id='c-div';
    
    var delbtn = document.createElement("p");
    delbtn.innerHTML='<i class="fa-solid fa-trash" style="color: #f8300d;"></i>'
    delbtn.id='db';
    delbtn.className='db1';
                   
    var cart2=document.createElement('div');
    cart2.id='c2';
    cart2.className='c2';
    
    var pro=document.createElement('li');
    pro.id='p1'
    var amt=document.createElement('li');
    amt.id='a1'             
    
    cart1.addEventListener('mouseover',cancel)
    function cancel()
        {
          delbtn.classList.remove('db1')
          delbtn.classList.add('db2')
        }
    
    
        cart1.addEventListener('mouseout',cancel1)
        function cancel1()
            {
                delbtn.classList.add('db1');
                delbtn.classList.remove('db2');

            }

    delbtn.addEventListener("click",del)  
    function del()
    {
        var delamt=delbtn.previousElementSibling.lastChild.innerText;
        
        delbtn.parentElement.remove();
        console.log(delamt);
        total-=delamt;
        update();
    }                

     if(product==''||amount=='')
        {
                console.log('1')
                if(product==''&& amount=='')
                {
                    console.log('2')
                    label1.classList.add("lbl1");
                    label2.classList.add('lbl1');
                }
                else if(product==''){
                
                    label1.classList.add('lbl1');
                    label2.classList.remove('lbl1');
                
                }
                else if(amount==''){
                    label1.classList.remove('lbl1');
                    label2.classList.add('lbl1');
                }
                else{
                    label1.classList.remove('lbl1');
                    label2.classList.remove('lbl1');
                }

            setTimeout(() => {
                label1.classList.remove('lbl1');
                label2.classList.remove('lbl1');
                
                    }, 800);

            }

            else
            {
                cart_inner.append(cart1);
                cart1.append(cart2,delbtn);
                cart2.append(pro,amt);
                pro.innerText=product;
                amt.innerText=amount;
                total+=parseInt(amount);
                console.log(total)
                res1.classList.add('res1');
                res1.classList.remove('res2');
                update();

            }

    update();                
    clear();

        }
        
