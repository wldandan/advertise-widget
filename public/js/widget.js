$(function() {

    function changeNav(e){
        e.preventDefault();
        $(".navItem.active").removeClass("active");
        $(this).addClass('active');
    }

    function changeAdvItem(e){
        e.preventDefault();
        $("#viewport div.advItem").hide();
        var activeDivId = $(this).data("item");
        activeDivId = "#" + activeDivId;
        $(activeDivId).show();
    }

    $(".navItem").on('click', changeNav);
    $(".navItem").on('click', changeAdvItem);
    $("#nav li").first().click();

});