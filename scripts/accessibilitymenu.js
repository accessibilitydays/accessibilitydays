var accessibilityShown = false;

function toggleAccessibilityMenu() {
    if (accessibilityShown) {
        $("#slideout").css("left","0");
         $("#slideout_inner").css("left","-250px");
    } else {
        $("#slideout").css("left","250px");
         $("#slideout_inner").css("left","0");
    }
    
    accessibilityShown = !accessibilityShown;
}