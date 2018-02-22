
    var btnPrev = document.querySelector('.prev');
    var btnNext = document.querySelector('.next');
    var item = document.querySelectorAll('.slider-item');

    var i = 0;
    btnNext.onclick = function () {
        item[i].style.display = "none";
        i++
        if(i >= item.length){
            i = 0;
        }
        item[i].style.display = 'block';
    };

    btnPrev.onclick = function () {
        item[i].style.display = "none";
        i--
        if(i < 0){
            i = item.length - 1;
        }
        item[i].style.display = 'block';
    }