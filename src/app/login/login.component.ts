import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router) {

  }

  userList: User[] = new Array<User>();

  ngOnInit(): void {
    this.getEmail();
  }

  private getEmail() {
    this.service.GetAll().subscribe(item => {
      Object.assign(this.userList, item);
    })
  }

  getbyEmail(email: string): User {
    let user: User = new User();
    this.userList.forEach(u => {
      if (u.inputEmail == email) {
        user = u;
      }
    })

    return user

  }

  userdata: any;


  loginform = this.builder.group({
    inputEmail: this.builder.control('', Validators.required),
    InputPassword: this.builder.control('', Validators.required)
  })
  proceedlogin() {


    if (this.loginform.valid) {
      let user: User = new User();
      Object.assign(user, this.getbyEmail(this.loginform.value.inputEmail ?? "") ?? new User());
      


      if (user.InputPassword == this.loginform.value.InputPassword) {
        localStorage.setItem("isLogin", "true");
        this.router.navigateByUrl("/home");
      } else {
        alert("Wrong Password")
      }
    }

    // this.service.ProceedRegister(this.loginform.value).subscribe(res => {
    //  // this.toastr.success('Please Contact Admin for enable access','Registered Successfully');
    //  alert('Registered Successfully');
    //   this.router.navigate(['login']);
    // })
    //   } else {
    //     alert('Please Enter Valid Data');
    //    // this.toastr.warning('Please Enter Valid Data');
    //   }
    // this.service.GetByCode(this.loginform.value.username).subscribe(res => {
    //   this.userdata = res;
    //   console.log(this.userdata);
    //   if (this.userdata === this.loginform.value.password) {
    //     if (this.userdata.isActive) {
    //       sessionStorage.setItem('username', this.userdata.id);
    //       sessionStorage.setItem('userrole', this.userdata.role);
    //       this.router.navigate(['']);
    //     } else {
    //       alert('please contact admin, In Active User');
    //     }
    //   } else {
    //     alert('Invalid Credentials');
    //   }
    // });
  }
}

