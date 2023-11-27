
document.querySelectorAll(".product-detials__desc p")[3].innerHTML = `
    <style>
        .tim, .pa, .pa2{
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            color: red;
            font-weight: 700;
    font-size: 20px !important;
        }
        .tim .te{
            width: 100px;
            height: 107px;
            border-radius: 5px;
            color: red;
            font-size: 25px;
            box-shadow: 0px 0px 10px #00000066;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            font-weight: 700;
            font-size: 20px !important;
        }
        .pa2 h1{
            margin: 10px;
    font-weight: 700;
    font-size: 20px !important;
        }
    </style>
<div class="pa2"><h1>kdf</h1></div>
<div class="tim">
    <div class="te"><p class="te3">2</p></div>
    
    <div class="te te1"><p class="te1">1</p></div>
    <div class="te"><p class="te2">2</p></div>
</div>
<div class="pa">
    <h4>ثانيه</h4>
    <h4>دقيقه</h4>
    <h4>ساعة</h4>
</div>`
    setInterval(() => {
        //حصول على تاريخ ووقت محليين
const now = new Date();

// الحصول على ساعة من التاريخ
let hours = now.getHours();

// الحصول على دقائق من التاريخ
let minutes = now.getMinutes();
let seconds = now.getSeconds();
// الحصول على اليوم (AM أو PM) استنادًا إلى قيمة الساعات
const period = hours >= 12 ? 'مساءً' : 'صباحًا';

// تحويل الساعات إلى صيغة 12 ساعة
let displayHours = hours % 12 || 12;

// بناء نص الوقت
const timeString = `${displayHours}:${minutes} ${period}`;

// طباعة الوقت
// console.log('الوقت الحالي في المملكة العربية السعودية هو: ' + timeString);
document.querySelector(".te1").innerHTML = 60 - minutes;
document.querySelector(".te3").innerHTML = 60 - seconds;
document.querySelector(".pa2 h1").innerHTML = `   سينتهي العرض خلال :`;
if(displayHours >= 1 && period == "صباحًا"){
    document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelector(".te2").innerHTML = 6-displayHours;
}
if(displayHours >= 6 && period == "صباحًا"){
    document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelector(".te2").innerHTML = 16-displayHours;
}
if(displayHours >= 1 && period == "مساءً"){
    document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelector(".te2").innerHTML = 4-displayHours;
}
if(displayHours >= 4 && period == "مساءً"){
    document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelector(".te2").innerHTML = 14-displayHours;
}
if(displayHours >= 8 && period == "مساءً"){
       document.querySelector(".te2").innerHTML = 18-displayHours;
    }
    }, 1000);
