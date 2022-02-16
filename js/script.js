


document.getElementById('eightGB').addEventListener('click',function(){
   
    updatePrice('memory-cost',0);
})

document.getElementById('sixteenGB').addEventListener('click',function(){
   
    updatePrice('memory-cost',300);
})

document.getElementById('ssd1').addEventListener('click',function(){
   
    updatePrice('storage-cost',0);
})
document.getElementById('ssd3').addEventListener('click',function(){
   
    updatePrice('storage-cost',500);
})
document.getElementById('ssd2').addEventListener('click',function(){
   
    updatePrice('storage-cost',250);
})
document.getElementById('free-delivery').addEventListener('click',function(){
   
    updatePrice('delivery-cost',0);
})
document.getElementById('paid-delivery').addEventListener('click',function(){
   
    updatePrice('delivery-cost',20);
})


function updatePrice(itemId,price){
 
        let memoryCost = document.getElementById(itemId).innerText = price;
    
        const bestPrice = document.getElementById('best-price').innerText;
        const memoryPrice = document.getElementById('memory-cost').innerText;
        const storagePrice = document.getElementById('storage-cost').innerText;
        const deliveryPrice = document.getElementById('delivery-cost').innerText;
    
        const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    
        const total = document.getElementById('total-price');
        total.innerText = totalPrice;
    
  
}

const couponCode = 1234;

document.getElementById('apply-btn').addEventListener('click',function(){
    let code = document.getElementById('promo-input').value;
    if(code == couponCode){
        const total = document.getElementById('total-price').innerText;
        let totalPrice =parseFloat(total);
        const discount = totalPrice * .2;

        totalPrice -= discount;

        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('promo-input').value = '';
        document.getElementById('applied-text').classList.remove('d-none');
        document.getElementById('failed-text').classList.add('d-none');



    }else {
        console.log('something wrong');
        document.getElementById('promo-input').value = '';

        document.getElementById('failed-text').classList.remove('d-none');
        document.getElementById('applied-text').classList.add('d-none');





    }
})