
const imageContainer = document.querySelector("#image-container")

const formContainer = document.querySelector("#item-post-form")
const createForm = document.createElement("form")

const searchBar = document.querySelector('#searchBar')



document.addEventListener('DOMContentLoaded', () => {
  Shop.getShops()
  Item.getItems()
  Item.addCreateform()
    Item.eventItems()

    Item.search()

  
   
    
    

})








