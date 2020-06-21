import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertifyService } from './services/alertify.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ComputerLabService } from './services/computer-lab.service';
import { ErrorHandlingInterceptor } from './interceptors/error-handling.interceptor';
import { ComputerLabListResolver } from './resolvers/computer-lab-list.resolver';
import { ComputerLabResolver } from './resolvers/computer-lab.resolver';
import { BookingListResolver } from './resolvers/booking-list.resolver';
import { ManagerListResolver } from './resolvers/manager-list.resolver';
import { LecturerListResolver } from './resolvers/lecturer-list.resolver';
import { UserResolver } from './resolvers/user.resolver';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule
    ],
    exports: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
        },
        {
            provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true
        },
        AuthService,
        AlertifyService,
        ComputerLabService,
        ComputerLabListResolver,
        ComputerLabResolver,
        BookingListResolver,
        ManagerListResolver,
        LecturerListResolver,
        UserResolver
    ]
})
export class CoreModule {

}
