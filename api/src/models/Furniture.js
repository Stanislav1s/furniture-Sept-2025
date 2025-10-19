import { Schema, model } from "mongoose";

const furnitureSchema = new Schema({
    make: {
        type: String,
        required: [true, 'make is required'],
        minLength: [4, 'make must be at least 4 characters long']
    },
    model: {
        type: String,
        required: [true, 'model is required'],
        minLength: [4, 'Model must be at least 4 characters long']
    },
    year: {
        type: Number,
        required: [true, 'year is required'],
        min: [1950, 'Year should be at least 1950'],
        max: [2050, 'Year should be before 2050']
    },
    description: {
        type: String,
        required: [true, 'description is required'],
        minLength: [10, 'Description must be at least 10 characters long']

    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'price must be a positive number']
    },
    img: {
        type: String,
        required: [true, 'imageUrl is required']
    },
    material: {
        type: String,
        required: false,
    }
})

const Furniture = model('Furniture', furnitureSchema);

export default Furniture;