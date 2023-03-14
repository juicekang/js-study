const items = document.querySelector('.item-row');
const btnPlus = document.querySelector('.btn-plus');
const input = document.querySelector('input[type="text"]');
const habitBody = document.querySelector('.habit-body');
const btnDelete = document.createElement('button');
const form = document.querySelector('.new-form');
btnDelete.setAttribute('class', 'btn-delete');
let addList;
form.addEventListener('submit', event => {
    event.preventDefault();
    onAdd();
});


// btnPlus.addEventListener('click', e => {
//     onAdd();
// });
// input.addEventListener('keyup', e => {
//     if(e.key === 'Enter') {
//         onAdd();
//     }
// });
function onAdd(){ 
    const text = input.value;

    if( text === '') {
        input.focus();
        return;
    } else {
        const item = createItem(text);
        habitBody.appendChild(item);
        item.scrollIntoView({block:'center'});
        input.value = null;
        input.focus();
    }
};

let id = 0; // UUID
habitBody.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item-row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item-row');
    itemRow.setAttribute('data-id', id)
    itemRow.innerHTML = `
        <span class="item">${text}</span><button class="btn-delete" data-id=${id}></button>
    `;
    id++;
    // const name = document.createElement('span');
    // name.setAttribute('class', 'item');
    // name.innerText = text;

    // const deleteBtn = document.createElement('button');
    // deleteBtn.setAttribute('class', 'btn-delete');
    // itemRow.addEventListener('click', event => {
    //     if(event.target.tagName !== 'BUTTON') {
    //        return;
    //     } else {
    //         habitBody.removeChild(itemRow);
    //     }
    // });

    // itemRow.appendChild(name);
    // itemRow.appendChild(deleteBtn);

    return itemRow;
};



