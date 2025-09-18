import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/form/UserForm1";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-phone-number-input/style.css";


export function AccountSett() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const {
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...user,
    },
  });


  const handleChange = (key , value)=>{
    dispatch(
      updateUser({
        [key]:value
      })
    );
  }
  console.log(user);

  useEffect(() => {
    console.log('error ===>' ,errors);
  }, [errors])

  return (
    <main
      style={{
        width: "100%",
        maxWidth: "800px", 
        padding: 16,
        borderRadius: "12px",
        background: "white",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        margin: "0 auto", 
      }}
    >
        
        <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
          <label style={{ flex: 1 }}>
            <span style={{ display: "block", fontSize: 16, marginBottom: 4 }}>
             Username
            </span>
            <input
              placeholder="Username"
              type="text"
              name="username"
              value={user.username}
              onChange={(e) => handleChange(e.target.name,e.target.value)}
              minLength={2}
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: 16,
              }}
            />
          </label>
          <label style={{ flex: 1 }}>
              <span style={{ display: "block", fontSize: 16, marginBottom: 4 }}>
             Password
            </span>
      <input
        placeholder="Enter Password"
        name="password"
        type="password"
        value={user.password}
        required
        onChange={(e) => handleChange(e.target.name,e.target.value)}
        style={{
          width: "100%",
          padding: 12,
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: 16,
        }}
      />
      </label>
        </div>

        <label style={{ flex: 1 }}>
          <span style={{ display: "block", fontSize: 16, marginBottom: 4 }}>
            Security Questions
          </span>
          <input
            placeholder="Security Questions"
            required
            type="text"
            value={user.security_question}
            name="security_question"
            onChange={(e) => handleChange(e.target.name,e.target.value)}
            minLength={2}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 6,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />
          <span style={{ display: "block", fontSize: 16, marginBottom: 4 }}>
            Security Answers
          </span>
          <input
            placeholder="Security Answers"
            required
            type="text"
            value={user.security_answer}
            name="security_answer"
            onChange={(e) => handleChange(e.target.name,e.target.value)}
            minLength={2}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 6,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />
        </label>

        
       
        <div
          style={{
            display: "flex",
            flexDirection: "column", 
            gap: 8,
            marginTop: 12,
          }}
        >
          <button
            type="submit"
            style={{
              padding: "12px",
              fontSize: 16,
              cursor: "pointer",
            }}
            onClick={() => {
              if (user.username.trim() && user.password.trim() && user.security_question.trim() && user.security_answer.trim())
              {dispatch(updateUser({step : user.step-1}))}
              else{
                alert ("Please fill all fields before going to next step")
              }}}
          >
            Back
          </button>
        </div>
    </main>
  );
}

export default AccountSett;
