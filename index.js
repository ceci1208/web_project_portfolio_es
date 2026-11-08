// Keep placeholder links on the current page until real destinations are added.
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});

const copyrightYear = document.querySelector('#copyright-year');
if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}