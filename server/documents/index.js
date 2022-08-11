
module.exports = ({ companyName, invoiceId, adress1, adress2, name, positionName, phone, email, desc, descSub, unit, qty, desc2, descSub2, unit2, qty2, desc3, descSub3, unit3, qty3, isBtnOn, isBtnOn2 }) => {

  const today = new Date();
  const price1 = unit * qty;
  const price2 = unit2 * qty2;
  const price3 = unit3 * qty3;
  const totaltax = parseInt( 0.1 * (price1 + price2 + price3) );
  const total = parseInt( 1.1 * (price1 + price2 + price3) );

  function numberWithCommas(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

return `
   <!DOCTYPE html>
   <html lang="ja">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>INVOICE - ${invoiceId}</title>
      <style type="text/css" media="print">
         @page {
         size: portrait;
         margin: 0;
         }
         @media print {
            .footer-area {
              position: fixed;
              bottom: 0;
            }
         }
      </style>
      <style type="text/css">
         * {
            font-family: 'YuGothic','Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3','メイリオ', 'Meiryo','ＭＳ ゴシック',sans-serif;
            margin: 0;
            padding:0;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            line-height: 1.5;
         }
         html, body {
            height: 100%;
         }
         .container {
            border-top: 0.5rem solid #5e5e5e;
         }
         .invoice-box {
            margin: 3rem 2.5rem 0;
         }
         .footer-area {
            margin: 0 2.5rem 3rem;
         }
         .row {
            display: table;
            width: 100%;
            table-layout: fixed;
         }
         .col {
            width: 50%;
            display: table-cell;
            vertical-align: middle;
         }
         .col-5 {
            width: 100%;
            display: table;
            table-layout: fixed;
         }
         .col-3 {
            display: table-cell;
         }
         .title {
            font-size: 1.25rem;
            line-height: 1.2;
         }
         .logo {
            font-size: 2rem;
         }
         .sign {
            font-size: 1.4rem;
         }
         .total {
            font-size: 1.4rem;
         }
         p {
            font-size: 0.8rem;
         }
         .bold {
            font-weight: bold;
            color:#5e5e5e;
         }
         .border {
            border-bottom: 1px solid #ccc;
         }
         .text-left {
            text-align: left;
         }
         .text-center {
            text-align: center;
         }
         .text-right {
            text-align: right;
         }
         .lh-LL {
            line-height: 8;
         }
         .lh-L {
            line-height: 2;
         }
         .lh-S {
            line-height: 1.8;
         }
         .mt-s {
            margin-top: .5rem;
         }
         .mt-1 {
            margin-top: 1rem;
         }
         .mt-2 {
            margin-top: 2rem;
         }
         .mt-3 {
            margin-top: 3rem;
         }
         .mt-5 {
            margin-top: 5rem;
         }
         .pb-s {
            padding-bottom: .5rem;
         }
         .pb-1 {
            padding-bottom: 1rem;
         }
         .noshow {
            display: none;
         }
      </style>
      </head>
      <body>
      <div class="container">
         <div class="invoice-box">
            <!-- header / static-->
            <div class="row">
               <div class="col text-left">
                  <div class="title bold">${companyName}</div>
                  <div class="info">
                     <p>${adress1}</p>
                     <p>${adress2}</p>
                  </div>
               </div>
               <div class="col text-right">
                  <div class="logo bold">INVOICE</div>
               </div>
            </div>
            <!-- invoice to / invoice infomation -->
            <div class="row mt-2">
               <div class="col text-left">
                  <p>INVOICE TO:</p>
                  <div class="sub-title bold" style="vertical-align: top;">${name}</div>
                  <div class="invoice-to">
                     <p>${positionName}</p>
                     <p>${email}</p>
                     <p>${phone}</p>
                  </div>
               </div>
               <div class="col text-right" style="vertical-align: top;">
                  <div class="invoice-info">
                     <p><span class="bold">INVOICE NO:</span>&nbsp;#INV${invoiceId}</p>
                     <p><span class="bold">INVOICE DATE:</span>&nbsp;${`${today.getDate()}/ ${today.getMonth() + 1}/ ${today.getFullYear()}`}</p>
                     <p><span class="bold">DUE DATE:</span>&nbsp;${`${today.getDate()}/ ${today.getMonth() + 2}/ ${today.getFullYear()}`}</p>
                  </div>
               </div>
            </div>
            <!-- invoice breakdown header -->
            <div class="invoice-detail mt-5">
               <div class="row table-header">
                  <div class="col border">
                     <p class="bold text-center lh-m">DESCRIPTION</p>
                  </div>
                  <div class="col border">
                     <div class="col-5">
                     <p class="col-3 text-center bold lh-m">UNIT</p>
                     <p class="col-3 text-center bold lh-m">QTY</p>
                     <p class="col-3 text-center bold lh-m">TOTAL</p>
                     </div>
                  </div>
               </div>
               <!-- invoice breakdown itemrized 1 -->
               <div class="row table-contents">
                  <div class="col border">
                     <p class="bold text-left lh-m">${desc}</p>
                     <p class="text-left"><small>${descSub}</small></p>
                  </div>
                  <div class="col border">
                     <div class="col-5">
                     <p class="col-3 text-center bold lh-LL">${`&yen;${numberWithCommas(unit)}`}</p>
                     <p class="col-3 text-center bold lh-LL">${qty}</p>
                     <p class="col-3 text-center bold lh-LL">${`&yen;${numberWithCommas(price1)}`}</p>
                     </div>
                  </div>
               </div>
               <!-- invoice breakdown itemrized 2 -->
               <div class="row table-contents" style=${isBtnOn ? 'display:block;' : 'display:none;'}>
                  <div class="col border">
                     <p class="bold text-left lh-m">${desc2}</p>
                     <p class="text-left lh-m"><small>${descSub2}</small></p>
                  </div>
                  <div class="col border">
                     <div class="col-5">
                     <p class="col-3 text-center bold lh-LL">${`&yen;${numberWithCommas(unit2)}`}</p>
                     <p class="col-3 text-center bold lh-LL">${qty2}</p>
                     <p class="col-3 text-center bold lh-LL">${`&yen;${numberWithCommas(price2)}`}</p>
                     </div>
                  </div>
               </div>
               <!-- invoice breakdown itemrized 3 -->
               <div class="row table-contents" style=${isBtnOn2 ? 'display:block;' : 'display:none;'}>
                  <div class="col border">
                     <p class="bold text-left lh-m">${desc3}</p>
                     <p class="text-left lh-m"><small>${descSub3}</small></p>
                  </div>
                  <div class="col border">
                     <div class="col-5">
                     <p class="col-3 text-center bold lh-LL">${`&yen;${numberWithCommas(unit3)}`}</p>
                     <p class="col-3 text-center bold lh-LL">${qty3}</p>
                     <p class="col-3 text-center bold lh-LL">${`&yen;${numberWithCommas(price3)}`}</p>
                     </div>
                  </div>
               </div>
            </div>
            <!-- payment method / payment total -->
            <div class="payment-info mt-2">
               <div class="row">
                  <div class="col text-left">
                     <div class="sub-title bold">PAYMENT METHOD</div>
                     <div class="invoice-to mt-1">
                     <p><span class="bold">Bank A/C No: </span>012 3456789</p>
                     <p><span class="bold">Paypal: </span>payment@compamy.com</p>
                     </div>
                  </div>
                  <div class="col text-right">
                     <div class="col">
                     <div class="col-5">
                        <div class="col-3">
                           <p class="bold lh-L">SUBTOTAL</p>
                           <!--
                           <p class="bold lh-L">WITHHOLDONG(10.21%)</p>
                           <p class="bold lh-L">SUBTOTAL LESS DISCOUNT</p>
                            -->
                           <p class="bold lh-L">TAX RATE</p>
                           <p class="bold lh-L">TOTAL TAX</p>
                           <p class="bold total lh-L">TOTAL</p>
                        </div>
                        <div class="col-3">
                           <p class="lh-L">&yen;${numberWithCommas(parseInt(price1) + parseInt(price2))}</p>
                           <!--
                           <p class="lh-L">&yen;0</p>
                           <p class="lh-L">&yen;0</p>
                           -->
                           <p class="lh-L">10%</p>
                           <p class="lh-L">${numberWithCommas(totaltax)}</p>
                           <p class="bold total lh-L">&yen;${numberWithCommas(total)}</p>
                        </div>
                     </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- other1 / signature -->
            <div class="other-sign mt-3 pb-1">
               <div class="row">
                  <div class="col text-left">
                  </div>
                  <div class="col">
                     <div class="sign bold text-right">YOUR NAME</div>
                  </div>
               </div>
            </div>
         </div>
         <!-- invoice-box (height-auto) END -->
         <!-- footer area for print -->
         <div class="footer-area">
            <!-- other2 / terms -->
            <div class="other-terms">
               <div class="row">
                  <div class="col border text-left pb-s">
                     <p class="bold">Terms:</p>
                     <p class="lh-L">Add terms here, e.g: warranty, returns policy...</p>
                  </div>
               </div>
            </div>
            <!-- footer / static -->
            <div class="footer mt-s">
               <div class="row">
                  <div class="col text-left" style="vertical-align: top;">
                     <div class="sub-title bold">THANKS FOR YOUR BUSINESS !</div>
                  </div>
                  <div class="col text-right">
                     <p class="bold">YOUR COMPANY</p>
                     <p>123 Street Address City, State, Zip/Post</p>
                     <p>https://company.com</p>
                     <p>info@company.com</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </body>
   </html>
  `;
};