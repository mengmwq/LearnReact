export const validate_password =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,20}$/;
const reg_email = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
export function validate_email(value){
  return  reg_email.test(value)
}