import {Given, When, Then} from "@cucumber/cucumber";
// ------------------ GIVEN ------------------
Given('a user that is in the login page', async function(){
    navigateToLoginPage();
});
// ------------------ WHEN ------------------
// ------------------ THEN ------------------
