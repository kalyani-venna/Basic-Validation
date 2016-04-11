function validate()
	{
		
		var profile=[];
		var tempprofile=[];
		var pro={};
		var x,profile1;
		var c=0;
	

		pro.name1=document.getElementById("name").value;
		pro.password1=document.getElementById("password").value;
	
	
		profile.push(pro);
        localStorage.setItem('profile', JSON.stringify(profile));
 	console.log(profile);
     
        redirect();
    }
        function namevalidate()
        {    
        	var name1=document.getElementById("name").value;
		
        	 var reg =  /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+.([a-z]{2,3})+.([a-z]{2,3})$/;
             
             if(name1.length==0) 


             	document.getElementById("validname").innerHTML="enter emaild";
             
        
           else  
          {
          	if(!(name1.match(reg)) )
          	{
          		document.getElementById("name").value="";
          		document.getElementById("name").focus();
          		document.getElementById("validname").innerHTML="mail-id should be in proper format";
          		

          	}
       
          	    
         } 
          // var name=[];
          var name=name1.split("@");
	}
	function passwordvalidate()
	{
		var password1=document.getElementById("password").value;
		var name1=document.getElementById("name").value;
		var reg=/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
		if(password1.length==0 && name1.length==0) document.getElementById("validpassword").innerHTML="enter values";
		else if(password1.length==0)
		{ 

			
            document.getElementById("validpassword").innerHTML="enter password";
            return false;
		}
		else if (!(password1.match(reg)))
		{  
			
			document.getElementById("validpassword").innerHTML="password should be alphanumeric ";
			 return false;
		}
		else
		{
		validate();
	     }
	}
	function redirect()
	{
		
		var password1=document.getElementById("password").value;
		var name1=document.getElementById("name").value;
		if(name1 && password1 )
		{
			window.location="home.html";
		}
		else
		{
			alert("plz enter values");
			return false;
		}
		
	}
