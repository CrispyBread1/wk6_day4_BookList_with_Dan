document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form')
form.addEventListener('submit', (evt) => {
  evt.preventDefault()
  console.log(evt)

  const title = evt.target.title.value
  const author = evt.target.author.value
  const category = evt.target.category.value

  const newBook = document.createElement('li')
  const bookList = document.querySelector('#reading-list')
  newBook.textContent = `Book is: ${title} ${author} ${category}`
  bookList.appendChild(newBook)

  form.reset()
  console.log(bookList)

  const deleteAllButton = document.querySelector('#delete-all')
  deleteAllButton.addEventListener('click', () => {

  bookList.innerHTML = ''
})

})

})
