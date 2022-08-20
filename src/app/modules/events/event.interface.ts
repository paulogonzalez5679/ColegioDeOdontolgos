export interface Event {
    id?: string;
    title?: string;
    description?: string;
    images?: EventImage[];
}

export interface EventImage {
    id: string;
    url: string;
}
