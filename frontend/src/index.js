
const image = document.querySelector("#image-container")

const formContainer = document.querySelector("#item-post-form")
const createForm = document.createElement("form")

document.addEventListener('DOMContentLoaded', () => {
  Shop.getShops()
  Item.getItems()
  Item.addCreateform()
    Item.eventItems()
    
    

})


