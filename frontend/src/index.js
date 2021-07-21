document.addEventListener('DOMContentLoaded', () => {
    getShop()
})

function getShop(){
    fetch("http://localhost:3000/api/shops")
    .then(res => res.json())
    .then(data => {
    data.forEach(image => {
        const img = new Shop(image)
        img.addToDom()
        
        
    })
    })
    .catch(error => console.warn(error))
}