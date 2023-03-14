const cursor = document.querySelector('.cursor');
const cursorRect = cursor.getBoundingClientRect();
const cursorHalfWidth = cursorRect.width / 2;
const cursorHalfHeight = cursorRect.height / 2;
document.addEventListener('mousemove', e => {
    posText(e);
});

function posText(e) {
    const x = e.clientX;
    const y = e.clientY;
    // cursor.style.left = e.clientX + "px";
    // cursor.style.top = e.clientY + "px";
    cursor.style.transform = `translate(${x}px, ${y}px)`;
    cursor.innerHTML = `<p> x: ${e.clientX}px, y: ${e.clientY}px </p>`;
};