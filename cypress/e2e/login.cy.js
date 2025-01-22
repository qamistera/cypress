

import * as data from '../helpers/default_data.json'

describe('Проверка авторизации', function () 
{
    beforeEach('Начало теста', function ()
    {
        cy.wait(1000) // ждать 1000 мс // перед каждым тестом ждать 1 сек.
         
    });
    afterEach('Конец теста', function ()
    {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю.

    });

    it('Верный логин и верный пароль', function () 
    { 
        
        cy.visit('/'); //Зайти на сайт. (в конфиге название сайта)
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
         cy.get('#mail').type(data.login); // Найти поле E-mail ввести логин.
         cy.get('#pass').type(data.password); // Найти поле password и ввести его.
         cy.get('#loginButton').click();// Нажать кнопку войти.
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //После авторизации вижу этот текст.
         cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю.
         //cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю.
        
 
     })

     it('Верный логин и неверный пароль', function () 
     {
          cy.visit('https://login.qa.studio/'); //Зайти на сайт.
          cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
          cy.get('#mail').type('german@dolnikov.ru'); // Найти поле E-mail ввести логин.
          cy.get('#pass').type('iLoveqastudio100'); // Найти поле password  и ввести его с ошибкой.
          cy.get('#loginButton').click();// Нажать кнопку войти.
          cy.get('#messageHeader').contains('Такого логина или пароля нет'); //После авторизации вижу этот текст.
          cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю.
          //cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю.
          
  
     })


     it('Проверка логин на наличие @', function () 
     {
          cy.visit('https://login.qa.studio/'); //Зайти на сайт.
          cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
          cy.get('#mail').type('germandolnikov.ru'); // Найти поле E-mail ввести логин без @.
          cy.get('#pass').type('iLoveqastudio1'); // Найти поле password и ввести его.
          cy.get('#loginButton').click();// Нажать кнопку войти.
          cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //После авторизации вижу этот текст.
          cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю.
          //cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю.    
  
     })



     it('Проверка востановления пароля', function () 
     {
          cy.visit('https://login.qa.studio/'); //Зайти на сайт.
          cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
          cy.get('#forgotEmailButton').click();// Нажать кнопку востановить пароль.
          cy.get('#mailForgot').type('german@dolnikov.ru'); // Найти поле E-mail ввести логин для восстановления.
          cy.get('#restoreEmailButton').click();// Нажать кнопку отправить код.
          cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //вижу этот текст.
          cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю.  
          //cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю.

     })


     it('Проверка на приведение к строчным буквам в логине:', function () 
     {
          cy.visit('https://login.qa.studio/'); //Зайти на сайт.
          cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
          cy.get('#mail').type('GerMan@Dolnikov.ru'); // Найти поле E-mail ввести логин.
          cy.get('#pass').type('iLoveqastudio1'); // Найти поле password и ввести его.
          cy.get('#loginButton').click();// Нажать кнопку войти.
          cy.get('#messageHeader').contains('Авторизация прошла успешно'); //После авторизации вижу этот текст.
          cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю.
          //cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю.
         
  
      })



})     
