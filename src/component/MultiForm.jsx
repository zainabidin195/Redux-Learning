import React from "react"
import { updateUser } from "../redux/form/UserForm1"
import UserForm  from "./UserForm"
import  AddressInfo from "./AddressInformation"
import  ProfessionalInfo  from "./ProfessionalInformation"
import AccountSett from './AccountSetting'
import { useSelector } from "react-redux"

export function MultiForm(){
    
    const {step} = useSelector((state)=> state.user)


    return (
    <div>
      {step === 1 && <UserForm />}
      {step === 2 && <AddressInfo />}
      {step === 3 && <ProfessionalInfo />}
      {step === 4 && <AccountSett />}
    </div>
  );


}

export default MultiForm;