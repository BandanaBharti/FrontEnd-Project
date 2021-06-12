function validateforms(){
    var x = document.forms["myform"]["name"];
    if ( x == ""){
        alert("Name filled is required");
        return false;
    }
}
