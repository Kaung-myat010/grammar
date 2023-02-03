const read_more = document.querySelectorAll('.read-more');

for(let i=0; i < read_more.length; i++){
  read_more[i].addEventListener('click',() => {
    read_more[i].parentNode.classList.toggle('active');
  })
}

