import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IpService } from '../service/ip.service';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css'],
  // providers: [IpService]
})
export class IpComponent implements OnInit {
  ip = '';
  constructor(private ipService: IpService) {
  }

  ngOnInit() {
    // this.getIp();
     this.getIp2();
  }

  getIp(){
    this.ipService.getIp().subscribe((res: HttpResponse<any>) => {
      let d: any = res;
      this.ip = d.ip;
      console.log(res);
    },
    (error) => {
      console.log("error: ", error);
    }
    );
  }

  getIp2(){
    this.ipService.getIp2()
    .then(ip => this.ip = ip)
    .catch(err => console.log(err));
  }

}
