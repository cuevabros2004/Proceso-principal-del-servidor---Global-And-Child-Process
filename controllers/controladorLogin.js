

function controladorWebLogin(req, res){
    
    if (req.session?.user){
        return res.redirect('/formulario')
    }else{
        res.render('login')
    }

}

function controladorIraRegistro(req, res) {
    res.render('registro')
  }

function controladorLogout(req, res){
    res.render('logout', {usuario: req.session.user})
    req.session.destroy();
  }

function controladorLoging(req, res){
    if (req.isAuthenticated){
        
        res.json({ username: req.session.user})
    }
    else{
        return res.redirect("/")
    }
        
}

function controladorLoginp(req, res){
    req.session.user = req.body.username

     if (!req.isAuthenticated){
        return res.redirect('/')
     }        
    else{
        return  res.redirect('/formulario')
    }
        
}

function controladorLoginUsuario(req, res){
    if (req.session.user){
        res.json({usuario: req.session.user})
    } else {
        res.redirect('/')
    }
}

function controladorVolveralogin(req, res){
    setTimeout(() => {
        return res.redirect('/')
    }, 2000);
}

function controladorFaillogin(req, res){
    res.render('faillogin')
}

function controladorFailregister(req, res){
    res.render('failregister')

    
}

function controladorIraLogin(req, res) {
    res.redirect('/')
  }
  

function controladorPostUsuario(req, res){

    req.session.user = req.body.usuario

    if (!req.session?.user){
        return res.redirect('/')
    }else{
        return res.redirect('/formulario')
    }

}





export {controladorWebLogin, 
    controladorLoginUsuario,
    controladorPostUsuario,
    controladorLogout,
    controladorLoging,
    controladorLoginp,
    controladorVolveralogin,
    controladorFaillogin,
    controladorFailregister,
    controladorIraRegistro,
    controladorIraLogin};