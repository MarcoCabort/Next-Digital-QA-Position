import { Locator } from "playwright";
import {page} from "../../support/hooks"
import { LOGIN_BUTTON_ATTR, PASSWORD_INPUT_ATTR, USERNAME_INPUT_ATTR } from "./login-page-attributes";


const BASE_URL: string = "https://www.saucedemo.com/";

// ------------------ ACTIONS ------------------
export function navigateToLoginPage(){
    page.goto(BASE_URL);
}

export async function fillUsernameInput(username:string){
    await getUsernameInput().fill(username);
}

export async function fillPasswordInput(password:string){
    await getPasswordInput().fill(password);
}

export async function clickLoginButton(){
    await getLoginButton().click();
}


// ------------------ ASSERTIONS ------------------


// ------------------ ELEMENTS ------------------
function getUsernameInput(): Locator{
    return page.locator(USERNAME_INPUT_ATTR);
}

function getPasswordInput(): Locator{
    return page.locator(PASSWORD_INPUT_ATTR);
}

function getLoginButton(): Locator{
    return page.locator(LOGIN_BUTTON_ATTR);
}