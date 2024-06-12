import {Given, When, Then} from "@cucumber/cucumber";
import {
     clickProductName, 
     productsListPageShouldBeCorrect 
    } from "../pages/products-list/products-list-page";
import { ProductDirector } from "../models/product.director";

// ------------------ GIVEN ------------------



// ------------------ WHEN ------------------
When('the user clicks a product name', async function(){
    await clickProductName(ProductDirector.createBackpackProduct().id);
});



// ------------------ THEN ------------------
Then('the products list page is diplayed correctly', async function(){
    await productsListPageShouldBeCorrect();
});
