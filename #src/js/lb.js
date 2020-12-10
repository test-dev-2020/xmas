document.addEventListener("DOMContentLoaded",(function(){

  const tabNav = document.querySelectorAll('.switch')
  const tabContent = document.querySelectorAll('.result-table')



  tabNav.forEach(item=>{
    item.addEventListener('click', clickTab)
  })

 function clickTab () {
   tabNav.forEach(item=>{
     item.classList.remove('active')
     this.classList.add('active')
     const name = this.getAttribute("data-tab-number")
    openTabConent(name)
   })
 }

 function openTabConent(name){
    tabContent.forEach(item=>{
      item.classList.contains(name)?item.classList.add('active'):item.classList.remove('active')
    })
 }

}));
