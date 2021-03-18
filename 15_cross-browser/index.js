
const swiper = new Swiper('.swiper-container', {  
  direction: 'horizontal',
  loop: true,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})


document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabBtn) {
    tabBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tabs-content').forEach(function(tabsContent) {
        tabsContent.classList.remove('tabs-content-active')
      }) 
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content-active')
    })
  })


  $( function() {
    $( "#accordion" ).accordion();
  })


  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })


  document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })  
})
