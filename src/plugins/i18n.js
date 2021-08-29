import Vue from 'vue'
import VueI18n from 'vue-i18n'

const messages = {
  en: {
    language: {
      ru: 'Russia',
      en: 'English',
    },
    country: {
      label: 'Country',
    },
    region: {
      label: 'Region',
    },
    republic: {
      label: 'Republic',
    },
    city: {
      label: 'City',
    },
    streat: {
      label: 'Streat',
    },
    house: {
      label: 'House',
    },
    appartment: {
      label: 'Appartment',
    },
    poscode: {
      label: 'Poscode',
    },
    additional: {
      label: 'Additional',
    },
    action: {
      validateForm: 'Validate Form',
      results: 'Results:',
    },
    errors: {
      required: 'Required field',
      onlyNumber: 'Only numeric field',
      minLength: 'Min length is',
    },
  },
  ru: {
    language: {
      ru: 'Русский',
      en: 'Английский',
    },
    country: {
      label: 'Страна',
    },
    region: {
      label: 'Регион',
    },
    republic: {
      label: 'Республика',
    },
    city: {
      label: 'Город',
    },
    streat: {
      label: 'Улица',
    },
    house: {
      label: 'Дом',
    },
    appartment: {
      label: 'Квартира',
    },
    poscode: {
      label: 'Почтовый индекс',
    },
    additional: {
      label: 'Дополнительно',
    },
    action: {
      validateForm: 'Валидировать форму',
      results: 'Результат:',
    },
    errors: {
      required: 'Обязательное поле',
      onlyNumber: 'Только числовое поле',
      minLength: 'Минимальная длинна ',
    },
  },
}

Vue.use(VueI18n, {
  locale: 'ja', // set locale
  messages, // set locale messages
})

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: messages,
})
