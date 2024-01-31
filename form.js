class FormSubmit{
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute('action');
        }
    }

    displaySuccess(){
        this.form.innerHtml = this.settings.success;
    }
    
    displayError() {
        this.form.innerHtml = this.settings.error;
    }

    init() {
        if (this.form) this.formButton.addEventListenner("click", () => this.displaySuccess());
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Mensagem NÃO enviada!</h1>",
})


formSubmit.init();
