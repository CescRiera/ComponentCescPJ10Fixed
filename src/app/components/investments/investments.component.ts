import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InvestmentsChartComponent } from "../consumpp/ConsumoPorPersona.component";
import { Investment } from '../../models/investment.model';
import { InvestmentTitlePipe } from '../../pipes/investment-title.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    InvestmentsChartComponent,
    InvestmentTitlePipe,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {
  africanInvestments: Investment[] = [];
  globalInvestments: Investment[] = [];

  ngOnInit(): void {
    this.africanInvestments = [
      new Investment(
        "Kenya Water Purification Initiative",
        "Large-scale water treatment plants providing clean drinking water to 5 million residents in rural areas through solar-powered purification systems.",
        "kenyawater.jpg",
        "Water Infrastructure",
        "Nairobi, Kenya",
        "In Progress",
        undefined,
        undefined,
        120000000
      ),
      new Investment(
        "Nigeria Smart Irrigation Project",
        "AI-powered irrigation systems covering 50,000 hectares of farmland, increasing crop yields by 40% while reducing water usage.",
        "nigeriawater.jpg",
        "Agriculture Tech",
        "Kano, Nigeria",
        "Completed",
        undefined,
        undefined,
        75000000
      ),
      new Investment(
        "Rwanda Rainwater Harvesting Program",
        "National initiative installing 100,000 smart rainwater collection systems in urban and rural communities.",
        "rwandawater.jpg",
        "Sustainability",
        "Kigali, Rwanda",
        "Expanding",
        undefined,
        undefined,
        45000000
      )
    ];

    this.globalInvestments = [
      new Investment(
        "China-Africa Water Infrastructure Fund",
        "$2.4 billion investment in trans-boundary water management systems across 12 African nations. Also a new irrigation system.",
        "chinawater.jpg",
        "International Development",
        "Pan-African",
        "Active",
        "China Development Bank",
        "chinabank.jpg",
        2400000000
      ),
      new Investment(
        "EU Water Security Initiative",
        "European Union's €850 million program for sustainable water solutions in Sahel region countries.",
        "europewater.jpg",
        "Climate Resilience",
        "Sahel Region",
        "Planning Phase",
        "European Union",
        "eu.png",
        850000000
      ),
      new Investment(
        "USAID Urban Water Program",
        "Smart water grid technologies implementation in 8 major African cities to reduce distribution losses.",
        "usawater.jpg",
        "Urban Development",
        "Multiple Cities",
        "Implementation",
        "United States Agency for International Development",
        "usaid.png",
        325000000
      )
    ];
  }
}