import { useEffect,useState } from "react";
import UpdateProduct from "./UpdateProduct";
import MyModal from "./MyModal";

function Display(props){

    let prodArr=props.data;
    let imgStyle={"width":"100px","height":"100px"};

    let[rowFlag,setRow]=useState(false);
    let[rowData,setRowData]=useState({});
    function rowClick(x){
        setRow(true);
        setRowData(x);
        console.log(x);
    }

    return (
        <div className="container ">
        <table className="table ">
            <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Price</td>
                <td>Image</td>
            </tr>
           
            {
                prodArr.map((x)=>(
                        <tr key={x.id} onClick={()=>{rowClick(x)}}>
                        <td>{x.id}</td>
                        <td>{x.title}</td>
                        <td>{x.price}</td>
                        <td><img src={x.thumbnail} style={imgStyle}></img></td>
                        </tr>
                ))
                }
              
            
        </table>
       {
        //rowFlag && <UpdateProduct row={rowData}/>
        rowFlag && <MyModal row={rowData} />
       }
        </div>
    )
}

export default Display;