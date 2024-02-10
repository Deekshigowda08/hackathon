let isExpanded = false;
let clickCount = 0;

function expandBox() {
    const box = document.getElementById('resizable-box');

    if (isExpanded) {
        // Restore the original size and remove added text
        box.style.width = '100px';
        box.style.height = '100px';
        box.innerHTML = 'Click me!';
        isExpanded = false;
    } else {
        // Increase the size of the box
        box.style.width = `${150 + clickCount * 50}px`;
        box.style.height = `${150 + clickCount * 50}px`;

        // Add text to the box
        const newText = document.createElement('p');
        newText.textContent = `Click count: ${++clickCount}`;
        box.appendChild(newText);

        isExpanded = true;
    }
}
