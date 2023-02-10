export class PromotionsItemModel {
    img: string;
    drop: string;
    link: string;
    avail: string;

    constructor(img: string, drop: string, link: string, avail: string) {
        this.img = img;
        this.drop = drop;
        this.link = link;
        this.avail = avail;
    }
}