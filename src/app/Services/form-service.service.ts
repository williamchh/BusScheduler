import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private formAddVisible: boolean = false;
  private title: string = "Stop";
  private subject = new Subject<any>();

  constructor() { }

  
  get Title(): string {
    return this.title;
  } 

  get visible(): boolean {
    return this.formAddVisible;
  }

  /// toggle form visibility
  /// <para> visible: boolean form visibilityt</para>
  /// <para> title: string  form title </para>
  formVisible(visible: boolean, title: string): void {
    
    // if form is visible and form's title equal to title pass in
    // means user wants to close current form
    if (this.title === title && this.formAddVisible) {
      this.formAddVisible = false;
      this.title = "";
    }
    // else assign title and visibility pass in to form
    else {
      this.title = title;
      this.formAddVisible = visible;
    }

    // invoke observable
    this.subject.next({title: this.title, visible: this.formAddVisible});
  }

  /// return this service as observable
  toggleVisible(): Observable<any> {
    return this.subject.asObservable();
  }
}
