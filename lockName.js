function lockName() {
  var inputs = Array.from(document.getElementsByTagName("input"))
  inputs.forEach(element => {
    if (element.getAttribute('has-listener') == null) {
      element.setAttribute('has-listener', true)
      element.addEventListener('keydown', function (event) {
        var id = element.getAttribute('id')
        var className = element.getAttribute('class')
        lockNameAux(event, id, className)
      })
    }
  })
}

function lockNameAux(event, id, className) {
  if (event.keyCode == 13) {
    enterTab(event)
    if (className == 'name') {
      var n_label = event.target
      var w_label = document.getElementById("w_" + id)
      var newNode = document.createElement("span")
      newNode.setAttribute('id', id)
      newNode.setAttribute('class', className)
      newNode.setAttribute('size',n_label.getAttribute('size'))
      newNode.innerHTML = "<font color='darkred'>" + n_label.value + "</font>"
      n_label.parentNode.replaceChild(newNode, n_label)
      w_label.innerHTML = "<font color='darkred'>" + n_label.value + "</font>"
      
    } else {
      var newNode = document.createElement("span")
      var oldNode = document.getElementById(id)
      newNode.setAttribute('id', id)
      newNode.setAttribute('class', className)
      newNode.setAttribute('size',oldNode.getAttribute('size'))
      newNode.innerHTML = "<font color='darkred'>" + oldNode.value + "</font>"
      oldNode.parentNode.replaceChild(newNode, oldNode)
    }
  }
}

function enterTab(event) {
  var courseNum = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('id')
  var inputs = document.getElementById(courseNum).getElementsByTagName("input")
  var inputsArr = Array.from(inputs)
  var len = inputs.length
  var last = inputsArr[inputsArr.length-1]
  index = inputsArr.indexOf(event.target)
  if (len!=1) {
    if(event.target != last){
      inputs[index + 1].focus()
      document.getElementById(courseNum).getElementsByTagName('button')[4].setAttribute("disabled",'')
    }
  } else if(len==1){
    document.getElementById(courseNum).getElementsByTagName('button')[4].removeAttribute("disabled")
    document.getElementById(courseNum).getElementsByTagName('button')[0].removeAttribute("disabled")
  }
}

lockName()