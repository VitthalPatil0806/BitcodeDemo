import { useEffect ,useState} from "react";
import Display from "./Display";

function Records(){
 
        let [prodArr,setProdArr]=useState([]);
       

        async function  getAllRecords(pgno){
            var n=pgno;
             //  var result= await fetch("https://dummyjson.com/products");
             var url="";
             if(n===1){
                url="https://dummyjson.com/products?limit=10&skip=0";
             }
            else if(n===2){
                url="https://dummyjson.com/products?limit=10&skip=10";
             }
             else if(n===3){
                url="https://dummyjson.com/products?limit=10&skip=20";
             }
             console.log(url);
             var result=await fetch(url);
               var out =await result.json();
               console.log(out.products);
               setProdArr(out.products);
               console.log(prodArr.length);        
      }
      function funClick(event){
        event.preventDefault();
        if(event.currentTarget.textContent==2){
            getAllRecords(2);
        }
        else if (event.currentTarget.textContent==3){
            getAllRecords(3);
        }
        else if (event.currentTarget.textContent==1){
            getAllRecords(1);
        }
      }
      useEffect(()=>{

        getAllRecords(1);
      },[])
    return (
        <>
        <Display data={prodArr}/>
        <ul type="none">
            <li><a href="" onClick={funClick}>1</a></li>
            <li><a href="" onClick={funClick}>2</a></li>
            <li><a href="" onClick={funClick}>3</a></li>
        </ul>
        </>
    )
}
export default Records;