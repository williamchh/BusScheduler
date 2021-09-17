import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonAddComponent } from './Components/button-add/button-add.component';
import { ManageCtlComponent } from './Components/manage-ctl/manage-ctl.component';
import { FormAddComponent } from './Components/form-add/form-add.component';
import { ListViewComponent } from './Components/list-view/list-view.component';
import { ItemStopComponent } from './Components/ListItems/item-stop/item-stop.component';
import { ItemRouteComponent } from './Components/ListItems/item-route/item-route.component';
import { ItemLineComponent } from './Components/ListItems/item-line/item-line.component';
import { ItemBusComponent } from './Components/ListItems/item-bus/item-bus.component';
import { FormStopComponent } from './Components/Forms/form-stop/form-stop.component';
import { FormRouteComponent } from './Components/Forms/form-route/form-route.component';
import { FormLineComponent } from './Components/Forms/form-line/form-line.component';
import { FormBusComponent } from './Components/Forms/form-bus/form-bus.component';
import { DropdownComponent } from './Components/Dropdown/dropdown/dropdown.component';
import { TimeScheduleComponent } from './Components/Forms/time-schedule/time-schedule.component';
import { ItemTimescheduleComponent } from './Components/ListItems/item-timeschedule/item-timeschedule.component';

const dropdowns = [
  A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonAddComponent,
    ManageCtlComponent,
    FormAddComponent,
    ListViewComponent,
    ItemStopComponent,
    ItemRouteComponent,
    ItemLineComponent,
    ItemBusComponent,
    FormStopComponent,
    FormRouteComponent,
    FormLineComponent,
    FormBusComponent,
    DropdownComponent,
    TimeScheduleComponent,
    ItemTimescheduleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    dropdowns
  ],
  exports: [
    dropdowns
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
