describe('Тестирование покупки аватара', function () { // название набора тестов
    it('E2E тест на приобретение нового аватара для тренера', function () { // название теста
        cy.visit('https://pokemonbattle.ru/'); // переходим на сайт
        cy.get('input[type="email"]').type('USER_LOGIN'); // вводим логин
        cy.get('input[type="password"]').type('USER_PASSWORD'); // вводим пароль
        cy.get('button[type="submit"]').click(); // нажимаем кнопку подтверждения
        cy.wait(2000);
        cy.get('.header__container > .header__id').click({ force: true }); // клик на аватар тренера
        cy.get('[href="/shop"]').click(); // переходим в магазин
        cy.get('.available > button').first().click({ force: true }); // покупаем первый доступный аватар
        cy.get('.credit').type('4620869113632996'); // вводим номер карты
        cy.get('.k_input_ccv').type('125'); // вводим CVV
        cy.get('.k_input_date').type('1225'); // вводим срок действия карты
        cy.get('.k_input_name').type('NAME'); // вводим имя владельца карты
        cy.get('.pay-btn').click(); // нажимаем кнопку оплаты
        cy.get('#cardnumber').type('56456'); // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click(); // отправляем платеж
        cy.contains('Покупка прошла успешно').should('be.visible'); // проверяем успешность покупки
    });
});
