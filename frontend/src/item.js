class Item {


    constructor({id,image,title,price,shop_id}){
        this.id = id 
        this.image = image 
        this.title = title
        this.price= price
        this.shop_id = shop_id
        Item.all.push(this)
    }
    static all = []
   





    static getItems(){
        fetch("http://localhost:3000/api/shops/1/items")
        .then(res => res.json())
        .then(data => {
            
            data.forEach(item => {
                const itemInfo = new Item(item)
                
                itemInfo.addToDom()
            })
        })
        .catch(error => console.warn(error))
  
  
    }
    



    addToDom(){
        
   
        imageContainer.innerHTML += this.render() 
    
    
   }

   render(){
      
        return (`
        <div class="inner-container">
        
                <img src= " ${this.image} " />
                <h3>${this.title}</h3> 
                <h4> $${this.price}</h4>
                <button data-id=${this.id} id="delete">Delete</button> 

        </div>`)
   }
//    


// searchBar 



   static search(){
    searchBar.addEventListener('keyup', (e) => {

        const searchString = e.target.value.toLowerCase()   
        const filteredItems = Item.all.filter((item) => { 
     
        
             return item.title.toLowerCase().includes(searchString) 
         
        })   
        filteredItems.forEach( filterItem => {
         
            if (imageContainer){
                imageContainer.innerHTML = "" 
            }
          
            filterItem.addToDom()

           
            
        })
        
        if (searchString == ""){
            this.getItems()
        }

        }) 
    
    }





// form

  static addCreateform(){
    
    createForm.innerHTML = `<p>Create your Own</p>

    <select>
        <option>Sushiyo</option>
        <option>Salad Bowls</option>
        <option>Drink Stop </option>
      </select>
   
        <input id="title-input" type="text" placeholder="Name your roll" required></input>
        <input id="image-input" type="text" placeholder="Image URL" required>></input>
        
        <label for="price"> $10.50 </label>
    
        <input id="submit" class="createbutton" type="submit" >`
        formContainer.append(createForm)

       
}





//event listener

   static eventItems(){
        
        createForm.addEventListener("submit", (e)=>{
          
            e.preventDefault()
            const form = e.target
            const titleInput = form.querySelector("#title-input")
            const imageInput = form.querySelector("#image-input")
              Item.postItems(titleInput, imageInput)
           
        })

     
 // take this values and sent to db to create a new roll
            
}

  static postItems(titleInput, imageInput){
   
    fetch(`http://localhost:3000/api/shops/1/items`, {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json" 
                },
                body: JSON.stringify({
                  
                   image: imageInput.value,
                    title:titleInput.value,
                    price: "10.50"
                })
            })


            
            .then(resp => resp.json())
            .then(data => { 
                console.log('Success:', data)

              const newItem = new Item(data)
              newItem.addToDom()
              titleInput.value = ""
              imageInput.value = "" })
            
              .catch(error => console.warn(error))

             
    }




    static listenDelete(){
      

        imageContainer.addEventListener("click", (e) =>{
        e.preventDefault()
        Item.handleDelete(e)
        })
    }




    static handleDelete(e){
        const itemId = e.target.dataset.id

        console.log(e.target.dataset.id)

       const parent = e.target.parentNode

       console.log(parent)

       if (e.target.id  === "delete"){
           fetch(`http://localhost:3000/api/shops/1/items/${itemId}`, {
               method: "DELETE"
           })
           .then(res => res.json())
           .then(data => {

      
               if (data.message){
                console.log(data.message)
                parent.remove()
               }
               
               })
            
           .catch(error => console.warn(error))
       }
      
    }
    



     


 

}
