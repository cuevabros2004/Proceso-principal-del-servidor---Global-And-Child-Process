import {numerosRandom} from '../calculo.js'
 
 async function controladorRandom(req, res){
    const numerosRandomLista = await numerosRandom(req.query.cant);
    res.json(numerosRandomLista);
  }

 

  export  {controladorRandom} 