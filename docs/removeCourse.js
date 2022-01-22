document.getElementById('removeCourse').addEventListener('click',function(){
    var courseNums = document.getElementsByClassName('course').length
    if (courseNums != 0){
        document.getElementById('main').removeChild(document.getElementById('main').lastElementChild)
    }
})