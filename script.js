// Simple lightbox and anchor smooth scroll
const lb = document.getElementById('lightbox');
const lbBody = lb.querySelector('.lightbox-body');
const lbClose = lb.querySelector('.close');

function openGallery(group){
  lbBody.innerHTML = '';
  const imgs = document.querySelectorAll(`img[data-gallery="${group}"]`);
  imgs.forEach((img,i)=>{
    const big = document.createElement('img');
    big.src = img.src;
    big.alt = img.alt || '';
    lbBody.appendChild(big);
  });
  lb.hidden = false;
}

document.querySelectorAll('[data-open]').forEach(btn=>{
  btn.addEventListener('click', ()=> openGallery(btn.dataset.open));
});

lbClose.addEventListener('click', ()=> lb.hidden = true);
lb.addEventListener('click', (e)=>{ if(e.target === lb) lb.hidden = true; });

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
