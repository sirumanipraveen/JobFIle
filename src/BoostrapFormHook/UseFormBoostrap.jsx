import { Form } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import BoostrapTable from './BoostrapTable';
import { useState } from 'react';
// import { json } from 'stream/consumers';

function UseFormBoostrap() {
  const { control, handleSubmit,setValue, formState: { errors } } = useForm();
  const [newData, setNewData] = useState([]);

  const onSubmit = (data) => {
    console.log('Form Submitted:', data); 
    setNewData([...newData, data]);
    setValue("name","")
    setValue("email","")
    setValue("phone","")
    setValue("Gender","")
  };

  return (
    <>
    <div className='container'>

    
      <div className="row d-flex justify-content-center align-items-center vh-100 vw-100">
        <div className="card m-2 p-5 bg-info text-white fw-bold col-5">
          <Form onSubmit={handleSubmit(onSubmit)}>
            
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    isInvalid={!!errors.name}
                    {...field}
                  />
                )}
              />
              <Form.Control.Feedback>
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>

         
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    isInvalid={!!errors.email}
                    {...field}
                  />
                )}
              />
              <Form.Control.Feedback>
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            
            <Form.Group controlId="Gender">
              <Form.Label>Gender</Form.Label>
              <Controller
                name="Gender"
                control={control}
                defaultValue=""
                rules={{ required: "Gender is required" }}
                render={({ field }) => (
                  <Form.Select isInvalid={!!errors.Gender} {...field}>
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </Form.Select>
                )}
              />
            </Form.Group>

            <Form.Group controlId='phone'>
               <Form.Label>Phone</Form.Label>
               <Controller
               name="phone"
               control={control}
               defaultValue=""
               rules={{required:"phone number is required"}}
               render={({field})=>(
                <Form.Control
                type='number'
                placeholder='phone number'
                isInvalid={errors.phone}
                {...field}
                />

               )}

               
               />

               <Form.Control.Feedback>
                {errors.phone?.phone}
               </Form.Control.Feedback>
        
            </Form.Group>

            <button type="submit" className="card bg-primary m-3 text-white">
              Submit
            </button>
          </Form>
        </div>
        <div className='m-3 col-6 vh-100 pt-5'>
        <BoostrapTable newData={newData}  />    
        </div>
        
      </div>
</div>
     
      
    </>
  );
}

export default UseFormBoostrap;
