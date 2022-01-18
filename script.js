/*
Display menu when max-width is 
Change menu hamburger button to 'x' when menu open 
*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById('menuIc');
    
    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.innerHTML = '&#xe5cd;';

        x.style.flexDirection = 'column';
        x.style.backgroundColor = 'var(--color2)';
        x.style.overflow = 'hidden';
        x.style.padding = '2px';
        x.style.display = 'flex';

    } else {
        x.style.display = 'none';
        y.innerHTML = '&#xe5d2;';
        
        }
    
}

/*Copy right year*/

var date = new Date();
var year = date.getFullYear();
document.querySelector('#copyright').innerText += year;


 