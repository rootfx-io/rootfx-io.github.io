export default {
  base: '/', 
  title: "Rootfx.io",
  head: [
    // Google tag
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-4Q7YP9FWLN' }
    ],
    // Consent + config
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}

        // Default: no consent
        gtag('consent', 'default', {
          analytics_storage: 'denied'
        });

        gtag('js', new Date());
        gtag('config', 'G-4Q7YP9FWLN', {
          anonymize_ip: true
        });
      `
    ]
  ],

  themeConfig: {
    nav: [
      { text: 'Book', link: '/book' },
      { text: 'About Me', link: '/about' },
      { text: 'Software', link: '/software' },
      { text: 'Blog', link: '/blog/' }
    ],
  }
}

