
const bubbleJawaban = document.getElementById('bubbleJawaban');
const chatJawaban = document.querySelector('.chatJawaban');

const timeQuestion = document.getElementById('timeQuestion');
const timeAsk = document.getElementById('timeAsk');

const originalElement = document.getElementById('chatContent');
const clonedElement = originalElement.cloneNode(true);

const originalPertanyaan = document.getElementById('chatPertanyaan');
const clonedPertanyaan = originalPertanyaan.cloneNode(true);

const originalJawaban = document.getElementById('chatJawaban');
const clonedJawaban = originalJawaban.cloneNode(true);


const botSay = (data) => {
  return [
    `Hi. Nama saya Fabot, siapa nama kamu?`,/*0*/
    `hallo ${data?.nama}, usia kamu berapa ya?`,/*1*/
    `ohh ${data?.usia}, kalo hobi kamu apa ya?`,/*2*/
  ]
}

const userSay = (data) => {
  return [
   ``,/*0*/
   `Hi nama saya ${data?.nama}`,/*1*/
   `saya masih berusia ${data?.usia} tahun`,/*2*/
  ]
}

bubblePertanyaan.innerHTML = botSay()[0];

let init = 0;

function botStart(data) {
  init++
  
  console.log({init})
  
  const jawaban = document.getElementById('jawaban');
  const jawabanValue = jawaban.value;
  
  const clonedTimeQuestion = clonedElement.querySelector('#timeQuestion');
  const clonedTimeAsk = clonedElement.querySelector('#timeAsk');
  
  startTime();
   clonedTimeQuestion.innerHTML = timeQuestion.innerHTML;
  clonedTimeAsk.innerHTML = timeAsk.innerHTML;
  
  const clonedBubblePertanyaan = clonedElement.querySelector('#bubblePertanyaan');
  const clonedBubbleJawaban = clonedElement.querySelector('#bubbleJawaban');
  
  
  if (init === 1) {
    console.log('masuk ke ini 1🤓')
    console.log({ nama: jawaban.value});
    userDelay({ nama: jawaban.value });
    
    setTimeout(() => {
     
     clonedBubblePertanyaan.innerHTML = botSay({ nama: jawabanValue })[1];
     document.getElementById('chatContent').appendChild(clonedElement);
    },3000)
  }
  
  else if (init === 2) {
   console.log('masuk ke init 2😎')
   console.log({ usia: jawaban.value })
   botDelay({ usia: jawaban.value })
   
   bubblePertanyaan.innerHTML = botSay()[0];
   
   setTimeout(() => {
    
     startTime();
     
     originalJawaban.style.display = "block"
     clonedBubbleJawaban.innerHTML = userSay({ usia: jawabanValue })[2]
     
     document.getElementById('chatContent').appendChild(clonedElement);
   }, 1000)
  }
  
  else if (init === 3) {
    console.log('masuk ke init 3😄')
    botDelay({ nama: jawabanValue })
    
   bubbleJawaban.innerHTML = userSay({nama})[1];
    
    setTimeout(() => {
     startTime();
     
    
     document.getElementById('chatContent').appendChild(clonedElement);
   }, 3000)
  }
}

function botDelay(pertanyaanBot) {
  
  const clonedBubblePertanyaan = clonedElement.querySelector('#bubblePertanyaan');
  const clonedBubbleJawaban = clonedElement.querySelector('#bubbleJawaban');
  
  jawaban.value = "";
  bubblePertanyaan.innerHTML = botSay(pertanyaanBot)[init];
  
  if (init === 2) {
    setTimeout(() => {
    },3000)
  }
}

function userDelay(jawabanUser) {
  jawaban.value = "";
  
  setTimeout(() => {
    
    originalJawaban.style.display = "block"
    bubbleJawaban.innerHTML = userSay(jawabanUser)[init];
  }, [1000]);
}

/*kode validasi JAM*/

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  h = checkTime(h);
  timeAsk.innerHTML = `${h}.${m}`;
  timeQuestion.innerHTML = `${h}.${m}`;
}

function checkTime(i) {
  if (i < 10) {
  i = "0" + i;
   }
  return i;
 }

/*kode validasi tanggal*/

const currentDate = new Date();
const d = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const y = currentDate.getFullYear();

const date = document.querySelector('.date');

const monthNames = [
  "Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember",
  ]

date.innerHTML = `${d} ${monthNames[monthIndex]} ${y}`;