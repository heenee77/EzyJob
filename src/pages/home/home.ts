import { Component } from '@angular/core';
import { NavController, IonicPage, PopoverController, ModalController, AlertController } from 'ionic-angular';
import { JobDetailsPage } from '../job-details/job-details';
import { ClientPage } from '../client/client';
import { JobPage } from '../job/job';
import { BusinessPage } from '../business/business';
import { ReportPage } from '../report/report';
import { UserDropdownPage } from '../user-dropdown/user-dropdown';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  jobs: Array<{jobNum: string, jobDesc: string, client: string, state: string}>;
  public pageList = [HomePage, ClientPage, JobPage, BusinessPage, ReportPage];

  //<Calendar>
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
 
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  //</Calender>

  constructor(private navCtrl: NavController, public popoverCtrl: PopoverController, private modalCtrl: ModalController, private alertCtrl: AlertController) {
    this.jobs = [
      {jobNum: "J0001", jobDesc:"Initial Meeting", client: "ABC Company", state: "Planned"},
      {jobNum: "J0002", jobDesc:"Planning", client: "Client 1", state: "Planned"},
      {jobNum: "J0003", jobDesc:"Development", client: "Client 2", state: "Planned"}
    ]

  }
  
  itemSelected(jobSelection){
    this.navCtrl.push(JobDetailsPage, jobSelection);
  }

  pageNav(pageNum:number){
    this.navCtrl.setRoot(this.pageList[pageNum]);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(UserDropdownPage);
    popover.present({
      ev: myEvent
    });
  }

  // Calendar
  addEvent() {
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
  // </Calendar>
}
