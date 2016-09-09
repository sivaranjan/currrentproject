$(document).ready(function()
{
    $(document).on("keyup", ".form-control", function(e)
    {
        $(this).removeClass('error');
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