import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Importar componentes
import {HomeComponent} from './components/home/home.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {OurcompanyComponent} from './components/ourcompany/ourcompany.component';
import {ContactusComponent} from './components/contactus/contactus.component';
import {PromoComponent} from './components/promo/promo.component';

const appRoutes:Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'catalog', component: CatalogComponent},
	{path: 'ourcompany', component: OurcompanyComponent},
	{path: 'contactus', component: ContactusComponent },
	{path: 'promo', component: PromoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent, CatalogComponent, OurcompanyComponent, ContactusComponent, PromoComponent]
