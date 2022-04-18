const input = document.querySelector('.form-control');
const btn = document.querySelector('.btn');
const listGroup = document.querySelector('.list-group');

let i  = 0;
btn.addEventListener('click', ()=>{
    if(input.value !== ''){
        i++;
        let listGroupItem = document.createElement('li');
        listGroupItem.classList.add('list-group-item');
        listGroupItem.innerText = `#${i} ${input.value}`;
        listGroup.appendChild(listGroupItem);
        input.value = '';
    }
});