const url = 'http://localhost/js/upload.php'
let search = document.querySelector('.search')
let searchAnim = document.querySelector('.searchAnim')

function sendRequest(method,url,body){
   const headers = {
      'Content-Type': 'application/json'
   }
   return fetch(url,{
      method: method,
      body: JSON.stringify(body),
      headers: headers
   }).then(response => response.json())
}


const debounce = (fn , ms) =>{
   let timeout; 
   return function(){
      const fnCall = () => { fn.apply(this, arguments)}
      clearTimeout(timeout)
      timeout = setTimeout(fnCall, ms)
   }
}
onchangeDebounce = debounce(onchange, 300)

search.addEventListener('keyup', onchangeDebounce)

function remove(){
   let allChild = document.querySelectorAll('.go')
   allChild.forEach(node => node.remove())
}
function onchange(e){
   let body = {name: `${e.target.value}`}
   if(search.value === ''){
      remove()
   }
   if(e.key === 'Backspace'){
      remove()
   }
   if(e.target.value.length > 0){
    sendRequest('POST',url,body)
   .then(data => {
      remove()
   if(data.length > 0){
      console.log(data)
   for(let key of data){
      let a = document.createElement('a')
      let p = document.createElement('p')
      a.href = key.name
      a.classList.add('go')
      searchAnim.appendChild(a).appendChild(p).textContent = key.name
   }
   }
   if(data.length <= 0){
      remove()
      let a = document.createElement('a')
      a.classList.add('go')
      searchAnim.appendChild(a).textContent = 'ничего не найдено :('
   }
})
.catch(err => console.log(err))    
}
}

