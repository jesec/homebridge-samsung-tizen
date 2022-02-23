const { description } = require('../../package')

module.exports = {
    title: 'Homebridge Samsung Tizen',
    description: description,

    base: '/homebridge-samsung-tizen/',

    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    themeConfig: {
        repo: 'tavicu/homebridge-samsung-tizen',
        docsDir: 'docs',
        searchPlaceholder: 'Search ...',
        nav: [
            {
                text: 'Donate',
                items: [
                    { text: 'PayPal', link: 'https://www.paypal.com/donate?hosted_button_id=5QLCDRNH77Z9L' },
                    { text: 'Buy Me a Coffee', link: 'https://www.buymeacoffee.com/tavicu' }
                ]
              }
        ],
        sidebar: [
            {
                title: 'Introduction',
                path: '/',
                collapsable: false
            },
            {
                title: 'Guide',
                path: '/guide/',
                collapsable: false,
                children: [
                    '/guide/',
                    '/guide/using-vue',
                ]
            },
            {
                title: 'Config',
                path: '/config/',
                collapsable: false
            }
        ]
    },

    plugins: {
        'vuepress-plugin-medium-zoom': {
            options: {
                margin: 30,
                background: 'rgba(255,255,255,0.95)'
            }
        }
    }
}
