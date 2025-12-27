document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu__btn');
  const menuList = document.querySelector('.menu__list');

  if (!menuBtn || !menuList) return;

  menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
  });
});
