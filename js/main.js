function fadeCursor() { // fade cursor on type
    $(".typed-out").animate({
        border: "0px",
    });
    $(".description").css("display", "block");
    $(".description").animate({
        opacity: "1",
    });
    $("#landingLogo").animate({
        opacity: "1",
    });
    $(".nav-links-link").animate({
        opacity: "1",
    });
}
setTimeout(fadeCursor, 1200);
