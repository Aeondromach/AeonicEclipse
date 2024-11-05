$(document).ready(function() {
    navbuttons("#home","/home");
    navbuttons('#feedback',"Feedback.php");
    navbuttons('#campaigns',"Campaigns.php");
    navbuttons('#dmOnly',"DmOnly.php");
    navbuttons('#contact',"/contact");
})

function navbuttons(take, give) {
    if ($(take).length > 0) {
        $(take).on("click", function() {
            location.href = give;
        });
    }
}