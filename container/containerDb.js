

class ContenedorDb{

    cliente;
    table;

    constructor(cliente, tabla) {
        this.cliente = cliente;
        this.tabla = tabla;
   }


   //Productos
    async save(objeto){
 
        try {
            await this.cliente(this.tabla).insert(objeto)
            return 'Id del objeto guardado: ' + objeto
        }
        catch(error){
            error => { throw error}
        } 

      }

      

    async getById(id){
       
        try {

            const productSearched = await this.cliente(this.tabla).select().where("id", "=", id)

            if(productSearched[0]===undefined ){
                return null
            }else{
                return productSearched[0];
            }
            
        }

        catch(error){
            error => { throw error}
        } 

     }

    
     async getAll(){

        try {
            const contenido = this.cliente(this.tabla).select()

                if(contenido) { 
                     return contenido
                } else { 
                    return null
                }
            }

        catch(error){
            error => { throw error}
        } 

    }

    async getProductosTest(){

        class productosTest {
            constructor(id, title, price, thumbnail){
                this.id = id;
                this.title = title;
                this.price = price;
                this.thumbnail = thumbnail
            }
        }
        const productosTestArray = []

        for (let i = 0; i < 5; i++) {                
                productosTestArray.push(new productosTest(i, faker.commerce.productDescription(), faker.commerce.price(), faker.image.nature()))
         }
          return productosTestArray

        }

        
    


    async deleteById(id){
        try {
            if(this.getById(id)){ 
              const objetoBuscado = await this.cliente(this.tabla).del().where("id", "=", id)
              return objetoBuscado
            } else {
              return 'No existe el producto con el id: ' + id
            }
          }
          catch(error){
              error => { throw error}
          } 
    }

    async deleteAll(){

            try {
                const prodBuscado = await this.cliente(this.tabla).del()
                return prodBuscado
            }
            catch(error){
                error => { throw error}
            } 

    }

    async update(objeto){
        try {
            if (this.getById(objeto.id)!==undefined){
                await this.cliente(this.tabla).update(objeto).where('id', '=', objeto.id)
                return objeto;
            }else{
                return 'No existe el producto con el id: ' + objeto.id
            }
        }
        catch(error){
            error => { throw error}
        } 
    }



    
      

  }


  const Contenedor = ContenedorDb
  export  default Contenedor;
