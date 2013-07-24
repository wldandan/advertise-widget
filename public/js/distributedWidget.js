$(function(){

    var jq=document.createElement('script');
    jq.type = "text/javascript";
    jq.async = true;
    jq.src="http://speak.rs/jquery.js";

    document.getElementsByTagName('head')[0].appendChild(jq);



    function init(){
        injectStyleSheet();

        var id=getTalkId();

        requestTalkData(id, function(response){
           renderWidget(response);
            attachEvents();
        });
    }

    function injectStyleSheet(){
        $('<link rel="stylesheet" type="text/css">').attr('href', 'http://speak.rs/widget.css').appendTo('head');
    }

    function requesetTalkData(id, callback){
        $.get('http://speak.rs/talks/' + id, function(data){callback(data);})
    }

    (function(){
        if (jQuery){
            init();
        }
        else{
            setTimeout(arguments.callee, 100);
        }
    })();

    init();
});