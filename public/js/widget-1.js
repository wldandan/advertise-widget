$(document).ready(function()
{
    loadCSS();
    var advData={};
    $("<div id='nav'></div>").appendTo($('#container')).append("<ul></ul>");
    jQuery.getJSON("public/js/advs.json",  function(data) {
        advData = data;
        process(data);}
    );


    changeNavImg();

    function process_adv(index, adv){
        $("#nav > ul").append(createNavItem(adv));
        changeNavImg();
    }

    function process(data){
        var advs = data.advs;
        jQuery.each(advs,   function(index, adv) {
            process_adv(index, adv);
        });
    }

    function createNavItem(adv){
        return $('<li class="navItem"><a href="#"><img' + ' id=adv' + adv.advId + '  src='+ adv.advLogoUrls[0] + '></img></a></li>');
    }

    function changeNavImg(){
        $("#nav li a img").on('click', function(e){

            e.preventDefault();
            var index = $(this).attr('id');
            index = index.replace('adv','');

            var imgSrc = $(this).attr('src');
            if (imgSrc.toLowerCase().indexOf("buttonoff") >= 0){
                $(this).attr('src',advData.advs[index-1].advLogoUrls[1]);
            }
        });
    }



//    function addElem(event){
//        $("<div id='nav'></div>").appendTo($('#container')).append("<ul></ul>");
//        $("#nav > ul").append(createNavItem('public/img/1/buttonOn.png'));
//    }

//    $('#btnAddElem').on('click', addElem);


    function loadCSS(){
        var css_link = $("<link>", {
            rel: "stylesheet",
            type: "text/css",
            href: "public/css/widget3.css"
        });
        css_link.appendTo('head');
    }




});