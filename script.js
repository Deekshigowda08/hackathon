let isExpanded = false;
let clickCount = 0;

function expandBox() {
    const box = document.getElementById('resizable-box');

    if (isExpanded) {
        // Restore the original size and remove added text
        box.style.width = '60%';
        box.style.height = '70px';
        box.innerHTML = 'What is Team-7?';
        isExpanded = false;
    } else {
        // Increase the size of the box
        box.style.width = "80%";
        box.style.height = "30vh";

        // Add text to the box
        const newText = document.createElement('p');
        newText.textContent ='hi deekshi';
        box.appendChild(newText);

        isExpanded = true;
    }
}
