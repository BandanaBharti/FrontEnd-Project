function validateforms(){

   
    let form = document.myform;

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
       });

    if ( form.name.value == ""){
        alert("Name filled is required");
        form.name.focus();
        return false;
    }
    if( form.fname.value == ""){
        alert("Please enter Father' Name");
        form.fname.focus();
        return ;
    }

    if( form.email.value == ""){
        alert("Please enter Email id!");
        form.email.focus();
        return ;
    }
    if( form.address.value == ""){
        alert("Please enter Address!");
        form.address.focus();
        return ;
    }
    if( form.phone.value == ""){
        alert("Please enter Phone Number");
        form.phone.focus();
        return ;
    }

    if( form.password.value == ""){
        alert("Please enter Password");
        form.password.focus();
        return ;
    }
    

}
