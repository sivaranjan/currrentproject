
$(document).ready(function() 
{
	$(document).on("keyup", ".form-control", function(e) {
	    $(this).removeClass('error');
	});
	$(document).on("click", ".language li a", function(e) {
	    var languageChanged = $.trim($(this).text());
	    if (window.language != languageChanged) {
	        bootbox.confirm("Any unsaved changes will be lost. Are you sure you want to change the language?", function(result) {
	            if (result) {
	                console.log("ste ::" + languageChanged);
	                loadAllViewsAgainBasedOnLanguage(languageChanged);
	            }
	        });
	    }
	});
});





