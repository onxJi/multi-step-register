import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private formData = new BehaviorSubject<any>(null);
    formData$ = this.formData.asObservable();

    setFormData(data: any) {
        const currentData = this.formData.value;
        const newData = { ...currentData, ...data };
        this.formData.next(newData);
    }
}