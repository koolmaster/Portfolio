import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

export interface ProfileInterface {
  avatar: string;
  name: string;
  job: string;
  decription: string;
  date: string;
  phone: string;
  address: string;
  email: string;
  website: string;
  nation: string;
  social: Array<{}>;
  linkCV: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userInfo: ProfileInterface = {
    avatar: '../../assets/img/avatar.jpg',
    name: 'Trinh Quoc Thinh',
    job: 'web developer & web designer',
    // tslint:disable-next-line:max-line-length
    decription: `Hello! I’m Trinh Quoc Thinh. Web Developer with over 2.5 years of experience. Experienced with all stages of the development
      cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, VueJS,
      knowledge AngularJS, Angular 4. Strong background in management and leadership.`,
    date: '14/08/1992',
    phone: '0973.001.429',
    address: '1052/2 Lạc Long Quân Q.TBình',
    email: 'koolmaster1408@gmail.com',
    website: 'www.koolmaster.com',
    nation: 'VietNam',
    social: [
      { link: 'https://www.facebook.com/trinh.q.thinh', name: 'facebook', icon: 'facebook-f' },
      { link: 'https://plus.google.com/105835375917188733153?hl=vi', name: 'Google +', icon: 'google-plus' },
      { link: 'https://www.instagram.com/koolmaster1408/', name: 'Instagram', icon: 'instagram' },
      { link: '#', name: 'Linkedin', icon: 'linkedin' },
      { link: 'skype:live:koolmaster140892?chat', name: 'Skype', icon: 'skype' }
    ],
    linkCV: '../../../assets/file/TamLyHoc.pdf'
  };
  @ViewChild('content') content: ElementRef;
  constructor() {

  }

  ngOnInit() {
  }

  public downloadPDF() {
    const doc = new jsPDF('p', 'pt', 'a4');
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    const content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    }, function (dispose) {
      doc.save('Puppetboard.pdf');
    });
  }

}

