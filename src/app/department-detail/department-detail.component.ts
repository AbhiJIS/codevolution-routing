import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You have selected department with id {{departmentID}}</h3>

    <p>
      <button (click)="showOverview()" >Overview</button>
      <button (click)="showContact()" >Contact</button>
    </p>
    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>

    <div>
      <button (click)="gotoDepartments()" >Back</button>
    </div>
  `,
  styles: [
    `a {
      margin: 16px;
    }
    div{
      margin: 16px;
    }`
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentID;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    // const id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentID = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.departmentID = id;
    });
  }

  goPrevious(){
    const previousID = this.departmentID - 1;
    this.router.navigate(['/departments', previousID]);
  }
  goNext(){
    const nextID = this.departmentID + 1;
    this.router.navigate(['/departments', nextID]);
  }

  gotoDepartments(){
    const selectedID = this.departmentID ? this.departmentID : null;
    this.router.navigate(['/departments', {id: selectedID}]);
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route})
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route})

  }

}
