Part 1.
var purse = {
    cash : 1000,
    stuff : ["napkins", "keys", "earplugs", "mirror", "notebook", "pen","pasport", "driver licence", "lipstick", "cream", "mascara"]
  }
  purse.putCash = function(sum) {
  this.cash += sum
  }
  purse.takeCash = function(sum) {
  this.cash -= sum
  }
  purse.putStuff = function (item){
  this.stuff.push(item)
  }
  purse.takeStuff = function (item) {
  var itemIndex = this.stuff.indexOf(item);
  (itemIndex !== -1)? this.stuff.splice(itemIndex,1) : console.log(`Item not found`)
  }



Part 2.
function LibraryBook (bookTitle, bookYear, bookAuthor){
var title = bookTitle
var year = bookYear
var author = bookAuthor
var readerName = null
var readerDate = null
function giveTheBook (client, date = new Date()){
readerName = client
readerDate = date
}
this.getBookInfo = function(){
readerName ? console.log (`Book is taken from ${readerDate}`) : console.log (`Book is free`)
}
this.getTheBook = function(client, date){
if (readerName) {
return null
}
else{
giveTheBook (client, date) 
return title
}
}
this.returnBook = function() {
readerName = null
readerDate = null
}
}


Part 3.
function Sample() {}
Sample.prototype.addProperty = function (propertyName, propertyValue){
this [propertyName] = propertyValue
}
var sample = new Sample()
sample.addProperty ("name", "Anna")
console.log(sample)

