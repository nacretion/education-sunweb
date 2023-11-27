const menuModal = document.getElementsByClassName('menu')[0] || undefined
const closeButton = document.getElementsByClassName('menu__close')[0] || undefined
const menuButton = document.getElementsByClassName('header__menu')[0] || undefined
const inputName = document.getElementById('name')
const inputPhone = document.getElementById('phone')
const inputComment = document.getElementById('comment')

if (menuModal && window.innerWidth < 1024) {
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

const handleInputName = (value, maxLength) => {
    const text = value.replace(/[^A-Za-zА-Яа-я\s]/g, '').replace(/\s{2,}/g, ' ')
    if (text.length > maxLength) {
        return value.slice(0, -1)
    }
    return text
}

const formatPhoneNumber = (inputValue) => {
    const phoneNumber = inputValue.replace(/\D/g, '')

    const getSub = (startIndex, endIndex) => endIndex ?
        phoneNumber.slice(startIndex, endIndex)
        : phoneNumber.slice(startIndex)

    if (phoneNumber.length < 1) {
        return '+7('
    } else if (phoneNumber.length <= 4) {
        return `+7(${getSub(1)}`
    } else if (phoneNumber.length <= 7) {
        return `+7(${getSub(1, 4)})${getSub(4)}`
    } else if (phoneNumber.length <= 9) {
        return `+7(${getSub(1, 4)})${getSub(4, 7)}-${getSub(7)}`
    } else {
        return `+7(${getSub(1, 4)})${getSub(4, 7)}-${getSub(7, 9)}-${getSub(9, 11)}`
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
        menuModal.style.display = 'none'
    } else {
        menuModal.style.display = 'flex'
    }
})

document.addEventListener('input', ({target}) => {
    switch (target) {
        case inputName:
            inputName.value = handleInputName(target.value, 25)
            return
        case inputComment:
            if (target.value.length < 255) {
                return
            }
            inputComment.value = target.value.slice(0, 255)
            return
        case inputPhone:
            inputPhone.value = formatPhoneNumber(target.value)
            return
    }
})