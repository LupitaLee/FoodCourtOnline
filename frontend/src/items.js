class Item {
    constructor({image,title,price}){
        this.image = image
        this.title = title
        this.price = price
        Item.all.push(this)
    }
    static all = []

    // static getItems(){
    //     fetch("http://localhost:3000/api/shops")
    //     .then(res => res.json())
    //     .then(data => Item.renderItems(data[0].items))
    //     .catch(error => console.warn(error))
    // }
    
    // static renderItems(items){
       
        
    //     items.forEach(item => {
    //         const image = document.querySelector("#image-container")
    //         const img = document.createElement("img")
    //         img.src = item.image
            
    
    //         const h3 = document.createElement("h3")
    //         h3.innerHTML = item.title
    
    //         const h4 = document.createElement("h4")
    //         h4.innerHTML = item.price
    
    //         image.append(img, h3, h4)
    //     }); 
    
    // }


//------------------------------------------
 
   
 

    
}