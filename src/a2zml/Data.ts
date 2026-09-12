export interface NavData {
    title?: string;
    nav?: NavItem[];
    icon?: string;
    id?: string | number;
}

export interface NavItem {
    title?: string;
    nav?: NavGroup[];
    icon?: string;
    id?: string | number;
}

export interface NavGroup {
    title?: string;
    nav?: CardItem[];
    icon?: string;
    id?: string | number;
}

export interface CardItem {
    name?: string;
    desc?: string;
    icon?: string;
    url?: string;
    id?: string | number;
}