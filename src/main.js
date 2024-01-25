function toggleButton() {
  const button = document.getElementById('toggleBtn');
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    button.innerHTML = 'Less details <ion-icon name="chevron-up-outline"></ion-icon>';
  } else {
    button.innerHTML = 'More details <ion-icon name="chevron-down-outline"></ion-icon>';
  }
}
