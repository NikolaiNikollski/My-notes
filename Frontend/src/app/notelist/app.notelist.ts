import { Component, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../Data/http.service'
import { Note } from '../Data/Note';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpHeaders, HttpClient, } from '@angular/common/http';
import { CookieService } from '../Data/cookie.service'
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
    selector: 'notelist',
    templateUrl: 'app.notelist.html',
    styleUrls: ['app.notelist.css'],
    providers: [HttpService, CookieService],
})

export class AppNotelist {

    updateNoteForm: FormGroup;
    @Output() onChangedUserName = new EventEmitter<string>();
    
    notelist: Array<Note> = [];
    constructor(private fb: FormBuilder, private httpService: HttpService, private jwtHelper: JwtHelperService, private cookieService: CookieService) {
        this._createUpdateNoteForm();
    }

    private _createUpdateNoteForm() {
        this.updateNoteForm = this.fb.group({
            text: [''],
            id: [''],
        })
    }

    async createNote(): Promise<void> {
        let canActivatePromise = await this.canActivate()
        if (!canActivatePromise) {
            this.onChangedUserName.emit(null)
            return
        }

        let note: Note = new Note("", this.formateDate(new Date), null)

        this.httpService.create(note).subscribe((id: any) => {
            note.Id = id
        }, (err) => { this.onChangedUserName.emit(null) })

        this.notelist.unshift(note)
        setTimeout(() => {
            note.Selected = true
        }, 100);
    }

    async update(note: Note, index: number): Promise<void> {
        let canActivatePromise = await this.canActivate()
        if (!canActivatePromise) {
            this.onChangedUserName.emit(null)
            return
        }

        this.httpService.update(note).subscribe(() => { }, (err) => { this.onChangedUserName.emit(null) })
        note.Selected = false;
        note.TempText = null;
    }

    async del(note: Note, index: number): Promise<void> {
        let canActivatePromise = await this.canActivate()
        if (!canActivatePromise) {
            this.onChangedUserName.emit(null)
            return
        }

        this.httpService.delete(note).subscribe(() => { }, (err) => { this.onChangedUserName.emit(null) })
        note.Selected = false;
        this.notelist.splice(index, 1)
    }


    async selectNote(note: Note): Promise<void> {
        let canActivatePromise = await this.canActivate()
        if (!canActivatePromise) {
            this.onChangedUserName.emit(null)
            return
        }

        note.Selected = true;
        note.TempText = note.Text
    }

    async unselectNote(note: Note, index: number): Promise<void> {
        let canActivatePromise = await this.canActivate()
        if (!canActivatePromise) {
            this.onChangedUserName.emit(null)
            return
        }

        note.Selected = false;
        note.Text = note.TempText
        note.TempText = null;
    }

    async loadNotes(): Promise<void> {
        let canActivatePromise = await this.canActivate()
        if (!canActivatePromise) {
            this.onChangedUserName.emit(null)
            return
        }

        this.httpService.loadNotes().subscribe((data: any) => {
            this.notelist = data.notes.reverse(data.notes)
            this.onChangedUserName.emit(data.name)
        }, (err) => { this.onChangedUserName.emit(null) })
    }

    ngOnInit(): void {

        this.loadNotes()
    }

    formateDate(inDate: Date): string {
        const options = {
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        return inDate.toLocaleString('ru', options);
    }

    async canActivate() {
        const token = this.cookieService.getCookie('accessToken')
        if (token && !this.jwtHelper.isTokenExpired(token))
            return true;

        let refreshSuccessPromise = await this.tryRefreshingTokens()
        return refreshSuccessPromise
    }

    private async tryRefreshingTokens(): Promise<boolean> {
        try {
            const response = await this.httpService.refresh()
            return response.ok
        }
        catch {
            return false
        }
    }


}


