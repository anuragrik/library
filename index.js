let addBook = document.querySelector(".add-btn");
let bookForm = document.querySelector(".wrapper");
let formSubmit = document.querySelector(".item.submit")
let formContent = document.querySelector(".content")
let formHeader = document.querySelector(".header")
let libWrapper = document.querySelector(".libWrap")

document.addEventListener('click', (event) => {
  let withinBoundaries = event.composedPath().includes(addBook)
  let withinBoundariesTwo = event.composedPath().includes(bookForm)
  let withinBoundariesThree = event.composedPath().includes(formSubmit)
  if (withinBoundaries || withinBoundariesTwo) {
    formContent.classList.add('blur');
    formHeader.classList.add('blur');
    bookForm.style.visibility = "visible"
  }else {
    formContent.classList.remove('blur');
    formHeader.classList.remove('blur');
    bookForm.style.visibility = "hidden"
  }
})
function book(author,title,pages,read){
    this.author=author;
    this.title=title;
    this.pages=pages;
    this.read=read;
}
let library=[]
function addBookToLibrary(newBook){
    library.push(newBook)
}
/*Look Here IDIOT*/
function creatLibItem(){
  let newWrap=document.createElement("div")
  newWrap.classList.add("bookUno")
  let newList=document.createElement("div")
  newList.classList.add("bookList")
  newWrap.appendChild(newList)
  let newTitle=document.createElement("div")
  newTitle.classList.add("book","title")
  newList.appendChild(newTitle)
  let newAuthor=document.createElement("div")
  newAuthor.classList.add("book","author")
  newList.appendChild(newAuthor)
  let newPages=document.createElement("div")
  newPages.classList.add("book","pages")
  newList.appendChild(newPages)
  let newStatus=document.createElement("button")
  newStatus.classList.add("book","status")
  newList.appendChild(newStatus)
  let newRemove=document.createElement("button")
  newRemove.classList.add("book","remove")
  newRemove.textContent="Remove"
  newList.appendChild(newRemove)
  return newWrap;
}
/*Look Here IDIOT*/

let bookData=document.querySelector("#title")
let authorData=document.querySelector("#author")
let pageData=document.querySelector("#pages")
let readData=document.querySelector("#status")
let form = document.querySelector('form');

libWrapper.appendChild(creatLibItem());

let wrap=document.querySelectorAll(".bookUno");
let libTitle=document.querySelectorAll(".book.title");
let libAuthor=document.querySelectorAll(".book.author");
let libPages=document.querySelectorAll(".book.pages");
let libStatus=document.querySelectorAll(".book.status");
let libRemove=document.querySelectorAll(".book.remove");

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let newBook = new book(bookData.value, authorData.value, pageData.value, readData.checked)
  addBookToLibrary(newBook)
  displayBook(library)
  bookForm.style.visibility = "hidden"
  formContent.classList.remove('blur');
  formHeader.classList.remove('blur');
  libWrapper.appendChild(creatLibItem());
});

let j=0;

function displayBook(library){
  let i;
   wrap=document.querySelectorAll(".bookUno");
   libTitle=document.querySelectorAll(".book.title");
   libAuthor=document.querySelectorAll(".book.author");
   libPages=document.querySelectorAll(".book.pages");
   libStatus=document.querySelectorAll(".book.status");
  for (i=0;i<wrap.length;i++){
    wrap[i].style.visibility="visible";
    wrap[i].dataset.itemNo = i;
    console.log(wrap[i].dataset.itemNo)
  };
    for (j=0;j<library.length;j++){
        libTitle[j].textContent=library[j].title
        libAuthor[j].textContent=library[j].author
        libPages[j].textContent=library[j].pages + " pages"
        if(!library[j].read){
          libStatus[j].classList.add("unread")
          libStatus[j].textContent="Unread"}
        else{
          libStatus[j].classList.remove("unread")
          libStatus[j].textContent="Read"}
    }
}

libWrapper.addEventListener("click", function(event) {

  if(event.target.classList.contains("book") && event.target.classList.contains("status")) {
    if(event.target.textContent=="Unread"){
      event.target.classList.remove("unread")
      event.target.textContent="Read"
      this.read="true";
    }else if(event.target.textContent=="Read"){
      event.target.classList.add("unread")
      event.target.textContent="Unread"}
    }
  else if(event.target.classList.contains("book") && event.target.classList.contains("remove")){
    let preParentWrap = event.target.parentNode;
    let parentWrap=preParentWrap.parentNode;
    let removeItemNum=parentWrap.dataset.itemNo;
    console.log("Here")
    parentWrap.remove();
    console.log(library)
    library.splice(removeItemNum,1);
    console.log(library)
  }
});



