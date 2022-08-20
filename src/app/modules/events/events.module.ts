import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {HttpClientModule} from '@angular/common/http';
import {EventsComponent} from './events/events.component';

const routes: Routes = [{path: '', component: EventsComponent}];

@NgModule({
    declarations: [EventsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        JwBootstrapSwitchNg2Module,
        AngularEditorModule,
        HttpClientModule
    ]
})
export class EventsModule {
}
