/* APP: page switching, menu and start-up. */
function route(){const[p,qs]=location.hash.slice(1).split('?'),q=Object.fromEntries(new URLSearchParams(qs||'')),path=p||'/',f=R[path];
 $('#load').style.width='70%';
 setMenu(false);$('#nav').innerHTML=links.map(([t,l])=>`<a href="#${t}" class="${t===path?'on':''}">${l}</a>`).join('');
 $('#app').innerHTML=f?f(q):'<h1>Page not found</h1><p>This address does not match a page.</p><a class="btn" href="#/">Go home</a>';
 scrollTo(0,0);
 /* PC only: soft fade when moving to another page */
 if(path!==window.lastPath&&matchMedia('(min-width:1024px) and (prefers-reduced-motion:no-preference)').matches&&$('#app').animate)$('#app').animate([{opacity:0},{opacity:1}],220);window.lastPath=path;
setTimeout(()=>$('#load').style.width='0',200);
 const go=o=>{const n=new URLSearchParams({...q,...o});for(const[k,v]of[...n])if(!v)n.delete(k);location.hash=path+'?'+n};
 $('#g')&&($('#g').onchange=e=>go({g:e.target.value}));$('#n')&&($('#n').onchange=e=>go({n:e.target.value}));$('#s')&&($('#s').onchange=e=>go({s:e.target.value}));$('#e')&&($('#e').onchange=e=>go({e:e.target.value}));$('#y')&&($('#y').onchange=e=>go({y:e.target.value}));
 $('#q')&&($('#q').oninput=e=>{clearTimeout(window.t);window.t=setTimeout(()=>{const v=e.target.value;go({q:v});setTimeout(()=>{const i=$('#q');i.focus();i.setSelectionRange(v.length,v.length)},0)},300)});
 $('#af')&&bindApply();$('#df')&&bindDonate();$('#cf')&&bindCert();
 $('#f')&&($('#f').onsubmit=e=>{e.preventDefault();go({id:$('#id').value,roll:$('#roll').value,g:$('#rg').value,e:$('#re').value,y:$('#ry').value})})}
const setMenu=o=>{$('#nav').classList.toggle('open',o);$('#mb').setAttribute('aria-expanded',o);$('#mb').textContent=o?'✕':'☰';$('#mb').setAttribute('aria-label',o?'Close menu':'Menu');$('#ov').style.display=o?'block':'none';document.documentElement.style.overflow=o?'hidden':'';document.body.style.overflow=o?'hidden':''};$('#mb').onclick=()=>setMenu(!$('#nav').classList.contains('open'));document.addEventListener('click',e=>{if($('#nav').classList.contains('open')&&!e.target.closest('#nav,#mb'))setMenu(false)});addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});document.getElementById('fc').innerHTML=ctc();document.addEventListener('click',e=>{const a=e.target.closest('a[data-k]');if(!a)return;e.preventDefault();const v=atob(K[a.dataset.k]);if(a.dataset.k==='wa')window.open('https://wa.me/'+v,'_blank','noopener');else location.href='mailto:'+v});addEventListener('hashchange',route);route();
