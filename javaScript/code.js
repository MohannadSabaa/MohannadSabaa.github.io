
const links = document.querySelectorAll('i');
const ul = document.querySelector('.links');
const nav = document.querySelector('nav');
const clock = document.querySelector('.clock-box');
const setClock = setInterval(() => clock.innerHTML = `<div>${new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours()}</div>
<div>${new Date().getMinutes()}</div> 
<div class='full'>${new Date().getDate().toLocaleString()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}</div>`);



const linksControl = function() {
    if(event.target.closest('li')) {
        Array.from(links).forEach(l => event.target.classList === l.classList ? l.classList.add('link__active')  : l.classList.remove('link__active'))
    }
    else {
        Array.from(links).forEach(l =>  l.classList.remove('link__active'))
    }

}

nav.addEventListener('click',linksControl)
ul.addEventListener('click', function() {
  
    if(event.target.closest('li').className === 'link') {
        document.querySelector(`.section-${event.target.classList[1]}`).scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
        clearInterval(setClock);
    }

 
})
document.addEventListener('click', function() {
    if(!event.target.classList.contains('fa-solid')) {
        Array.from(links).forEach(link => link.classList.remove('link__active'))
    }
if(event.target.classList.contains('fa-code')) {
    document.querySelector('#clock-nav').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}
console.log(event.target.classList)
})
