
// get all chef rayon
affichageRAyon=()=>{
    axios
.get('http://localhost:8082/adminRayon')
.then(res=>res.data.forEach(rayon => {
document.getElementById('chefrayondata').innerHTML +=  `
<tr>
    <td scope="col">${rayon.firstName}</td>
    <td scope="col">${rayon.lastName}</td>
    <td scope="col">${rayon.email}</td>
    <td scope="col">${rayon.password}</td>
    <td scope="col">${rayon.rayon}</td>
    <td><button  type="button" id="${rayon.id}" class="deletebtn btn btn-danger">Supprimer</button>
         <button type="button"  id="${rayon.id}" class="editbtn btn btn-primary">modifier</button></td>
                                
 </tr>
`  
}))
}


//insert chef rayon
insertrayon=()=>{

    axios.post('http://localhost:8082/AdminRayon',{
        firstName: document.querySelector('.firstName').value,
        lastName: document.querySelector('.lastName').value,
        email: document.querySelector('.email').value,
        password: document.querySelector('.password').value,
        rayon: document.querySelector('.rayon').value,
    })
     
        
        .then(location.reload())
    .catch(err=>console.log(err))
}



//delete chef rayon
const rayondata = document.getElementById('chefrayondata')
rayondata.addEventListener('click',(e)=>{
    if (e.target.classList.contains('deletebtn')){
        if(confirm('are you sure ?')){
            const rayonId = e.target.id
        axios
        .delete(`http://localhost:8082/DeleteAdminRayon/${rayonId}`)
        .then(location.reload() )
        }
         
    }
})

//edit
const editRa = document.getElementById('chefrayondata');
editRa.addEventListener('click', (e) => {
    if(e.target.classList.contains('editbtn')){
        const rayonId = e.target.id;
        axios
        .get(`http://localhost:8082/adminRayon/${rayonId}`)
        .then(res => {
          const Raform = document.querySelector('.rayon-form');
          Raform.firstName.value = res.data.firstName
          Raform.lastName.value = res.data.lastName
          Raform.email.value = res.data.email
          Raform.password.value = res.data.password
          Raform.rayon.value = res.data.rayon
          Raform.id.value = res.data.id
          

        })
        .catch(err=>console.log(err))
    }
        

})
//update 
updateRayon=()=>{
    const id = document.getElementById('id').value
    // console.log(document.getElementById('firstName').value);
    axios
    .put(`http://localhost:8082/UpdateAdminRayon/${id}`,{
        firstName: document.querySelector('.firstName').value,
        lastName: document.querySelector('.lastName').value,
        email: document.querySelector('.email').value,
        password: document.querySelector('.password').value,
        rayon: document.querySelector('.rayon').value
    }).catch(err=>console.log(err))
    .then(location.reload())
}

