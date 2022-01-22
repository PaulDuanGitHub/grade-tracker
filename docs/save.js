document.getElementById('save').addEventListener('click',()=>{
    data = []
    courses = Array.from(document.getElementsByClassName('course'))
    length = courses.length
    applyButtons = Array.from(document.getElementsByClassName('applyButton'))
    applyButtons.forEach(el =>{
        el.click()
    })
    courses.forEach(c=>{
        var courseData = {}
        var assigns = 0
        els = Array.from(c.getElementsByTagName('span'))
        els.forEach(el=>{
            if (el.getAttribute('class') != 'w_name'){
                if (el.getAttribute('class')=='name'){
                    assigns += 1
                }
                courseData[el.getAttribute('id')]=el.innerText
            }
        })
        courseData['assigns'] = assigns
        data.push(courseData)

    })
    data = JSON.stringify(data)
    var filename = "data.json";

    var blob = new Blob([data], {type:'text/plain'});
    
    var link = document.createElement("a");
    link.download = filename;
    link.href = window.URL.createObjectURL(blob);
    link.click()

})