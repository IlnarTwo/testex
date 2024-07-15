var offer = document.getElementById('offer');
var similar = document.getElementById('similar'); 
document.getElementsByClassName('buttonLine').onclick = function(){
    if (offer.style.display == 'none' || similar.style.display =='none'){
        offer.style.display == 'block';
        similar.style.display =='block';
    }else{
        offer.style.display == 'none';
        similar.style.display =='none';
    }
}