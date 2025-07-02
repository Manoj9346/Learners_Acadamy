
const url = window.location.pathname;
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
if (url.includes('la_landing.html')) {
  link1.classList.add('active');
} else if (url.includes('la_login.html')) {
  link2.classList.add('active');
} else if (url.includes('la_register.html')) {
  link3.classList.add('active');
}
