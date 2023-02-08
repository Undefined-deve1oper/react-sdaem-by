const Category = require("../models/Category");
const News = require("../models/News");
const AccountNavigation = require("../models/AccountNavigation");
const Sidebar = require("../models/Sidebar");
const MenuList = require("../models/MenuList");
const Navigation = require("../models/Navigation");
const categoryMockData = require("../mock/category.json");
const newsMockData = require("../mock/news.json");
const accountNavigationMockData = require("../mock/accountNavigation.json");
const menuListMockData = require("../mock/menuList.json");
const sidebarMockData = require("../mock/sidebar.json");
const navigationMockData = require("../mock/navigation.json");

module.exports = async () => {
    const categories = await Category.find();
    if (
        Object.keys(categories).length !== Object.keys(categoryMockData).length
    ) {
        await createInitialEntity(Category, categoryMockData);
        console.log("added categories in mongoDB");
    }
    const news = await News.find();
    if (news.length !== newsMockData.length) {
        await createInitialEntity(News, newsMockData);
    }
    const accountNavigation = await AccountNavigation.find();
    if (accountNavigation.length !== accountNavigationMockData.length) {
        await createInitialEntity(AccountNavigation, accountNavigationMockData);
    }
    const navigation = await Navigation.find();
    if (navigation.length !== navigationMockData.length) {
        await createInitialEntity(Navigation, navigationMockData);
    }
    const sidebar = await Sidebar.find();
    if (sidebar.length !== sidebarMockData.length) {
        await createInitialEntity(Sidebar, sidebarMockData);
    }
    const menuList = await MenuList.find();
    if (menuList.length !== menuListMockData.length) {
        await createInitialEntity(MenuList, menuListMockData);
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
