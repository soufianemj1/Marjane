const jwt = require('jsonwebtoken')

exports.adminmiddleware=(req,res,next)=>{
    const token =req.cookies.token;
    if(token){
        jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken)=>{
            // console.log(decodedToken.role);
            if(decodedToken.role == 'admin'){
                next()
            } 
        })
    }else{
        res.redirect('loginform')

    }

}

  