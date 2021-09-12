import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

interface IUser {
  Id: number
  Login: string
  Email: string
  Telephone: number
  Password: string
}

@Component({
  selector: 'app-prereg-users',
  templateUrl: './prereg-users.component.html',
  styleUrls: ['./prereg-users.component.scss']
})
export class PreregUsersComponent implements OnInit {

  constructor(private admin: AdminService) { }
  users:IUser[] = []
  isLoaded = false
  ngOnInit(): void {
    this.admin.getInvitationsList().subscribe((data:IUser[])=>{
      this.users = data
      this.isLoaded = true
    })
  }

}
