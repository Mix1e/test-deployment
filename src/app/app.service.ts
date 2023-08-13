import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
    private readonly randomCatAPI: string = 'https://cataas.com/';

    constructor(private http: HttpClient) {}

    public getRandomCat<T>(): Observable<T | never> {
        return this.http.get<T>(this.randomCatAPI + '/cat');
    }
}
