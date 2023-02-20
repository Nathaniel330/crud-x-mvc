const BTN =  Array.from(document.querySelectorAll("button"))
const deleteBTN = BTN.filter(el => el.textContent == "Delete")
const updateBTN = BTN.filter(el => el.textContent == "Edit")

deleteBTN.forEach(btn => btn.addEventListener("click", async (e)=>{
    //console.log(e.target.parentNode.dataset.id)
    const objectID = e.target.parentNode.dataset.id
    try{
        const response = await fetch('/level1/deleteObject', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'objectID': objectID
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}))

updateBTN.forEach(btn => btn.addEventListener("click", async (e)=>{
    const tr = e.target.parentNode.parentNode // whole table row
    const tdObjective = tr.childNodes[1]
    const tdDifficulty = tr.childNodes[3]
    const tdButtons = tr.childNodes[5]
    
    const newObjective = document.createElement("input") // create a new element(1)
    
    newObjective.setAttribute("type", "text")
    newObjective.setAttribute("value", tdObjective.textContent)
    newObjective.setAttribute("name", "newKey")
    
    tdObjective.innerHTML = ""
    tdObjective.appendChild(newObjective) // append new element(1)


    
    const newDifficulty = document.createElement("input") // create a new element(2)
    
    newDifficulty.setAttribute("type", "text")
    newDifficulty.setAttribute("value", tdDifficulty.textContent)
    newDifficulty.setAttribute("name", "newValue")
    
    tdDifficulty.innerHTML = ""
    tdDifficulty.appendChild(newDifficulty) // append new element(2)



    const newButtonUpdate = document.createElement("button") // create a new element(3)
    const newButtonCancel = document.createElement("button") // create a new element(4)
    newButtonUpdate.setAttribute("class", "update")
    newButtonCancel.setAttribute("class", "cancel")
    newButtonUpdate.innerHTML = "Update"
    newButtonCancel.innerHTML = "Cancel"
    tdButtons.innerHTML = ""
    tdButtons.append(newButtonUpdate) // append new element(3)
    tdButtons.append(newButtonCancel) // append new element(4)


    const cancelBTN = Array.from(document.querySelectorAll(".cancel"))
    cancelBTN.forEach(btn => btn.onclick = function() {window.location.reload()})

    const updateBTN = Array.from(document.querySelectorAll(".update"))
    updateBTN.forEach(btn => btn.onclick = async (e) => {
        //communicate with server
        const objectID = e.target.parentNode.dataset.id
        const newKey = e.target.parentNode.parentNode.childNodes[1].children[0].value
        const newValue = e.target.parentNode.parentNode.childNodes[3].children[0].value
        try{
            const response = await fetch('/level1/updateObject', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  'objectID': objectID,
                  'newKey': newKey,
                  'newValue': newValue
                })
              })
            const data = await response.json()
            console.log(data)
            location.reload()
    
        }catch(err){
            console.log(err)
        }
    })
   
}))