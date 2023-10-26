import { Component, OnInit } from '@angular/core';
import { mockData } from './mock-course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-course',
  templateUrl: './client-course.page.html',
  styleUrls: ['./client-course.page.scss'],
})
export class ClientCoursePage implements OnInit {
  mock = mockData.course;
  role: string = 'c';
  waitCollapsed = true;
  angemeldet = false;

  actionSheetButtons = [
    {
      text: 'Teilnehmer hinzufügen',
      data: {
        action: 'asdf',
      },
    },
    {
      text: 'Probetraining hinzufügen',
      data: {
        action: 'asd',
      },
    },
    {
      text: 'Kurs bearbeiten',
      data: {
        action: 'bvds',
      },
    },
    {
      text: 'Kurs ausfallen lassen',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Abbrechen',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.role = this.route.snapshot.paramMap.get('id')!;
    if (this.role !== 'c' && this.role !== 't' && this.role !== 'a')
      this.role = 'c';
    console.log(this.role);
  }

  anmelden() {
    this.mock.participants.push({
      firstName: 'Manuel',
      lastName: 'Neuer',
      insurance: true,
      prevention: false,
      vaccinated: true,
      boostered: true,
      xcard: true,
      trial: false,
    });

    this.angemeldet = true;
  }

  abmelden() {
    this.mock.participants.pop();
    this.angemeldet = false;
  }

  getName(p: any): string {
    if (p.trial) return 'Probetraining';
    if (this.role === 'c') return p.firstName + ' ' + p.lastName[0] + '.';

    let name = p.firstName + ' ' + p.lastName;

    if (p.xcard) name += '*';
    name += ' ';
    if (p.insurance) name += 'K';
    if (p.prevention) name += 'P';
    name += ' ';
    if (p.vaccinated) name += 'G';
    if (p.boostered) name += '&B';
    return name;
  }
}
