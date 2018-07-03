import { Component, OnInit, Injectable, Pipe, PipeTransform } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})

@Injectable()
//wHAT DOES THE OnInit DO?
//Lifecycle hook that is called after data-bound properties of a directive are initialized
//It'S A Lifecycle hook that runs on load
export class AllUsersComponent implements OnInit {
  users = [];

  constructor(private crudService: CrudService) {};

  ngOnInit() {
    //WHAT  DOES THE SUBSCRIPE DO?
    //IN WHAT ORDER DOES IT PRIENT OUT? hi - hi1 - data()
    console.log('hi');
    this.crudService.displayAllUsers().subscribe(data => {
      this.users = data;
      console.log(data);
      return data;
    });
    console.log('hi1');
  }
  
}