import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor(private api:ApiService) { }

  flightname=""
  origin=""
  destination=""
  capacity=""

  readValues=()=>{
    let data={
      "flightname":this.flightname,
      "origin":this.origin,
      "destination":this.destination,
      "capacity":this.capacity
    }
    console.log(data)
    this.api.addCourse(data).subscribe(
      (data)=>{
         alert("Data inserted successfully")
      }
    )
  }

  ngOnInit(): void {
  }

}
