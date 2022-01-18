
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


insertpromotion=()=>{
    const promotiondata = {
        promotion: document.querySelector('.promotion').value,
        id_chef_rayon: document.querySelector('.chefrayon').value,
        date_promotion: document.querySelector('.promotion').value,
        
    }
    axios 
    .post('http://localhost:8082/promotion',promotiondata)
    .then(window.location.reload())
    .catch(err=>console.log(err))

    
}