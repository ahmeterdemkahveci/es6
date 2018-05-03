const products=[
    { name:'Ipad', category: 'devices'},
    { name:'Sony 3d', category: 'TV'},
    { name:'E256', category: 'Blender'},
    { name:'Super Vision', category: 'TV'},
    { name: 'Iphone 7', category: 'phones' }
]

const tvProducts = products.filter(function(product){
    return product.category === 'TV'
})

//console.log(tvProducts)

const detailedProducts = [
    { name: 'Ipad', category: 'devices',number:20,price:200 },
    { name: 'Sony 3d', category: 'TV', number: 0, price: 400  },
    { name: 'E256', category: 'Blender', number: 3, price: 50  },
    { name: 'Super Vision', category: 'TV', number: 7, price: 500  },
    { name: 'Iphone 7', category: 'phones', number: 40, price: 2  }
]

const result = detailedProducts.filter(function(detailedProduct){
    return detailedProduct.number > 0 && detailedProduct.category === 'TV' 
})

//console.log(result)

const channels = [
    {name:'HBO',premium:true},
    {name:'LIFE',premium:false},
    {name:'MAX',premium:true},
    {name:'WOBI',premium:false},
    {name:'NETFLIX', premium:true}
]

const premiumChannels = channels.filter(channel => channel.premium)

console.log(premiumChannels)