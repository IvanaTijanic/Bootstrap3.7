/*bootstrap modali za prozor na klik na sliku*/
$(function () {
	$('[data-toggle="popover"]').popover()
})

/*bootstrap hover na dropdown menu, lista pad na dole - moje rešenje

$('ul.nav li.dropdown').hover(function() {
	$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
}, function() {
	$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
});
*/

/* bootstrap hover na dropdown menu, lista pad na dole - profesorovo rešenje */
$(function () {

// automatski padajuci meni
$("ul.nav li.dropdown").hover(function(){
	$(".dropdown-menu",this).fadeIn()
},function () {
	 $(".dropdown-menu",this).fadeOut("fast")}) // hover prelaz
}); 

/* bootstrap modali za prozor na klik na sliku - profesorovo rešenje
$(function () {
    // tooltip aktivacija
    $('[data-toggle="tooltip"]').tooltip()
}) */