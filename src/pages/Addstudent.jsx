import React, { useState } from 'react';
import axios from 'axios';
import './addstudent.css'
const AddStudent = () => {
    const [student, setStudent] = useState({
        studentName: '',
        taskName: '',
        description: '',
        enddate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prevStudent) => ({
            ...prevStudent,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting student:', student); 
      
        try {
          const response = await axios.post('http://localhost:8080/api/v1/student/save', student, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          console.log('Response:', response.data);
      
    
          setStudent({
            studentName: '',
            taskName: '',
            description: '',
            enddate: ''
          });
        } catch (error) {
          console.error('Error saving student:', error);
        }
      };

    return (
       <>
       
       <div className='addstudent'>
       <div className="container  card shadow pt-3 ">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="studentName"
                        placeholder="Enter the Name"
                        value={student.studentName}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Task Name</label>
                    <input
                        type="text"
                        name="taskName"
                        placeholder="Task Name"
                        value={student.taskName}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={student.description}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>End Date</label>
                    <input
                        type="date"
                        name="enddate"
                        value={student.enddate}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>

                <div className='text-center mb-3'>
                    <button className="btn btn-info btn-lg mt-4 ">Save</button>
                </div>
            </form>
        </div>
        </div>
        </>
    );
};

export default AddStudent;
