class Shop {
    constructor({name}){
        this.name = name 
        Shop.all.push(this)

    }
    static all = []

  
   

    // static getShop(){
    //     fetch("http://localhost:3000/api/shops")
    //     .then(res => res.json())
    //     .then(data => Shop.renderShop(data))
    //     .catch(error => console.warn(error))
    // }
    
    // static renderShop(data){
       
    //     const titleName = document.querySelector("#name")
    //     data.forEach(shopName => {
            
        
    //     const h1 = document.createElement("h1")
    //     console.log(h1)
    //     h1.innerHTML =  shopName.name
    //     titleName.append(h1)
    //     }); 
    // }
    

}//----------------------------


