import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  todayDate: Date;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.todayDate = this.myservice.showTodayDate();
    this.route.queryParamMap.subscribe((params: any) => console.log(params));

  }

}
