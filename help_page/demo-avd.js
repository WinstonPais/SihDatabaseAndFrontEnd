(function(){var css=getBannerCss(),head=document.head||document.getElementsByTagName('head')[0],style=document.createElement('style');style.type='text/css';if(style.styleSheet){style.styleSheet.cssText=css;}else{style.appendChild(document.createTextNode(css));}
head.appendChild(style);var bannerWrapper=document.getElementsByClassName('js-demo-avd')[0];bannerWrapper.innerHTML=getBannerHTML();loadAvdScript();bannerWrapper.addEventListener('click',function(event){if(event.target.className=='demo-avd__close'){event.preventDefault();bannerWrapper.setAttribute('style','display: none;');bannerWrapper.remove();}});function getBannerCss(){return '.demo-avd{position:fixed;width:200px;border-radius:0.3em;overflow:hidden;-webkit-box-shadow:0 4px 20px rgba(0,0,0,0.2);box-shadow:0 4px 20px rgba(0,0,0,0.2);z-index:99;top:20px;right:20px; backdrop-filter: blur(10px);}.demo-avd--light{background-color:rgba(0,0,0,0.8);}.demo-avd--dark{background-color:rgba(255,255,255,0.8)}.demo-avd--light [data-theme],.demo-avd--dark [data-theme]{background-color: transparent;}#cf{padding: 16px;}.demo-avd--light .demo-avd__label,.demo-avd--light .cf-powered-by{color:rgba(255,255,255,0.7)}.demo-avd--light .demo-avd__text a,.demo-avd--light .cf-text{color:white;}.demo-avd--dark .demo-avd__label,.demo-avd--dark .cf-powered-by{color:rgba(0,0,0,0.5)}.demo-avd--dark .demo-avd__text a,.demo-avd--dark .cf-text,.demo-avd--dark .cf-img-wrapper{color:rgba(0,0,0,0.8)}.demo-avd__img a,.demo-avd__img svg,.cf-img-wrapper{display:block; max-width: 130px;}.demo-avd__text-wrapper{padding:16px;font-family: sans-serif !important;}.demo-avd__label{text-transform:uppercase;font-size:9px;letter-spacing:0.1em;margin:0 0 0.6em}.demo-avd__text a,.cf-text{font-size:14px;display:block;line-height:1.4}.demo-avd__text a:hover,.cf-text:hover{text-decoration: underline;}.cf-img-wrapper img{display:block;}.cf-powered-by{display:block;font-size:11px;text-decoration: none;}.cf-text{margin:16px 0px 8px;text-decoration: none;}.demo-avd__close{display:block;width:32px;height:32px;position:absolute;z-index:1;top:0;right:0;background:url(../../assets/img/icon-avd-close.svg) no-repeat 0 0;opacity:0.8;cursor:pointer;}.demo-avd--dark .demo-avd__close{background-image: url(../../assets/img/icon-avd-close-dark.svg);}.demo-avd__close:hover{opacity:1}@media (max-width:800px){.demo-avd-cf{position:fixed;bottom:0!important;top: auto!important;left:0!important;right:0!important;width:100%!important;border-radius:0;}.demo-avd-cf.demo-avd-cf--top-mb{top:0!important;bottom:auto!important;}.cf-img-wrapper{display: none;}.cf-text{margin-top: 2px;]}}';};function getBannerHTML(){return '<div id="codefund"></div><div class="demo-avd__close"></div>';};function loadAvdScript(){var script=document.createElement("script");script.type="text/javascript";script.async="async";script.src="https://codefund.io/properties/237/funder.js?template=default&theme=unstyled";bannerWrapper.appendChild(script);};})();
