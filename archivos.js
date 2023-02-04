import { promises } from "fs";



class Contenedor{
     
   #productos;
    constructor(nombreArchivo) {
        this.#productos = []
        this.nombreArchivo = nombreArchivo
   }
    

    async save(title, price, thumbnail){

       let id

        try {
            const contenido = JSON.parse(await promises.readFile(this.nombreArchivo, 'UTF-8'))

            if(contenido) { 
              this.#productos = contenido
            }
        }

        catch(error){
            console.log("El array está vacio aún")
        } 

        if(this.#productos.length > 0)
           id = this.#productos[this.#productos.length - 1].id + 1
        else
            id = 1


        try {
            this.#productos.push({id, title, price, thumbnail})
            await promises.writeFile(this.nombreArchivo, JSON.stringify(this.#productos))
            return 'Id del objeto guardado: ' + this.#productos[this.#productos.length - 1].id
        }
        catch(error){
            console.log("Se produjo el siguiente error: " + error)
        } 

      }


    async getById(id){
       
        try {
           this.#productos = await this.getAll()

           const objetoBuscado = this.#productos.filter((p)=>p.id===id)

            if(objetoBuscado===undefined){
                return null
            }else{
                return objetoBuscado;
            }
            
        }

        catch(error){
            throw("Hubo un error: " + error)
        } 


     }


     async getAll(){
       
        try {
            const contenido = JSON.parse(await  promises.readFile(this.nombreArchivo, 'UTF-8'))

            if(contenido) { 
              this.#productos = contenido
              return this.#productos
            } else
              return null
            }

        catch(error){
            console.log("Se produjo el siguiente error: " + error)
        } 

    }


    async deleteById(id){

        try {
            const contenido = JSON.parse(await promises.readFile(this.nombreArchivo, 'UTF-8'))

            if(contenido) { 
              this.#productos = contenido

              try {
                await promises.writeFile(this.nombreArchivo, JSON.stringify(this.#productos.filter(p => p.id !== id)))
            }
            catch(error){
                console.log("Se produjo el siguiente error: " + error)
            } 


           } else
              return null
            }

        catch(error){
            console.log("Se produjo el siguiente error: " + error)
        } 


    }

    async deleteAll(){
        //this.#productos.splice(0, this.#productos.length+1)
         this.#productos = []

              try {
                await promises.writeFile(this.nombreArchivo, JSON.stringify(this.#productos))
            }
            catch(error){
                console.log("Se produjo el siguiente error: " + error)
            } 

    }

  }
 
  export default { Contenedor }

/*
  const prodPrueba = new Contenedor(nombreArchivo)

  async function ejecutar(){  
    console.log('Guarda datos (método save)')
    console.log(await prodPrueba.save(1, 'Salón de Fiestas', 400, 'https://quintalamary.com/?page_id=51#bwg1/10'))
    console.log(await prodPrueba.save(2, 'Parrilla', 300, 'https://quintalamary.com/?page_id=51#bwg1/4'))
    console.log(await prodPrueba.save(3, 'Pileta', 400, 'https://quintalamary.com/?page_id=51#bwg1/2'))
    
    console.log('Retorno array con todos sus elementos')
    console.log(await prodPrueba.getAll())

    console.log('Devuelve el elemento con id=2')
    console.log(await prodPrueba.getById(2));

    console.log('Elimino producto del array con id=3')
    await prodPrueba.deleteById(3)
    console.log(await prodPrueba.getAll())

    console.log('Elimino todos los elementos del array')
    await prodPrueba.deleteAll()
    console.log(await prodPrueba.getAll())

  }

  ejecutar();*/

  











