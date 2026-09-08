/* Same-origin document transitions, with a normal-navigation fallback. */
(()=>{
 const root=document.documentElement,key='majed-page-transition';
 const reduced=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const native='onpageswap' in window&&'onpagereveal' in window;
 let entering=null,leaving=false;
 try{const saved=JSON.parse(sessionStorage.getItem(key)||'null');sessionStorage.removeItem(key);if(saved&&saved.to===location.href&&Date.now()-saved.at<15000)entering=saved.mode;}catch{}
 root.dataset.pageTransition=entering||'fade';
 if(entering&&!native&&!reduced()){
  root.dataset.pageEntering='true';
  document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>delete root.dataset.pageEntering,850),{once:true});
 }
 window.addEventListener('pageshow',e=>{leaving=false;delete root.dataset.pageLeaving;if(e.persisted){delete root.dataset.pageEntering;root.dataset.pageTransition='fade';}});
 document.addEventListener('click',e=>{
  const a=e.target.closest?.('a[href]');
  if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.hasAttribute('download')||(a.target&&a.target!=='_self'))return;
  const target=new URL(a.href,location.href);
  if(target.origin!==location.origin||!['http:','https:','file:'].includes(target.protocol)||!target.pathname.endsWith('.html')||target.href===location.href)return;
  if(target.pathname===location.pathname&&target.search===location.search)return;
  if(reduced())return;
  if(leaving){e.preventDefault();return;}
  const mode=a.closest('.marquee')?'rise':'fade';root.dataset.pageTransition=mode;
  try{sessionStorage.setItem(key,JSON.stringify({to:target.href,at:Date.now(),mode}));}catch{}
  if(native)return;
  e.preventDefault();leaving=true;root.dataset.pageLeaving='true';
  setTimeout(()=>location.assign(target.href),mode==='rise'?650:400);
 });
})();
