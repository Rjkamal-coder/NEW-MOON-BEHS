/* HELPERS: calculations and shared building blocks. Normally you do not need to edit this file. */
const calc=m=>{const total=m.reduce((a,b)=>a+b,0),pct=+(total/m.length).toFixed(2);return{marks:m,total,pct,L:pct>=90?'A+':pct>=80?'A':pct>=70?'B':pct>=60?'C':pct>=50?'D':'F'}};
const yr=s=>s.y||CURRENT_YEAR;
/* one entry per student ID, for the Student Directory: latest name and grade, any photo, and every academic year */
const UNIQ=[...new Set(S.map(s=>s.id))].map(id=>{const a=S.filter(s=>s.id===id).sort((p,q)=>yr(q).localeCompare(yr(p)));return{...a[0],photo:(a.find(s=>s.photo)||a[0]).photo,years:[...new Set(a.map(yr))].sort()}});
const yOf=q=>YEARS.includes(q.y)?q.y:CURRENT_YEAR;
const yfull=y=>`20${y.slice(0,2)}-20${y.slice(3)}`;
const view=(e,y=CURRENT_YEAR)=>S.filter(s=>yr(s)===y&&Array.isArray(s[e])&&s[e].length===subs(s.g).length).map(s=>({...s,...calc(s[e])}));
const rank=(arr,key)=>{const s=[...arr].sort((a,b)=>key(b)-key(a));return s.map(x=>({...x,r:1+s.findIndex(y=>key(y)===key(x))}))};
const best=rank(view('final'),s=>s.pct).slice(0,5);
const sec=(t,b)=>`<section style="margin-top:36px"><h2>${t}</h2>${b}</section>`;
const $=q=>document.querySelector(q),esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const links=[['/','Home'],['/teachers','Teachers'],['/directory','Student Directory'],['/leaderboard','Leaderboard'],['/subjects','Subject Rankings'],['/results','Results'],['/certificate','Certificate'],['/news','Newsroom'],['/contact','Contact'],['/admissions','Admission Portal'],['/about','About']];
const page=(t,p)=>()=>`<h1>${t}</h1><p style="font-size:18px;max-width:640px">${p}</p>`;
const gsel=g=>`<select id="g">${[...Array(12)].map((_,i)=>`<option value="${i+1}" ${g==i+1?'selected':''}>Grade ${i+1}</option>`).join('')}</select>`;
const avatar=(p,n)=>p?`<span class="av"><img src="${esc(p)}" alt="${esc(n)}" loading="lazy" onerror="this.parentNode.classList.add('ph');this.remove()"></span>`:`<span class="av ph" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-3.300 0-8 1.700-8 5v1h16v-1c0-3.300-4.700-5-8-5z"/></svg></span>`;
const ICONS={yt:`<svg viewBox='0 0 24 24' width='26' height='26' fill='currentColor' aria-hidden='true'><path d='M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.900.5A3 3 0 0 0 1 7.2C.5 9.100.5 12 .5 12s0 2.9.5 4.800a3 3 0 0 0 2.100 2.100c1.900.5 8.900.5 8.900.5s7 0 8.900-.5a3 3 0 0 0 2.100-2.100c.5-1.900.5-4.800.5-4.800s0-2.900-.5-4.800zM9.700 15.300V8.700l5.800 3.300z'/></svg>`,
wa:`<svg viewBox='0 0 24 24' width='26' height='26' fill='currentColor' aria-hidden='true'><path d='M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1a6.700 6.700 0 0 1-3.300-2.900c-.2-.4.2-.4.7-1.300.1-.2 0-.3 0-.4l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.200s.9 2.500 1.100 2.700c.1.2 1.800 2.700 4.400 3.800 1.600.7 2.200.7 3 .6.5-.1 1.500-.6 1.700-1.200.2-.6.2-1.100.2-1.200s-.2-.2-.5-.4z'/></svg>`,ml:`<svg viewBox='0 0 24 24' width='26' height='26' fill='currentColor' aria-hidden='true'><path d='M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.500 2v.5L12 13l7.500-5.500V7h-15zm15 2.900L12 15.400 4.500 9.900V17h15V9.900z'/></svg>`,fb:`<svg viewBox='0 0 24 24' width='26' height='26' fill='currentColor' aria-hidden='true'><path d='M22 12a10 10 0 1 0-11.600 9.900v-7H7.900V12h2.500V9.800c0-2.500 1.500-3.900 3.800-3.900 1.100 0 2.200.2 2.200.2v2.500h-1.300c-1.200 0-1.600.8-1.600 1.600V12h2.800l-.4 2.900h-2.300v7A10 10 0 0 0 22 12z'/></svg>`};
const ICON=(href,svg,label,bg,blank)=>`<a href='${K[href]?'#':href}'${blank?" target='_blank' rel='noopener'":''}${K[href]?` data-k='${href}'`:''} aria-label='${label}' title='${label}' style='width:48px;height:48px;border-radius:50%;display:inline-grid;place-items:center;background:${bg};color:#fff'>${svg}</a>`;
const ROW=(href,svg,label,bg,blank)=>`<a href='${K[href]?'#':href}'${blank?" target='_blank' rel='noopener'":''}${K[href]?` data-k='${href}'`:''} aria-label='${label}'><span class='ci' style='background:${bg}'>${svg}</span><span>${label}</span></a>`;
const ctc=v=>{const f=v?ROW:ICON;return f('wa',ICONS.wa,'WhatsApp','#25D366',0)+f('ml',ICONS.ml,'Email','#1d4ed8',0)+f(FB,ICONS.fb,'Facebook','#1877f2',1)+f(YT,ICONS.yt,'YouTube','#e60000',1)};
function bindApply(){const f=$('#af'),m=$('#am');f.onsubmit=async ev=>{ev.preventDefault();m.textContent='';const fd=new FormData(f);
 const wa='https://wa.me/'+atob(K.wa)+'?text='+encodeURIComponent(`Admission documents for ${fd.get('full_name')} (${fd.get('desired_class')})`);
 const fail=t=>{m.style.color='#b91c1c';m.textContent=t};
 const b=f.querySelector('button');b.disabled=true;b.textContent='Sending…';
 try{const res=await fetch(FORMSPREE,{method:'POST',body:fd,headers:{Accept:'application/json'}});
  if(res.ok){f.reset();m.style.color='#15803d';m.innerHTML=`Thank you. Your application was sent. Now send the UN card photo to finish.<br><a class="btn" style="margin-top:8px" target="_blank" rel="noopener" href="${esc(wa)}">Send documents on WhatsApp</a>`}
  else fail('The application could not be sent. Please try again or contact the school on WhatsApp.')}
 catch(x){fail('Could not connect. Check your internet and try again, or contact the school on WhatsApp.')}
 b.disabled=false;b.textContent='Submit Application'}}
