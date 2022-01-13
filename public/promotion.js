// get promotions
 axios
    .get('http://localhost:8082/promotion')
    .then(res => res.data.forEach(element => {
        
        document.getElementById('Promotiondata').innerHTML += `
        <tr>
          
         <td>${element.promotion}</td>
         <td>${element.id_chef_rayon}</td>
         <td>${element.date_promotion}</td>
         <td>${element.status}</td>
         
         
         </tr>
        `
    }))


    insertrayon=()=>{

        axios.post('http://localhost:8082/AdminRayon',{
            promotion: document.querySelector('.promotion').value,
            id_chef_rayon: document.querySelector('.id').value,
            date_promotion: document.querySelector('.email').value,
            status: document.querySelector('.password').value,
            rayon: document.querySelector('.rayon').value,
        })
         
            
            .then(location.reload())
        .catch(err=>console.log(err))
    }