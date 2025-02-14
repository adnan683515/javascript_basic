

function ObjectFunction(Array){

    let AvgPrice=0; 
    for(const obj of Array){

        AvgPrice+=obj.price;
    }
    return (AvgPrice/Array.length).toFixed(2);

}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
const result = ObjectFunction(phones)
console.log(result)