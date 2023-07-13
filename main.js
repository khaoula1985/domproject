let add_to_cart_btn = document.getElementsByClassName('btnadd')
let main_container=document.getElementsByTagName('tbody')[0]
let quantity_fields=document.getElementsByClassName('num')
let delete_buttons = document.getElementsByClassName('button-danger')

// picking up all the Add-To-Cart buttons
for ( let i=0;i<add_to_cart_btn.length;i++){
    add_to_cart_btn[i].addEventListener('click',addtocart)

}

// This function helps to add items to our cart
function addtocart(event){
   let btn=event.target
   //renvoie l'élement DOM qui a déclenché l'évènement
   let btn_parent=btn.parentElement
   let btn_grandparent=btn.parentElement.parentElement
   let itemName=btn_parent.children[1].innerText
   let itemPrice=btn_parent.children[3].innerText
   let itemImage=btn_grandparent.children[0].src
   let itemContainer=document.createElement('tr')
    
   itemContainer.innerHTML=` <td><input class="checkitem" type="checkbox"></td>
   <td> <img class="itemimage" src="${itemImage}" alt="image" width="50px" height="50px"></td>
   <td class="desigitem"> <h3 class="itemname">${itemName}</h3></td>
   <td><input  type='number' class= 'num' value='1' min="0" max="100"></td>
   <td class="itemprice"><h3>${itemPrice}</h3></td>
   <td class="totalprice"><h3>${itemPrice}</h3></td>
   <td><button class="button-danger" type="button">Remove</button></td>`
// définit html proriétés de l'élement (itemContainer)
    main_container.append(itemContainer)
    // insérer l'élement (itemContainer) à la fin des listes d'éléments

    for ( let i=0;i<quantity_fields.length;i++){
        quantity_fields[i].value = 1
        quantity_fields[i].addEventListener('change',updateTotal)
    }
    for(let i = 0; i < delete_buttons.length; i++){
      delete_buttons[i].addEventListener('click', removeItem)
    }


   
    grandTotal()
}

function updateTotal(event){
    number_of_items=event.target
    number_of_items_parent= number_of_items.parentElement.parentElement
    price_field=number_of_items_parent.getElementsByClassName('itemprice')[0]
    total_field=number_of_items_parent.getElementsByClassName('totalprice')[0]
    price_field_content= price_field.children[0].innerText.replace('$','')
    total_field.children[0].innerText = "$" + number_of_items.value * price_field_content
    grandTotal()
}
    function grandTotal(){
    let total=0
    let grand_total=document.getElementsByClassName('grandtotal')[0]
    let total_price=document.getElementsByClassName('totalprice')
    console.log(total_price)
    for (let i=0; i<total_price.length;i++){
     total_price_content=Number(total_price[i].textContent.replace('$',''))
     total+=total_price_content
    }
     console.log(total) 
     grand_total.children[0].innerText = "$"+total
    }

 
    function removeItem(event){
    del_btn = event.target
     del_btn_parent = del_btn.parentElement.parentElement
    del_btn_parent.remove()
    console.log(del_btn)
    grandTotal()
    }

   