document.addEventListener('DOMContentLoaded', () => {
    const messageBox = document.getElementById('first-message');
    const userinput = document.getElementById('user-input');
    const sendmessage = document.getElementById('send-message');


    sendmessage.addEventListener('click', function () {
        var messageInput = userinput.value;
        dispalyUserMessage(messageInput, 'user');
    });

    // Allow sending message by pressing Enter key
    userinput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            var messageInput = userinput.value;
            dispalyUserMessage(messageInput, 'user');
        }
    });

    function dispalyUserMessage(message, sender) {
        var messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;

        messageBox.appendChild(messageElement);
        userinput.value = '';
        userinput.focus();

        setTimeout(() => {
            userinput.focus();
            reply(message);
        }, 1000);
    };

    function reply(message) {
        if (isBlank(message)) {
            dispalyBotMessage("Plese enter you message 🙏");
        } else if (message) {
            generateTable(message);
        } else {

        }
    }

    function dispalyBotMessage(message) {
        var messageElement = document.createElement('div');
        messageElement.classList.add('message', 'bot');

        if (typeof message === 'string') {
            messageElement.textContent = message;
            dispalyUserMessage(message,sender);
        } else if (message instanceof HTMLElement==num) {
            messageElement.appendChild(message);
            generateTable(num);
        }

        messageBox.appendChild(messageElement);

        userinput.value = ''
        userinput.focus();
    };









    function isBlank(message) {
        return message.trim() == '';
    }


    // Genrate Table
    function generateTable(num) {
        var table = document.createElement('table');

        for (var i = 1; i <= 10; i++) {
            var row = document.createElement('tr');

            var cell = document.createElement('td');
            cell.textContent = `${num} x ${i} = ${num * i}`;

            row.appendChild(cell);
            table.appendChild(row);
        }

        dispalyBotMessage(table);
    }
})
