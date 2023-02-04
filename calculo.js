let numerosRandomList = []
let cantidadNumeros = 0

const calculo = () => {
    
    const resultado = {}
    numerosRandomList.forEach(el => (resultado[el] = resultado[el] + 1 || 1))
  
    return resultado
}

const numerosRandom = (cant) => {

  numerosRandomList = []
   
   cantidadNumeros = cant
    if (cant===0 || cant===undefined){
        cant = 100000000
    }
    
    for ( let i = 0; i < cant; i++) {
        numerosRandomList[i] = Math.trunc(Math.random()*1000)        
      }
 
    return numerosRandomList
}

process.on('message', msg => {
    const sum = calculo()
  //  process.send(sum)
    process.send('listo')
})

//process.send('listo')

export {calculo, numerosRandom}
