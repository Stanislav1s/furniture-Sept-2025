import Furniture from "../models/furniture.js"

export default {
    create(furnitureData) {
        return Furniture.create(furnitureData)
    }
}