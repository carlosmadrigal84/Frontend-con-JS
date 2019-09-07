constants navbar = document.querySelector('#navbar');

function toogle(elemento){
    return function (removeClass, addClass) => {
        navbar.classList.remove(removeClass);
        navbar.classList.add(addClass);
    };
}

const handleNavBar = toogle(navbar);

setTimeout(() => handleNavBar('no-search', 'search'), 1000);