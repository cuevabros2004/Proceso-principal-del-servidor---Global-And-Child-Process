import { fork } from 'child_process'
//import {numerosRandom} from '../calculo.js'
 
 async function controladorRandom(req, res){

    const calculo = fork('calculo.js')
 
    calculo.on('message', msg => {
      console.log("entro")
      if (msg === 'listo') { 
 
        calculo.send(req.query.cant ?? 100000000)
      } else {
        console.log(msg)
          //res.end({msg})
          const numerosRandomLista = msg
          res.json(numerosRandomLista);
      }
  }
  )

   // const numerosRandomLista = await numerosRandom(req.query.cant);
    //res.json(numerosRandomLista);
  }

 

  export  {controladorRandom} 