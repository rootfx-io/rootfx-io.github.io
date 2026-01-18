import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,

  enhanceApp({ router }) {
    if (typeof window === 'undefined') return

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4Q7YP9FWLN'
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(){window.dataLayer.push(arguments)}
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', 'G-4Q7YP9FWLN', { anonymize_ip: true })

    router.afterEach((to) => {
      window.gtag('config', 'G-4Q7YP9FWLN', {
        page_path: to.path
      })
    })
  }
}
