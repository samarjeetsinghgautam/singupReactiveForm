// good diet
// move
// be concious about thigs you spend time with
//


import {FormGroup} from '@angular/forms'

export function Passwordvalidater(
    pass:string,
    comp_pass:string,
    ){
        return (formgroup:FormGroup) =>{
            const password  = formgroup.controls[pass];
            const comp_password = formgroup.controls[comp_pass]

            if(password.value!=comp_password){
                comp_password.setErrors({mustMatch:true});
            }
            else{
              comp_password.setErrors(null);
            }
        }
}

