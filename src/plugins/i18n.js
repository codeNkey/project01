import { createI18n } from "vue-i18n"
import en from '@/i18n/en.json'
import es from '@/i18n/es.json'
import ko from '@/i18n/ko.json'

const i18n = createI18n({
    locale: 'ko',
    fallBackLocale: 'ko',
    messages: {
        en,
        ko,
        es,
    }
})

export default i18n