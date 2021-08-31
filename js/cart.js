let cart = {};

$.getJSON('package.json', function(data){
    let items = data;
    checkCart();
    showCart();
    function showCart(){
        if($.isEmptyObject(cart)){
            let out = '';
            let imgcart = "/img/basket.png"
          out+='<div class="container container--cart">';
          out+='<div class="cart cart--empty">';
          out+='<h2>Корзина пустая <icon>😕</icon></h2>';
          out+='<p>Вероятней всего, вы не заказывали ещё ничего.<br />Для того, чтобы заказать растения, перейди на главную страницу.</p>';
          out+='<img src = "'+imgcart+'" alt="empty cart">';
          out+='</div>';
          out+='</div>';
          
          $('#cart').html(out);
        }else{
        let out = '';
        for (let key in cart){
            out+='<div class="cart__item">';
                out+='<div class="cart__item-img">';
                    out+='<img class="flora-block__image" src = "'+items[key].image+'" alt="shop item">';
                out+='</div>';
                out+='<div class="cart__item-info">';
                    out+='<h3>'+items[key].name+'</h3>';
                out+='</div>';
                out+='<div class="cart__item-count">';
                    out+='<button data-itm="'+key+'" class="button button--outline button--circle minus">-</button>';
                    out+='<b>'+cart[key]+'</b>' ;
                    out+='<button data-itm="'+key+'" class="button button--outline button--circle plus">+</button>';
                out+='</div>';
                out+='<div class="cart__item-price">';
                    out+='<b>'+cart[key]*items[key].cost+'₴</b>' ;
                out+='</div>';
                out+='<div class="cart__item-remove">';
                    out+='<div data-itm="'+key+'" class="button button--outline button--circle delete">	&#10006;</div>' ;
                out+='</div>';
            out+='</div>';
            out+='<br>';
        }
        $('#cart').html(out);
        $('.plus').on('click', plusItem);
        $('.minus').on('click', minusItem);
        $('.delete').on('click', deleteItem);
    }
        
        // }else{
        //   let imgcart = "/img/basket.png"
        //   out+='<div class="container container--cart">';
        //   out+='<div class="cart cart--empty">';
        //   out+='<h2>Корзина пустая <icon>😕</icon></h2>';
        //   out+='<p>Вероятней всего, вы не заказывали ещё ничего.<br />Для того, чтобы заказать растения, перейди на главную страницу.</p>';
        //   out+='<img src = "'+imgcart+'" alt="empty cart">';
        //   out+='</div>';
        //   out+='</div>';
          
        //   $('#cart__item').html(out);
        // }
      }
      function plusItem(){
        let articul = $(this).attr('data-itm');
        cart[articul]++;
        saveCartToLS();
        showCart();
    }
    function minusItem(){
        let articul = $(this).attr('data-itm');
        if(cart[articul]>1){
            cart[articul]--;
        }else{
            delete cart[articul];
        }
        saveCartToLS();
        showCart();
    }
    function saveCartToLS(){
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    function deleteItem(){
        let articul = $(this).attr('data-itm');
        delete cart[articul];
        saveCartToLS();
        showCart();
    }

});

function checkCart(){
    if(localStorage.getItem('cart') !== null){
      cart = JSON.parse(localStorage.getItem('cart'));
    }
  }