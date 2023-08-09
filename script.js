
function funct(){
    for(var i=0; i<16;i++){
        document.getElementsByTagName('button')[i].addEventListener('click',clickFunction);
        };
    }

funct();
var num='';


function clickFunction(e){
    e.preventDefault();

    var chk = e.target;
    let inpt = document.getElementById('input');

    chk.classList.add("pressed");
    setTimeout(()=>{chk.classList.remove("pressed"),1000});
    let aud = new Audio('./click1.mp3');
    aud.play();

    setTimeout(()=>{})
    if (chk.value !="=" && chk.value!="c"){
    num += e.target.value;
    inpt.value=num;
    }else if(chk.value =="c"){
        inpt.value =" "; 
        num='';
    }
    else{
        var result = eval(inpt.value);
        inpt.value =result;
        num='';

    }
    

}