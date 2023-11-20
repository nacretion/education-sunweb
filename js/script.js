const baseURL = "http://localhost/api/"

const input = document.getElementById('length')
const fibContainer = document.getElementById('fibContainer')
const form = document.getElementById('form')

const fetchFibonacci = (length) => {
    const params = '?length=' + length

    fetch(baseURL + params)
        .then(
            (response) => response.json()
            .then((body) => showData(body))
        )
}

const debounce = (callback, interval = 0) => {
    let prevTimeoutId;

    return (...args) => {
        clearTimeout(prevTimeoutId);
        prevTimeoutId = setTimeout(() => callback(...args), interval);
    }
}

const showData = (fibonacciArray) => {
    if (!fibContainer) {
        return
    }

    fibContainer.innerHTML = ''

    fibonacciArray.forEach((entry) => {
        let elementClass = entry % 2 === 0 ? 'blue' : 'red';

        const li = document.createElement('li')
        li.className = elementClass
        li.innerHTML = entry
        fibContainer.appendChild(li)
    })
}

const Li = () => {}

const handleLiHover = (e) => {
    const {tagName, innerHTML} = e.target

    if (tagName === "LI") {
        console.log(innerHTML)
    }
}

if (input) {
    input.addEventListener('input', debounce(ev => fetchFibonacci(ev.target.value), 500))
}
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
}
document.addEventListener('mouseover', handleLiHover)