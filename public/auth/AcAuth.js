


// center admin general
login=()=>{
    const admindata = {
        email: document.querySelector('.username').value,
        password: document.querySelector('.password').value
     
    }
    axios
    .post('http://localhost:8082/login/CA', admindata)
    .then(res=>{document.cookie = "token =" + (res.data)
    window.location.href = "chefrayonadmin"})
    .catch(err=>console.log(err))

    

}
logout =()=>{
   
    const cookies = document.cookie.split(";");

    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    window.location.reload()
}