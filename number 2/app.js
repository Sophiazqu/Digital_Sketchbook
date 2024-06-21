let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    } else if (event.key === 'ArrowLeft') {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    }
});
