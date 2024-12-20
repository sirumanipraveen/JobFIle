
import './JobDescription.css'
function JobDescriptionForm() {
  return (
    <div className="p-4 container-bg  border rounded shadow-sm ">
      <h1 className="job-title-style " >Job Details Form</h1>
      <div className='d-flex flex-row justify-content-start'>
        <textarea id="w3review" name="w3review" rows="10" cols="150" className=" bordered style-discription">
          
        </textarea>
      </div>
    </div>
  );
}

export default JobDescriptionForm;
