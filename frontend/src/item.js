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
   


    addToDom(){
        imageContainer.innerHTML += this.render() 
    
   }

   render(){
      
        return (`
        <div class="inner-container">
        
                <img src= " ${this.image} " />
                <h3>${this.title}</h3> 
                <h4> $${this.price}</h4>
                <button class="delete" id=${this.shop_id} data-id=${this.id} data-action="delete">Delete</button> 

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
                
                imageContainer.innerHTML = "" 
            }

        }) 
    
    }



// form

  static addCreateform(){
    
    createForm.innerHTML = `<p>Create your Own</p>

    <select name"items" id="selectbox">
        <option data-id="1">Sushiyo</option>
        <option data-id="2">Salad Bowls</option>
        <option data-id="3">Drink Stop </option>
      </select>
   
        <input id="title-input" type="text" placeholder="Name your roll" required></input>
        <input id="image-input" type="text" placeholder="Image URL" required></input>
        
        <label for="price"> $10.50 </label>
    
        <input id="submit" class="createbutton" type="submit" >`
        formContainer.append(createForm)

       
}





//event listener form for post

   static eventItems(){
        
        createForm.addEventListener("submit", (e)=>{
          
            e.preventDefault()
            const form = e.target
            const titleInput = form.querySelector("#title-input")
            const imageInput = form.querySelector("#image-input")
            const select = form.querySelector("#selectbox")
           
           
              Item.postItems(titleInput, imageInput, select)
           
        })

     
 // take this values and sent to db to create a new roll
            
}

  static postItems(titleInput, imageInput, select){
    const shopId = select.options[select.selectedIndex].attributes[0].value
    console.log(shopId)
   
    fetch(`http://localhost:3000/api/shops/${shopId}/items`, {
      
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json" 
                },
                body: JSON.stringify({
                 shop_id: shopId,
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

       const parent = e.target.parentNode

       const shopId = e.target.id
    
       if (e.target.dataset.action === "delete"){
           fetch(`http://localhost:3000/api/shops/${shopId}/items/${itemId}`, {
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
