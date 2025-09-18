import { createSlice  } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name : "user",
    initialState : { 
        firstName : '',
        lastName : '',
        email : '',
        phoneNumber: '',
        step: 1,
        city: '',
        province: '',
        postalCode: '',
        country: '',
        jobTitle : '',
        companyName : '',
        years_of_experience: '',
        skills : [],
        linkedInProfile:'',
        username: '',
        password: '',
        security_question: '',
        security_answer: ''

    },

    reducers: {

        updateUser: (state,action) => {
          return  {...state , ...action.payload}
        },

        addSkills : (state, action) =>{
            state.skills.push(action.payload)
        },
        removeSkills:(state, action) => {
            state.skills = state.skills.filter((sk)=> sk !== action.payload)
        }
    }

});

export  const {updateUser, addSkills, removeSkills} = userSlice.actions;

export default userSlice.reducer;
