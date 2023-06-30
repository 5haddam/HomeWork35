const wrapp = document.querySelector('#wrapp');
wrapp.classList.add('grid-wrapp');

for (let i = 1; i <= 100; i++) {
    const div = document.createElement('div');
    div.innerText = i;
    div.classList.add('grid');
    wrapp.append(div);
}