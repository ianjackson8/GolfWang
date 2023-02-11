export class FlagshipItemModel {
    location: string;
    street: string;
    city: string;
    zip: string;
    images: string[];

    constructor(location: string, street: string, city: string, zip: string, images: string[]) {
        this.location = location;
        this.street = street;
        this.city = city;
        this.zip = zip;
        this.images = images;
    }
}