const menuModal = document.getElementsByClassName('menu')[0] || undefined
const closeButton = document.getElementsByClassName('menu__close')[0] || undefined
const menuButton = document.getElementsByClassName('header__menu')[0] || undefined

if (menuModal) {
    menuModal.style.display = 'none'
}
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