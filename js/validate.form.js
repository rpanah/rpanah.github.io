	// Contact Validation
	
	function validate_form(){



	        var error = 0;
	        jQuery("#name_error").detach();
	        jQuery("#email_error").detach();
	        jQuery("#subject_error").detach();
	        jQuery("#message_error").detach();
	        
	        
	
			// Name
	        if (document.getElementById("name").value =="" || document.getElementById("name").value == null){
	            jQuery("#name").animate({backgroundColor: "#ff4343"});
	            jQuery("#name").parent().find("label").animate({color: "#fff"});
	            error = 1;
	        }
		        
		        
		    
			// Email
	        var _regexp = new RegExp(/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/);
	        var _email = document.getElementById("email").value;
	        if(_regexp.test(_email) == false) {
	            jQuery("#email").animate({backgroundColor: "#ff4343"});
	            jQuery("#email").parent().find("label").animate({color: "#fff"});
	            error = 1;
	        }
		        
		        
			// Subject
	        if (document.getElementById("subject").value =="" || document.getElementById("subject").value == null){
	            jQuery("#subject").animate({backgroundColor: "#ff4343"});
	            jQuery("#subject").parent().find("label").animate({color: "#fff"});
	            error = 1;
	        }       
		    
			// Message
	        if (document.getElementById("message").value =="" || document.getElementById("message").value == null){
	            jQuery("#message").animate({backgroundColor: "#ff4343"});
	            jQuery("#message").parent().find("label").animate({color: "#fff"});
	            error = 1;
	        }       
		 
	        
	
	        if (error == 1){
	            return false;
	        }else{
	            var name = document.getElementById("name").value;
	            var email = document.getElementById("email").value;
				var subject = document.getElementById("subject").value;
	            var message = document.getElementById("message").value;
	            jQuery("#loader").css("display","block");
	            jQuery.ajax({
	                type:       "POST",
	                url:        "mail.php",
	                cache:      false,
	                data:        "name=" + name +"&email="+email+"&subject="+subject+"&body="+message,
	                success:    function(html) {
	                    jQuery("#contact_form").slideUp("slow")
	                    jQuery("#submit_button").attr("disabled", "disabled");
	                    jQuery("#contact_form").after("<h3 class='center' id='send_message'>Message Sent!</h3>");
	                    jQuery("#send_message").fadeIn("slow");
	                }
	            });
	        }
	
	return false;
	
	}
	