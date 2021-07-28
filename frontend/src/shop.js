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
        // titleName.innerHTML += this.render()
        const h1 = document.createElement("h1")
    
        h1.innerHTML =  this.name
        titleName.append(h1)
    }
      
    // render(){
    //     return (`<h1> ${this.name} </h1>`)
    // }
      
     
   
//---------------------old code 

    // static getShops(){
    //     fetch("http://localhost:3000/api/shops")
    //     .then(res => res.json())
    //     .then(data => {
    //         data.forEach( name => 
    //            new Shop(name) )
    //     })
    //     .then(data => Shop.renderShop(Shop.all))
    //     .catch(error => console.warn(error))
    // }
    
    // static renderShop(data){
    
    //     const titleName = document.querySelector("#name")
    //     data.forEach(shopName => {
            
        
    //     const h1 = document.createElement("h1")
    
    //     h1.innerHTML =  shopName.name
    //     titleName.append(h1)
    //     }); 
    // }
   

}//----------------------------


