import { Product } from "./product.model";

export class ProductDirector {
    public static createBackpackProduct(): Product{
        return new Product(
            "item_4_title_link",
            "Sauce Labs Backpack",
            "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
            29.99,
            "$"
        );
    }
}