const app = new Vue({
    el: "#app",
    data: {
        heading: '',
        firstNumber: 0,
        secondNumber: 0,
        isNok: 0,
        query: [],
        nok: null,
        nod: null,
        selectOptions: [
            {title: "НОД", value: 0},
            {title: "НОК", value: 1},
        ]
    },
    watch: {
        isNok: function () {
            this.calculate()
        },
        firstNumber: function () {
            this.calculate()
        },
        secondNumber: function () {
            this.calculate()
        },
    },
    methods: {
        calculate: function () {
            const {firstNumber, secondNumber} = this
            if (!firstNumber || !secondNumber) {
                return
            }
            if (this.isNok) {
                this.nod = calculateNod(firstNumber, secondNumber)
                this.nok = calculateNok(firstNumber, secondNumber)
                return
            }

            this.nod = calculateNod(firstNumber, secondNumber)
        },
        getCommonDivisors: function () {
            const firstNumberDivisors = this.getDivisors(this.firstNumber)
            const secondNumberDivisors = this.getDivisors(this.secondNumber)
            return firstNumberDivisors.filter(x => secondNumberDivisors.indexOf(x) !== -1)
        },
        getDivisors: function (number, d = 1) {
            n = parseInt(number)
            if (n < 1) {
                return [];
            }
            if (n === 1) {
                return [1];
            }
            if (n === 2) {
                return [1,2];
            }
            if (n / d < 2) {
                return [n];
            }
            if (n % d === 0) {
                return [d, ...this.getDivisors(n, d + 1)];
            }
            return this.getDivisors(n, d + 1);
        }

    },
    computed: {
        divisorsFirst: function () {
            return this.getDivisors(this.firstNumber)
        },
        divisorsSecond: function () {
            return this.getDivisors(this.secondNumber)
        }
    }
})

const calculateNok = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber / calculateNod(firstNumber, secondNumber);
}
const calculateNod = (firstNumber, secondNumber) => {
    return secondNumber > 0 ?
        calculateNod(secondNumber, firstNumber % secondNumber)
        : Math.abs(firstNumber)
}