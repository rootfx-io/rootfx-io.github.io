export default {
  title: "Rootfx.io",
  
 head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-4Q7YP9FWLN' }
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4Q7YP9FWLN');
      `
    ]
  ],
  themeConfig: {
    nav: [
      { text: 'Book', link: '/book/' },
      { text: 'About Me', link: '/about/' },
      { text: 'Software', link: '/software/' },
      { text: 'Blog', link: '/blog/' }
    ],
  }
}

