function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}

counter();
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.link');

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      link.classList.add('link');
    });

    link.addEventListener('mouseleave', () => {
      link.classList.remove('link');
    });
  });
});
