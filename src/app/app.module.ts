import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { CompteFormComponent } from './compte-form/compte-form.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ControlPascalCaseDirective } from './control-pascal-case.directive';
import { FormatPhoneNumberPipe } from './format-phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    CompteFormComponent,
    RecapitulatifComponent,
    ControlPascalCaseDirective,
    FormatPhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule
  ],
  providers: [FormatPhoneNumberPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
