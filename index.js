// change language
function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
// change language


// collapse card closes when mouse leave
$(document).ready(function(){
	$(".user-option").click(function(){
		$(this).children("span").show();
	});	
	$(".user-option").mouseleave(function(){
		$(this).children("span").hide();
	});
});
// collapse card closes when mouse leaveve


// Facebook mesenger