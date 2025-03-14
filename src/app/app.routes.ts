import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.component';
import { BuyformComponent } from './buyform/buyform.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TopComponent } from './top/top.component';
import { SkirtComponent } from './skirt/skirt.component';
import { SareeComponent } from './saree/saree.component';
import { HoodieComponent } from './hoodie/hoodie.component';
import { JacketComponent } from './jacket/jacket.component';
import { CollectionComponent } from './collection/collection.component';
import { TShirtComponent } from './t-shirt/t-shirt.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent, title: 'homepage' },
  { path: 'buyform', component: BuyformComponent, title: 'buyform' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'top', component: TopComponent, title: 'top' },
  { path: 'skirt', component: SkirtComponent, title: 'skirt' },
  { path: 'saree', component: SareeComponent, title: 'saree' },
  { path: 'hoodie', component: HoodieComponent, title: 'hoodie' },
  { path: 'jacket', component: JacketComponent, title: 'jacket' },
  { path: 't-shirt', component: TShirtComponent, title: 't-shit' },
  { path: 'collection', component: CollectionComponent, title: 'collection' },
];
