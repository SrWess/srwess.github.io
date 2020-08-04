const menuSlide = () => {
  const menuMobile = document.querySelector('.menu-mobile')
  const menu = document.querySelector('.menu-links')
  const menuLinks = document.querySelectorAll('.menu-links li')

  menuMobile.addEventListener('click', () => {
    menu.classList.toggle('menu-ativo');

    //Animação dos links li
    menuLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `menuLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
      }
    })

    //Animação do menu mobile
    menuMobile.classList.toggle('toggle')
  })
}

menuSlide();