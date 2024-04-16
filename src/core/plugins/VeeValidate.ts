import {configure } from "vee-validate"

export function  InitVeeValidate(){
  configure({
    validateOnBlur:true,
    validateOnChange:true,
    validateOnInput:true,
    validateOnModelUpdate:true
  })
}