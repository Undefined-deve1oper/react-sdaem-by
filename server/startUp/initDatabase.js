const Post = require("../models/Post");
const Type = require("../models/Type");
const Brand = require("../models/Brand");
const Estate = require("../models/Estate");

const postsMockData = require("../mock/posts.json");
const typesMockData = require("../mock/types.json");
const brandsMockData = require("../mock/brands.json");
const estatesMockData = require("../mock/estate.json");

module.exports = async () => {
    const posts = await Post.find();
    if (posts.length !== postsMockData.length) {
        await createInitialEntity(Post, postsMockData);
        console.log("added posts in mongoDB");
    }

    const types = await Type.find();
    if (types.length !== typesMockData.length) {
        await createInitialEntity(Type, typesMockData);
        console.log("added types in mongoDB");
    }

    const brands = await Brand.find();
    if (brands.length !== brandsMockData.length) {
        await createInitialEntity(Brand, brandsMockData);
        console.log("added brands in mongoDB");
    }

    const estates = await Estate.find();
    if (estates.length !== estatesMockData.length) {
        await createInitialEntity(Estate, estatesMockData);
        console.log("added estate in mongoDB");
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
