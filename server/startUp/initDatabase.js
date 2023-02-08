const Category = require("../models/Category");
const categoryMockData = require("../mock/category.json");

module.exports = async () => {
    const categories = await Category.find();
    if (true) {
        await createInitialEntity(Category, categoryMockData);
        console.log("added categories in mongoDB");
    }
};

async function createInitialEntity(Model, data) {
    await Model.collection.drop();
    return Promise.all(
        data.map(async (item) => {
            try {
                delete item._id;
                const newItem = new Model(item);
                await newItem.save();
                return newItem;
            } catch (error) {
                return error;
            }
        })
    );
}
