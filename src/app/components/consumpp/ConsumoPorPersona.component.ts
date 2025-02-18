import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import investmentsData from '../../../../public/investments.json';

Chart.register(...registerables);

@Component({
  selector: 'app-investments-chart',
  standalone: true,
  template: `
    <div class="examples bg-[#110E2F]/5 rounded-2xl p-8 shadow-inner">
      <canvas id="investmentsChart"></canvas>
    </div>
  `,

})
export class InvestmentsChartComponent {

  constructor() {}

  ngOnInit(): void {
    const ctx = document.getElementById('investmentsChart') as HTMLCanvasElement;

    const years = investmentsData.map(item => item.year);
    const unescoData = investmentsData.map(item => item.investments.find(i => i.organization === 'UNESCO')?.amount || 0);
    const africaData = investmentsData.map(item => item.investments.find(i => i.organization === 'Gobierno de África')?.amount || 0);
    const worldBankData = investmentsData.map(item => item.investments.find(i => i.organization === 'World Bank')?.amount || 0);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: years,
        datasets: [
          {
            label: 'UNESCO',
            data: unescoData,
            backgroundColor: '#73CCD4',
            borderColor: '#73CCD4',
            borderWidth: 1
          },
          {
            label: 'Gobern de Africa',
            data: africaData,
            backgroundColor: '#E59B50',
            borderColor: '#E59B50',
            borderWidth: 1
          },
          {
            label: 'World Bank',
            data: worldBankData,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 0.6)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: {
            display: true,
            text: 'Inversions al Año'
          }
        },
        scales: {
          x: { 
            title: { display: true, text: 'Anys' }
          },
          y: { 
            title: { display: true, text: 'Diners Invertits en Millions (USD)' },
            beginAtZero: true
          }
        }
      }
    });
  }
}