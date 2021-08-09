class Shop {
    constructor({name}){
        this.name = name 
        Shop.all.push(this)

    }
    static all = []

  

    static getShops(){
        fetch("http://localhost:3000/api/shops")
        .then(res => res.json())
        .then(data => { 
        data.forEach(name => {
            const shopName = new Shop(name)
            shopName.addToDom()
      
        })
        })
        .catch(error => console.warn(error))
     
    }
     


    addToDom(){
        const titleName = document.querySelector("#name")
        titleName.innerHTML += this.render()
       
    }
    
    render(){
        return (`
        <div class="name-container">
       
              
                <h1>${this.name}</h1>    
            
        </div>`)
   }



   






     
}


