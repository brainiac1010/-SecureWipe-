
let textElement = document.getElementById('text');
let valueElement = document.getElementById('value');
let deleteBtn = document.getElementById('delete-btn');

valueElement.addEventListener('keyup', function (event) {
    let text = event.target.value;
    if (text.toLowerCase() === 'delete') {
        deleteBtn.disabled = false;
    } else {
        deleteBtn.disabled = true;
    }
});

deleteBtn.addEventListener('click', function () {
    textElement.style.animation = 'fadeOut 0.5s forwards';
    setTimeout(function () {
        textElement.style.display = 'none';
    }, 500);
    valueElement.value = '';
    deleteBtn.disabled = true;
});
