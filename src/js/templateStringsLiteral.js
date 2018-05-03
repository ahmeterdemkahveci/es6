var list = document.querySelector('.user_list')

function addUser(name,surname){
    let template = `
          <div class="user">
            <div>${name}</div>
            <div>${surname}</div>
        </div>
    `
    list.insertAdjacentHTML("beforeend",template)
}

addUser('Erdem','Kahveci')
addUser('Tuğçe','Kahveci')