import { Locator } from "playwright";
import {page} from "../../support/hooks";

import { expect } from "@playwright/test";
import { Product } from "e2e-tests/src/models/product.model";
import {
    PRODUCT_DESCRIPTION_ATTR, 
    PRODUCT_DETAIL_ADD_TO_CART_BUTTON_ATTR, 
    PRODUCT_NAME_ATTR, PRODUCT_PRICE_ATTR 
} from "./product-detail-page-attributes";

const PRODUCT_DETAIL_URL: string = "inventory-item.html";

// ------------------ ACTIONS ------------------


// ------------------ ASSERTIONS ------------------
export async function productDetailPageShouldBeCorrect(product: Product){
    const url = page.url();
    expect(url).toContain(PRODUCT_DETAIL_URL);
    await productNameShouldBeCorrect(product.name);
    await productDescriptionShouldBeCorrect(product.description);
    await productPriceShouldBeCorrect(product.priceCurrency+product.priceNumber);
    await productAddToCartButtonShouldBeDisplayed();
}

async function productNameShouldBeCorrect(name: string) {
    expect(getProductName()).toBeVisible();
    expect(await getProductName().innerText()).toContain(name);
}

async function productDescriptionShouldBeCorrect(description: string) {
    expect(getProductDescription()).toBeVisible();
    expect(await getProductDescription().innerText()).toContain(description);
}

async function productPriceShouldBeCorrect(productPrice: string) {
    expect(getProductPrice()).toBeVisible();
    expect(await getProductPrice().innerText()).toContain(productPrice);
}

async function productAddToCartButtonShouldBeDisplayed() {
    expect(getProductAddToCartButton()).toBeVisible();
    expect(await getProductAddToCartButton().innerText()).toContain("Add to cart");
}


// ------------------ ELEMENTS ------------------
function getProductName(): Locator{
    return page.locator(PRODUCT_NAME_ATTR);
}

function getProductDescription(): Locator{
    return page.locator(PRODUCT_DESCRIPTION_ATTR);
}

function getProductPrice(): Locator{
    return page.locator(PRODUCT_PRICE_ATTR);
}

function getProductAddToCartButton(): Locator{
    return page.locator(PRODUCT_DETAIL_ADD_TO_CART_BUTTON_ATTR);
}
