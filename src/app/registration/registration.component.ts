import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

constructor(private builder: FormBuilder, private service: AuthService, private router: Router) {

}
registerForm = this.builder.group({
  id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
  inputName : this.builder.control('', Validators.required),
  InputPassword : this.builder.control('', Validators.compose([Validators.required])),
  inputEmail: this.builder.control('',Validators.compose([Validators.required, Validators.email])),
  gender: this.builder.control('male'),
  role : this.builder.control(''),
  isActive : this.builder.control('false')
});
proceedregistration() {
  if(this.registerForm.valid) {
this.service.ProceedRegister(this.registerForm.value).subscribe(res => {
 // this.toastr.success('Please Contact Admin for enable access','Registered Successfully');
 alert('Registered Successfully');
  this.router.navigate(['login']);
})
  } else {
    alert('Please Enter Valid Data');
   // this.toastr.warning('Please Enter Valid Data');
  }
}
 
}
