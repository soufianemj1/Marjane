// get promotions
 axios
    .get('http://localhost:8082/promotion')
    .then(res => res.data.forEach(element => {
        
        document.getElementById('Promotiondata').innerHTML += `
        <tr>
          
         <td>${element.promotion}</td>
         <td>${element.id_chef_rayon}</td>
         <td>${element.id_produit}</td>
         <td>${element.date_promotion}</td>
         <td>${element.status}</td>
         
         
         </tr>
        `
    }))