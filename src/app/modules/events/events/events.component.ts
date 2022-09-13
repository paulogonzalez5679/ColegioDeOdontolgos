import {Component, OnInit} from '@angular/core';
import {EventsService} from '../events.service';
import {Event} from '../event.interface';
import {v4 as uuidv4} from 'uuid';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {

    events: Event[] = [];
    files: string;

    constructor(private readonly eventsService: EventsService) {
    }

    ngOnInit(): void {
        this.eventsService.getEvents().subscribe(events => {
            // console.log(events);
            this.events = events;
        });
    }

    setFiles(event) {
        this.eventsService.uploadImages(event.target.files).then((urls) => {
            this.files = JSON.stringify(urls);
        }).catch((e) => alert(e.message));
    }

    submit() {
        const numEvento = Math.floor(Math.random() * 100);
        let id = uuidv4();
        return this.eventsService.createEvent(id,{
            title: `Evento ${numEvento}`,
            description: 'Descripcion del evento 1'
        }).then(() => alert('Guardado')).catch((e) => alert(e.message));
    }

    deleteAllEvents() {
        return this.eventsService.deleteAllEvents().then(() => alert('Eliminados')).catch((e) => alert(e.message));
    }

    updateEvent(id: string) {
        const numEvento = Math.floor(Math.random() * 100).toString();
        return this.eventsService.updateEvent(id, {title: `Evento ${numEvento}`})
            .then(() => alert('Actualizado')).catch((e) => alert(e.message));
    }

    deleteEvent(id: string) {
        return this.eventsService.deleteEvent(id).then(() => alert('Eliminado')).catch((e) => alert(e.message));
    }
}

