import { useState } from "react";
import { useForm } from "react-hook-form";

function FormHook() {
    const [newData,setNewData]=useState("")

    const {register,handleSubmit,formState: { errors }} = useForm()

    function submit(data){
        setNewData(data)                                                                    
    }
    return(
        <>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label>FirstName</label>
                {errors.LastName && <p style={{color:"red"}}>{errors.FirstName.message}</p>}
            </div>
            <br/>
            <div>
                <label>LastName</label>
                <input {...register('LastName' ,{required:true,minLength: {value:3,message:'min 3 latters'},maxLength:15
                })}/>

                {errors.LastName && <p style={{color:"red"}}> {errors.LastName.message}</p>}
            </div>
            <input type="submit"/>
        </form>
       <h1>{newData.FirstName}</h1>
       <h1>{newData.LastName}</h1>
        
</>)}


export default FormHook;