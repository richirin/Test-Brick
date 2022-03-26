Feature('Register');
const {faker} = require("@faker-js/faker")
const verifiedEmail = faker.internet.email()
const query = `UPDATE registration 
               SET is_verified = True
               WHERE email = ${verifiedEmail};`

Scenario('Registering With valid data', ({ I }) => {
    const email = faker.internet.email()
    I.amOnPage("")
    // Input Username
    I.waitForVisible("#firstName", process.env.TIMEOUT)
    I.fillField("#firstName", "Richi")
    // Input Password
    I.waitForVisible("#lastName", process.env.TIMEOUT)
    I.fillField("#lastName", "Ramadhan")
    // Input Email
    I.waitForVisible("#email", process.env.TIMEOUT)
    I.fillField("#email", verifiedEmail)
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

Scenario.skip('Verified the email', ({ I }) => {
    I.amOnPage("h2")
    // Input driver class
    I.waitForVisible({name : "driver"}, process.env.TIMEOUT)
    I.fillField({name : "driver"}, "org.h2.Driver")
    // Input JDBC URL
    I.waitForVisible({name : "url"}, process.env.TIMEOUT)
    I.fillField({name : "url"}, "jdbc:h2:mem:testdb")
    // Input username
    I.click("Connect")
    // Input SQL Update
    pause()
    I.waitForText('Run', process.env.TIMEOUT)
    I.fillField('#sql', query)
    // Click Run
    I.click('Run')
});

module.exports= {
    verifiedEmail
}