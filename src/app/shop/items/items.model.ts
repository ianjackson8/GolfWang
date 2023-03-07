export class ItemsModels {
    images: string[];
    link: string;
    type: string[];
    index: string;

    constructor(images: string[], link: string, type: string[], index: string) {
        this.images = images;
        this.link = link;
        this.type = type;
        this.index = index;
    }
}