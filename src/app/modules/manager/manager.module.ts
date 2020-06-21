import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { CommonModule } from '@angular/common';
import { ComputerLabListComponent } from './computer-lab-list/computer-lab-list.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { RouterModule } from '@angular/router';
import { ComputerLabEditComponent } from './computer-lab-edit/computer-lab-edit.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';

@NgModule({
    declarations: [
        ComputerLabListComponent,
        ComputerLabEditComponent,
        BookingListComponent,
        BookingDetailComponent
    ],
    imports: [
        SharedModule,
        CoreModule,
        MaterialModule,

        ReactiveFormsModule,
        CommonModule,
        PaginationModule.forRoot(),
        AlertModule.forRoot(),
        FormsModule,
        RouterModule
    ],
    exports: [
        ComputerLabListComponent,
        ComputerLabEditComponent,
        BookingListComponent,
        BookingDetailComponent
    ]
})
export class ManagerModule {

}
