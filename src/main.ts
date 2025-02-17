import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { InvestmentsComponent } from './app/components/investments/investments.component';


bootstrapApplication(InvestmentsComponent, appConfig)
  .catch((err) => console.error(err));
