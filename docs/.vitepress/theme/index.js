  
  import DefaultTheme from 'vitepress/theme'

function loadGA() {
  if (window.gtag) return

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4Q7YP9FWLN'
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag(){window.dataLayer.push(arguments)}
  window.gtag = gtag

  gtag('js', new Date())
  gtag('config', 'G-4Q7YP9FWLN', {
    anonymize_ip: true
  })
}

function showConsentBanner() {
  if (localStorage.getItem('ga-consent')) {
    loadGA()
    return
  }

  const banner = document.createElement('div')
  banner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #111;
      color: white;
      padding: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 9999;
      font-size: 14px;
    ">
      <span>
        This site uses analytics to improve content.
      </span>
      <button style="
        background: #3b82f6;
        border: none;
        color: white;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
      ">
        Accept
      </button>
    </div>
  `

  banner.querySelector('button').onclick = () => {
    localStorage.setItem('ga-consent', 'true')
    banner.remove()
    loadGA()
  }

  document.body.appendChild(banner)
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      showConsentBanner()

      router.afterEach((to) => {
        if (window.gtag) {
          window.gtag('config', 'G-4Q7YP9FWLN', {
            page_path: to.path,
          })
        }
      })
    }
  }
}
