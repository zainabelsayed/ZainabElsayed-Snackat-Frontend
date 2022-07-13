export interface ProductInterface{
    id:Number;
    title:String;
    price:Number;
    description:String;
    category:String;
    image:String;
    rating:{
        rate:Number;
        count:Number
    }
}