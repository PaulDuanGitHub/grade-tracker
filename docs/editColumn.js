function editColumn() {
    buttons = Array.from(document.getElementsByClassName('editButton'))

    buttons.forEach(button => {
        if (button.getAttribute('has-listener') == null) {
            var courseNums = button.getAttribute('id').substring(4)
            button.setAttribute('has-listener', true)
            button.addEventListener('click', function(){
                var spans = Array.from(document.getElementById('course' + courseNums).getElementsByTagName('span'))
                spans.forEach(el => {
                    if (el.getAttribute('class') != "w_name"){
                        newNode = document.createElement('input')
                        newNode.setAttribute('id', el.getAttribute('id'))
                        newNode.setAttribute('class', el.getAttribute('class'))
                        newNode.setAttribute('size', el.getAttribute('size'))
                        newNode.value = el.innerText
                        el.parentNode.replaceChild(newNode, el)
                    }
                })
                lockName()
                document.getElementById('calc'+courseNums).setAttribute('disabled','')
                document.getElementById('apply'+courseNums).removeAttribute('disabled')
                button.setAttribute('disabled','')
            })
        }
    });
}

editColumn()