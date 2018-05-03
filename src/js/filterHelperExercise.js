const channel = [
    { name: 'HBO', premium: true },
    { name: 'LIFE', premium: false },
    { name: 'Max', premium: true },
    { name: 'Cooking channel', premium: false },
    { name: 'WOBI', premium: false }
];
const user = {
    name: 'Francis',
    premium: true,
    premiumChannels: function () {
        // GET THE PREMIUM CHANNELS IS "PREMIUM" IS true
        const premiumChannels = channel.filter(function(item){
            return  item.premium && user.premium
        })
        return premiumChannels
    },
    channels: function () {
        // GET THE NON-PREMIUM CHANNELS
        const nonPremiumChannels = channel.filter(function(item){
            return !item.premium
        })
        return nonPremiumChannels
    }
}
console.log(user.premiumChannels())
// brings HBO and MAX
console.log(user.channels())
// brings LIFE, COOCKING CHANNEL AND WOBI