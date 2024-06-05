import { useState,useEffect } from "react";

function UpdateProduct(props){

    
    let [txtId,setId]=useState();
    let [txtTitle,setTitle]=useState();
    let [txtPrice,setPrice]=useState();


    function idChange(event){
        setId(event.currentTarget.value);
    }
    function titleChange(event){
        setTitle(event.currentTarget.value);
    }
    function priceChange(event){
        setPrice(event.currentTarget.value);
    }
    async function funUpdate(){
        //console.log(txtId,txtTitle,txtPrice);
        var obj={
                    price:txtPrice
        }
        var result=await fetch("https://dummyjson.com/products/"+txtId,{
            method:"PUT",
            body:JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        });
        var out=await result.json();
        console.log(out);
        setId("");
        setTitle("");
        setPrice("");

    }
    async function funDelete(){
        var result=await fetch("https://dummyjson.com/products/"+txtId,{
            method:"DELETE"
            
        });
        var out=await result.json();
        console.log(out);
        setId("");
        setTitle("");
        setPrice("");
    }
    useEffect(()=>{
        let rowData=props.row;
        console.log(rowData);
        setId(props.row.id);
        setTitle(props.row.title);
        setPrice(props.row.price);
    },[props])
    
    return(
        <>
        <form>
        <div>
            Id:<input type="text" onChange={idChange} value={txtId}></input>
        </div>
        <div>
            Title:<input type="text" onChange={titleChange} value={txtTitle}></input>
        </div>
        <div>
            Price:<input type="text" onChange={priceChange} value={txtPrice}></input>
        </div>
       
        <div>
            <input type="button" value="Update" onClick={funUpdate}></input>
            <input type="button" value="Delete" onClick={funDelete}></input>

        </div>
    </form>
        </>
    )
}
export default UpdateProduct;