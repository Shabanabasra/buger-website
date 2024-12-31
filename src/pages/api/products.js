export default function Handler(req,res){
    const products =[
        {
            id:1,
            name: "Cheese Burger",
            price:200,
            image: "https://media.istockphoto.com/id/2061716709/photo/grilled-rib-burger.jpg?s=612x612&w=0&k=20&c=QS37W9zjBE3GoOeR8ay3k_DS7oXPH07MBg-WHY5Joac=",
        },
        {
            id:2,
            name: "French Burger",
            price:250,
            image: "https://media.istockphoto.com/id/1879112732/photo/delicious-burger-beef-and-bacon-sandwich-fast-food-delicious-food-close-up-on-black-background.jpg?s=612x612&w=0&k=20&c=cSQWBKfX0ILVe77IzsLOsLjUfrn4W70BStraJNteO8I=",
        },
        {
            id:3,
            name: "Specialty Burger",
            price:300,
            image: "https://thumbs.dreamstime.com/b/smash-burger-lettuce-cheddar-cheese-sauce-324333240.jpg",
        },
        {
            id:4,
            name: "Chicken Burger",
            price:350,
            image: "https://media.istockphoto.com/id/1532801623/photo/tasty-fresh-burger-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=WrB2NlzCztj5oJZpzPB5D1RAQ4Uj2cHWaxRn85xOOcM=",
        },
        {
            id:5,
            name: "Veggie Burger",
            price:400,
            image: "https://media.istockphoto.com/id/1498243668/photo/tasty-cheeseburger-with-lettuce-cheddar-cheese-tomato-and-pickles-burger-bun-with-sesame.jpg?s=612x612&w=0&k=20&c=m2fYc-3o7yjL2qUVxxKlGkniKYIw5qh7gaSdagUNSbU=",
        },
        {
            id:6,
            name: "Muffaletta Burger",
            price:450,
            image: "https://media.istockphoto.com/id/1400656321/photo/homemade-cheese-smash-burger.jpg?s=612x612&w=0&k=20&c=l4lUH5g5qi-kvs91lKk2ZubwKypyeWku92QMnG32vpo=",
        },
    ];

    res.status(200).json(products);
}