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

export interface ILink {
    label: string;
    path: string;
    totalCount?: number;
}

export interface IContact {
    mail: string;
    href: string;
    workTime: string;
    tel: string;
    employer: string;
    address: string;
    ip: string;
}

export interface IHeaderNavData {
    _id: number;
    item: string;
    path: string;
    icon?: string;
}
