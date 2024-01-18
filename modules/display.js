
const messageContainer = document.querySelector('#messageContainer');


const ulEL = document.createElement('ul');
messageContainer.append(ulEL);


function displayMessage(message){
    ulEL.innerHTML = '';
    console.log(message);
    console.log(typeof message);

    for (const popName in message) {
   
        console.log(popName);
        console.log(message[popName].text);
     
        const textEl = document.createElement('li');
        ulEL.append(textEl);
        textEl.innerText = message[popName].text;
    }


  
    // createAndAppendElement('p',message.text,messageContainer);
    // createAndAppendElement('li',message.text, ulEL);
    // messageContainer.append(ulEL);

}

// const boldStyle = document.querySelector('#boldStyle');
// boldStyle.addEventListener('click', ()=>{
//     boldStyle.classList.toggle('boldStyle');

// })


function createAndAppendElement(type,content,container){
    const element = document.createElement(type);
    element.innerText = content;
    container.append(element);
}

export{
    displayMessage
}