function bindDonate(){const f=$('#df'),m=$('#dm'),c=$('#dc'),amt=$('#d_amount');
 f.querySelectorAll('[data-amt]').forEach(b=>b.onclick=()=>amt.value=b.dataset.amt);
 const go=document.querySelector('[data-go]');go&&(go.onclick=e=>{e.preventDefault();$('#pledge').scrollIntoView({behavior:'smooth'})});
 f.onsubmit=async ev=>{ev.preventDefault();const fd=new FormData(f),b=f.querySelector('button:not([type])');
  const text=`Hello, I would like to donate to NEW MOON Basic Education High School.\nName: ${fd.get('name')}\nCountry: ${fd.get('country')}\nEmail: ${fd.get('email')}\nAmount: ${fd.get('amount')} ${fd.get('currency')} (${fd.get('frequency')})\nFor: ${fd.get('purpose')}\nPlease tell me how to transfer it.`;
  const links=`<a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/${atob(K.wa)}?text=${encodeURIComponent(text)}">Connect on WhatsApp</a><a class="btn o" href="mailto:${atob(K.ml)}?subject=${encodeURIComponent('Donation pledge')}&body=${encodeURIComponent(text)}">Connect by email</a>`;
  b.disabled=true;m.textContent='Sending…';m.style.color='';c.innerHTML='';
  let ok=false;try{ok=(await fetch(FORMSPREE,{method:'POST',body:fd,headers:{Accept:'application/json'}})).ok}catch(x){}
  m.style.color=ok?'#15803d':'#b91c1c';
  m.textContent=ok?'Thank you. Your pledge was sent. Now connect with school officials to arrange the transfer.':'Your pledge could not be sent from here. Please send it to school officials using a button below.';
  c.innerHTML=links;b.disabled=false}}
