
//Resize a textarea 
$(function(){
   
    $.each(jQuery('textarea[data-autoresize]'), function() {

        const offset = this.offsetHeight - this.clientHeight;
   
        const resizeTextarea = function(el) {
   
           jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
   
         };
   
         $(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
   
     });

     // click on the img , prevent action

     $('.textareaLi').click(function(){

           const attr= $(this).children().attr('src');
           const textarea = $('.textarea2');
           textarea.fadeOut(1000, function () {
                textarea.css("background", "url('" + attr +"')");
                textarea.css("background-repeat", "no-repeat");
                textarea.css("background-size", "cover");
                textarea.css("font-size", "3em");
                textarea.css("text-align", "center");
                textarea.css("white-space", "pre-line");
                textarea.css("text-shadow", "2px 2px 4px #000000");
                textarea.css("color", "#fff");
                textarea.css("font-weight", "bold");
                textarea.css("padding", "10px");
                textarea.css("line-height", "1em");
                textarea.height("auto");
                textarea.fadeIn(1000); 
                $(".textarea2").prop('maxlength', '150');
            });
     })

     $('#reset').click(function(){
            const attr= $(this).children().attr('src');
            const textarea = $('.textarea2');
             $('#deco').attr("value", '0');
              textarea.fadeOut(1000, function () {
                  textarea.css("background", "white");
                  textarea.css("font-size", "14px");
                  textarea.css("text-align", "inherit");
                  textarea.css("white-space", "initial");
                  textarea.css("text-shadow", "none");
                  textarea.css("color", "#4e4949");
                  textarea.css("font-weight", "normal");
                  textarea.css("padding", "0px");
                  textarea.height("auto");
                  textarea.fadeIn(1000);
                  $(".textarea2").prop('maxlength', '10000');
              });
      });
});
