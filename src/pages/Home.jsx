import DocumentTitle from "../components/DocumentTitle";
import useAuth from "../hookUseAuth/HookUseAuth";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 20px" }}>
      <DocumentTitle> Phonebook</DocumentTitle>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        Welcome to Phonebook!
      </h1>
      {isLoggedIn ? (
        <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
          Manage your contacts{" "}
        </p>
      ) : (
        <>
          <p
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Please, log in or register.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <NavLink
              to="/login"
              style={{
                textDecoration: "none",
                color: "inherit",
                padding: "10px 20px",
                backgroundColor: "white",
                border: "2px solid gold",
                borderRadius: "5px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                cursor: "pointer",
                
              }}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              style={{
                textDecoration: "none",
                color: "black",
                border: "2px solid gold",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Register
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
