var box = document.getElementById('theme-check');
box.checked = localStorage.getItem('flip') === '1';
box.onchange = function () { localStorage.setItem('flip', box.checked ? '1' : '0'); };