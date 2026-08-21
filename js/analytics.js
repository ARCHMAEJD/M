/* Google Analytics — replace G-15478078009 with your real Measurement ID */
const GA_ID = 'G-15478078009';

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
window.gtag = gtag;

gtag('js', new Date());
gtag('config', GA_ID);

const script = document.createElement('script');
script.async = true;
script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
document.head.appendChild(script);
