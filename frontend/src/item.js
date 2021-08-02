class Item {
    constructor({id, image,title,price}){
        this.id = id
        this.image = image
        this.title = title
        this.price = price
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
   
        image.innerHTML += this.render()
    
    
   }

   render(){
        return (`
        <div class="inner-container">
       
                <img src= " ${this.image} " />
                <h3>${this.title}</h3> 
                <h4> $${this.price}</h4> 

                <button id="addbtn">Add to Cart</button>
            
        </div>`)
   }

// searchBar 



   static search(){
    searchBar.addEventListener('keyup', (e) => {

        const searchString = e.target.value.toLowerCase()   
        const filteredCharacters = Item.all.filter((character) => { 
        
             return character.title.toLowerCase().includes(searchString) 
         
        })   
        filteredCharacters.forEach( filterChar => {
            filterChar.addToDom()
        })

        
           
     }  ) 
         

    }







  static addCreateform(){
    
    createForm.innerHTML = `<p>Create your Own</p>
   
        <input id="title-input" type="text" placeholder="Name your roll"></input>
        <input id="image-input" type="text" placeholder="Image URL"></input>
        
        <label for="price"> $10.50 </label>
    
        <input id="submit" class="createbutton" type="submit" >`
        formContainer.append(createForm)

       
}





//event listener

   static eventItems(){
        
        createForm.addEventListener("submit", function(e){
          
            e.preventDefault()
            const form = e.target
            const titleInput = form.querySelector("#title-input")
            const imageInput = form.querySelector("#image-input")
              Item.postItems(titleInput, imageInput)
           
        })

     
 // take this values and sent to db to create a new roll
            
}

     
  static postItems(titleInput, imageInput){
     // need to add `${this.id /items/${id}}
     
    fetch(`http://localhost:3000/api/shops/1/items`, {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",// we sennding it thru as jason to our back end
                    "Accept": "application/json" // we accepting json back from our backend
                },
                body: JSON.stringify({
                  
                   image: imageInput.value,
                    title:titleInput.value,
                    price: "10.50" 
                })
            })


            
            .then(resp => resp.json())// this is the only time we get an implicit return in js written on one line arrow
            .then(data => {
                console.log('Success:', data)
              
            //   debugger

              const newItem = new Item(data)
              newItem.addToDom()
              titleInput.value = ""
              imageInput.value = ""

            })
            
              .catch((error) => {
                console.error('Error:', error)
              })

             
     }


     

 

}
