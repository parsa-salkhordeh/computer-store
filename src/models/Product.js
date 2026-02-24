const { default: mongoose } = require("mongoose");

const ProductSchema=new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    category: String,
    cpu: String,
    ram: String,
    image: String,
    description: String
})

const Product= mongoose.models.Product || mongoose.model("Product" , ProductSchema)
export default Product;


//     id: 8,
//     name: "دل Inspiron 15",
//     price: 23900000,
//     category: "laptop",
//     cpu: "Intel Core i5",
//     ram: "8GB",
//     image: "https://example.com/images/dell_inspiron15.jpg",
//     description: "لپتاپ میان‌رده با صفحه نمایش بزرگ برای کارهای عمومی."