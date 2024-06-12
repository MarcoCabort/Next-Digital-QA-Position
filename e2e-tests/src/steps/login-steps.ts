import {Given, When, Then} from "@cucumber/cucumber";

import { STANDARD_USER } from "../utils/usernames";
import { CORRECT_PASSWORD } from "../utils/passwords";
import { navigateToLoginPage } from "../pages/login/login-page";

// ------------------ GIVEN ------------------
Given('a user that is in the login page', async function(){
    navigateToLoginPage();
});


// ------------------ WHEN ------------------
When('the user introduce the standard user username', async function(){
    await fillUsernameInput(STANDARD_USER);
});

When('the user introduce the correct password', async function(){
    await fillPasswordInput(CORRECT_PASSWORD);
});

// ------------------ THEN ------------------
