class Shop {
    constructor({id,name, items}){
        this.id = id
        this.name = name 
        this.items = items.map(i => new Item(i))
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
        titleName.innerHTML += this.render()
       
    }
    
    render(){
        return (`
        <div class="name-container">
       
              
                <h1>${this.name}</h1>
                <button data-id=${this.id} data-action="display">Display Items </button>  
              
        </div>`)
   }


    static listenDysplay(){
        titleName.addEventListener("click", (e)=>{
            e.preventDefault()
            Shop.handleDisplay(e)
        })

        }


    static handleDisplay(e){
    
    
        const shopAction = e.target.dataset.action
    
        const shopId = e.target.dataset.id
        
    if(shopAction === "display")
    console.log ("display items", shopId)
    const s = Shop.all.find(s => s.id == e.target.dataset.id )
    console.log(s)
    
  
    
    if (imageContainer){
        imageContainer.innerHTML = ""
        }

    s.renderItems()
      

    }


renderItems(){
    this.items.forEach(i => console.log(i.addToDom()))
    
}













// static search(){
//     searchBar.addEventListener('keyup', (e) => {

//         const searchString = e.target.value.toLowerCase()   
//         const filteredItems = Item.all.filter((item) => { 
     
        
//              return item.title.toLowerCase().includes(searchString) 
         
//         })   
//         filteredItems.forEach( filterItem => {
         
//             if (imageContainer){
//                 imageContainer.innerHTML = "" 
//             }
          
//             filterItem.addToDom()

           
            
//         })
        
//         if (searchString == ""){
//             this.getItems()
//         }

//         }) 
    
//     }
      







     
}


