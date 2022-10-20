function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

async function Animation(element_id) {
    let resume = document.getElementById(element_id)
    let resume_data = resume.innerHTML
    resume.innerHTML = ""
    for(let i = 0; i < resume_data.length; i++){
        resume.innerHTML = resume.innerHTML + resume_data.charAt(i)
        await sleep(Math.random()*30 + 10)
    }
}

Animation("name")
Animation("age")
Animation("email")
Animation("cellphone")
Animation("resume")
Animation("experience")
Animation("education")
Animation("skills")
Animation("linkedin")