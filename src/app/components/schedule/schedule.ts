import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { staggerAnimation } from '../../shared/animations';

interface ScheduleDay {
  day: string;
  date: string;
  activities: { time: string; activity: string }[];
}

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  animations: [staggerAnimation],
  templateUrl: './schedule.html',
  styles: ``,
})
export class Schedule {
  activeTab = 0;
  animationState = 'hidden';

  schedule: ScheduleDay[] = [
    {
      day: 'Sexta-feira',
      date: '03/04',
      activities: [
        { time: '8h30', activity: 'Chegada' },
        { time: '8h45', activity: 'Laudes' },
        { time: '9h15', activity: 'Pregação' },
        { time: '10h15', activity: 'Intervalo' },
        { time: '10h45', activity: 'Via Sacra' },
      ],
    },
    {
      day: 'Sábado',
      date: '04/04',
      activities: [
        { time: '8h30', activity: 'Chegada' },
        { time: '8h45', activity: 'Oração inicial' },
        { time: '9h15', activity: 'Pregação' },
        { time: '10h15', activity: 'Intervalo' },
        { time: '10h45', activity: 'Oração comunitária' },
      ],
    },
    {
      day: 'Domingo',
      date: '05/04',
      activities: [
        { time: '14h00', activity: 'Louvor' },
        { time: '14h15', activity: 'Adoração' },
        { time: '15h00', activity: 'Pregação' },
        { time: '17h00', activity: 'Missa' },
      ],
    },
  ];

  selectTab(index: number) {
    this.activeTab = index;
  }

  onVisible() {
    this.animationState = 'visible';
  }
}
