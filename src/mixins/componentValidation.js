export default {
  computed: {
    /**
     * Свойство, показывающее валидирован ли компонент
     */
    isValid() {
      return this.isRequired && this.isValidLength && this.isOnlyNumber
    },
    /**
     * Является ли поле обязательным
     */
    isRequired() {
      if (!this.settings?.required) return true
      return !!this.settings?.value
    },
    /**
     * Является ли поле числовым, просто props
     */
    isNumber() {
      return this.settings?.isNumber
    },
    /**
     * Если у поля задано правило по мин. длинне, то проверяем это условие
     */
    isValidLength() {
      const minLength = this.settings?.minLength
      if (!minLength) return true
      return this.settings?.value?.length >= minLength
    },
    /**
     * Если поле должно быть числовым isNumber, isOnlyNumber проверяет так ли это
     */
    isOnlyNumber() {
      const { isNumber } = this.settings
      if (!isNumber) return true
      console.log(parseInt(this.settings?.value))
      return !isNaN(this.settings?.value)
    },
  },
  methods: {
    /**
     * Проверяем правила для поля и если есть ошибки наполняем массив errors
     * TODO здесь возможно было бы правильнее всю валидацию проверять динамически
     * т.е. например вынести в отдельный объект
     * validate: {
     *    isRequired: func(),
     *    isValidLength: func(),
     *    isOnlyNumber: func()
     * }
     * и в цикле выполнять функции валидации и наполнять массив ошибок если они есть
     */
    setErrors() {
      const result = []
      if (!this.isRequired) result.push(this.$t('errors.required'))
      if (!this.isValidLength)
        result.push(
          `${this.$t('errors.minLength')} ${this.settings.minLength} symbols`
        )
      if (!this.isOnlyNumber) result.push(this.$t('errors.onlyNumber'))
      this.settings.errors = result
    },
    /**
     * если у поля есть правило isNumber - только числовое значение, то проверяем нажатые клавиши и отсеиваем не ну
     */
    press(e) {
      if (this.isNumber) {
        if ((e.keyCode >= 48 && e.keyCode <= 57) || e.keyCode === 8) {
          console.log()
        } else {
          e.preventDefault()
        }
      }
    },
    /**
     * Метод принудительно валидации, будет вызывать при необходимости из родительского компонента
     */
    forceValidate() {
      this.validate()
    },
    validate() {
      this.settings.isValid = this.isValid
      this.setErrors()
    },
    /**
     * Событие срабатывает при вводе значения  вполе
     */
    change(event) {
      this.settings.value = event.target.value
      this.validate()
    },
  },
}
