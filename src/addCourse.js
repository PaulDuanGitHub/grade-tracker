// This prototype will keep a orgin Node of 'course' which has no assignment been added to
// when the program start
prototype = document.getElementById("course1").cloneNode(true)

document.getElementById("addCourse").addEventListener('click',function(){
    var courseNums = document.getElementsByClassName('course').length+1
    mainDiv = document.getElementById("main")
    newCourse = prototype.cloneNode(true)
    tbody = newCourse.getElementsByTagName('tbody')[0]
    // I want a new course without any assignment been added to 
    tbody.removeChild(tbody.lastElementChild)
    tbody.removeChild(tbody.lastElementChild)
    // Change attributes
    newCourse.setAttribute('id','course'+courseNums)
    newCourse.getElementsByTagName('tbody')[0].setAttribute('id','data'+courseNums)
    newCourse.getElementsByTagName('button')[0].setAttribute('id','edit'+courseNums)
    newCourse.getElementsByTagName('button')[1].setAttribute('id','apply'+courseNums)
    newCourse.getElementsByTagName('button')[2].setAttribute('id','add'+courseNums)
    newCourse.getElementsByTagName('button')[3].setAttribute('id','remove'+courseNums)
    newCourse.getElementsByTagName('button')[4].setAttribute('id','calc'+courseNums)

    newCourse.getElementsByClassName('res')[0].setAttribute('id','res'+courseNums)
    newCourse.getElementsByTagName('input')[0].setAttribute('id','coursename'+courseNums)
    newCourse.getElementsByTagName('input')[1].setAttribute('id','b_mark'+courseNums)
    
    // All 'has-listener' attributes have to be removed and reregistered
    // because cloneNode() does not clone event listener
    newCourse.getElementsByTagName('button')[0].removeAttribute('has-listener')
    newCourse.getElementsByTagName('button')[1].removeAttribute('has-listener')
    newCourse.getElementsByTagName('button')[2].removeAttribute('has-listener')
    newCourse.getElementsByTagName('button')[3].removeAttribute('has-listener')
    newCourse.getElementsByTagName('button')[4].removeAttribute('has-listener')
    newCourse.getElementsByTagName('input')[0].removeAttribute('has-listener')
    newCourse.getElementsByTagName('input')[1].removeAttribute('has-listener')
    mainDiv.appendChild(newCourse)
    // Add listeners for inputs and buttons
    editColumn()
    applyColumn()
    addColumn()
    removeColumn()
    lockName()
    calc()
})