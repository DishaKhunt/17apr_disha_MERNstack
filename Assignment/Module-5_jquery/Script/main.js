$(document).ready(function(){
    function slider(){
        var div = $("#div1");
        div.animate({left: "20%",height: '120px',width: '120px', opacity: '0.9'}, 3000,function(){});
        div.animate({left: "20%",height: '150px',width: '150px', opacity: '0.9'}, 3000,function(){});
        div.animate({left: "40%",height: '200px',width: '200px', opacity: '0.8'},  3000,function(){});
        div.animate({left: "60%",height: '300px',width: '300px', opacity: '0.6'},  3000,function(){});
        div.animate({left: "80%",height: '400px',width: '400px', opacity: '0.4'},  3000,function(){});
        div.animate({left: "100%",height: '500px',width: '500px', opacity: '0.2'},  3000,function(){});
    }
    slider();
    });