import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private student: StudentsService) { }
  studentData: any = [];

  ngOnInit(): void {
    this.student.getAllStudent().subscribe((allData) => {
      console.log(allData);
      this.studentData = allData;
    });
  }
  deleteStudent(student_id: any) {
    this.student.deleteStudent(student_id).subscribe((result) => {
     // console.log(result);
this.ngOnInit();
    })
  }
}
