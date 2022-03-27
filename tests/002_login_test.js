Feature('Login');
const {email} = require('./001_registration_test')

Scenario('Login With valid data', ({ I }) => {
    I.amOnPage("login")
    // Input Username
    I.waitForVisible("#your_email", process.env.TIMEOUT)
    I.fillField("#your_email", email)
    // Input Password
    I.waitForVisible("#password", process.env.TIMEOUT)
    I.fillField("#password", "password")
    // Click Submit
    I.waitForVisible({ name: "login" })
    I.click({ name: "login" })
    // Verify Success message is appear
    I.waitForText("Success", process.env.TIMEOUT)
});
