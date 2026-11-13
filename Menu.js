let menu=document.querySelector('.menucome');
let backdrop=document.querySelector('.keeper');
let opentap=document.querySelector('.menu');
let closetap=document.querySelector('.menucan');

/*function for opening menu */
function change() {
  menu.classList.toggle('came');
backdrop.classList.toggle('act');
};

opentap.addEventListener('click',change);

closetap.addEventListener('click',change);

backdrop.addEventListener('click',change);