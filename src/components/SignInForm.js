import { useRef } from "react"
import { useParams } from "react-router-dom";

function SignInForm(){

    let paramObj=useParams();
    console.log(paramObj.id);
    console.log(paramObj.city);

    let txtName=useRef();
    let txtPassword=useRef();
    var arr=[];
    let funSignIn=()=>{
     
       let formData={
        name:txtName.current.value,
        password:txtPassword.current.value
       }
       console.log(formData);
       arr.push(formData);
       localStorage.setItem("user",JSON.stringify(arr));
    }
    let funSearch=()=>{
        var city=paramObj.city;
        console.log(city);
        var data=JSON.parse(localStorage.getItem("user"));
        var arr=data.filter((x)=>{
            if(x.name===city){
                return x;
            }
        }
    )
    console.log(arr);
       
    }
    return(<div>
        <form>
            <div>
            UserName:<input type="text" ref={txtName}/>
            </div>
            <div>
            Password:<input type="text" ref={txtPassword}/>
            </div>
            <div>
           <input type="button" value="SignUp" onClick={funSignIn} />
            </div>
            <div>
           <input type="button" value="Search" onClick={funSearch} />
            </div>

        </form>
    </div>)

}
export default SignInForm