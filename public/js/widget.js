jQuery(function() {

    function changeNav(e){
        e.preventDefault();
        jQuery(".navItem.active").removeClass("active");
        jQuery(this).addClass('active');
    }

    function changeAdvItem(e){
        e.preventDefault();
        jQuery("#viewport div.advItem").removeClass("active");
        var activeDivId = jQuery(this).data("item");
        activeDivId = "#" + activeDivId;
        jQuery(activeDivId).addClass('active');
    }

    function changeAdvThumb(e){
        e.preventDefault();
        var imgSrc = jQuery(this).attr("src");
        jQuery("#viewport div.advItem.active .mainImage img").attr('src',imgSrc);
    }


    jQuery(".navItem").on('click', changeNav);
    jQuery(".navItem").on('click', changeAdvItem);
    jQuery("#viewport .thumb").on('click', changeAdvThumb);

    jQuery("#nav li").first().click();

});