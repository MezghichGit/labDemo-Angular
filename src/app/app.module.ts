import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './basic/header/header.component';
import { CorpsComponent } from './basic/corps/corps.component';
import { FooterComponent } from './basic/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AddIsikaPipe } from './pipes/add-isika.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CorpsComponent,
    FooterComponent,
    AddIsikaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
