document.addEventListener('DOMContentLoaded', () => {
    var n = localStorage.getItem('visits_c');
    if (n === null) {
        n = 0;
    }
    n++;
    localStorage.setItem('visits_c', n);
    document.querySelector('#counter').innerHTML = n;
});