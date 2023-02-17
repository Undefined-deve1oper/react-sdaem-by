export enum api {
    flats = "/flats",
    cars = "/cars",
    baths = "/baths-and-saunas/",
    cottages = "/cottages",
    navigation = "/navigation",
    menuList = "/menu",
    news = "/news",
    contacts = "/contacts"
}

export enum path {
    home = "/",
    apartments = "/catalog/flats",
    cottages = "/catalog/cottages",
    bathsAndSaunas = "/catalog/baths-and-saunas",
    cars = "/catalog/cars",
    news = "news",
    detail = "/news/detail/:id",
    bookmarks = "bookmarks",
    rate = "rate",
    contacts = "contacts",
    catalog = "catalog/:type",
    productDetail = "/catalog/product/:id",
    notfound = "*",
    login = "login",
    registration = "registration"
}
