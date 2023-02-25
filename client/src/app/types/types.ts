export type refType = {
    current?: any;
};

export type HandleChangeDataType = {
    name: string;
    value: string;
};

export type SearchEstateFormDataType = {
    city?: string;
    rooms?: string;
    priceMin?: string;
    priceMax?: string;
    area?: string;
    metro?: string;
    type?: string;
    capacity?: string;
};

export type UserType = {
    _id?: string;
    name: string;
    subscribe: boolean;
    birthYear: any;
    avatarImage?: string;
    email?: string;
    password?: string;
    role?: "USER" | "ADMIN";
    gender: "male" | "female";
    createdAt?: any;
};

export type SignInDataType = {
    email: string;
    password: string;
};

export type BookingType = {
    _id?: string;
    entry: Date;
    departure: Date;
    estateId: string;
    userId?: string;
    totalPrice: number;
    createdAt?: number;
};

export type BookingDateType = {
    entry: Date;
    departure: Date;
    estateId?: string;
};

export type CommentType = {
    _id?: string;
    content: string;
    rating: string;
    estateId: string;
    userId?: string;
    answerOn?: string | UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};

export type FavouriteType = {
    _id: string;
    estateId: string;
    userId: string;
    createdAt?: Date;
    updatedAt?: Date;
};

export type BrandType = {
    _id: string;
    name: string;
};

export type TypeType = {
    _id: string;
    name: string;
};

export type CityType = {
    _id: string;
    name: string;
};
