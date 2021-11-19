import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'details', component: PlantDetailComponent },
  {path:'home', component: HomeComponent},
  {path: 'list', component: PlantListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
