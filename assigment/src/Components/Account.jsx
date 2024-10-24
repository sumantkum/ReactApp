import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Account() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log("Current User:", currentUser); // Debugging - Check if currentUser exists

    if (currentUser) {
      setUser(currentUser);
    } else {
      navigate('/login'); // Redirect to login if no user found
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  // Render a loading message until user data is available
  if (!user) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 col-12">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-4">Account Information</h3>
            <ul className="list-group">
              <li className="list-group-item"><strong>Name:</strong> {user.name}</li>
              <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
            </ul>
            <div className="text-center">
                        <button type='submit' className='btn btn-danger mt-3 w-50' onClick={handleLogout}>
                        Logout
                        </button>
                    </div>
            {/* <button className="btn btn-danger mt-3 w-100" onClick={handleLogout}>Logout</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
