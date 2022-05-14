/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)



*/


function vowelIndices(word){
    word = word.toLowerCase()
    let array = []
    for(let i = 0; i < word.length; i++){
      console.log(word[i])
      if(word[i]==="a"||word[i]==="e"|| word[i]==="i"|| word[i]==="o"|| word[i]==="u"||word[i]==="y" ){
        array.push(i+1)
      }
      console.log(word,array)
    }
    return array
    
    
    //your code here
  }
  
  /*
  string
  return indexes of letters in word that are vowels
  shana =>[2,4]
  perfect => [1,4]
  noooo => []
  
  create a empty array to hold the answer
  for loop to access letters in the word 
  condional that states if a[i] == a,e,i,o,u
  push [i] in the array that we created 
  return that array
  
  
  
  
  */