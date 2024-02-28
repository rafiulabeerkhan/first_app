import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';

import { User } from '../model/User';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent  implements OnInit{


constructor (private student: StudentsService) {}


  userList: User[] = [];

  message: boolean=false;
ngOnInit(): void {
    
}
removeMessage() {
  this.message=false;
  }
saveData () {
  console.log(this.addStudent.value);
  this.student.saveStudentData(this.addStudent.value).subscribe((result) => {
    //console.log(result);
    this.message = true;
    this.addStudent.reset ({});
  })

}
  addStudent: FormGroup = new FormGroup({
    inputEmail: new FormControl(''),
    InputPassword: new FormControl(''),
    inputAddress: new FormControl(''),
    inputAddress2: new FormControl(''),
    inputCity: new FormControl(''),
    inputZip: new FormControl(''),
    gridCheck: new FormControl('')
  });
 





 
onSub() {
  if (!this.editData) {
    console.log(this.addStudent.value); 
    this.userList.push(this.addStudent.value);
  } else {
    for (let index = 0; index < this.userList.length; index++) {
      if (this.userList[index].inputEmail === this.addStudent.value.inputEmail) {
        this.userList[index] = this.addStudent.value;
      }

    }
    this.addStudent = new FormGroup({
      inputEmail: new FormControl(''),
      InputPassword: new FormControl(''),
      inputAddress: new FormControl(''),
      inputAddress2: new FormControl(''),
      inputCity: new FormControl(''),
      inputZip: new FormControl(''),
      gridCheck: new FormControl('')
    });



  }
  console.log(this.addStudent.value);


  this.clear();
}

clear() {

  this.addStudent = new FormGroup({
    inputEmail: new FormControl(''),
    InputPassword: new FormControl(''),
    inputAddress: new FormControl(''),
    inputAddress2: new FormControl(''),
    inputCity: new FormControl(''),
    inputZip: new FormControl(''),
    gridCheck: new FormControl('')
  });
  this.editData = false;
}


delete (user: User) {

  console.log("Delete Call " + user);
  this.userList = this.userList.filter(item => item !== user);

}
editData: boolean = false;

edit(user: User) {
 
  this.editData = true;
  this.addStudent = new FormGroup({
    inputEmail: new FormControl(user.inputEmail),
    InputPassword: new FormControl(user.InputPassword),
    inputAddress: new FormControl(user.inputAddress),
    inputAddress2: new FormControl(user.inputAddress2),
    inputCity: new FormControl(user.inputCity),
    inputZip: new FormControl(user.inputZip),
    gridCheck: new FormControl(user.gridCheck)
  });

}
}


