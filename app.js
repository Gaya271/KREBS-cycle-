const flashcards=[
 {term:'Citrate', def:'Formed from Acetyl‑CoA + Oxaloacetate'},
 {term:'Isocitrate', def:'Isomer of citrate'},
 {term:'α‑Ketoglutarate', def:'Produced after oxidative decarboxylation'},
 {term:'Succinyl‑CoA', def:'High‑energy thioester intermediate'},
 {term:'Succinate', def:'Formed with substrate‑level phosphorylation'},
 {term:'Fumarate', def:'Formed via oxidation of succinate'},
 {term:'Malate', def:'Hydrated form of fumarate'},
 {term:'Oxaloacetate', def:'Regenerated at the end of cycle'}
];

let i=0;
function showFlashcard(){
 document.getElementById('term').innerText=flashcards[i].term;
 document.getElementById('definition').innerText=flashcards[i].def;
}
document.getElementById('nextBtn').onclick=()=>{
 i=(i+1)%flashcards.length;
 showFlashcard();
};
showFlashcard();

const quizQuestions=[
 {
  q:'Which molecule combines with Acetyl‑CoA to begin the Krebs cycle?',
  options:['Malate','Oxaloacetate','Fumarate'],
  answer:1
 },
 {
  q:'Which step produces GTP (or ATP)?',
  options:['Succinyl‑CoA → Succinate','Malate → Oxaloacetate','Citrate → Isocitrate'],
  answer:0
 },
 {
  q:'Which step produces FADH₂?',
  options:['Succinate → Fumarate','Malate → Oxaloacetate','Isocitrate → α‑Ketoglutarate'],
  answer:0
 }
];

let qi=0;
function loadQuiz(){
 const q=quizQuestions[qi];
 document.getElementById('question').innerText=q.q;
 const optDiv=document.getElementById('options');
 optDiv.innerHTML='';
 q.options.forEach((o,idx)=>{
   const b=document.createElement('button');
   b.innerText=o;
   b.onclick=()=>alert(idx===q.answer?'Correct!':'Try again');
   optDiv.appendChild(b);
 });
}
loadQuiz();
