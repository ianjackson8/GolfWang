export class ItemsModels {
    imgPrimary: string;
    img2?: string;
    img3?: string;
    img4?: string;
    link: string;
    type: string[];

    constructor(imgPrimary: string, link: string, type: string[], img2?: string, img3?: string, img4?: string) {
        this.imgPrimary = imgPrimary;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.link = link;
        this.type = type;
    }
}