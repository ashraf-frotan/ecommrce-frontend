// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:['@nuxtjs/tailwindcss'],
    app:{
        head:{
            title:'Ecommerce',
            meta:[
                {name:'description',content:'Ecommerce website'}
            ],
            link:[
                {rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    }
})
