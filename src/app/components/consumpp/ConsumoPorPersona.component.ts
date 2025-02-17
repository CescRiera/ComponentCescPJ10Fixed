import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import investmentsData from '../../../../public/investments.json'; // Ruta del archivo JSON

// Registrar todos los tipos de gráficos y elementos necesarios
Chart.register(...registerables);

@Component({
  selector: 'app-investments-chart',
  standalone: true,
  template: `<canvas id="investmentsChart"></canvas>`,
  styles: []
})
export class InvestmentsChartComponent {

  constructor() {}

  ngOnInit(): void {
    const ctx = document.getElementById('investmentsChart') as HTMLCanvasElement;
    
    // Preparar los datos de las inversiones
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
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Gobern de Africa',
            data: africaData,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'World Bank',
            data: worldBankData,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
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
            text: 'Inversiones por Año'
          }
        },
        scales: {
          x: { 
            title: { display: true, text: 'Años' }
          },
          y: { 
            title: { display: true, text: 'Dinero Invertido (USD)' },
            beginAtZero: true
          }
        }
      }
    });
  }
}
