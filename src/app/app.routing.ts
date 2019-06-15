import { Routes, RouterModule } from '@angular/router';
import { PdfComponent } from './pdf/pdf.component';

export const appRoutes: Routes = [
    { path: '', component: PdfComponent },
   
   



    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);