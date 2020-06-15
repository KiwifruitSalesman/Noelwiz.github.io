var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

//copied from isotop demo, https://codepen.io/desandro/pen/Ehgij
// filter functions
var filterFns = {
  //appears to act like a list.
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },

  dateAfter2020L: function() {
    var date = $this.find('date').text();
    //filter out everything before 2020
    return parseInt(date, 10) > 2020;
  }
};


//this gets called when the document is ready, so loaded
$(document).ready(function(){
  /*
  //can adjust a class's css with this
  $('.your-class').slick({
    width: '75%'
  });
  */

 $('.grid').isotope({
   // options
   itemSelector: '.grid-item',
   layoutMode: 'fitRows'
 });

 // bind filter button click
 $('.filter-button-group').on( 'click', 'button', function() {

   var filterValue = $( this ).attr('data-filter');
   // use filterFn if matches value
   filterValue = filterFns[ filterValue ] || filterValue;
   $grid.isotope({ filter: filterValue });
 });

 // change is-checked class on buttons
 $('.button-group').each( function( i, buttonGroup ) {
   var $buttonGroup = $( buttonGroup );
   $buttonGroup.on( 'click', 'button', function() {
     console.log("click");
     $buttonGroup.find('.is-checked').removeClass('is-checked');
     $( this ).addClass('is-checked');
   });
 });

});
