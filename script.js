
function funct(){
    for(var i=0; i<16;i++){
        document.getElementsByTagName('button')[i].addEventListener('click',clickFunction);
        };
    }

funct();
var num='';


function clickFunction(e){
    e.preventDefault();

    var chk = e.target.value;
    let inpt = document.getElementById('input');
    if (chk !="=" && chk!="c"){
    num += e.target.value;
    inpt.value=num;
    }else if(chk =="c"){
        inpt.value =" "; 
        num='';
    }
    else{
        var result = eval(inpt.value);
        inpt.value =result;
        num='';

    }
    

}