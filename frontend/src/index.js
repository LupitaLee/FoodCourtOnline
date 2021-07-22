document.addEventListener('DOMContentLoaded', () => {
    getShop()
    getItems()
})



// fetching store

function getShop(){
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



        // fetching items 
function getItems(){
    fetch("http://localhost:3000/api/shops")
    .then(res => res.json())
    .then(data => {
        data[0].items.forEach(item => {
            // i think i need to itererate again 
           
            const img = new Item(item)
            img.addToDom1() 
        
        })
    })
    .catch(error => console.warn(error))
}











