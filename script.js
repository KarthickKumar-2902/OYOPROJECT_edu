
function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle('mydark')
}
function darkmode(){
    let mybody = document.body;
    mybody.classList.toggle('dark_mode');
    var dpdown= document.getElementsByTagName('select')[1];
    dpdown.classList.toggle('dropdown_T');
}

function loadCoupon(){
    document.getElementById('coupon').style.visibility= 'visible';
    document.getElementByTagName('header').style.opacity = "0";
    document.getElementsByClassName('dropdown_cities')[0].style.opacity =".1";
    

}
function closeCoupon(){
    document.getElementById('coupon').style.visibility= 'hidden';
    document.getElementByTagName('header').style.opacity = "1";
    document.getElementsByClassName('dropdown_cities')[0].style.opacity="=1";

}