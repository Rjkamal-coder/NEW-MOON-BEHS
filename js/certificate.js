/* CERTIFICATE: draws the certificate as a picture, and saves it as an image or PDF. Edit the wording below. */
function bindCert(){$('#cf').onsubmit=e=>{e.preventDefault();location.hash='/certificate?'+new URLSearchParams({id:$('#cid').value.trim(),roll:$('#croll').value.trim(),g:$('#cg').value,y:$('#cy').value})};
 const img=$('#cert');if(img)drawCert(img)}
function drawCert(img){const y=img.dataset.y,all=view('final',y),me=all.find(x=>x.id===img.dataset.id),s=rank(all.filter(x=>x.g===me.g),x=>x.pct).find(x=>x.id===me.id);
 const W=2000,H=1414,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d'),navy='#0b1e3f',gold='#b8860b';
 const text=(t,yy,size,font,color,max=1700)=>{x.fillStyle=color;x.textAlign='center';do{x.font=font.replace('#',size+'px');size-=2}while(x.measureText(t).width>max&&size>16);x.fillText(t,W/2,yy)};
 const line=(x1,x2,yy,color,w)=>{x.strokeStyle=color;x.lineWidth=w;x.beginPath();x.moveTo(x1,yy);x.lineTo(x2,yy);x.stroke()};
 const paint=logo=>{x.fillStyle='#fffdf6';x.fillRect(0,0,W,H);x.strokeStyle=navy;x.lineWidth=28;x.strokeRect(34,34,W-68,H-68);x.strokeStyle=gold;x.lineWidth=6;x.strokeRect(74,74,W-148,H-148);
  if(logo)x.drawImage(logo,W/2-100,110,200,200);
  text('NEW MOON Basic Education High School',385,60,'bold # Georgia,serif',navy);
  text('Camp (3), Kutupalong  ·  Hope for Education',440,32,'# Georgia,serif','#555');
  text('Certificate of Achievement',570,92,'bold # Georgia,serif',gold);
  text('This is to certify that',650,36,'italic # Georgia,serif',navy);
  text(s.name,760,86,'bold # Georgia,serif',navy);line(450,1550,790,gold,3);
  text(`Student ID ${s.id}  ·  Roll ${s.roll}  ·  Grade ${s.g}`,850,34,'# Georgia,serif',navy);
  text(`has completed the Final Examination of academic year ${yfull(y)}`,930,38,'# Georgia,serif',navy);
  text(`Total ${s.total}/${s.marks.length*100}  ·  ${s.pct}%  ·  Grade ${s.L}`,1010,44,'bold # Georgia,serif',navy);
  [['Class Teacher',430],['School Seal',1000],['Head Teacher',1570]].forEach(([t,cx])=>{line(cx-200,cx+200,1220,navy,2);x.fillStyle=navy;x.textAlign='center';x.font='30px Georgia,serif';x.fillText(t,cx,1265)});
  img.src=c.toDataURL('image/jpeg',.92)};
 const logo=new Image();logo.onload=()=>paint(logo);logo.onerror=()=>paint();logo.src=document.querySelector('.logo img').src;
 const file=`certificate-${s.id}-${y}`,save=(blob,name)=>{const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),5000)};
 const bytes=()=>Uint8Array.from(atob(img.src.split(',')[1]),ch=>ch.charCodeAt(0));
 $('#cimg').onclick=()=>img.src&&save(new Blob([bytes()],{type:'image/jpeg'}),file+'.jpg');
 $('#cpdf').onclick=()=>img.src&&save(jpgToPdf(bytes(),W,H),file+'.pdf')}
/* One A4 landscape PDF page holding the certificate picture. */
function jpgToPdf(jpg,w,h){const parts=[],off=[];let len=0;const add=d=>{const b=typeof d==='string'?new TextEncoder().encode(d):d;parts.push(b);len+=b.length};
 const obj=(n,body)=>{off[n]=len;add(`${n} 0 obj\n${body}\nendobj\n`)};
 add('%PDF-1.4\n');obj(1,'<</Type/Catalog/Pages 2 0 R>>');obj(2,'<</Type/Pages/Kids[3 0 R]/Count 1>>');
 obj(3,'<</Type/Page/Parent 2 0 R/MediaBox[0 0 842 595]/Resources<</XObject<</I 4 0 R>>>>/Contents 5 0 R>>');
 off[4]=len;add(`4 0 obj\n<</Type/XObject/Subtype/Image/Width ${w}/Height ${h}/ColorSpace/DeviceRGB/BitsPerComponent 8/Filter/DCTDecode/Length ${jpg.length}>>\nstream\n`);add(jpg);add('\nendstream\nendobj\n');
 const draw='q 842 0 0 595 0 0 cm /I Do Q';obj(5,`<</Length ${draw.length}>>\nstream\n${draw}\nendstream`);
 const xref=len;add('xref\n0 6\n0000000000 65535 f \n'+[1,2,3,4,5].map(n=>String(off[n]).padStart(10,'0')+' 00000 n \n').join('')+`trailer\n<</Size 6/Root 1 0 R>>\nstartxref\n${xref}\n%%EOF`);
 return new Blob(parts,{type:'application/pdf'})}
