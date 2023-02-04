import {calculo} from '../calculo.js'

 async function controladorRandomTotal(req, res){
    
    const calculoRandom = await calculo();
    
    res.json(calculoRandom);
  }

 
  export  {controladorRandomTotal} 