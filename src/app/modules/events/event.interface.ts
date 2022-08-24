export interface Event {
    id?: string;
    title?: string;
    description?: string;
}

export interface EventImage {
    id?: string;
    idEvent: string;
    idImage: string;
    url: string;
}
