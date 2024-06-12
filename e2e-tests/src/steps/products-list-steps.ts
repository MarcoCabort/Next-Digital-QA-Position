import {Given, When, Then} from "@cucumber/cucumber";
import {
     productsListPageShouldBeCorrect 
    } from "../pages/products-list/products-list-page";

// ------------------ GIVEN ------------------



// ------------------ WHEN ------------------

// ------------------ THEN ------------------
Then('the main page is diplayed correctly', async function(){
    await productsListPageShouldBeCorrect();
});
