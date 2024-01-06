 let textarea = document.getElementById("editor");
  const info = document.getElementById("input_info");
  const preview = document.getElementById("pre");
  const exp = document.getElementById("ex");
  //

//
  preview.addEventListener("click", myinfo);

  function myinfo() {
    const input = textarea.value;
    // Use innerHTML instead of outerHTML
    info.innerHTML = input;
  }
    const feature = document.getElementById("Fea");
  feature.addEventListener("click", mycode);

  function mycode() {
   alert("COMING SOON ...")
     }
exp.addEventListener("click", about);
function about(){
 alert("look in inspect elements and look in the console")
 console.log("Copyright © 2023 Inkwell | made 2024 on Jan 5, 2024 Mit licenses")
}