export class CountriesModel {
    img: string;
    country: string;
    phoneCode: string;

    constructor(img: string, country: string, phoneCode: string) {
        this.img = img;
        this.country = country;
        this.phoneCode = phoneCode;
    }
}