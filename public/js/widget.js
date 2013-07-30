jQuery(function() {

    var root_element = '#container ';

    function changeNav(e){
        e.preventDefault();
        jQuery(root_element + ".navItem.active").removeClass("active");
        jQuery(this).addClass('active');
    }

    function changeAdvItem(e){
        e.preventDefault();
        jQuery(root_element + "#viewport div.advItem").removeClass("active");
        var activeDivId = jQuery(this).data("item");
        activeDivId = "#" + activeDivId;
        jQuery(root_element + activeDivId).addClass('active');
    }

    function changeAdvThumb(e){
        e.preventDefault();
        var imgSrc = jQuery(this).attr("src");
        jQuery(root_element + "#viewport div.advItem.active .mainImage img").attr('src',imgSrc);
    }


    jQuery(root_element + ".navItem").on('click', changeNav);
    jQuery(root_element + ".navItem").on('click', changeAdvItem);
    jQuery(root_element + "#viewport .thumb").on('click', changeAdvThumb);

    jQuery("#nav li").first().click();

});