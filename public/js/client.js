(function() {

    // Localize jQuery variable
    var jQuery;

    /******** Load jQuery if not present *********/
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.7') {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src",
            "http://code.jquery.com/jquery-1.7.min.js");
        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () {
                // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    scriptLoadHandler();
                }
            };
        } else {
            script_tag.onload = scriptLoadHandler;
        }
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        main();
    }

    /******** Called once jQuery has loaded ******/
    function scriptLoadHandler() {
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);
        main();

    }


    function load_css(){
        /******* Load CSS *******/
        var css_link = jQuery("<link>", {
            rel: "stylesheet",
            type: "text/css",
            href: "http://localhost/widgets/public/css/widget.css"
        });
        css_link.appendTo('head');
    }

    function load_js(){
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
    }


    function init(){
        jQuery.getJSON("public/js/advs.json",  function(data) {
            process(data);});
    }

    function main() {
        jQuery(document).ready(function(jQuery) {
            init();
        });
    }

    function build_nav(){
        var nav = jQuery('<div id="nav">').appendTo('#container');
        var ul = jQuery('<ul></ul>').appendTo(nav);
    }

    function build_nav_item(adv){
        var li = jQuery('<li class="navItem" data-item=' + adv.advId + '/>').appendTo('#container #nav ul');
        var a =  jQuery('<a></a>').appendTo(li);
        jQuery('<img class="off" src=' + adv.advLogoUrls[0]+ '></img>').appendTo(a);
        jQuery('<img class="on" src=' + adv.advLogoUrls[1]+ '></img>').appendTo(a);
    }

    function build_view_port(){
        jQuery('<div id="viewport">').appendTo('#container');
    }

    function build_view_port_item(adv){
        var adv_item = jQuery('<div id=' + adv.advId + ' class="advItem" />').appendTo('#container #viewport');
        jQuery('<a href="#" class="mainImage"><img src=' + adv.advImages[0]+ '></img></div>').appendTo(adv_item);

        jQuery('<div class="caption"><b>'+adv.advMainText+'</b><br><span>'
            + adv.advSecondaryText+'</span><a href="#" class="cta"><span>Find out more</span></a>').appendTo(adv_item);

        var ul = jQuery('<ul></ul>').appendTo(adv_item);
        ul.append('<li><a><img class="thumb" src='+ adv.advImages[0]+ '></img></a></li>')
        ul.append('<li><a><img class="thumb" src='+ adv.advImages[1]+ '></img></a></li>')
        ul.append('<li><a><img class="thumb" src='+ adv.advImages[2]+ '></img></a></li>')
        ul.append('<li><a><img class="thumb" src='+ adv.advImages[3]+ '></img></a></li>')
    }


    function process(data){
        build_nav();
        build_view_port();
        jQuery.each(data.advs, function(index, adv) {
            build_nav_item(adv);
            build_view_port_item(adv);
        });
        load_css();
        load_js();
    }

})();