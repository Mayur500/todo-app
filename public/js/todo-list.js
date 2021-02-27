$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });


  const li =document.querySelectorAll('.data');
for(let i=0;i<li.length;i++){

  li[i].addEventListener('click', function(d){
    const item= li[i].getAttribute("data-text") ;
   console.log(item);
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: function(data){
        //do something with the data via front-end framework
       // location.reload();
      }
    });
});

}

});
