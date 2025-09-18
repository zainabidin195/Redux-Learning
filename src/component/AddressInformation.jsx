import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/form/UserForm1";
import {  useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


export function AddressInfo() {
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

  console.log(user);


  const handleChange= (key, value)=>{
    dispatch(updateUser({
      [key] : value
    }))
  }

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
              City
            </span>
            <input
              placeholder="Lahore"
              required
              type="text"
              name="city"
              value={user.city}

              onChange={(e) => handleChange(e.target.name , e.target.value)}
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
            Province
            </span>

            <input
              placeholder="Province"
              required
              type="text"
              name="province"
              value={user.province}
              onChange={(e) => handleChange(e.target.name , e.target.value)}
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
            Postal Code
          </span>
          <input
            placeholder="Postal Code"
            type="text"
            name="postalCode"
            value={user.postalCode}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
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
            Country
          </span>
         <input
            placeholder="Country"
            required
            type="text"
            name="country"
            value={user.country}
            onChange={(e) => handleChange(e.target.name, e.target.value) }
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
            type="button"
            style={{
              padding: "12px",
              fontSize: 16,
              cursor: "pointer",
            }}
            onClick={() => {
              if (user.city.trim() && user.province.trim() && user.country.trim() && user.postalCode.trim()){

                dispatch(updateUser({ step: user.step + 1 }));
              }
              else{
                alert("PLEASE fill all fields before going to next step ")
              }
            }}         
          >
            Next
          </button>
        </div>

    </main>
  );
}

export default AddressInfo;
