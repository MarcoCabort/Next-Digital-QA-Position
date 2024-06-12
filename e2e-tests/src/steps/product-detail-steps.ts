import {Given, When, Then} from "@cucumber/cucumber";
import { ProductDirector } from "../models/product.director";
import { productDetailPageShouldBeCorrect } from "../pages/product-detail/product-detail-page";

// ------------------ GIVEN ------------------



// ------------------ WHEN ------------------


// ------------------ THEN ------------------
Then('the product detail page is diplayed correctly', async function(){
    await productDetailPageShouldBeCorrect(ProductDirector.createBackpackProduct());
});