const ysel=(y,id='y')=>`<select id="${id}" aria-label="Academic year">${YEARS.map(v=>`<option value="${v}" ${y===v?'selected':''}>Year ${v}</option>`).join('')}</select>`;
const esel=e=>`<select id="e">${Object.entries(EX).map(([k,v])=>`<option value="${k}" ${e===k?'selected':''}>${v}</option>`).join('')}</select>`;

/* DISTINCTION (D) - Grade 12 only. Minimum mark for a D in each subject. Edit the numbers here if the rule changes. */
const DMIN={English:75,Mathematics:80,Burmese:75,Chemistry:80,Physics:80,Biology:75};
const dRow=(g,n,m)=>`<tr><td>${n}</td><td style="text-align:right">${m}/100${g===12&&DMIN[n]!==undefined&&m>=DMIN[n]?'<b class="dist" title="Distinction">D</b>':''}</td></tr>`;
const dCount=(g,names,marks)=>g!==12?0:names.reduce((a,n,i)=>a+(DMIN[n]!==undefined&&marks[i]>=DMIN[n]?1:0),0);

/* DONATION FORM: sends the pledge to the school, then offers WhatsApp and email. No money is taken here. */
function bindDonate(){const f=$('#df'),m=$('#dm');f.onsubmit=async ev=>{ev.preventDefault();const fd=new FormData(f),b=f.querySelector('button');
 const text=`Hello, I would like to donate to NEW MOON school.\nName: ${fd.get('donor_name')}\nAmount: ${fd.get('amount')} ${fd.get('currency')}\nFor: ${fd.get('purpose')}\nPhone: ${fd.get('phone')}${fd.get('email')?'\nEmail: '+fd.get('email'):''}${fd.get('country')?'\nCountry: '+fd.get('country'):''}${fd.get('message')?'\nMessage: '+fd.get('message'):''}`;
 b.disabled=true;b.textContent='Sending…';let ok=false;
 try{ok=(await fetch(FORMSPREE,{method:'POST',body:fd,headers:{Accept:'application/json'}})).ok}catch(x){}
 b.disabled=false;b.textContent='Continue';
 const wa='https://wa.me/'+atob(K.wa)+'?text='+encodeURIComponent(text),ml='mailto:'+atob(K.ml)+'?subject='+encodeURIComponent('Donation to NEW MOON school')+'&body='+encodeURIComponent(text);
 const name=esc(fd.get('donor_name')),btns=`<div class="row"><a class="btn" style="background:#15803d;color:#fff" href="${esc(wa)}" target="_blank" rel="noopener">${ok?'Message us on WhatsApp':'Send on WhatsApp'}</a><a class="btn o" href="${esc(ml)}">${ok?'Email us':'Send by email'}</a></div>`;
 m.innerHTML=ok?`<div class="thanks"><h2>Thank you, ${name}!</h2><p>Your kindness gives our learners hope. Your message has been sent to the school.</p><p>The school officials will contact you by <b>WhatsApp or email</b> to arrange the transfer.</p></div><p>You can also contact us now:</p>${btns}`
  :`<p><b>Thank you, ${name}. Your message has not been sent yet.</b><br>Please send it to the school with one of these buttons:</p>${btns}`;
 if(ok)f.reset();
 m.scrollIntoView({block:'nearest'})}}

