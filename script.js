let isExpanded = false;
let clickCount = 0;

function expandBox() {
    const box = document.getElementById('resizable-box');

    if (isExpanded) {
        
        box.style.width = '60%';
        box.style.height = '70px';
        box.innerHTML = 'I do not have a team?';
        isExpanded = false;
    } else {
        
        box.style.width = "80%";
        box.style.height = "30vh";

       
        const newText = document.createElement('p');
        newText.textContent =`Don't worry we have a solution for you just go to the chat box and ask for the team members it will give you list and contact the teammates.`;
        box.appendChild(newText);

        isExpanded = true;
    }
}
function expandBox1() {
    const box = document.getElementById('resizable-box1');

    if (isExpanded) {
       
        box.style.width = '60%';
        box.style.height = '70px';
        box.innerHTML = 'How to register to these events?';
        isExpanded = false;
    } else {
        
        box.style.width = "80%";
        box.style.height = "30vh";

       
        const newText = document.createElement('p');
        newText.textContent =`Just go to the event section and you will be finding the events just get into it.`;
        box.appendChild(newText);

        isExpanded = true;
    }
}
function expandBox2() {
    const box = document.getElementById('resizable-box2');

    if (isExpanded) {
       
        box.style.width = '60%';
        box.style.height = '70px';
        box.innerHTML = 'Can I get notified?';
        isExpanded = false;
    } else {
        
        box.style.width = "80%";
        box.style.height = "30vh";

        
        const newText = document.createElement('p');
        newText.textContent =`Yes, sure just click on the calendar and you can add the events which should be notified and you can be free.`;
        box.appendChild(newText);

        isExpanded = true;
    }
}
function expandBox3() {
    const box = document.getElementById('resizable-box3');

    if (isExpanded) {
        
        box.style.width = '60%';
        box.style.height = '70px';
        box.innerHTML = 'I have more queries?';
        isExpanded = false;
    } else {
        
        box.style.width = "80%";
        box.style.height = "30vh"
        const newText = document.createElement('p');
        newText.textContent =`Just contact us we are ready to help you 24*7,Just click on the contact us to cantact.`;
        box.appendChild(newText);

        isExpanded = true;
    }
}
