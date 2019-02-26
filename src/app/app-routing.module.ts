import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DefaultComponentComponent } from './default-component/default-component.component';



const routes: Routes = [
  { path :'' , component:DefaultComponentComponent},
  { path:'search' ,component:SearchResultsComponent},
  { path:'**' ,component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[SearchResultsComponent,DefaultComponentComponent,PageNotFoundComponent]