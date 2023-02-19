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
    birthYear: Date;
    avatarImage?: string;
    email: string;
    password: string;
    role: "USER" | "ADMIN";
    gender: "male" | "female";
};

export type SignInDataType = {
    email: string;
    password: string;
};
