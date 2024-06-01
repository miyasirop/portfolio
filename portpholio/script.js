$(".openbtn").click(function(){
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});

$("#-nav a").click(function(){
    $("opnebtn").removeClass('active');
    $("#g-nav").removeClass('panelasctive');
});

new LuminousGallery(document.querySelectorAll(".grid-gallery"));
new LuminousGallery(document.querySelectorAll('.grid-gallery'),{},{
    caption: function(trigger){
        return trigger.querySelector('img').getAttribute('alt');
    }
});