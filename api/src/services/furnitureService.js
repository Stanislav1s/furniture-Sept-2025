import Furniture from "../models/furniture.js"

export default {
    getAll() {
        return Furniture.find().select({
            description: true,
            img: true,
            price: true,
        })
    },
    getOne(furnitureId) {
        return Furniture.findById(furnitureId)
    },
    create(furnitureData) {
        return Furniture.create(furnitureData)
    }
}