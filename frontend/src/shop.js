class Shop {
    constructor({name}){
        this.name = name 
        Shop.all.push(this)

    }
    static all = []

  
    addToDom(){
        const titleName = document.querySelector("#name")
        titleName.innerHTML += this.render()
    }

    render(){
        return (`<h1> ${this.name} </h1>`)
    }

    // rendershop(){
    //     const imageidv = document.querySelector("image-container")
    // }

}