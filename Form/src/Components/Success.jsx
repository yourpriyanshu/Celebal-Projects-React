import { useLocation } from "react-router-dom";
import "./Form.css";

const Success = () => {
  const location = useLocation();
  const { state } = location;
  const { formData } = state || {};

  return (
    <div className="success-container">
      <h1>Form Submitted Successfully</h1>
      {formData && (
        <div>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
          <p>Phone No.: {formData.phoneNo}</p>
          <p>Country: {formData.country}</p>
          <p>City: {formData.city}</p>
          <p>PAN No.: {formData.panNo}</p>
          <p>Aadhar No.: {formData.aadharNo}</p>
        </div>
      )}
    </div>
  );
};

export default Success;
