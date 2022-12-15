

class palindrome_checker{
   is_palindrome (text){
    console.log(text)
   
    // console.log(text.match(/[a-zA-Z]+/g))
    let original_text_strings=text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").match(/[a-zA-Z]+/g).join('').toLowerCase()
    console.log(original_text_strings)
    let reversed_text_strings=original_text_strings.split('').reverse().join('')
    console.log(reversed_text_strings)

    if (original_text_strings===reversed_text_strings){
        console.log('\"'+ `${text}`+'\"' + ' Is a palindrome')
    }else {
        console.log('\"'+ `${text}`+'\"' +' Is not a palindrome')
    }
    
   }
        
}

// let is_palindrome =(text) => 
//     console.log(text)


let f1=  new palindrome_checker()

f1.is_palindrome('arara')

let f2= new palindrome_checker()

f2.is_palindrome('Anotaram a dAta da Maratona.')

let f3= new palindrome_checker()
f3.is_palindrome('thiago')
