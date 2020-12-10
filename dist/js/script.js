
document.addEventListener('DOMContentLoaded', function(){ 
  const open = document.querySelector("#terms")
  const popupBg = document.querySelector('.popup')
  const close = document.querySelector('#close')
  const content =document.body



  function testWebP(callback) {
    var webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
  }
  
  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp")
    } else {
      document.querySelector("body").classList.add("no-webp")
    }
  })
  


  
  function closed(){
    popupBg.classList.remove("visible")
    content.classList.remove('overflow')
  }
  open.addEventListener('click', function(){
    popupBg.classList.add("visible")
    content.classList.add('overflow')
   
  })
  close.addEventListener('click', closed)
  popupBg.addEventListener('click', (e)=>{
    if(e.target===popupBg || e.keyCode === 27 ){
      closed()
    }
  
  })
  
  document.addEventListener('keydown',(e)=>{
    if(e.code ==="Escape"){
      closed()
    }
  })
  

})


