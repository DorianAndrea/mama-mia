import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email, token, logout, getProfile } = useContext(UserContext);

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow text-center">
            <div className="card-body">
              <h2 className="card-title mb-4">Mi Perfil</h2>

              <p className="card-text">
                <strong>Email:</strong> {email}
              </p>

              <button className="btn btn-danger mt-3" onClick={logout}>
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
