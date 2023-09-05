
export interface Widgets {
    count: number;
    next: string;
    previous?: string;
    results: WidgetTiles[];
}

export interface WidgetTiles {
    id: number;
    name: string;
    slug: string;
    games_count?: number;
    image_background?: string;
    background_image?: string;
}
