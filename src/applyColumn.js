function applyColumn() {
    buttons = Array.from(document.getElementsByClassName('applyButton'))

    buttons.forEach(button => {
        if (button.getAttribute('has-listener') == null) {
            var courseNums = button.getAttribute('id').substring(5)
            button.setAttribute('has-listener', true)
            button.addEventListener('click', function () {
                var inputs = Array.from(document.getElementById('course' + courseNums).getElementsByTagName('input'))
                inputs.forEach(el => {
                    if (el.getAttribute('class') == 'name') {
                        var w_label = document.getElementById("w_" + el.getAttribute('id'))
                        newNode = document.createElement('span')
                        newNode.setAttribute('id', el.getAttribute('id'))
                        newNode.setAttribute('class', el.getAttribute('class'))
                        newNode.setAttribute('size', el.getAttribute('size'))
                        newNode.innerHTML = "<font color='darkred'>" + el.value + "</font>"
                        el.parentNode.replaceChild(newNode, el)
                        w_label.innerHTML = "<font color='darkred'>" + el.value + "</font>"
                    }else{
                        newNode = document.createElement('span')
                        newNode.setAttribute('id', el.getAttribute('id'))
                        newNode.setAttribute('class', el.getAttribute('class'))
                        newNode.setAttribute('size', el.getAttribute('size'))
                        newNode.innerHTML = "<font color='darkred'>" + el.value + "</font>"
                        el.parentNode.replaceChild(newNode, el)
                    }
                    button.setAttribute('disabled','')
                    document.getElementById('calc'+courseNums).removeAttribute('disabled')
                    document.getElementById('edit'+courseNums).removeAttribute('disabled')
                })
            })
        }
    })
}
applyColumn()