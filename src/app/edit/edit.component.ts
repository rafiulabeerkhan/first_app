import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

public id : number;

  constructor(private student: StudentsService, private router: ActivatedRoute) { 
 this.id = this.router.snapshot.params["id"];
    
  }

  userList: User[] = [];

  message: boolean=false;
ngOnInit(): void {
   // console.log(this.router.snapshot.params['id']);
    this.student.getStudentById( this.router.snapshot.params['id']).subscribe((result: any) => {
     // console.log(result);

     this.editStudent = new FormGroup({
        inputEmail: new FormControl(result['inputEmail']),
        InputPassword: new FormControl(result['InputPassword']),
        inputAddress: new FormControl(result['inputAddress']),
        inputAddress2: new FormControl(result['inputAddress2']),
        inputCity: new FormControl(result['inputCity']),
        inputZip: new FormControl(result['inputZip']),
        gridCheck: new FormControl(result['gridCheck'])
      });
      
    })
    
}
removeMessage() {
  this.message=false;
  }
  updateData () {
 //console.log(this.editStudent.value);

 this.student.updateStudentData(this.router.snapshot.params['id'], this.editStudent.value).subscribe((result) => {
 // console.log(result);
  this.message = true;
 })
}
editStudent: FormGroup = new FormGroup({
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
    console.log(this.editStudent.value);
    this.userList.push(this.editStudent.value);
  } else {
    for (let index = 0; index < this.userList.length; index++) {
      if (this.userList[index].inputEmail === this.editStudent.value.inputEmail) {
        this.userList[index] = this.editStudent.value;
      }

    }
    this.editStudent = new FormGroup({
      inputEmail: new FormControl(''),
      InputPassword: new FormControl(''),
      inputAddress: new FormControl(''),
      inputAddress2: new FormControl(''),
      inputCity: new FormControl(''),
      inputZip: new FormControl(''),
      gridCheck: new FormControl('')
    });



  }
  console.log(this.editStudent.value);


  this.clear();
}

clear() {

  this.editStudent = new FormGroup({
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
  this.editStudent = new FormGroup({
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


