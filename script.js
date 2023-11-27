 let $ = document
 
 let autoCompeletWrapper = $.querySelector('.search-input')
 let searchInputElm =$.querySelector('input')
 let autoCompeletBox= $.querySelector('.autocom-box')
 searchInputElm .addEventListener('keyup', function(){
    let searchValue = searchInputElm.value
    

 if (searchValue){
   autoCompeletWrapper.classList.add('active')
 let filtered =suggestions.filter(function(word){
return word.toLowerCase().includes(searchValue.toLowerCase())
 })
suggestionwordsGenerator(filtered)
 }
 else{
   autoCompeletWrapper.classList.remove('active')
 }
})
function suggestionwordsGenerator(wordsArray){
   let listItemArray =wordsArray.map(function(word){
   return '<li>' + word + '</li>'

   })
   let customListItem
   if (!listItemArray.length) {
      customListItem = '<li>' + searchInputElm.value + '</li>'      
   } else {
      customListItem = listItemArray.join('')
   }
   autoCompeletBox.innerHTML= customListItem
   select()
}
function select(){
   let allListItems =autoCompeletBox.querySelectorAll('li')
   allListItems.forEach(function(wordItem){
      wordItem.addEventListener('click' , function(event){
         searchInputElm.value = event.target.textContent
         autoCompeletWrapper.classList.remove('active')
      })
   })

}
