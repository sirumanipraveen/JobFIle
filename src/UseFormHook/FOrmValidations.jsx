import { Form } from "react-bootstrap"
import { Controller, useForm} from "react-hook-form"


function FOrmValidations() {
    const {handleSubmit,watch,formState:{errors} ,control,getValues} = useForm()
    const name = watch("name")
  

    const onSubmit=(data)=>{
        console.log(data)

    }


   
  return (
    <>
    <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group >
                <Form.Label> Name</Form.Label>
                <Controller 
                name="name"
                control={control}
                defaultValue=""
                rules={{required:"name is required"}}
                render={({field :{ref ,onChange,value}})=>(
                  <input
                    ref={ref}
                    type="text"
                    placeholder="name"
                    value={value}
                    onChange={(e)=>{
                        console.log(e.target.value),
                        onChange(e)
                    }}  
                  />
                )}
                />
                <button onClick={()=> console.log(getValues("name"))}>Get value</button> 
                
             <Form.Control.Feedback type="invalid">
                {errors.name?.name}
              </Form.Control.Feedback> 
              
            </Form.Group>
            <p>Watched Username: {name}</p>
            <button type="submit">click</button>

        </Form>
    </div>
    </>
  )
}

export default FOrmValidations