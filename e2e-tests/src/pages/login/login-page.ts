import {page} from "../../support/hooks"

const BASE_URL: string = "https://www.saucedemo.com/";

// ------------------ ACTIONS ------------------
export function navigateToLoginPage(){
    page.goto(BASE_URL);
}
// ------------------ ASSERTIONS ------------------
// ------------------ ELEMENTS ------------------
