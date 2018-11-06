import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingpageComponent } from "../app/landingpage/landingpage.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "landingpage" },
  { path: "landingpage", component: LandingpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
