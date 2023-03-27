export class ItemsModels {
    desc: string
    images: string[]
    itemName: string
    link: string
    numSec: string
    price: string
    secImages: string[]
    type: string[]

    constructor(
        desc: string,
        images: string[],
        itemName: string,
        link: string,
        numSec: string,
        price: string,
        secImages: string[],
        type: string[]
    ) {
        this.desc = desc
        this.images = images
        this.itemName = itemName
        this.link = link
        this.numSec = numSec
        this.price = price
        this.secImages = secImages
        this.type = type
    }
}