 const brands = [
     {name:'Apple',id:1},
     {name:'Samsung',id:2},
     {name:'Samsung',id:3},
     {name:'HP',id:4},
     {name: 'Xiaomi',id:5}
 ]

const specificBrand = brands.find(function(brand){
    return brand.name === 'Samsung'
})

console.log(specificBrand) 