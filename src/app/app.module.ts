import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgOptimizedImage } from '@angular/common';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [HttpClientModule, BrowserModule, AppRoutingModule, NgbModule, NgOptimizedImage],
    providers: [AppService],
    bootstrap: [AppComponent],
})
export class AppModule {}
