document.getElementById('load').addEventListener('click', async function(){
    data = await myAPIs.readFile()
    if (data == undefined){
        return
    }
    data = Array.from(JSON.parse(data))
    document.getElementById('main').innerHTML=""
    for(i = 0; i < data.length; i++) {
        document.getElementById('addCourse').click()
    }
    data.forEach((obj,index) => {
        assigns = obj['assigns']
        delete obj['assigns']
        for(i = 0; i < assigns; i++){
            document.getElementById('add'+(index+1)).click()
        }
        Object.keys(obj).forEach(el=>{
            document.getElementById(el).value=obj[el]
        })
    })
    Array.from(document.getElementsByClassName('applyButton')).forEach(btn=>{
        btn.click()
    })
    Array.from(document.getElementsByClassName('calcButton')).forEach(btn=>{
        btn.click()
    })
})