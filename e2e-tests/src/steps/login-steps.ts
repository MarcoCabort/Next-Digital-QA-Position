import {Given, When, Then} from "@cucumber/cucumber";

import { STANDARD_USER } from "../utils/usernames";
import { CORRECT_PASSWORD } from "../utils/passwords";
import { 
    clickLoginButton, 
    fillPasswordInput, 
    fillUsernameInput, 
    navigateToLoginPage 
} from "../pages/login/login-page";

// ------------------ GIVEN ------------------
Given('a user that is in the login page', async function(){
    navigateToLoginPage();
});

Given('a standard logged user that is in the products list page', async function(){
    navigateToLoginPage();
    await fillUsernameInput(STANDARD_USER);
    await fillPasswordInput(CORRECT_PASSWORD);
    await clickLoginButton();
});


// ------------------ WHEN ------------------
When('the user introduce the standard user username', async function(){
    await fillUsernameInput(STANDARD_USER);
});

When('the user introduce the correct password', async function(){
    await fillPasswordInput(CORRECT_PASSWORD);
});

When('the user clicks the Login button', async function(){
    await clickLoginButton();
});


// ------------------ THEN ------------------
