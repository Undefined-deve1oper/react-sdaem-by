export interface IEntity {
    name: string;
    _id: String;
    link?: string;
}

export interface IEntityObject {
    [key: string]: {
        name: string;
        _id: string;
        link?: string;
    };
}

export interface IOption {
    label: string;
    value: string;
    link?: string;
}
