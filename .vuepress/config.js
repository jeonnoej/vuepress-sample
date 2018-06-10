module.exports = {
    title: 'Hello VuePress',
    description: 'Just DOC Site',
    themeConfig: {
        sidebar: [
            '/',
            '/docs/skpui/',
            '/docs/pui-react/pui-react.md',
        ],
        nav: [
            { text: 'Home', link: '/' },
            { text: 'SKPUI', link: '/docs/skpui/' },
            { text: 'PUI-REACT', link: '/docs/pui-react' }
          ],
        sidebarDepth: 2
    }
}
