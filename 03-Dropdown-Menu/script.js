const dropdowns = document.querySelectorAll('.dropdown');

function linkDropdownToggle(toggle, target) {
  toggle.addEventListener('click', () => {
    console.log(target);
    target.classList.toggle('show');
  })
}

dropdowns.forEach((dropdown) => {
  const target = dropdown.querySelector('.dropdown__list');
  linkDropdownToggle(dropdown, target);
})