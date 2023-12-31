
        let malrt = document.querySelectorAll(".product-footer a");
        for(let i =0; 0<malrt.length; i++){
            malrt[i].addEventListener("click", function (){
                
                setTimeout(() => {
                       let mydiv = document.createElement("div");
                    mydiv.classList.add("owl-item");
                    document.querySelectorAll(".owl-stage")[1].appendChild(mydiv);
                    mydiv.innerHTML = `<div class="owl-item active" style="width: 161.833px; margin-left: 15px;"><div class="product product--light product-323750460">
                                    <a href="https://waeacksa.com/دورة-الثراء-وبناء-الرواد/p323750460" class="product--light__thumb ">
                                                                                    <img src="https://cdn.salla.sa/bEGEz/qqDQFHM3m3M9x4aKcDy4YQgvwgfr2lDjEwfn4dyb.jpg" alt="دورة الربح من التجارة الالكترونية الاحترافية">
                                                                            </a>
                                    <div class="product--light__meta">
                                        <a href="https://waeacksa.com/دورة-الثراء-وبناء-الرواد/p323750460">دورة الربح من التجارة الالكترونية الاحتر...</a>
                                        <div>
                                            <p><span class="price-before">٥٠٠ ر.س</span><span class="price-after">١٢٠ ر.س</span></p>
                                            <a href="#" class="offer-item-select add_to_cart_btn" data-product-id="ZYPRQox" data-referee-page="offer-modal" data-price="120" data-currency="SAR"></a>
                                        </div>
                                    </div>
                                </div></div>`;
                    document.querySelector(".header__icon").innerHTML = `
                    
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>special-discount</title>
<path d="M20.667 19.333c-0.737 0-1.333 0.596-1.333 1.333v0.013c0 0.737 0.596 1.327 1.333 1.327s1.333-0.603 1.333-1.34-0.596-1.333-1.333-1.333zM11.333 12.673c0.737 0 1.333-0.603 1.333-1.34s-0.596-1.333-1.333-1.333-1.333 0.596-1.333 1.333v0.013c0 0.736 0.596 1.327 1.333 1.327zM30.307 16l0.947-4.244c0.107-0.473-0.055-0.969-0.417-1.291l-3.259-2.876-1.732-3.987c-0.193-0.444-0.612-0.749-1.095-0.796l-4.327-0.417-3.748-2.204c-0.416-0.248-0.933-0.248-1.353 0l-3.744 2.204-4.329 0.417c-0.483 0.047-0.901 0.352-1.095 0.796l-1.732 3.987-3.259 2.877c-0.363 0.321-0.525 0.816-0.417 1.289l0.947 4.244-0.947 4.244c-0.107 0.473 0.055 0.969 0.417 1.291l3.259 2.876 1.732 3.987c0.193 0.444 0.612 0.749 1.095 0.796l4.325 0.416 3.749 2.207c0.208 0.123 0.441 0.184 0.676 0.184s0.468-0.061 0.676-0.185l3.747-2.205 4.328-0.416c0.483-0.045 0.903-0.351 1.095-0.796l1.732-3.985 3.259-2.877c0.363-0.321 0.525-0.816 0.417-1.291zM28.48 20.056l-2.892 2.552c-0.145 0.131-0.261 0.291-0.34 0.469l-1.536 3.536-3.84 0.369c-0.195 0.019-0.381 0.080-0.551 0.179l-3.321 1.959-3.324-1.959c-0.168-0.099-0.356-0.16-0.549-0.179l-3.839-0.369-1.536-3.537c-0.077-0.18-0.195-0.339-0.34-0.469l-2.892-2.551 0.84-3.765c0.043-0.192 0.043-0.389 0-0.581l-0.84-3.765 2.892-2.551c0.145-0.131 0.263-0.289 0.34-0.469l1.536-3.539 3.84-0.369c0.195-0.019 0.381-0.080 0.549-0.179l3.323-1.957 3.325 1.957c0.167 0.099 0.355 0.16 0.548 0.179l3.839 0.369 1.536 3.539c0.077 0.18 0.195 0.339 0.34 0.469l2.892 2.551-0.84 3.765c-0.043 0.192-0.043 0.389 0 0.581zM20.391 9.724l-10.667 10.667c-0.521 0.521-0.521 1.364 0 1.885 0.26 0.26 0.601 0.391 0.943 0.391s0.683-0.131 0.943-0.391l10.667-10.667c0.521-0.521 0.521-1.364 0-1.885s-1.364-0.521-1.885 0z"></path>
</svg>`;
    document.querySelectorAll(".header__title p")[0].innerHTML = `تقدر تاخذ دورة الربح من التجارة الالكترونية الاحترافية وكورس احتراف التسويق المتكامل <span style="font-size: 20px; color:blck;">بـ249 فقط</span> بدال من 309 ريال <br> ( تضيفهم للسلة ويتفعل معك العرض تلقائي)`
    
        document.querySelectorAll(".modal-body h4")[0] .innerHTML = " ";
        document.querySelectorAll(".list--clear li")[0].innerHTML = ` `;
                        document.querySelectorAll(".list--clear li")[1].style.cssText = `width: 89%; position: relative;
    top: -51px;`;
        document.querySelectorAll(".list--clear li")[1].innerHTML = `
    <style>
    .tim .te p{
        font-size: 20px !important;
    }
    .modal#special_offer_modal .modal-body .list.offer-steps li:before{
            display: none !important;
        }
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
            width: 67px;
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
            margin:10px;
        }
        .pa2 h1{
            margin: 10px;
    font-weight: 700;
    font-size: 20px !important;
        }
    </style>
<div class="pa2"><h1>متبقي على نهاية العرض</h1></div>
<div class="tim">
    <div class="te"><p class="te3"></p></div>
    
    <div class="te te1"><p class="te1"></p></div>
    <div class="te"><p class="te2"></p></div>
</div>
<div class="pa">
    <h4>ثانيه</h4>
    <h4>دقيقه</h4>
    <h4>ساعة</h4>
</div>`;
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
document.querySelectorAll(".te1")[1].innerHTML = 60 - minutes;
document.querySelectorAll(".te3")[1].innerHTML = 60 - seconds;
// document.querySelector(".pa2 h1").innerHTML = `   سينتهي العرض خلال :`;
if(displayHours >= 1 && period == "مساءً"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[1].innerHTML = 5-displayHours;
}
if(displayHours >= 6 && period == "مساءً"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[1].innerHTML = 10-displayHours;
}
if(displayHours >= 11 && period == "صباحًا"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[1].innerHTML = 15-displayHours;
}
if(displayHours >= 6 && period == "صباحًا"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[1].innerHTML = 10-displayHours;
}
if(displayHours >= 1 && period == "صباحًا"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[1].innerHTML = 5-displayHours;
}
if(displayHours >= 8 && period == "مساءً"){
       document.querySelectorAll(".te2")[1].innerHTML = 12-displayHours;
    }
    }, 1000);
}, 1250);
})
        }
        document.querySelectorAll(".mobile-webview-hide a")[1].addEventListener("click", function (){
            
                setTimeout(() => {
                        let mydiv = document.createElement("div");
                    mydiv.classList.add("owl-item");
                    document.querySelectorAll(".owl-stage")[1].appendChild(mydiv);
                    mydiv.innerHTML = `<div class="owl-item active" style="width: 161.833px; margin-left: 15px;"><div class="product product--light product-323750460">
                                    <a href="https://waeacksa.com/دورة-الثراء-وبناء-الرواد/p323750460" class="product--light__thumb ">
                                                                                    <img src="https://cdn.salla.sa/bEGEz/qqDQFHM3m3M9x4aKcDy4YQgvwgfr2lDjEwfn4dyb.jpg" alt="دورة الربح من التجارة الالكترونية الاحترافية">
                                                                            </a>
                                    <div class="product--light__meta">
                                        <a href="https://waeacksa.com/دورة-الثراء-وبناء-الرواد/p323750460">دورة الربح من التجارة الالكترونية الاحتر...</a>
                                        <div>
                                            <p><span class="price-before">٥٠٠ ر.س</span><span class="price-after">١٢٠ ر.س</span></p>
                                            <a href="#" class="offer-item-select add_to_cart_btn" data-product-id="ZYPRQox" data-referee-page="offer-modal" data-price="120" data-currency="SAR"></a>
                                        </div>
                                    </div>
                                </div></div>`;
                    document.querySelector(".header__icon").innerHTML = `
                    
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>special-discount</title>
<path d="M20.667 19.333c-0.737 0-1.333 0.596-1.333 1.333v0.013c0 0.737 0.596 1.327 1.333 1.327s1.333-0.603 1.333-1.34-0.596-1.333-1.333-1.333zM11.333 12.673c0.737 0 1.333-0.603 1.333-1.34s-0.596-1.333-1.333-1.333-1.333 0.596-1.333 1.333v0.013c0 0.736 0.596 1.327 1.333 1.327zM30.307 16l0.947-4.244c0.107-0.473-0.055-0.969-0.417-1.291l-3.259-2.876-1.732-3.987c-0.193-0.444-0.612-0.749-1.095-0.796l-4.327-0.417-3.748-2.204c-0.416-0.248-0.933-0.248-1.353 0l-3.744 2.204-4.329 0.417c-0.483 0.047-0.901 0.352-1.095 0.796l-1.732 3.987-3.259 2.877c-0.363 0.321-0.525 0.816-0.417 1.289l0.947 4.244-0.947 4.244c-0.107 0.473 0.055 0.969 0.417 1.291l3.259 2.876 1.732 3.987c0.193 0.444 0.612 0.749 1.095 0.796l4.325 0.416 3.749 2.207c0.208 0.123 0.441 0.184 0.676 0.184s0.468-0.061 0.676-0.185l3.747-2.205 4.328-0.416c0.483-0.045 0.903-0.351 1.095-0.796l1.732-3.985 3.259-2.877c0.363-0.321 0.525-0.816 0.417-1.291zM28.48 20.056l-2.892 2.552c-0.145 0.131-0.261 0.291-0.34 0.469l-1.536 3.536-3.84 0.369c-0.195 0.019-0.381 0.080-0.551 0.179l-3.321 1.959-3.324-1.959c-0.168-0.099-0.356-0.16-0.549-0.179l-3.839-0.369-1.536-3.537c-0.077-0.18-0.195-0.339-0.34-0.469l-2.892-2.551 0.84-3.765c0.043-0.192 0.043-0.389 0-0.581l-0.84-3.765 2.892-2.551c0.145-0.131 0.263-0.289 0.34-0.469l1.536-3.539 3.84-0.369c0.195-0.019 0.381-0.080 0.549-0.179l3.323-1.957 3.325 1.957c0.167 0.099 0.355 0.16 0.548 0.179l3.839 0.369 1.536 3.539c0.077 0.18 0.195 0.339 0.34 0.469l2.892 2.551-0.84 3.765c-0.043 0.192-0.043 0.389 0 0.581zM20.391 9.724l-10.667 10.667c-0.521 0.521-0.521 1.364 0 1.885 0.26 0.26 0.601 0.391 0.943 0.391s0.683-0.131 0.943-0.391l10.667-10.667c0.521-0.521 0.521-1.364 0-1.885s-1.364-0.521-1.885 0z"></path>
</svg>`;
      document.querySelectorAll(".header__title p")[0].innerHTML = `تقدر تاخذ دورة الربح من التجارة الالكترونية الاحترافية وكورس احتراف التسويق المتكامل <span style="font-size: 20px; color:blck;">بـ249 فقط</span> بدال من 309 ريال <br> ( تضيفهم للسلة ويتفعل معك العرض تلقائي)`
    
        document.querySelectorAll(".modal-body h4")[0] .innerHTML = " ";
        document.querySelectorAll(".list--clear li")[0].innerHTML = ` `;
               document.querySelectorAll(".list--clear li")[1].style.cssText = `width: 89%; position: relative;
    top: -51px;`;
        document.querySelectorAll(".list--clear li")[1].innerHTML = `
    <style>
    .tim .te p{
        font-size: 20px !important;
    }
    .modal#special_offer_modal .modal-body .list.offer-steps li:before{
            display: none !important;
        }
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
            width: 67px;
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
            margin:10px;
        }
        .pa2 h1{
            margin: 10px;
    font-weight: 700;
    font-size: 20px !important;
        }
    </style>
<div class="pa2"><h1>متبقي على نهاية العرض</h1></div>
<div class="tim">
    <div class="te"><p class="te3"></p></div>
    
    <div class="te te1"><p class="te1"></p></div>
    <div class="te"><p class="te2"></p></div>
</div>
<div class="pa">
    <h4>ثانيه</h4>
    <h4>دقيقه</h4>
    <h4>ساعة</h4>
</div>`;
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
document.querySelectorAll(".te1")[1].innerHTML = 60 - minutes;
document.querySelectorAll(".te3")[1].innerHTML = 60 - seconds;
// document.querySelector(".pa2 h1").innerHTML = `   سينتهي العرض خلال :`;
if(displayHours >= 1 && period == "مساءً"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[1].innerHTML = 5-displayHours;
}
if(displayHours >= 6 && period == "مساءً"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[1].innerHTML = 10-displayHours;
}
if(displayHours >= 11 && period == "صباحًا"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[1].innerHTML = 15-displayHours;
}
if(displayHours >= 6 && period == "صباحًا"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[1].innerHTML = 10-displayHours;
}
if(displayHours >= 1 && period == "صباحًا"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[1].innerHTML = 5-displayHours;
}
if(displayHours >= 8 && period == "مساءً"){
       document.querySelectorAll(".te2")[1].innerHTML = 12-displayHours;
    }
    }, 1000);
}, 1250);
})

        document.querySelectorAll(".product-detials__desc p")[3].innerHTML = ` <style>
        .tim .te p{
        font-size: 20px !important;
    }
    .modal#special_offer_modal .modal-body .list.offer-steps li:before{
            display: none !important;
        }
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
            width: 67px;
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
            margin:10px;
        }
        .pa2 h1{
            margin: 10px;
    font-weight: 700;
    font-size: 20px !important;
        }
    </style>
<div class="pa2"><h1>متبقي على نهاية العرض</h1></div>
<div class="tim">
    <div class="te"><p class="te3"></p></div>
    
    <div class="te te1"><p class="te1"></p></div>
    <div class="te"><p class="te2"></p></div>
</div>
<div class="pa">
    <h4>ثانيه</h4>
    <h4>دقيقه</h4>
    <h4>ساعة</h4>
</div>`;
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
document.querySelectorAll(".te1")[0].innerHTML = 60 - minutes;
document.querySelectorAll(".te3")[0].innerHTML = 60 - seconds;
// document.querySelector(".pa2 h1").innerHTML = `   سينتهي العرض خلال :`;
if(displayHours >= 1 && period == "مساءً"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[0].innerHTML = 5-displayHours;
}
if(displayHours >= 6 && period == "مساءً"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[0].innerHTML = 10-displayHours;
}
if(displayHours >= 11 && period == "صباحًا"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[0].innerHTML = 15-displayHours;
}
if(displayHours >= 6 && period == "صباحًا"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[0].innerHTML = 10-displayHours;
}
if(displayHours >= 1 && period == "صباحًا"){
    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
    document.querySelectorAll(".te2")[0].innerHTML = 5-displayHours;
}
if(displayHours >= 8 && period == "مساءً"){
       document.querySelectorAll(".te2")[0].innerHTML = 12-displayHours;
    }
    }, 1000);
