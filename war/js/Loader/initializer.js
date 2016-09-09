$(document).ready(function()
{
    $(document).on("keyup", ".form-control", function(e)
    {
        $(this).removeClass('error');
    });
    $(document).on("click", ".language li a", function(e)
    {
        var languageChanged = $.trim($(this).text());
        if (window.language != languageChanged)
        {
            bootbox.confirm("Any unsaved changes will be lost. Are you sure you want to change the language?", function(result)
            {
                if (result)
                {
                    console.log("ste ::" + languageChanged);
                    loadAllViewsAgainBasedOnLanguage(languageChanged);
                }
            });
        }
    });
});

var showVoiceBox = (function()
{
    return {
        configure: function(msg, timeoutlimit)
        {
            $('#statusmsg').html(msg);
            $('#statusLoader').removeClass('hide');
            $('#statusLoader .voicebox-content').addClass('in');
            if (timeoutlimit != undefined && timeoutlimit != '')
            {
                setTimeout(function()
                {
                    $('#statusLoader .voicebox-content').removeClass('in');
                }, timeoutlimit);
            }
        },
    };

})();

var currentPage = (function()
{
    return {
        get: function()
        {
            return document.URL;
        },
    };

})();