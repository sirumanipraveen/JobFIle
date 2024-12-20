import { useFieldArray, useForm } from "react-hook-form";


// function DynamicForm(){

// const {register,control,handleSubmit} = useForm({
//     defaultValues:{
//         tasks:[{name:"",middleName:"",adress:""}]
//     }
// });

// const {fields,append,remove} = useFieldArray({
//     control,
//     name:"tasks"
// })

// const submitdata =(data)=>{
//     console.log(data)
// }

// return(
//     <>
//     <form onSubmit={handleSubmit(submitdata)}>

//         {
//             fields.map((field,index)=>(
//                 <div key={field.id}>

//                     <input {...register(`tasks.${index}.name`)} placeholder="firstName"/>
//                     <input {...register (`tasks.${index}.middleName`)} placeholder="middleName"/>
//                     <input {...register (`tasks.${index}.adress`)} placeholder="adress"/>
//                   <button type="button" onClick={()=>remove(index)}>remove</button>
//                 </div>
//             ))
//         }


//         <button type="button" onClick={()=> append({name:"",middleName:"",adress:""
            
//         })}>
//        add task
//         </button>
//         <button type="submit">submit</button>
//     </form>
//     </>
// )

// }
// export default DynamicForm




function DynamicForm(){
    const {register,control,handleSubmit} = useForm({
        defaultValues:{
            tasks :[{name:"",age:"",adress:""}]
        }
    })


    const {fields,append,remove} = useFieldArray({
        control,
        name:"tasks"
    })


    const submitdata =(data)=>{
        console.log(data)
    }

    return(
        <>
        <form onSubmit={handleSubmit(submitdata)}>
            {
                fields.map((field,index)=>(
                    <div key={field.id}>
                        <input {...register(`tasks.${index}.name`)}/>
                        <input {...register(`tasks.${index}.age`)}/>
                        <input {...register(`tasks.${index}.adress`)}/>
 
                        <button type="button" onClick={()=>remove(index)}>remove</button>

                    </div>
                ))
            }
            <button onClick={()=> append({name:"",age:"",adress:""})}>add task</button>
            <button type="submit"> submit</button>
        </form>
        </>
    )

}
export default DynamicForm