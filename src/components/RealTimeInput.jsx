import React,{useState} from 'react'

function RealTimeInput() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname : '',
    dateofbirth: '',
    gender:'',
    phoneno: '',
    email: '',   
    course: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

  return (
    <div style={{ textAlign: 'center', justifyContent:'center', fontSize:'25px'}}>
               <h3> REGISTRATION FORM </h3>
            
       <form style={{ display: 'grid', gridAutoFlow:'column', gap: '15px', fontFamily:'sans-serif', fontSize:'40px', color:'black', }} >
             

        <input type="text" name="firstname" placeholder="Enter your First Name" value={formData.firstname}
                    onChange={handleChange}/>
        <input type="text" name="lastname" placeholder="Enter your Last Name" value={formData.lastname}
                    onChange={handleChange}/>
       <input type="date" name="dateofbirth" placeholder="Enter your Date of Birth" value={formData.dateofbirth} 
                    onChange={handleChange}/>
       <select id="options" name="gender"  placeholder="select your Gender" value={formData.gender} 
                    onChange={handleChange}>
        <option value="">Select Your Gender</option>
        <option value="Male">Male</option>
        <option value="Female"> Female</option>
        <option value="N/A">N/A</option> </select>
      
      <input type= "number" name="phoneno" placeholder="Enter your Phoneno" value={formData.phoneno}
                           onChange={handleChange} />
       <input type="email" name="email" placeholder="Enter your Email Id" value={formData.email}
                    onChange={handleChange}/>     
       <select id="options" name="course"  value={formData.course} placeholder="select your Course" 
                    onChange={handleChange}>
        
         <option value="">Select Your Course</option>
        <option value="Javascript">Javascript</option>
        <option value="python">python</option>
        <option value="Java">Java</option>
        <option value="C++">C++</option>
      </select>
    </form>

            <div>
                <h3 style={{color:'Brown'}}>Real-Time Data:</h3>
                <p>FirstName: <span style={{color:'darkviolet'}}>{formData.firstname}</span></p>
                <p>LastName:<span style={{color:'darkviolet'}}> {formData.lastname}</span></p>
                <p>Date Of Birth: <span style={{color:'darkviolet'}}>{formData.dateofbirth}</span></p>
                <p>Gender: <span style={{color:'darkviolet'}}>{formData.gender}</span></p>
                <p>Phone No:<span style={{color:'darkviolet'}}> {formData.phoneno}</span></p>
                <p>Email Id: <span style={{color:'darkviolet'}}>{formData.email}</span></p>
                <p>Course: <span style={{color:'darkviolet'}}>{formData.course}</span></p>
                
            </div>

    </div>
  )
}

export default RealTimeInput