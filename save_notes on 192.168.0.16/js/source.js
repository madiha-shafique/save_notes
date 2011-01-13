  $(document).ready(function(){
		  	 $(document).bind('click',function (e) { 
		  	 
			 	 var notes = $('#enter').val(); 
		  		 if( notes == '' && e.target.id !='enter'){
		  		 	
				 		$('#enter').val('Type your notes here..');
				 		$("#enter").css({'color':'grey'});
				 		
				 	}
		 	 });

  			 $("#enter").unbind('click');
             $("#enter").css({'color':'grey'});
             $('#enter').bind('click',function(){
             						
                                    $("#enter").val('');      
                                    $("#enter").css({'color':'black'});
                                  
                             

             });

    $("#enter").keyup(function(e){
                  var code = e.which;
                  if(code==13) $("#change_div").html($(this).val()+"<br/>");
                  else
                 $("#change_div").html($(this).val());

		});

     $("#enter").bind('enter', function(){

        var result = $("#enter").val();
        $("#change_div").html(result+"<br/>");

     });

 

     $("#submit").click(function(){

                var notesvalue = $("#change_div").html();
                
                if(notesvalue != '')
	                $.post('save_notes_in_db.php',{value:notesvalue},function(response){
	                                if(response == 1){
													
	                                                $("#result").fadeIn().html("Record Saved Successfuly").fadeOut(3000,0);
	                                                $("#change_div").html("");
	
	                                }else{
	                                 $("#result").fadeIn().html("Record Not Saved").fadeOut(3000,0);
	                                 $("#result").show();
									}	
	                });
	            else{
	            	 
	            	   $("#result").fadeIn().html("Must Enter Some Text..").fadeOut(3000,0); 
	            		
	            }
	            return false;

     });
     
  
	
     
});