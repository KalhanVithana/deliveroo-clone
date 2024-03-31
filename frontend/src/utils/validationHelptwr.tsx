export const validationHelper = {

    emailValidation : (email:string) =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
      
}