$(document).ready(function(){

  $(document).on("click", "#register", (e)=>{
  	e.preventDefault();
  	$(".loading").css("display", "block");

  	var name = $("#name").val();
    var email = $("#email").val();
    var age = $("#age").val();

  	if(name !=="" && email !=="" && age !==""){
  		$.getJSON("./forms/register.php",{
  			name:name,
  			email:email,
  			age:age
  		}, function(data, status){
  			if(data.status == false){
  				$(".loading").css("display", "none");
  				$("#stepOne").css("display", "none");
  				$("#stepTwo").css("display", "block");
  			}else{
  				$(".loading").css("display", "none");
  				$("#stepOne").css("display", "none");
  				$("#fail").css("display", "block");
  			}
  		})
  	}
  })

})