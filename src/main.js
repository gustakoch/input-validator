import './style.css'

const validator = {
  initiate() {
    this.mount()
  },
  mount() {
    let validator = {
      handleSubmit(event) {
        event.preventDefault()

        validator.clearAllErrors()

        let send = true
        let inputs = formValidator.querySelectorAll('input')

        for (let input of inputs) {
          let message = validator.checkInput(input)

          if (message !== true) {
            send = false
            validator.showError(input, message)
          }
        }

        if (send) {
          formValidator.submit()
        }
      },
      checkInput(input) {
        let rules = input.getAttribute('validator-rules')

        if (rules) {
          rules = rules.split('|')

          for (let rule of rules) {
            let ruleDetails = rule.split('=')
            let inputValue = input.value.trim()

            switch(ruleDetails[0]) {
              case 'required':
              if (!inputValue) {
                return 'Este campo é obrigatório.'
              }
              break
              case 'min':
                if (inputValue.length < ruleDetails[1]) {
                  let text = ruleDetails[1] == 1 ? 'caracter' : 'caracteres'

                  return `Este campo deve ter no mínimo ${ruleDetails[1]} ${text}.`
                }
              break
              case 'max':
                if (inputValue.length > ruleDetails[1]) {
                  let text = ruleDetails[1] == 1 ? 'caracter' : 'caracteres'

                  return `Este campo deve ter no máximo ${ruleDetails[1]} ${text}.`
                }
              break
              case 'email':
                if (inputValue) {
                  let regex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                  if (!regex.test(inputValue.toLowerCase())) {
                    return 'E-mail inválido.'
                  }
                }
              break
              case 'confirm':
                let passwordElement = document.querySelector('input[name="password"]')

                if (!passwordElement) {
                  return
                }

                let passwordValue = passwordElement.value.trim()

                if (passwordValue != inputValue) {
                  return 'As senhas não conferem.'
                }
              break
            }
          }
        }

        return true;
      },
      showError(input, message) {
        input.style.borderColor = '#FF0000'

        let divError = document.createElement('div')
        divError.classList.add('error')
        divError.innerHTML = message

        input.parentElement.insertBefore(divError, input.nextElementSibling)
      },
      clearAllErrors() {
        let inputs = formValidator.querySelectorAll('input')
        let errors = formValidator.querySelectorAll('.error')

        for (let input of inputs) {
          input.style.borderColor = ''
        }

        for (let error of errors) {
          error.remove()
        }
      }
    }

    let formValidator = document.querySelector('.input-validator')
    formValidator.addEventListener('submit', validator.handleSubmit)
  }
}

window.validator = validator
