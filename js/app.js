let cart = {};
$('document').ready(function(){
  loadItems();
  checkCart();
  
});


function loadItems(){
  $.getJSON('package.json', function(data){
    //console.log(data);
    let out = '';
    for(let key in data){
      
      out+='<div  class="content__items">';
      out+='<div class="flora-block">';
      out+='<img class="flora-block__image" src = "'+data[key].image+'" alt="shop item">';
      out+='<h4 class="flora-block__title">' + data[key]['name'] + "</h4>";
      out+='<div class="flora-block__bottom">';
      out+='<div class="flora-block__price">' + data[key]['cost'] +'₴' +"</div>";
      out+='<button data-itm="'+key+'" class="button button--outline button--add"><span>Добавить</span><i>1</i>';
      out+='</button>';
      out+='</div>';
      out+='</div>';
      out+='</div>';

    }
    $('#items').html(out);
    $('button.button--add').on('click', addToCart);
  });
}



function itemsSort(){
  let id =$(this).attr('id');
  alert(id);
}
function addToCart(){
  let item = $(this).attr('data-itm');
  if(cart[item] !== undefined){
    cart[item]++;
  }else{
    cart[item] = 1;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
 alert("Successfully add");
  
}

function checkCart(){
  if(localStorage.getItem('cart') !== null){
    cart = JSON.parse(localStorage.getItem('cart'));
  }
}

