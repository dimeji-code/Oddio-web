export type Item = {
    imgUrl: string,
    title: string,
    price: number,
    tags: string[],
    id: string
}

export const Items:Item[] = [
    {
        id:"m1",
        title:"Apple Airpods Max",
        imgUrl:"https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        price:249.99,
        tags:["Headphones","Over-ear","Noise-cancelling","Durable", "Wireless","Bluetooth"]},
    {
        id:"m2",
        title:"Sony WH-1000XM4",
        imgUrl:"https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
        price:499.99,
        tags:["Headphones","Over-ear","Noise-cancelling"]},
    
    {
        id:"m3",
        title:"Beats Sky",
        imgUrl:"https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80",
        price:399.99,
        tags:["Headphones","Noise-cancelling","Durable","High-Quality","Black"]},
    {
        id:"m4",
        title:"Beats Gold",
        imgUrl:"https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price:399.99,
        tags:["Headphones","Noise-cancelling","durable","leather","Brown"]},
    {
        id:"m5",
        title:"Grado Labs SR325",
        imgUrl:"https://images.unsplash.com/photo-1483032711911-cfd45aabc9a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        price:199.99,
        tags:["Headphones","Noise-cancelling","Studio"]},
    {
        id:"m6",
        title:"Airpods Max",
        imgUrl:"https://images.unsplash.com/photo-1567928513938-cd0e82a33ca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        price:779.00,
        tags:["Headphones","Noise-cancelling","durable","Blue"]},
    {
        id:"m7",
        title:"BEATS flex",
        imgUrl:"https://images.unsplash.com/photo-1612444530582-fc66183b16f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
        price:69.99,
        tags:["earbuds","Noise-cancelling","Sport"]},
    {
        id:"m8",
        title:"JBL",
        imgUrl:"https://images.unsplash.com/photo-1579065560489-989b0cc394ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80",
        price:99.99,
        tags:["Headphones","Noise-cancelling","durable","wireless","Black"]},
    {
        id:"m9",
        title:"BEATS EP",
        imgUrl:"https://images.unsplash.com/photo-1520170350707-b2da59970118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
        price:129.99,
        tags:["Headphones","Noise-cancelling","durable","Red"]},
    {
        id:"m10",
        title:"AKG Headphones",
        imgUrl:"https://images.unsplash.com/photo-1604936809881-d8113b290d47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1641&q=80",
        price:379.99,
        tags:["Headphones","Noise-cancelling","studio"]},
    {
        id:"m11",
        title:"BEATS pill",
        imgUrl:"https://images.unsplash.com/photo-1520390244437-6f1c5eae66ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
        price:249.95,
        tags:["Speaker","Durable", "Wireless","Black"]},
    {
        id:"m12",
        title:"SENNHEISER Momentum 3",
        imgUrl:"https://images.unsplash.com/photo-1656457537718-7a1e3e3fee8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        price:99.99,
        tags:["Headphones","Noise-cancelling","durable", "Wireless","White","High-quality"]},
    {
        id:"m13",
        title:"SENNHEISER HD559",
        imgUrl:"https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
        price:129.95,
        tags:["Speaker","Noise-cancelling","durable"]},
    {
        id:"m14",
        title:"JBL Pill",
        imgUrl:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80",
        price:679.95,
        tags:["Speaker","Noise-cancelling","durable"]},
    {
        id:"m15",
        title:"Ultimate Ears",
        imgUrl:"https://images.unsplash.com/photo-1598034989845-48532781987e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        price:219.99,
        tags:["Speaker","Noise-cancelling","Wireless", "Bluetooth"]},
    {
        id:"m16",
        title:"Airpods pro",
        imgUrl:"https://images.unsplash.com/photo-1628210889224-53b2e3082fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
        price:499.99,
        tags:["Earbuds","Noise-cancelling","durable", "Leather","Brown"]},
    {
        id:"m17",
        title:"TBC",
        imgUrl:"https://images.unsplash.com/photo-1636451595436-262c53c74831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        price:99.99,
        tags:["Earbuds","Noise-cancelling","durable"]},
    {
        id:"m18",
        title:"TBC",
        imgUrl:"https://images.unsplash.com/photo-1516656863674-c0cc173d1980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        price:99.99,
        tags:["Speaker","durable","Purple"]},
    {
        id:"m19",
        title:"Sonos Roam speaker",
        imgUrl:"https://images.unsplash.com/photo-1646424986813-343f76143508?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=946&q=80",
        price:199.99,
        tags:["Speaker","Wireless","durable","White"]},
    {
        id:"m20",
        title:"Aukey Earbuds",
        imgUrl:"https://images.unsplash.com/photo-1634874256168-a64b3aadbf81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
        price:49.99,
        tags:["Earbuds","Portable","durable","Black"]},
    
]