import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/form/UserForm1";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";



export function UserForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const {
    control,
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
      
        {/* Full Name */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
          <label style={{ flex: 1 }}>
            <span style={{ display: "block", fontSize: 16, marginBottom: 4 }}>
              First Name
            </span>
            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              value={user.firstName}
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
              Last Name
            </span>

            <input
              placeholder="Last Name"
              required
              type="text"
              value={user.lastName}
              name="lastName"
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
            Email
          </span>
          <input
            placeholder="EMail"
            required
            type="text"
            id="userEmail"
            value={user.email}
            name="email"
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
            Phone Number
          </span>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <PhoneInput
                placeholder="Enter phone number"
                value={user.phonenumber}
                onChange={(value) => handleChange("phoneNumber", value)}
                style={{ padding: 8 }}
              />
            )}
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
            type="button"
            style={{
              padding: "12px",
              fontSize: 16,
              cursor: "pointer",
            }}
            onClick={() => {
              if (user.firstName.trim() && user.lastName.trim() && user.email.trim() ){
                        dispatch(updateUser({ step: user.step + 1 }));

              }else
                  alert("PLease fill all fields before going to next step ")
                        }}
          >
            Next
          </button>
        </div>
    </main>
  );
}

export default UserForm;
