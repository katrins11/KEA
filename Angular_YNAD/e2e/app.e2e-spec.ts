import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

// OUR MAIN TEST PAGE
describe('angular-YNAD App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // // sleep to 100 miliseconds
  // browser.driver.sleep(100);

  it('Should display the frontPage', () => {
    page.navigateTo();
    // browser.pause();
    expect(page.getHomeParagraphText()).toEqual('Buy or rent art & design');
  });


  it('Should display the LogIn button', () => {
    page.navigateTo();
    expect(page.getLogInButton().getText()).toEqual('LOG IN');
  });


  it('Should route to logIn page', () => {
    page.navigateTo();
    page.getLogInButton().click();
    // browser.pause();
    expect(page.getLogInText()).toEqual('Sign up to Young Nordic Artists & Designers');
  });


  it('Try to go to page that needs to logIn to, should route to logIn page', () => {
    page.navigateToAdmin();
    // browser.pause();
    expect(page.getLogInText()).toEqual('Sign up to Young Nordic Artists & Designers');
  });


  it('Try to go to admin area without beeing logged in', () => {
    browser.get('/admin/my-profile');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"/log-in");
  });

  
  it('Try to put value to input -> Try to logIn', () => {
    page.navigateToSignIn();

    //Email
    element(by.id('email')).sendKeys('katrin@gmail.com');
    expect(element(by.id('email')).getAttribute('value')).toEqual('katrin@gmail.com');
    
    //Password
    element(by.id('password')).sendKeys('123');
    expect(element(by.id('password')).getAttribute('value')).toEqual('123');

    //Pushed logIn button
    element(by.id('btnLogIn')).click();
    // browser.pause();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"/admin/my-profile");
  });

});