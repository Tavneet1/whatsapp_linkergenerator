
let phone="";
let msg="";

const handleNumberChange = (event) => {
  phone=event.target.value;
  document.querySelector('#finalOutput').setAttribute('href', encodeURI(`https://wa.me/${phone}?text=${msg}`));
  document.querySelector('#finalOutput').innerText =encodeURI(`https://wa.me/${phone}?text=${msg}`);
}
const handleMsgChange = (event) => {
  msg=event.target.value;
  document.querySelector('#finalOutput').setAttribute('href', encodeURI(`https://wa.me/${phone}?text=${msg}`));
  document.querySelector('#finalOutput').innerText =encodeURI(`https://wa.me/${phone}?text=${msg}`);
}





function generateLink() {
    let number = document.form_main.number.value;
    let message = document.form_main.message.value;
    let url = "https://wa.me/";
    let ed_url = encodeURI(`${url}${number}?text=${message}`);
    
    document.getElementById('end_url').innerText = ed_url;

  }
  

function textfun()
{
  let number = document.form_main.number.value;
  document.getElementById('end_url').innerText=number;
}

function msgfun()
{
  let msg = document.form_main.message.value;
  document.getElementById('end_url').innerText = msg;
}

// function numFun(value) {
//   // let url = "https://wa.me/";
//   document.getElementById('end_url').innerText = value;
  
// }

// function msgfun(value) {
//   document.getElementById('end_url').innerText =value;


// }
