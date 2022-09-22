export interface Convention {
    id?: string;
    title?: string;
    description?: string;
    url?: string;
    image?:ConventionImage[];
}

export interface ConventionImage {
    id?: string;
    url: string;
}