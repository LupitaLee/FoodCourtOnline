


class ShopAdapter{
    constructor(baseShopURL){
        this.baseShopURL = `${baseShopURL}/api/shops`
    }

    getShops(){
        fetch(this.baseShopURL)
        .then(res => res.json())
        .then(data => console.log(data)
        .catch(error => console.error(error))

    }

    // function getShop(){
    //     fetch("http://localhost:3000/api/shops")
    //     .then(res => res.json())
    //     .then(data => renderShop(data))
    //     .catch(error => console.warn(error))
    // }


}