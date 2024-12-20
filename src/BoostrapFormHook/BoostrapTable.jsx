
import PropTypes from 'prop-types';


function BoostrapTable({ newData }) {
  console.log('Data in BoostrapTable:', newData); // Add console log to check the passed data

  const h = JSON.parse(localStorage.getItem("user"))
  console.log(h)
  
  return (
    <div className="container d-flex">

      <table className='table '>
        <thead>
            <tr >
                <th className='text-success bg-warning'>name</th>
            
    
                <th className='text-success bg-warning'>Email</th>
            
            
                <th className='text-success bg-warning'>Gender</th>
                <th className='text-success bg-warning'>Phone Number</th>
            </tr>
        </thead>

         <tbody>
        {newData.map((item, index) =>(
          <tr key={index}>
            <td className='text-info'>{item.name}</td>
            <td className='text-info'>{item.email}</td>
            <td className='text-info'>{item.Gender}</td>
            <td className='text-info'>{item.phone}</td>
          </tr>
        ))}
         </tbody>
      </table>


    </div>
  );
}

BoostrapTable.propTypes = {
  newData: PropTypes.array.isRequired,  // Ensure newData is an array
};

export default BoostrapTable;
