import { useState } from "react";
import { useLazyQuery, gql, useQuery } from "@apollo/client";
import LOGIN from "../lib/queries/login";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data }] = useLazyQuery(LOGIN);
  if (data) {
    console.log(data);
    localStorage.setItem("token", data.login);
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
        backgroundColor: "rgb(255 255 255)",
        borderRadius: "20px",
        flexDirection: "column",
        color: "#102F1D",
        fontSize: "40px",
        fontFamily: "'Cormorant SC', serif",
      }}
    >
      <h1 style={{ paddingBottom: "50px" }}>Console.log</h1>
      <div
        style={{
          width: "40vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
          backgroundColor: "RGB(204, 238, 218)",
          borderRadius: "20px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          /*   border: "solid 1px grey" */
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            padding: "30px",
            /* height: "20px", */
          }}
        >
          <input
            style={{
              height: "45px",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              fontSize: "15px",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <input
            style={{
              height: "45px",
              width: "100%",
              padding: "10px",
              boxSizing: "border-box",
              borderRadius: "5px",
              marginTop: "25px",
              border: "none",
              fontSize: "15px",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div
            style={{
              paddingTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                backgroundColor: "rgb(255 255 255)",
                borderRadius: "5px",
                paddingLeft: "15px",
                paddingRight: "15px",
                height: "30px",
                width: "100px",
                fontSize: "15px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                fontFamily: "serif",
                border: "none",
              }}
              onClick={async () => {
                try {
                  const token = await login({
                    variables: {
                      userLoginInput: { email: email, password: password },
                    },
                  });
                  console.log(token);
                  localStorage.setItem("token", token.data.login);
                  router.replace("/dashboard");
                } catch (err) {
                  alert("Invalid credentials");
                  console.log(err);
                }
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
