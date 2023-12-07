
let malrta = document.querySelectorAll(".s-product-card-content-footer button");
        for(let i =0; i<malrta.length; i++){
            malrta[i].addEventListener("click", function (){
                setTimeout(() => {
   document.querySelectorAll(".s-modal-header-content p")[0].innerHTML = `اشتري ثمن كيلو 125 جرام<span style="font-size: 20px; color:red;"> بقيمة 349 </span>  بدلا من 426 ريال واحصل على شحن مجاني  <br>(تضيفهم للسلة ويتفعل مع العرض تلقائي)
<br>

<style>
    .s-modal-header-content{
        text-align: center !important;
    }
    .s-modal-sub-title{
        color:black;
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
       <div class="te"><p class="te3">2</p></div>
       
       <div class="te te1"><p class="te1">1</p></div>
       <div class="te"><p class="te2">2</p></div>
   </div>
   <div class="pa">
       <h4>ثانيه</h4>
       <h4>دقيقه</h4>
       <h4>ساعة</h4>
   </div>
`;
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
   // document.querySelector(".pa2 h1").innerHTML = `   سينتهي العرض خلال :`;
   if(displayHours >= 1 && period == "مساءً"){
       // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
       document.querySelector(".te2").innerHTML = 5-displayHours;
   }
   if(displayHours >= 6 && period == "مساءً"){
       // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
       document.querySelector(".te2").innerHTML = 10-displayHours;
   }
   if(displayHours >= 11 && period == "صباحًا"){
       // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
       document.querySelector(".te2").innerHTML = 15-displayHours;
   }
   if(displayHours >= 6 && period == "صباحًا"){
       // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
       document.querySelector(".te2").innerHTML = 10-displayHours;
   }
   if(displayHours >= 1 && period == "صباحًا"){
       // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
       document.querySelector(".te2").innerHTML = 5-displayHours;
   }
   if(displayHours >= 8 && period == "مساءً"){
          document.querySelector(".te2").innerHTML = 12-displayHours;
       }
       }, 1000);
       document.getElementById("product_49390870").remove();
        document.querySelectorAll(".s-offer-modal-footer p")[0].remove()
   }, 4000);
})
        }

        document.querySelectorAll("button")[9].addEventListener("click", function (){
            setTimeout(() => {
   document.querySelectorAll(".s-modal-header-content p")[0].innerHTML = `اشتري ثمن كيلو 125 جرام<span style="font-size: 20px; color:red;"> بقيمة 349 </span>  بدلا من 426 ريال واحصل على شحن مجاني  <br>(تضيفهم للسلة ويتفعل مع العرض تلقائي)
<br>

<style>
    .s-modal-header-content{
        text-align: center !important;
    }
    .s-modal-sub-title{
        color:black;
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
       <div class="te"><p class="te3">2</p></div>
       
       <div class="te te1"><p class="te1">1</p></div>
       <div class="te"><p class="te2">2</p></div>
   </div>
   <div class="pa">
       <h4>ثانيه</h4>
       <h4>دقيقه</h4>
       <h4>ساعة</h4>
   </div>
`;
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
   // document.querySelector(".pa2 h1").innerHTML = `   سينتهي العرض خلال :`;
   if(displayHours >= 1 && period == "مساءً"){
       // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
       document.querySelector(".te2").innerHTML = 5-displayHours;
   }
   if(displayHours >= 6 && period == "مساءً"){
       // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
       document.querySelector(".te2").innerHTML = 10-displayHours;
   }
   if(displayHours >= 11 && period == "صباحًا"){
       // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
       document.querySelector(".te2").innerHTML = 15-displayHours;
   }
   if(displayHours >= 6 && period == "صباحًا"){
       // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
       document.querySelector(".te2").innerHTML = 10-displayHours;
   }
   if(displayHours >= 1 && period == "صباحًا"){
       // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
       document.querySelector(".te2").innerHTML = 5-displayHours;
   }
   if(displayHours >= 8 && period == "مساءً"){
          document.querySelector(".te2").innerHTML = 12-displayHours;
       }
       }, 1000);
       document.getElementById("product_49390870").remove();
        document.querySelectorAll(".s-offer-modal-footer p")[0].remove()
   }, 4000);
        })
