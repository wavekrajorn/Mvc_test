import {input,splitText,getterInput,setterInput,result1,result2, csgo4,csgo5,getterresult} from "./model.js"

let something
export function procress(code) {
    setterInput(code)
    let text = getterInput()
    splitText(text)
    csgo4()
    csgo5()
    let [result1,result2] =getterresult()
    console.log(result1)
    console.log(result2)
    return result1
    
} 

