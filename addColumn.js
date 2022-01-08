function addColumn() {
    // Get all add buttons and register event listeners for them
    var buttons = Array.from(document.getElementsByClassName('addButton'))
    
    buttons.forEach(el => {
        // Add 'has-listener' attribute to avoid registering repeatly
        if (el.getAttribute('has-listener') == null) {
            var course = el.parentNode.parentNode.parentNode.parentNode.parentNode
            var courseNum = parseInt(course.getAttribute('id').substring(6))
            var tbody = course.getElementsByTagName('tbody')[0]
            //console.log(tbody)
            el.setAttribute('has-listener', true)
            el.addEventListener('click', function () {
                var len = course.getElementsByClassName('title').length
                var newAss = document.createElement("tr")
                newAss.setAttribute('class', 'title')

                var newAssInput1 = document.createElement("td")
                var input1 = document.createElement("input")
                input1.setAttribute('type', 'text')
                input1.setAttribute('class', 'mark')
                input1.setAttribute('id', 'mark' + courseNum + (len + 1))
                input1.setAttribute('size', '1')
                newAssInput1.appendChild(input1)
                newAssInput1.appendChild(document.createTextNode("/"))

                var input2 = document.createElement("input")
                input2.setAttribute('type', 'text')
                input2.setAttribute('class', 'fullmark')
                input2.setAttribute('id', 'fullmark' + courseNum + (len + 1))
                input2.setAttribute('size', '1')

                newAssInput1.appendChild(input2)
                var title = document.createElement('td')
                titleInput = document.createElement("input")
                titleInput.setAttribute("class", "name")
                titleInput.setAttribute("id", "name" + courseNum + (len + 1))
                titleInput.setAttribute("size", '1')

                title.appendChild(titleInput)
                title.appendChild(document.createTextNode(" Mark"))
                newAss.appendChild(title)
                newAss.appendChild(newAssInput1)

                var newWgt = document.createElement("tr")

                var newAssInput2 = document.createElement("td")
                var input3 = document.createElement("input")
                input3.setAttribute('type', 'text')
                input3.setAttribute('class', 'weight')
                input3.setAttribute('id', 'weight' + courseNum + (len + 1))
                input3.setAttribute('size', '2')

                newAssInput2.appendChild(input3)
                newAssInput2.appendChild(document.createTextNode("%"))

                title = document.createElement('td')
                titleInput = document.createElement("span")
                titleInput.setAttribute('class', 'w_name')
                titleInput.setAttribute('id', 'w_name' + courseNum + (len + 1))
                title.appendChild(titleInput)
                title.appendChild(document.createTextNode(" Wgt."))
                newWgt.appendChild(title)
                newWgt.appendChild(newAssInput2)

                tbody.appendChild(newAss)
                tbody.appendChild(newWgt)
                lockName()
                document.getElementById('calc'+courseNum).setAttribute('disabled','')
                document.getElementById('edit'+courseNum).click()
            })
        }
    })
}

addColumn()