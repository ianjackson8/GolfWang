export class FlagshipItemModel {
    location: string;
    street: string;
    city: string;
    zip: string;
    images: string[];
    imgNum: string[];
    index: string;

    constructor(location: string, street: string, city: string, zip: string, images: string[], imgNum: string[], index: string) {
        this.location = location;
        this.street = street;
        this.city = city;
        this.zip = zip;
        this.images = images;
        this.imgNum = imgNum;
        this.index = index;
    }
}