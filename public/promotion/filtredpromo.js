// get promotions
const time = new Date();
let hour = time.getHours();
console.log(hour);
if(8 <= hour <12){

    axios
.get('http://localhost:8082/promotion')
.then(res => res.data.forEach(element => {
    // hide validated ones
    if(element.status != "Validated"){
    document.getElementById('Promotiondata').innerHTML += `
    <tr>
      
     <td>${element.promotion} <input id="promotion" name="promotion" type="hidden" value="${element.promotion}"></td>
     <td>${element.id_chef_rayon} <input id="chefrayon" name="chefrayon" type="hidden" value="${element.id_chef_rayon}"></td>
     <td>${element.date_promotion} <input id="date" name="date" type="hidden" value="${element.date_promotion}">
     <input id="promoId" name="promoId" type="hidden" value="${element.id}"></td>
     <td>${element.status}</td>  
     <td><button onclick="validatepromo()" type="button" class="btn btn-light">Accept</button></td>
     
     
     
     </tr>
    `
    }
}))
}


validatepromo =()=>{
    const id = document.getElementById('promoId').value
    const promodata = {
       promotion: document.getElementById('promotion').value,
       id_chef_rayon: document.getElementById('chefrayon').value,
       date_promotion: document.getElementById('date').value
        
    }
    console.log(id);
    console.log(promodata);
    axios
    .put(`http://localhost:8082/updatePromo/${id}`,promodata)
    .then(location.reload())
    .catch(error=>console.log(console.error()))
}
