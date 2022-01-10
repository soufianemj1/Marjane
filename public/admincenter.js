//getting alladmincenter
axios
    .get('http://localhost:8082/adminCenter')
    .then(res => res.data.forEach(element => {
        // console.log(element);
        document.getElementById('ACdata').innerHTML += `
        <tr>
          
         <td>${element.firstName}</td>
         <td>${element.lastName}</td>
         <td>${element.email}</td>
         <td>${element.password} <input id="ACid" type="hidden" value="${element.id}"></td>
         
         
         <td><button type="button" id="${element.id}" class="deletebtn btn btn-danger">Supprimer</button>
         <button type="button"  id="${element.id}" class="editbtn btn btn-primary">modifier</button></td>
         </tr>
        `
    }))

//insert admincenter

const acform = document.querySelector('.ac-form');
acform.addEventListener('submit', (e) => {

    const Cadmin = {
        firstName: acform.firstName.value,
        lastName: acform.lastName.value,
        email: acform.email.value,
        password: acform.password.value
        
    }
    axios.post('http://localhost:8082/AdminCenter', Cadmin)



})


//delete admincenter

const deleteAc = document.getElementById('ACdata');
deleteAc.addEventListener('click', (e) => {
    if (e.target.classList.contains('deletebtn')) {
        const Caid = e.target.id;
        axios
        .delete(`http://localhost:8082/DeleteAdminCenter/${Caid}`)
        .then(window.location.reload())
        .catch(err=>console.log(err))


    }

})

//edit admincenter
const editAc = document.getElementById('ACdata');
editAc.addEventListener('click', (e) => {
    if(e.target.classList.contains('editbtn')){
        const Caid2 = e.target.id;
        axios
        .get(`http://localhost:8082/adminCenter/${Caid2}`)
        .then(res => {
          const acform = document.querySelector('.ac-form');
          acform.firstName.value = res.data.firstName
          acform.lastName.value = res.data.lastName
          acform.email.value = res.data.email
          acform.password.value = res.data.password
          acform.id.value = res.data.id

        })
        .catch(err=>console.log(err))
    }
        

})

function reloadpage() {
    window.location.reload()
}

function update(){
    let id = document.getElementById('id').value;
    axios
    .put(`http://localhost:8082/UpdateAdminCenter/${id}`,{
        firstName: document.querySelector('.firstName').value,
        lastName: document.querySelector('.lastName').value,
        email: document.querySelector('.email').value,
        password: document.querySelector('.password').value
    })
    .then(res => {
        alert('well updated')
        reloadpage()
    })
    .catch(err=>console.log(err))
}

