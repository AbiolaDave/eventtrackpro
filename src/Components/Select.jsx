import * as yup from "yup";


  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
   export const advancedSchema = yup.object().shape({
     username: yup
       .string()
       .min(3, "Please enter a valid username")
       .required("Required"),
     jobType: yup.string().oneOf(["designer", "developer", "manager", "other"], 'select an option').required("Required"),
     acceptedToS: yup
       .boolean().oneOf([true], "accept term")
   });




           