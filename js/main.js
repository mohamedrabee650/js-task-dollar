

function getvalue(){
    var dollar = document.getElementById('dollar').value;
    var result = document.getElementById('result');


    if(dollar==""){
        result.innerHTML = "enter data";
        return false ;

    }else if (isNaN(dollar)){
        result.innerHTML = "enter number not text";
        return false ;
    }else if(dollar<0){
        result.innerHTML = "enter positive number";
        return false ;
    }else if (dollar==0){
        result.innerHTML = "enter number rather than zero";
        return false ;
    }else{
        result.innerHTML = dollar * 50;
        return false ;
    }
}




