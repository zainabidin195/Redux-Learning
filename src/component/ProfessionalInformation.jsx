import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser , addSkills, removeSkills} from "../redux/form/UserForm1";
import {  useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function ProfessionalInfo() {
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

    const skills = useSelector((state) => state.user.skills);

const handleChangeee = (e) => {
  const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);

  selected.forEach((skill) => {
    if (!skills.includes(skill)) {
      dispatch(addSkills(skill));
    }
  });

  skills.forEach((skill) => {
    if (!selected.includes(skill)) {
      dispatch(removeSkills(skill));
    }
  });
};


  const allSkills = [
    "JavaScript",
    "React",
    "Redux",
    "Node.js",
    "TypeScript",
    "CSS",
    "HTML",
  ]; 

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
              Job Title
            </span>
            <input
              placeholder="Job Title"
              required
              type="text"
              value={user.jobTitle}
              name="jobTitle"
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
            Company Name 
            </span>

            <input
              placeholder="Company Name"
              required
              type="text"
              value={user.companyName}
              name="companyName"
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
            Year of Experience
          </span>
          <input
            placeholder="Expereince"
            type="text"
            value={user.years_of_experience}
            name="years_of_experience"
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
                Skills
            </span>
            <select
              multiple
              value={skills}
              onChange={handleChangeee}
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: 16,
                height: 120,
              }}
            >
              {allSkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>



             <span style={{ display: "block", fontSize: 16, marginBottom: 4 }}>
            Linked In Profile
          </span>
          <input
            placeholder="Expereince"
            type="text"
            value={user.linkedInProfile}
            name="linkedInProfile"
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
        </label>

        <div style={{display: "flex",
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
              if (user.jobTitle.trim() && user.companyName.trim() && user.years_of_experience && user.skills.length>0 && user.linkedInProfile.trim()){
                dispatch(updateUser({ step: user.step + 1 }));

              }
              else{
                alert ("Please fill all fields before going to next step")
              }
            }}
          >
            Next
          </button>
        </div>

    </main>
  );
}


export default ProfessionalInfo;