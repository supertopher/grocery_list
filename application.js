$(function() {
  // set total to zero
  $(total_cost).text("0");
  // drag queen
  console.log( "ready!" );
  $( ".item" ).draggable({ helper: "clone", drag: function(event, ui){
  }});

  // drop queen
  $( "#grocery_list" ).droppable({ accept: ".item", drop: function(event, ui){
    // make a new one and put it in
    $(this).append((ui.draggable).clone());
    // determine total value
    var sum = 0;
    $('#grocery_list .item_price').each(function() {
      console.log($(this).text());
      sum += Number($(this).text());
    });
    console.log(sum);
    $(total_cost).text(sum);
  }});
});