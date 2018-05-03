const trips = [
    { to: 'Brasil', distance: 1236 },
    { to: 'China', distance: 1875 },
    { to: 'India', distance: 3215 }
]

let result = trips.reduce(function(startTrip,trip){
    return startTrip + trip.distance
},0)

console.log(result)

const computers = [
    { type: 'Laptop', price: 124, os: 'Windows' },
    { type: 'Desk', price: 124, os: 'Mac' },
    { type: 'Desk', price: 124, os: 'Windows' },
    { type: 'Laptop', price: 124, os: 'Mac' },
    { type: 'Laptop', price: 124, os: 'Windows' },
];
//Solution 1 
let finalCounts = computers.reduce(function(startPoint,computer){
  if(computer.os==='Mac'){
     startPoint-=1
     return startPoint
  }   
    return startPoint
},computers.length)
console.log(`Windows Pc Count:${finalCounts}`)
console.log(`Mac Pc Count:${computers.length-finalCounts}`)

//Solution 2 

let osTypes = computers.reduce(function(start,item){

    return item.os === 'Mac' ? { mac: start.mac + 1, windows: start.windows } : { mac: start.mac, windows: start.windows + 1 }

    /*if(item.os==='Mac'){
      return {mac:start.mac+1,windows:start.windows}
    }else{
      return { mac: start.mac, windows: start.windows+1}
    }*/

},{mac:0,windows:0})

console.log(osTypes)