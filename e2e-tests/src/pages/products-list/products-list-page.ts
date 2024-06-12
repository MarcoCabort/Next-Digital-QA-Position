import { Locator } from "playwright";
import {page} from "../../support/hooks";
import { 
    MENU_BUTTON_ATTR,
    MENU_BUTTON_CONTAINER_ATTR,
    PRODUCTS_LIST_CONTAINER_ATTR, 
    SHOPPING_CART_CONTAINER_ATTR 
} from "./products-list-page-attributes";
import { expect } from "@playwright/test";

const PRODUCTS_LIST_URL: string = "inventory.html";

// ------------------ ASSERTIONS ------------------
export async function productsListPageShouldBeCorrect(){
    const url = page.url();
    expect(url).toContain(PRODUCTS_LIST_URL);
    await expect(getMenuButton()).toBeVisible();
    await expect(getProductsListContainer()).toBeVisible();
    await expect(getShoppingCartLink()).toBeVisible();

}


// ------------------ ELEMENTS ------------------
// General
function getMenuButtonContainer(): Locator{
    return page.locator(MENU_BUTTON_CONTAINER_ATTR);
}

function getMenuButton(): Locator{
    return getMenuButtonContainer().locator(MENU_BUTTON_ATTR);
}

function getProductsListContainer(): Locator{
    return page.locator(PRODUCTS_LIST_CONTAINER_ATTR).first();
}

function getShoppingCartContainer(): Locator{
    return page.locator(SHOPPING_CART_CONTAINER_ATTR);
}

function getShoppingCartLink(): Locator{
    return getShoppingCartContainer().locator('a').first();
}


