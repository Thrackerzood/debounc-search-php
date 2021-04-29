let sliderContainer = document.querySelector('.slider')
let subSlider = document.querySelector('.sub-slider')
let sliderP = document.querySelector('.sliderP')
let sliderP1  = document.querySelector('.sub-sliderP-1')
let sliderP2  = document.querySelector('.sub-sliderP-2')
let menu = document.querySelector('.menu')
let sectionMenu = document.querySelector('.section-menu')
let singIn = document.querySelector('.singIn')
let singInJs = document.querySelector('.singInJs')
let singInClose1 = document.querySelector('.singInClose1')
let singInClose2 = document.querySelector('.singInClose2')
let subSingInJs = document.querySelector('.sub-singInJs')
let registrationButton = document.querySelector('.registration')
let registrationContent = document.querySelector('.registrationConteiner')
let come = document.querySelector('.come')
let i = 1
function newTitle(){
   return fetch('http://localhost/js/slider.php')
   .then(response => response.json())
}
newTitle().then(data => {
   let i = 0
   let j = 0
   for (let key of data){
      let sectionContent = document.createElement('a')
      let ap1 = document.createElement('a')
      let img = document.createElement('img')
      sectionContent.appendChild(img).classList.add('slider-img')
      subSlider.appendChild(sectionContent).classList.add(`sub-sub-sliderContent${++i}`)
      img.src = key.picture
      sectionContent.href = key.head
      sliderP1.appendChild(ap1).textContent = key.head
      ap1.href = key.head
      ap1.classList.add(`p${++j}`)
      console.log(key)
   }
})
let left = document.querySelector('.left')
let right = document.querySelector('.right')
left.addEventListener('click', leftClick)
intervalSlider = setInterval(leftClick,4000)
left.addEventListener('mouseover',()=>{
   clearInterval(intervalSlider)
})
right.addEventListener('mouseover',()=>{
   clearInterval(intervalSlider)
})
left.addEventListener('mouseout',()=>{
   intervalSlider = setInterval(leftClick,4000)
})
right.addEventListener('mouseout',()=>{
   intervalSlider = setInterval(leftClick,4000)
})
function leftClick(){
   let s1 = document.querySelector('.sub-sub-sliderContent1')
   let s2 = document.querySelector('.sub-sub-sliderContent2')
   let s3 = document.querySelector('.sub-sub-sliderContent3')
   let p1 = document.querySelector('.p1')
   let p2 = document.querySelector('.p2')
   let p3 = document.querySelector('.p3')
   s2.classList.add('sub-sub-sliderContent3')
   s2.classList.remove('sub-sub-sliderContent2')
   p2.classList.add('p3')
   p2.classList.remove('p2')
   s3.classList.add('sub-sub-sliderContent1')
   s3.classList.remove('sub-sub-sliderContent3')
   p3.classList.add('p1')
   p3.classList.remove('p3')
   s1.classList.add('sub-sub-sliderContent2')
   s1.classList.remove('sub-sub-sliderContent1')
   p1.classList.add('p2')
   p1.classList.remove('p1')
}
right.addEventListener('click', rightClick)
function rightClick(){
   let s1 = document.querySelector('.sub-sub-sliderContent1')
   let s2 = document.querySelector('.sub-sub-sliderContent2')
   let s3 = document.querySelector('.sub-sub-sliderContent3')
   let p1 = document.querySelector('.p1')
   let p2 = document.querySelector('.p2')
   let p3 = document.querySelector('.p3')
   s2.classList.add('sub-sub-sliderContent1')
   s2.classList.remove('sub-sub-sliderContent2')
   p2.classList.add('p1')
   p2.classList.remove('p2')
   s3.classList.add('sub-sub-sliderContent2')
   s3.classList.remove('sub-sub-sliderContent3')
   p3.classList.add('p2')
   p3.classList.remove('p3')
   s1.classList.add('sub-sub-sliderContent3')
   s1.classList.remove('sub-sub-sliderContent1')
   p1.classList.add('p3')
   p1.classList.remove('p1')
}
singIn.addEventListener('click', ()=>{
   singInJs.style.display = 'flex'
   document.body.style.overflow='hidden'
})
singInClose1.addEventListener('click', ()=>{
   singInJs.style.display = 'none'
   document.body.style.overflow='visible'
})
singInClose2.addEventListener('click', ()=>{
   singInJs.style.display = 'none'
   document.body.style.overflow='visible'
})
registrationButton.addEventListener('click', ()=>{
   subSingInJs.style.display = 'none'
   registrationContent.style.display = 'flex'
})
come.addEventListener('click', ()=>{
   subSingInJs.style.display = 'flex'
   registrationContent.style.display = 'none'
})