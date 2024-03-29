class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }

    displaySuccess() {
        this.form.innerHtml = this.settings.success;
    }

    displayError() {
        this.form.innerHtml = this.settings.error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    onSubmission(event) {
        event.preventDefault();
        event.target.disable = true;
        event.target.innerText = "Enviando...";
    }


    async sendForm(event) {
        try {
            this.onSubmission(event);
            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-type": "aplication/json",
                    Accept: "aplication/json",
                },
                body: JSON.stringify(this.getFormObject()),
            });
            this.displaySuccess();
        } catch {
            this.displayError();
            throw new Error(error);
        }
    }

    init() {
        if (this.form) this.formButton.addEventListenner("click", this.sendForm);
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });

