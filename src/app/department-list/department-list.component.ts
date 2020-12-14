import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      department list
    </h3>
    <ul class="items">
      <li *ngFor="let department of departments" [class.selected]="isSelected(department)" (click)="onSelect(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedID;

  departments = [
    {id: '1', name: 'Angular'},
    {id: '2', name: 'Node.js'},
    {id: '3', name: 'MongoDB'},
    {id: '4', name: 'Python'},
    {id: '5', name: 'Bootstrap'}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedID = id;
    });
  }

  onSelect(department){
    this.router.navigate(['/departments', department.id], { relativeTo: this.route });
  }

  isSelected(department){
    return department.id === this.selectedID;
  }

}
