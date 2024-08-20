import { useState } from "react";
import { handleChatGpt } from './Apiservices'; // Ensure this path is correct
import category from "../CategariesJson.json";

interface WordData {
  wordCategorie: string;
  wordList: string[];
}
type WordCategiresProps={
  handlefetchdata:(data:WordData,result:boolean)=>void

}

const WordCategorie = ({handlefetchdata}:WordCategiresProps) => {
  // State for categories and fetched word data
  const [categories] = useState<string[]>(category.category);
  //const [wordData, setWordData] = useState<string[]>([]);
 

  // Function to handle category click
  async function handleCategoryClick(category: string) {
    
    handlefetchdata({ wordCategorie: '', wordList: [] }, true);
    try {
       let data= await handleChatGpt(category)
      
       if(data){
        setTimeout(()=>{

        
        handlefetchdata({ wordCategorie: category, wordList: data},false)
      },3000)
       }
 
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
    <div className="flex flex-col items-center justify-center gap-4">
      <h5 className="text-4xl font-medium text-rose-400	">Choese the categories</h5>
      <div className="flex flex-wrap justify-center items-center  gap-2">
        {categories.map((item, i) => (
          <div
            className="flip-card "
            key={i}
            onClick={() => handleCategoryClick(item)}
          >
          
        <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title text-1xl">{item?.split(' ').slice(0,2).join(' ')}</p>
          
        </div>
        {/* <div className="flip-card-back">
            <p className="title">BACK</p>
            <p>Leave Me</p>
        </div> */}
    </div>
     </div>

     
        ))}
      </div>
      <div>
        </div>
      </div>
    </>
  );
}

export default WordCategorie;
