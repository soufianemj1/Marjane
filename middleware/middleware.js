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
exports.CaAdminmiddleware=(req,res,next)=>{
    
    const token =req.cookies.token;
    if(token){
        jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken)=>{
            // console.log(decodedToken.role);
            if(decodedToken.role == 'Cadmin'){
                next()
            } 
        })
    }else{    
        res.redirect('aclogin')
    }

    }

    exports.Rayonmiddleware=(req,res,next)=>{
    
        const token =req.cookies.token;
        if(token){
            jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken)=>{
                // console.log(decodedToken.role);
                if(decodedToken.role == 'rayon'){
                    next()
                } 
            })
        }else{
            
            res.redirect('rayonlogin')
            
        }
    
        }
    
    
   


  