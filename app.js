function validateForm() {

      if( document.myForm.fname.value == "" ) {
         alert( "Please provide your name!" );
         document.myForm.fname.focus() ;
         return false;
      }
      if( document.myForm.femail.value == "" ) {
         alert( "Please provide your Email!" );
         document.myForm.femail.focus() ;
         return false;
      }
      if( document.myForm.fpassword.value == "" ) {
        alert( "Please provide Passsword!" );
        document.myForm.fpassword.focus() ;
        return false;
     }
     if( document.myForm.fname.value != "" && document.myForm,femail.value !="" && document.myForm,fpassword.value !=""
     )
    alert("You have successfully Logged In")
      return( true );
   }