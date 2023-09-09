
export var input =""
export let result1 =[]
export let result2 =[]


export function splitText(text) {
  //let words = text.split(/[\n ]+/);

  result1 = text.split(/[\n ]+/);
  result2 = text.split(/[\n ]+/);
  // console.log(result1)
  // console.log(result2)

}

export function getterInput(){
  return input
}

export function setterInput(newInput){
  input = newInput
}

export function getterresult(){
  
  return [result1,result2]
}


export function csgo4(){
  result1.forEach(myFunction)

  function myFunction(item, index, arr) {
    if(item=="declare"){
      arr[index] += " is Keyword"
    }
    else if(/^[a-zA-Z]/.test(item)){
      arr[index] += " is identifier"
    }
    else if(/^\d/.test(item)){
      arr[index] += " is Literal"
    }else if(item=="+" || item=="="){
      arr[index] += " is Symbol"
    }    
  }
}

export function csgo5(){
  result2.forEach(myFunction)

  function myFunction(item, index, arr) {
    if(item=="declare" || item =="+"){
      arr[index] += " is Keyword and sign"
    }
    else if(/^[a-zA-Z]/.test(item)){
      arr[index] += " is variable"
    }
    else if(/^\d/.test(item)){
      arr[index] += " is Integer"
    }else if( item=="="){
      arr[index] += " is Assignment"
    }    
  }

}