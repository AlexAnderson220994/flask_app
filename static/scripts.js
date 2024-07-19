document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('alertButton');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        alert('Button clicked!');
        message.textContent = 'You clicked the button!';
    });
});