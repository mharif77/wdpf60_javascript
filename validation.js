class validation{
     constructor(email){
         this.email = email;
     }
    validate(){
        var pattern = /[A-z0-9._]+@[A-z0-9]+\.[A-z]{2,4}/;
       
       if(this.email.search(pattern)==-1){
            alert("please enter valid e-mail address");
        }
        else{
            alert("vaid e-mail address");
        }
    }
}