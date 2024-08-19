import {  useState } from 'react';
//import jsonTesting from './TestingJson';
import { Toaster, toast } from 'react-hot-toast';

import HangmanView from './component/HangmanView';
import WordCategorie from './component/WordCategires';
import AnimationLoader from './component/AnimationLoader';



interface WordData {
  wordCategorie: string;
  wordList: string[];
}
function App() {
 console.log(import.meta.env.VITE_OPENAI_API_KEY)
 
  const[istrue,setIstrue]=useState<boolean>(true)
  const[isloading,setIsloading]=useState<boolean>(false)
  const [data, setData] = useState<WordData>();


function handlefetchdata(newData: WordData,result:boolean){
 

   if(!result){
    setIstrue(false)
    setData(newData)
  }  
setIsloading(result)
}
function back(){
  setIstrue(true)
}
  return (
    <div className='bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] bg-indigo-200 h-[100%] '>
      <div className='font-adlam  lg:w-[100%] md:w-[100%] h-[100%] flex items-center flex-col gap-4 mx-auto justify-center p-2 relative'>
        <Toaster />
        {isloading && <AnimationLoader/> }

        {istrue?(
    
        <WordCategorie handlefetchdata={handlefetchdata} />
         ) :(
          <>            
          <button type='button ' className='absolute left-[100px] top-3 capitalize back_button' onClick={back}>back</button>
          {data && <HangmanView data={data }/>}
          </>

         )
        }
       
        </div>
      </div>
    
  )
}

export default App