const colorCenter = document.getElementById('color-center');
colorCenter.addEventListener('click', function() {
    if (colorCenter.style.backgroundColor === 'blue') {
        colorCenter.style.backgroundColor = 'red';
        colorCenter.style.backgroundColor ='yellow';
        


    } else {
        colorCenter.style.backgroundColor = 'blue';
       
    }
});