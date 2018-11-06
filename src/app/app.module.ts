import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { HeaderComponent } from "./landingpage/header/header.component";
import { YouNeedDoneComponent } from "./landingpage/you-need-done/you-need-done.component";
import { CategoryCardsComponent } from "./landingpage/category-cards/category-cards.component";
import { TagbyairWorksComponent } from "./landingpage/tagbyair-works/tagbyair-works.component";
import { WebAlsoProvideComponent } from './landingpage/web-also-provide/web-also-provide.component';
import { OurPartnersComponent } from './landingpage/our-partners/our-partners.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { ThingMightKnowComponent } from './landingpage/thing-might-know/thing-might-know.component';
import { NavComponent } from './landingpage/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HeaderComponent,
    YouNeedDoneComponent,
    CategoryCardsComponent,
    TagbyairWorksComponent,
    WebAlsoProvideComponent,
    OurPartnersComponent,
    FooterComponent,
    ThingMightKnowComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
