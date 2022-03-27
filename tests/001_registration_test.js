Feature('Register');
const {faker} = require("@faker-js/faker")
let email = faker.internet.email();

Scenario('Registering With valid data', ({ I }) => {
    I.amOnPage("")
    // Input Username
    I.waitForVisible("#firstName", process.env.TIMEOUT)
    I.fillField("#firstName", "Richi")
    // Input Password
    I.waitForVisible("#lastName", process.env.TIMEOUT)
    I.fillField("#lastName", "Ramadhan")
    // Input Email
    I.waitForVisible("#email", process.env.TIMEOUT)
    I.fillField("#email", email)
    // Input Phone Number
    I.waitForVisible("#phoneNumber", process.env.TIMEOUT)
    I.fillField("#phoneNumber", faker.phone.phoneNumber('+62#########'))
    // Input Address
    I.waitForVisible("#address", process.env.TIMEOUT)
    I.fillField("#address", "addresss")
    // Input Password
    I.waitForVisible("#password", process.env.TIMEOUT)
    I.fillField("#password", "password")
    // Input Confirm Password
    I.waitForVisible("#confirm_password", process.env.TIMEOUT)
    I.fillField("#confirm_password", "password")
    // Click Regist
    I.waitForVisible({name : "register"}, process.env.TIMEOUT)
    I.click({name : "register"})
    // verify 
    I.waitForText("Success")
});

module.exports= {
    email
}