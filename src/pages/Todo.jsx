import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Todo.css'

function Todo() {
  const navigate = useNavigate();
  
  const [students, setStudents] = useState([]);
  const [_id, set_id] = useState('');
  const [studentName, setStudentName] = useState('');
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [enddate, setEnddate] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); 

  const handleAddStudent = () => {
    navigate('/add-student');
  };

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    setLoading(true);
    try {
      const result = await axios.get('http://localhost:8080/api/v1/student/getall');
      setStudents(result.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  }

  function editStudent(student) {
    setStudentName(student.studentName);
    setTaskName(student.taskName);
    setDescription(student.description);
    setEnddate(student.enddate);
    set_id(student._id);
    setShowModal(true); // Show the modal when editing
  }

  async function DeleteStudent(id) {
    try {
      await axios.delete(`http://localhost:8080/api/v1/student/delete/${id}`);
      alert('Student deleted successfully');
      Load();
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Failed to delete student');
    }
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/v1/student/edit/${_id}`, {
        studentName,
        taskName,
        description,
        enddate,
      });
      alert('Registration updated successfully');
      clearFields();
      Load(); // Refresh the list
      setShowModal(false); // Hide the modal after update
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Student update failed');
    }
  }

  function clearFields() {
    set_id('');
    setStudentName('');
    setTaskName('');
    setDescription('');
    setEnddate('');
  }

  return (
    <div className='todo'>
      <h1 className='text-center'>TODO LIST</h1>
      <div className="container"><button className="btn btn-primary mb-5 mt-3 container" onClick={handleAddStudent}>Add Task</button></div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-dark" align="center ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Task Name</th>
              <th scope="col">Description</th>
              <th scope="col">End Date</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student._id}>
                <td>{student.studentName}</td>
                <td>{student.taskName}</td>
                <td>{student.description}</td>
                <td>{student.enddate}</td>
                <td>
                  <button type="button" className="btn btn-warning me-2" onClick={() => editStudent(student)}>Update</button>
                  <button type="button" className="btn btn-danger" onClick={() => DeleteStudent(student._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}


      <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="editStudentModal" aria-hidden={!showModal}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Student</h5>
              <button type="button" className="close" onClick={() => setShowModal(false)} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={update}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" value={studentName} onChange={(e) => setStudentName(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Task Name</label>
                  <input type="text" className="form-control" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>End Date</label>
                  <input type="date" className="form-control" value={enddate} onChange={(e) => setEnddate(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary mt-4">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>} {/* Modal backdrop */}
    </div>
  );
}

export default Todo;
