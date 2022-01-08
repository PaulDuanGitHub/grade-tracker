function removeColumn(){
    var buttons = Array.from(document.getElementsByClassName('removeButton'))

    buttons.forEach(el => {
        if (el.getAttribute('has-listener')==null){
            el.setAttribute('has-listener', true)
            var course = el.parentNode.parentNode.parentNode.parentNode.parentNode
            var tbody = course.getElementsByTagName('tbody')[0]
            el.addEventListener('click', function(){
                trs = tbody.getElementsByTagName('tr')
                if (trs.length == 3){
                    //alert('好歹留一个')
                }else{
                    tbody.removeChild(trs[trs.length-1])
                    tbody.removeChild(trs[trs.length-1])
                }
            })
        }
    })
}
removeColumn()