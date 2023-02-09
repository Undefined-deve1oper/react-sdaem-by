const Category = require("../models/Category");
const News = require("../models/News");
const categoryMockData = require("../mock/category.json");
const newsMockData = require("../mock/news.json");

module.exports = async () => {
    const categories = await Category.find();
    if (categories.length !== categoryMockData.length) {
        await createInitialEntity(Category, categoryMockData);
        console.log("added categories in mongoDB");
    }

    const news = await News.find();
    if (news.length !== newsMockData.length) {
        await createInitialEntity(News, newsMockData);
        console.log("added news in mongoDB");
    }
};

async function createInitialEntity(Model, data) {
    await Model.collection.drop();
    if (!Array.isArray(data)) {
        return Promise.all(
            Object.keys(data).map(async (item) => {
                try {
                    delete data[item]._id;
                    const newItem = new Model(data[item]);
                    await newItem.save();
                    return newItem;
                } catch (error) {
                    return error;
                }
            })
        );
    }

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
