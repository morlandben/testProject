import { Component, OnInit, ViewChild } from '@angular/core';
import{Chart,Point,registerables} from 'chart.js'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

@ViewChild('myChart') lineChart:any
graph: any
labels: number [] = [1,2,3,4,5]
speedData: number [] = [69,52,33,45,27]
createChart() {
  this.graph = new Chart(this.lineChart.nativeElement, {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [{
        label: "speed vs time",
        data: this.speedData,
        backgroundColor: "rgb(0,0,0)",
        borderColor: "rgb(38,194,129)",
        borderWidth: 1
      }]
    }
  })
}
 
constructor() {}
ngOnInit() {}
ngAfterViewInit(){
this.createChart ()
}
}


