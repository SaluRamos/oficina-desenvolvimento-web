function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

async function Animation(element_id, do_backline) {
    let elem = document.getElementById(element_id)
    let elem_data = elem.innerHTML.split("<br>")
    elem.innerHTML = ""
    for(let paragraph = 0; paragraph < elem_data.length; paragraph++){
        for(let i = 0; i < elem_data[paragraph].length; i++){
            elem.innerHTML = elem.innerHTML + elem_data[paragraph].charAt(i)
            await sleep(Math.random()*30 + 10)
        }
        if(do_backline == true){
            elem.innerHTML += '<br>'
        }
    }
}

Animation("name", false)
Animation("age", false)
Animation("email", false)
Animation("cellphone", false)
Animation("resume", true)
Animation("experience", true)
Animation("education", true)
Animation("skills", true)
Animation("linkedin", true)