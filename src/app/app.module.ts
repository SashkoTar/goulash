import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';



import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DefaultDetectionComponent} from './change-detection/default-detection.component';
import { OnpushDetectionComponent} from './change-detection/onpush-detection.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    // похоже, что компоненты надо добавлять в эту секцию, а не в импорт
    ChangeDetectionComponent,
    DefaultDetectionComponent,
    OnpushDetectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
