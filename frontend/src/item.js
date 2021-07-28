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
    //     .then(data => (
    //         data[0].items.forEach(item => Item.renderItem(item)))
    //     .catch(error => console.error(error))
        
    // )}





    // static renderItem(item){
    //     const img = document.createElement("img")
    //     img.src = item.image
        

    //     const h3 = document.createElement("h3")
    //     h3.innerHTML = item.title

    //     const h4 = document.createElement("h4")
    //     h4.innerHTML = `$ ${item.price}`

    //     const addBtn = document.createElement("button")
    //     addBtn.innerHTML = "add to cart"

    //     image.append(img,addBtn, h3,h4)
    // }
    


//     static postItems(){
// // this should be its own function
//         createForm.addEventListener("submit", function(e){
        
//             e.preventDefault()
//             const form = e.target
//             const titleInput = form.querySelector("#title-input")
//             const imageInput = form.querySelector("#image-input")
            
//             //--------

//             // take this values and sent to db to create a new roll
//             fetch("http://localhost:3000/api/shops/1/items", {
//                 method:"POST",
//                 headers: {
//                     "Content-Type": "application/json",// we sennding it thru as jason to our back end
//                     "Accept": "application/json" // we accepting json back from our backend
//                 },
//                 body: JSON.stringify({
                    
//                     image: imageInput.value,
//                     title:titleInput.value,
//                     price: "10.50" // need to see if how im going to add a flat fee with out using user input
//                 })
//                 })
//                 .then(resp => resp.json())// this is the only time we get an implicit return in js written on one line arrow
//                 .then(item => {
//                 console.log('Success:', item)
                
                
//                 renderItem(item)

//                 })
//                 .catch((error) => {
//                 console.error('Error:', error)
//                 })

//                 titleInput.value = ""
//                 imageInput.value = ""
//         })
//     }
     
    















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