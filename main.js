$(document).ready(function() {
    document.getElementById("header").innerHTML = fetch("header.html").then(res => res.text());
    document.getElementById("footer").innerHTML = fetch("footer.html").then(res => res.text());
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