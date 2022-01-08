function calc() {
    var buttons = Array.from(document.getElementsByClassName('calcButton'))

    buttons.forEach(el => {
        if (el.getAttribute('has-listener') == null) {
            el.setAttribute('has-listener', true)
            el.addEventListener('click', function () {
                var course = document.getElementById("course" + el.getAttribute('id').substring(4))
                var result = 100
                var marks = course.getElementsByClassName("mark")
                var fullmarks = course.getElementsByClassName("fullmark")
                var weights = course.getElementsByClassName("weight")

                for (let i = 0; i < marks.length; i++) {
                    result -= ((parseFloat(fullmarks[i].innerText) - parseFloat(marks[i].innerText)) / (parseFloat(fullmarks[i].innerText))) * parseFloat(weights[i].innerText)
                }
                result += parseFloat(document.getElementById('b_mark'+el.getAttribute('id').substring(4)).innerText)
                document.getElementById("res"+el.getAttribute('id').substring(4)).innerText = result + "%"
            })
        }
    })
}
calc()