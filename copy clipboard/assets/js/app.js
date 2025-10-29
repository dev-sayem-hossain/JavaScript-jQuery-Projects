$(document).ready(function(){
    $(".copyBtn").click(function(){
        let text = $("#textField").val();
         $("#textField").select();
        navigator.clipboard.writeText(text);

        $(".copied").addClass("bounce-effect");
        setTimeout(function(){
            $(".copied").removeClass("bounce-effect");
        }, 1000);
    });

});
 