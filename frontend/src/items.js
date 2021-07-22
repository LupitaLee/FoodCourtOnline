class Item {
    constructor({image,title,price}){
        this.image = image
        this.title = title
        this.price = price
        Item.all.push(this)
    }
    static all = []

    addToDom1(){
        const image = document.querySelector("#image-container")
        image.innerHTML += this.renderItems()
    }

    renderItems(){
        return (`<img src= " ${this.image} " />
        <h3>${this.title}</h3>
        <h4>$${this.price}</h4>`)


        

    }



    
}