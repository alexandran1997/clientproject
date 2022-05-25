/* global $ */

//console.log('hi');
//
$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

let hpAPIurl="https://www.googleapis.com/books/v1/volumes?q=harry%20potter";
console.log(hpAPIurl);
fetch(hpAPIurl);

let userInput=$("input").val(); 






