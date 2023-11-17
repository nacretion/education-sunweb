const httpRequest = new XMLHttpRequest();
const baseURL = "http://localhost/api/"

const input = document.getElementById('length')
const fibContainer = document.getElementById('fibContainer')


const handleInput = (e) => {
    event.preventDefault()
    fetchFibonacci(e.target.value)
}

const fetchFibonacci = (length) => {
    const params = '?length=' + length

    httpRequest.open("GET", baseURL + params, true);
    httpRequest.send();
}

const showData = (e) => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        const fibonacciArray = JSON.parse(e.target.response)
        console.log(fibonacciArray)
        fibContainer.innerHTML = ''

        fibonacciArray.forEach((entry, index) => {

            let elementClass = entry % 2 === 0 ? 'blue' : 'red';

            fibContainer.innerHTML += `<li class="${elementClass}">${entry}</li>`
        })
    }
}

const handleLiHover = (e) => {
    const {tagName, innerHTML} = e.target

    if (tagName === "LI") {
        console.log(innerHTML)
    }
}


httpRequest.onreadystatechange = showData;
input.addEventListener('input', handleInput)
document.addEventListener('mouseover', handleLiHover)