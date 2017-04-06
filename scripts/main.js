
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

function loadAccessibiliyMenuScript(url, language, oemsource, sign)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.setAttribute("data-language", language);
    script.setAttribute("data-oemsource", oemsource);
    script.setAttribute("data-sign", sign);
    
    // Fire the loading
    head.appendChild(script);
    
    var cssText = "<link href='http://shakedwebdesign.com/plugins/accessibility-menu/accessibilitymenu.css' type='text/css' rel='stylesheet'/>";
    $("head").append(cssText);

}


var run = function() {

  $('.breadcrumb').breadcrumb();
};




    $(function () {
        loadAccessibiliyMenuScript("http://shakedwebdesign.com/plugins/accessibility-menu/accessibilitymenu.js","eng","accessible+","classic");
        loadScript("./vendor/globalassets/scripts/breadcrumb.js", run);
        $( ".scrollToTop" ).click(function() {
            $("#default").focus();
        });
        

    });
