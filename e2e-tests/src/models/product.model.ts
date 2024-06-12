export class Product {
    id: string;
    name: string;
    description: string;
    priceNumber: number;
    priceCurrency: string;


    constructor(id: string, name: string, description: string, priceNumber: number, priceCurrency: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.priceNumber = priceNumber;
        this.priceCurrency = priceCurrency;
    }
}