/* NEWS and SCHOOL ACTIVITIES: picture and headline first, full story after tapping. */
function feed(q,items,path,title,intro,back,empty){const day=d=>new Date(d+'T00:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}),
 list=[...items].sort((a,b)=>b.date.localeCompare(a.date)),n=list.find(x=>x.id===q.id),pic=x=>`<img src="${esc(x.image)}" alt="" onerror="this.style.visibility='hidden'">`;
 if(q.id)return`<article class="story"><a class="btn o" href="#/${path}">← ${back}</a>${n?`<h1>${esc(n.title)}</h1><small>${day(n.date)}</small>${pic(n)}${n.body.map(p=>`<p>${esc(p)}</p>`).join('')}`:'<p>This story was not found.</p>'}</article>`;
 return`<h1>${title}</h1><p style="font-size:18px">${intro}</p><div class="news">${list.map(x=>`<a class="card" href="#/${path}?id=${encodeURIComponent(x.id)}">${pic(x)}<div><small>${day(x.date)}</small><h2>${esc(x.title)}</h2><span class="btn">${path==='news'?'Read full article':'Read full'}</span></div></a>`).join('')||`<p>${empty}</p>`}</div>`}
/* LEARNING RESOURCE pages */
const same=(a,b)=>String(a||'').trim().toLowerCase()===String(b||'').trim().toLowerCase();
const ssel=(list,s)=>`<select id="s" aria-label="Subject"><option value="">All subjects</option>${list.map(n=>`<option ${same(s,n)?'selected':''}>${n}</option>`).join('')}</select>`;
/* the chosen subject, ignored if this grade does not have it */
const pick=(q,list)=>list.find(n=>same(n,q.s))||'';
const resHead=(t,g,s,extra='')=>`<h1>${t}</h1><div class="row">${gsel(g)}${ssel(subs(g),s)}${extra}<a class="btn o" href="#/">← Home</a></div>`;
const none=t=>`<div class="card read"><p style="margin:0">${t}</p></div>`;
function pdfPage(q,items,title,byYear){const g=+(q.g||1),s=pick(q,subs(g)),
 /* academic year filter (Past Exam Papers only) */
 years=byYear?[...new Set([...YEARS,...items.map(x=>x.y).filter(Boolean)])].sort():[],y=years.includes(q.y)?q.y:'',
 ybox=byYear?`<select id="y" aria-label="Academic year"><option value="">All years</option>${years.map(v=>`<option value="${esc(v)}" ${y===v?'selected':''}>Year ${esc(v)}</option>`).join('')}</select>`:'',
 a=items.filter(x=>+x.g===g&&(!s||same(x.subject,s))&&(!y||x.y===y));
 return resHead(title,g,s,ybox)+(a.map(x=>`<div class="card read pdf"><span><small>${esc(x.subject)}${byYear&&x.y?' · '+yfull(x.y):''}</small><br><b>${esc(x.title)}</b></span><span class="row"><a class="btn" href="${esc(x.file)}" target="_blank" rel="noopener">Open PDF</a><a class="btn o" href="${esc(x.file)}" download>Download</a></span></div>`).join('')||none(`No ${s?s+' ':''}files for Grade ${g}${y?' in '+yfull(y):''} yet.`))}
/* School Activities: filter by grade and subject (items without them show only under "All") */
function actPage(q){const g=q.g||'',list=g?subs(+g):ALLSUB,s=pick(q,list),
 a=ACTIVITIES.filter(x=>(!g||+x.g===+g)&&(!s||same(x.subject,s)));
 const bar=`<div class="row"><select id="g" aria-label="Grade"><option value="">All grades</option>${[...Array(12)].map((_,i)=>`<option value="${i+1}" ${g==i+1?'selected':''}>Grade ${i+1}</option>`).join('')}</select>${ssel(list,s)}<a class="btn o" href="#/">← Home</a></div>`;
 const html=feed(q,q.id?ACTIVITIES:a,'activities','School Activities','Classroom and other activities at our school.','All activities',g||s?'No activities for this choice yet.':'No activities have been added yet.');
 return q.id?html:html.replace('<div class="news">',bar+'<div class="news">')}
