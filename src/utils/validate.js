const validateData=(email,password)=>{
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Updated password regex: at least 8 chars, one letter, one number; allows any character so symbols like @ are valid
    const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if(!emailRegex.test(email)){
        return {valid:false, message:"Invalid email format"};
    }
    if(!passwordRegex.test(password)){
        return {valid:false, message:"Password must be at least 8 characters long and contain at least one letter and one number"};
    }
    return {valid:true, message:"Validation successful"}
}

export default validateData;