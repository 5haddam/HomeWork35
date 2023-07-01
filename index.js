const table = document.querySelector('#table');

for (let i = 1; i <= 10; i++) {
    const tr = document.createElement('tr');
    for (let j = i * 10 - 9; j <= i * 10; j++) {
        const td = document.createElement('td');
        td.innerText = j;
        tr.append(td);
    }
    table.append(tr);
}

// const wrapp = document.querySelector('#wrapp');
// wrapp.classList.add('grid-wrapp');

// for (let i = 1; i <= 100; i++) {
//     const div = document.createElement('div');
//     div.innerText = i;
//     div.classList.add('grid');
//     wrapp.append(div);
// }
