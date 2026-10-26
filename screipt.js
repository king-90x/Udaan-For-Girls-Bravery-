// Navbar shadow on scroll
const nav=document.querySelector('.navbar');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>20));
// Reveal on scroll (content stays visible if JS fails)
const items=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  document.documentElement.classList.add('js');
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.05});
  items.forEach(el=>io.observe(el));
  setTimeout(()=>items.forEach(el=>el.classList.add('in')),3000);
}
// Labels flip into strengths on click
document.querySelectorAll('.label-chip').forEach(c=>c.addEventListener('click',()=>c.classList.toggle('flip')));
// Letter: save to this browser only
const ta=document.querySelectorAll('.letter textarea'),msg=document.getElementById('saved');
ta.forEach((t,i)=>{t.value=localStorage.getItem('udaan'+i)||'';});
const save=document.getElementById('saveLetter');
if(save)save.addEventListener('click',()=>{ta.forEach((t,i)=>localStorage.setItem('udaan'+i,t.value));msg.classList.add('show');setTimeout(()=>msg.classList.remove('show'),2500)});


document.querySelectorAll('.flip').forEach(card => {
  const toggle = () => {
    const on = card.classList.toggle('flipped');
    card.setAttribute('aria-pressed', on);
  };
  card.addEventListener('click', toggle);
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
});



// document.querySelectorAll('.flip').forEach(card => {
//   const toggle = () => {
//     const on = card.classList.toggle('flipped');
//     card.setAttribute('aria-pressed', on);
//   };
//   card.addEventListener('click', toggle);
//   card.addEventListener('keydown', e => {
//     if (e.key === 'Enter' || e.key === ' ') {
//       e.preventDefault();
//       toggle();
//     }
//   });
// });
