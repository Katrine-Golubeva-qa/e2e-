describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');//зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// проверяю цвет кнопки

         cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
         cy.get('#loginButton').click(); //нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible');// виден для пользователя
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден для пользователя
         })

         it('Верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio/');//зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// проверяю цвет кнопки
   
            cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
            cy.get('#pass').type('iLoveqastudio7'); //ввели неверный пароль
            cy.get('#loginButton').click(); //нажал войти
   
            cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю на совпадение текст
            cy.get('#messageHeader').should('be.visible');// виден для пользователя
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден для пользователя
            })

            it('Неверный логин и верный пароль', function () {
                cy.visit('https://login.qa.studio/');//зашли на сайт
                cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// проверяю цвет кнопки
       
                cy.get('#mail').type('german12@dolnikov.ru'); //ввели верный логин
                cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
                cy.get('#loginButton').click(); //нажал войти
       
                cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю на совпадение текст
                cy.get('#messageHeader').should('be.visible');// виден для пользователя
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден для пользователя
                })

            it('Проверка, что в логине есть собачка', function () {
                cy.visit('https://login.qa.studio/');//зашли на сайт
                cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// проверяю цвет кнопки
       
                cy.get('#mail').type('germandolnikov.ru'); //ввел логин без собачки
                cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
                cy.get('#loginButton').click(); //нажал войти
       
                cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//проверяю на совпадение текст
                cy.get('#messageHeader').should('be.visible');// виден для пользователя
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден для пользователя
                })

                it('Проверка восстановления пароля', function () {
                    cy.visit('https://login.qa.studio/');//зашли на сайт
                    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// проверяю цвет кнопки
           
                    cy.get('#forgotEmailButton').click(); //нажимаю восстановить пароль

                    cy.get('#mailForgot').type('german@dolnikov.ru');// ввел почту для восстановления
                    cy.get('#restoreEmailButton').click(); //нажал отправить код
           
                    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//проверяю на совпадение текст
                    cy.get('#messageHeader').should('be.visible');// виден для пользователя
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден для пользователя
                    })

                    it('Проверка на приведение к строчным буквам в логине', function () {
                        cy.visit('https://login.qa.studio/');//зашли на сайт
                        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// проверяю цвет кнопки
               
                        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели верный логин
                        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
                        cy.get('#loginButton').click(); //нажал войти
               
                        cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю, что после авторизации вижу текст
                        cy.get('#messageHeader').should('be.visible');// виден для пользователя
                        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден для пользователя
                        })
    })

//план 
    //+ найти поле логин и ввести верный логин
    //+ найти поле пароль и ввести верный пароль
    //+ найти кнопку войти и нажать на нее
    //проверить, что авторизация прошла успешно