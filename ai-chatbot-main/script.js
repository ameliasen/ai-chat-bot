document.addEventListener('DOMContentLoaded', () =>{
    const messageBox = document.getElementById('first-message');
    const userinput = document.getElementById('user-input');
    const sendmessage = document.getElementById('send-message');

    
    sendmessage.addEventListener('click', function(){
        var messageInput = userinput.value;
        dispalyUserMessage(messageInput, 'user');

        setTimeout(() => {
            dispalyUserMessage("Hello There! I am Bot Your Message i recived is " + messageInput, 'bot')
        }, 1000);
    });
    
    function dispalyUserMessage(message, sender){
        var messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;

        messageBox.appendChild(messageElement);
        userinput.value = '';
        userinput.focus();

        // setTimeout(() => {
        //     userinput.focus();
        //     dispalyBotMessage(message);
        // }, 1000);
    };

    // function dispalyBotMessage(message){
    //     var messageElement = document.createElement('div');
    //     messageElement.classList.add('message', 'bot');
    //     messageElement.textContent =  message;

    //     messageBox.appendChild(messageElement);

    //     userinput.value = ''
    //     userinput.focus();
    // };
})

 