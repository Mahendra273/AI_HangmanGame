import {  useState } from 'react';
//import jsonTesting from './TestingJson';
import { Toaster, toast } from 'react-hot-toast';

import HangmanView from './component/HangmanView';
import WordCategorie from './component/WordCategires';



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
    <div className='bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] bg-indigo-200 h-[100vh] '>
      <div className='font-adlam  lg:w-[100%] md:w-[100%] h-[100%] flex items-center flex-col gap-4 mx-auto justify-center p-2'>
        <Toaster />
       

        {istrue?(
       
        <WordCategorie handlefetchdata={handlefetchdata} />
         ) :(
          <>            
          <button type='button' onClick={back}>back</button>
          {data && <HangmanView data={data }/>}
          </>

         )
        }
       
        </div>
      </div>
    
  )
}

export default App