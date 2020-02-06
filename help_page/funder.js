(function () {
  let timeout;

  function init(attempts) {
    clearTimeout(timeout)
    attempts = attempts || 1
    if (attempts > 3) return
    if (typeof CodeFundAd === 'undefined') {
      timeout = setTimeout(function () { init(attempts + 1) }, 350)
      return
    }
    new CodeFundAd({"selector":"#codefund_ad","template":"default","theme":"unstyled","fallback":false,"urls":{"impression":"https://codefund.io/display/2bc178c8-ee2f-4609-b6fa-ce3938d7a333.gif","campaign":"https://codefund.io/impressions/2bc178c8-ee2f-4609-b6fa-ce3938d7a333/click?campaign_id=796\u0026creative_id=300\u0026property_id=237\u0026template=default\u0026theme=unstyled","poweredBy":"https://codefund.io/invite/S4gfpTywkKY","adblock":"https://cdn2.codefund.app/assets/px.js","uplift":"https://codefund.io/impressions/2bc178c8-ee2f-4609-b6fa-ce3938d7a333/uplift?advertiser_id=239"},"creative":{"name":"Segment V2","headline":"Segment","body":"Send data to any tool without having to implement a new API every time.","cta":"Get started","imageUrls":{"icon":"https://cdn2.codefund.app/ngRiS6ka5VW6rfFFGpTmKamM","small":"https://cdn2.codefund.app/EhD89y8kRJsDyjCjbFYticYC","large":"https://cdn2.codefund.app/QqW9DYfRmBkAgfwwc6d41yJW","wide":"https://cdn2.codefund.app/7ZxCVg4qhdSKBw11eKJyrSXa"}}})
  }

  const codefundStylesheetId = 'codefund-style'
  const codefundScriptId = 'codefund-script'

  if (!document.getElementById(codefundStylesheetId)) {
    const stylesheet = document.createElement('link')
    stylesheet.setAttribute('id', codefundStylesheetId)
    stylesheet.setAttribute('rel', 'stylesheet')
    stylesheet.setAttribute('media', 'all')
    stylesheet.setAttribute('href', 'https://codefund.io/packs/css/code_fund_ad-827a3690.css')
    stylesheet.addEventListener('load', init)
    document.head.appendChild(stylesheet)
  }

  if (document.getElementById(codefundScriptId)) {
    init()
  } else {
    const script = document.createElement('script')
    script.setAttribute('id', codefundScriptId)
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://codefund.io/packs/js/code_fund_ad-06dc4ae80aa01bd09201.js')
    script.addEventListener('load', init)
    document.head.appendChild(script)
  }
})()
