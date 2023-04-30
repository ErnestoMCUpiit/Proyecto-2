const popupList = [
    'images/popups/1.jpeg',
    'images/popups/2.jpeg',
    'images/popups/3.jpeg',
    'images/popups/4.jpeg'
];
window.addEventListener('load', function () {


    const btnCerrarPopup = document.getElementById('cerrar');
    const modalV = document.getElementById('modal');
    const pop = document.getElementById('popup')
    const modalImg = document.createElement('img');
    const link = document.createElement('a');
    // randomly select an image URL from popupList
    const randomIndex = Math.floor(Math.random() * popupList.length);
    const popupImgUrl = popupList[randomIndex];

    //link.href='https://youtu.be/okL-GNeRSus';
    link.href='https://pnrtscr.com/fep8be';
    link.target = '_blank';
    modalImg.src = popupImgUrl;
    link.appendChild(modalImg);
    pop.appendChild(link);
    

    modalV.classList.remove('hidden');

    btnCerrarPopup.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.remove('no-scroll');
        modal.classList.add('hidden');
        modal.innerHTML = '';
    });
});