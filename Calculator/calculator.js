let digit = document.getElementById('digit');
let button = document.querySelectorAll('button');
let screen = '';
for(item of button){
    // console.log(item);
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        // console.log(buttonText)
        if(buttonText == "X"){
            buttonText= '*';
            screen += buttonText;
            digit.value = screen;
        }
        else if(buttonText == 'C'){
            screen = "";
            digit.value = screen;
        }
        else if(buttonText == '='){
            digit.value = eval(screen);
        }
        else{
            screen += buttonText;
            digit.value = screen;
        }
    })
}