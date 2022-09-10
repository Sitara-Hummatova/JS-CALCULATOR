const screen = document.getElementById('screen')
const buttons = Array(document.querySelector('.buttons'))

buttons.map(button =>{
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case 'AC':
                screen.innerText = '';    
                break;
            case 'ON/OFF':
                    screen.innerText = '';    
                    break;
            case '←':
                screen.innerText = screen.innerText.slice(0, -1);
                break;
            case '=':
                try {
                    screen.innerText = eval(screen.innerText);
                } catch (error) {
                    screen.innerText = 'Oops :)';
                }
                break;
            default:
                screen.innerText += e.target.innerText;
        }
    })
})
