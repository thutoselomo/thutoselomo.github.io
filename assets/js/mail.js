
$(document).ready(function(){
  
  $(document).on("click", "#send-mail", (e)=>{
    $(".loading").css("display", "block");
    e.preventDefault();
    var formData = new FormData();
    var sender = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    if(email !=="" && subject !=="" && message !==""){
        $.getJSON("./app/index.php",{
          subject: subject,
          senderName: sender,
          fromMail: email,
          message: message

          },function(data, status){
              if(data.status === true){
                  $(".loading").css("display", "none");
                  $(".sent-message").css("display", "block");
              }else{
                  $(".loading").css("display", "none");
                  $(".error-message").css("display", "block");
              }
            console.log(data);
          });
    }else{
        $(".loading").css("display", "none");
        $("#empty-message").css("display", "block");
    }
  });
  
//   Donate


$(document).on("click", "#donate", (e)=>{
    e.preventDefault();
    window.location.href='https://pay.yoco.com/thuto-selomo-organization';
})
  
});