$(document).ready(function(){
$.get( "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", function( data ) {
  $( ".ethprice" ).html( data["USD"] );
});

$.get( "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD", function( data ) {
  $( ".btcprice" ).html( data["USD"] );
});


$.get( "https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD", function( data ) {
  $( ".xrpprice" ).html( data["USD"] );
});
});