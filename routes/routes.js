module.exports = (app) => {
  const promotionController = require("../api/Controllers/PromotionController");
  const CAdminController = require("../api/Controllers/CAdminController");
  const RAdminController = require("../api/Controllers/RAdminController");
  const Admin = require("../api/Controllers/AdminAuthController");
  const {adminmiddleware} = require("../middleware/middleware");
  const {CaAdminmiddleware} = require("../middleware/middleware")
  const {Rayonmiddleware} = require("../middleware/middleware")


  // admin 
  app.post("/login", Admin.login);

  // PROMOTION
  app.get("/promotion", promotionController.getAllPromotions);
  app.post("/promotion", promotionController.createPromotion);
  app.get("/promotion/:id", promotionController.getPromotionById);
  app.put("/updatePromo/:id", promotionController.confirmPromotion);
  app.delete("/deletePromo/:id", promotionController.deletePromotion);

  // centerAdmin route
  app.get("/adminCenter", CAdminController.getAllAdmins);
  app.post("/AdminCenter", CAdminController.createAdminCenter);
  app.get("/adminCenter/:id", CAdminController.getCenterAdminById);
  app.put("/UpdateAdminCenter/:id", CAdminController.updateCenterAdmin);
  app.delete("/DeleteAdminCenter/:id", CAdminController.deleteCenterAdmin);
  app.post("/validation/CA", CAdminController.EmailLogin);
  app.post("/login/CA", CAdminController.login);

  // RayonAdmin routes
  app.get("/adminRayon", RAdminController.getAllAdmins);
  app.post("/AdminRayon", RAdminController.createAdminRayon);
  app.get("/adminRayon/:id", RAdminController.getRayonAdminById);
  app.put("/UpdateAdminRayon/:id", RAdminController.updateRayonAdmin);
  app.delete("/DeleteAdminRayon/:id", RAdminController.deleteRayonAdmin);
  app.post("/validation/RA", RAdminController.EmailLogin);
  app.post("/login/RA", RAdminController.login);

  // admin general view
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/loginform",(req,res)=>{
    res.render("login");
  });

  app.get("/dashboard",adminmiddleware,(req,res)=>{
    res.render("dashboard");
  });

  app.get("/admincenterdashboard",adminmiddleware,(req,res)=>{
    res.render("admincentre");
  });

  app.get("/promotiondash",adminmiddleware,(req,res)=>{
    res.render("promotions")
  })

  // admin center view
  app.get("/aclogin",(req,res)=>{
    res.render("aclogin")
  })
  app.get("/chefrayonadmin",CaAdminmiddleware,(req,res)=>{
    res.render("admin_center/chefrayon")
  })
  
  app.get("/adminpromotion",CaAdminmiddleware,(req,res)=>{
    res.render("admin_center/promotionadmin")
  })


  //chef rayon view

  app.get("/promotionrayon",Rayonmiddleware,(req,res)=>{
    res.render("chef_rayon/promotion_chef_rayon")
  })
  app.get("/rayonlogin",(req,res)=>{
    res.render("rayonlogin")
  })



};
