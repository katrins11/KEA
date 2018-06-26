import { browser, by, element } from 'protractor';

//PAGE OBJECT PAGE
export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  navigateToAdmin(){
    return browser.get('/admin');
  }
  navigateToSignIn(){
    return browser.get('/log-in');
  }
  navigateToPieces(){
    return browser.get('/pieces');
  }

  getHomeParagraphText() {
    return element(by.css('app-root app-home h1')).getText();
  }
  getLogInButton(){
    return element(by.css('[routerLink="log-in"]'));
  }
  getLogInText(){
    return element(by.css('app-log-in h2')).getText();
  }
}