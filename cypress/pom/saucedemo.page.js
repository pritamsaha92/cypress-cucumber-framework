class google {

    // Web Elements
    elements ={
        input_username : () => cy.get('input[data-test="username"]'),
        input_password : () => cy.get('input[data-test="password"]'),
        btn_login : () => cy.get('input[data-test="login-button"]'),
        inventory_container : () => cy.get('div[id="inventory_container"]')
    }
    
    // Methods
    enterUsername(username){
        this.elements.input_username()
        .should("be.visible")
        .type(username);
        
    }

    enterPassword(password){
        this.elements.input_password()
        .should("be.visible")
        .type(password);
    }

    clickLogin(){
        this.elements.btn_login()
        .should("be.visible")
        .click();
    }

    verifyLogin() {
        this.elements.inventory_container()
        .should("be.visible");
    }

  }
  export default google;