const menuModal = document.getElementsByClassName('menu__modal')[0] || undefined
const closeButton = document.getElementsByClassName('modal__close')[0] || undefined
const menuButton = document.getElementsByClassName('header__menu')[0] || undefined

document.addEventListener("click", ({target}) => {
    switch (target) {
        case closeButton:
            if (menuModal) {
                menuModal.style.display = 'none'
            }
            return
        case menuButton:
            if (menuModal) {
                menuModal.style.display = 'flex'
            }
            return
    }
})