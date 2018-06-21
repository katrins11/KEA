import { Component, OnInit, Injectable, Pipe, PipeTransform } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})

@Injectable()
//wHAT DOES THE OnInit DO?
export class AllUsersComponent implements OnInit {
  users = [];

  constructor(private crudService: CrudService) {};

  ngOnInit() {
    //WHAT  DOES THE SUBSCRIPE DO?
    //IN WHAT ORDER DOES IT PRIENT OUT?
    console.log('hi');
    this.crudService.displayAllUsers().subscribe(data => {
      this.users = data;
      console.log(data);
      return data;
    });
    console.log('hi1');
  }
  
}