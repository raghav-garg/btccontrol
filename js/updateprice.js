$(document).ready(function(){
$.get( "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", function( data ) {
  $( ".ethprice" ).html( data["USD"] );
  alert( data );
});
});