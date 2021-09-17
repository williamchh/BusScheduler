import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { TimeSchedule } from 'src/Models/Time_Schedule';
import { ListObj } from '../../Models/List_Obj'
import { IBus } from 'src/Models/IBus';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {
  
 
  private readonly url: string = "http://localhost:5000";
  private subject = new Subject<ListObj>();
  private items: IBus[] = [];
  private subs = new Subject<ListObj>();
  private subItems: IBus[] = [];

  constructor(private http: HttpClient) { }

  /// get user assigned 
  svrItems(route: string): void {
    this.http.get<IBus[]>(this.url + "/" + route.replace(/\s+/g, "")).subscribe(v => {
      this.items = v;
      this.subject.next({title: route, items: this.items});
    },
    err => {
      console.log(err)
      // if there is an error, assign items array with empty array
      this.items = []
      this.subject.next({title: route, items: this.items});
    }
    )
  }

  getItems(): Observable<ListObj> {
    return this.subject.asObservable();
  }

  /// return this.items array
  Items(): IBus[] {
    return  this.items;
  }

  /// set items array
  setItems(route: string, bus: IBus[]): void {
    this.items = bus;
    this.subject.next({ title: route, items: this.items })
  }

  /// get user assigned 
  svrSubItems(route: string): void {
    this.http.get<IBus[]>(this.url + "/" + route.replace(/\s+/g, "")).subscribe(v => {
      this.subItems = v;
      this.subs.next({title: route, items: this.subItems});
    },
    err => {
      console.log(err)
      this.subItems = []
      this.subs.next({title: route, items: this.subItems});
    }
    )
  }

  getSubItems(): Observable<any> {
    return this.subs.asObservable();
  }


  /// post request
  addItems(title: string, item: IBus): Observable<any> {
    
    let _url = this.url + "/" + title.replace(/\s+/g, "");
    let _post = this.http.post(_url, item, httpOptions);

    
    // check if item: IBus pass in is existing in this.items array
    let notInclude: boolean = true;
    this.items.forEach(i => {
      const b = i as IBus;
      if ((item as IBus).IsEqual!(b)) {
        notInclude = false;
      }
    })

    // if not exist, post item: IBus
    if (notInclude) {
      _post.subscribe(t => {
        /// add new obj to array
        this.items?.push(t as IBus);

        this.subject.next({title: title, items: this.items});
      },
      err=>{
        console.log(err)
      })      
    }


    return _post;
  }

  updateItem(title: string, item: TimeSchedule):Observable<any> {

    // initial update url
    let _url = this.url + "/" + title.replace(/\s+/g, "") + "/" + item.id;
    
    // if item pass in does not have id, then find item in the items array
    if (!item.id) {

      // find id
      const ts = this.items as TimeSchedule[];
      const _id = (ts.find(i => i.routeName === item.routeName && i.lineNumber === item.lineNumber))!.id;
      
      // rewrite the url
      _url = this.url + "/" + title.replace(/\s+/g, "") + "/" + _id;
    }

    // update item
    const _put = this.http.put(_url, item, httpOptions);

    _put.subscribe(t => {
        let obj = t as any;

        this.items = this.items.map(i => {
          return i.id === obj.id ? obj : i
        })

        this.subject.next({title: title, items: this.items});
      },
        err => {
          console.error(err);
      }
    )


    return _put;
  }

  /// del Obj
  delIBus(route:string, bus: IBus) {
    let _url = this.url + `/${route}/${bus.id}`;
    return this.http.delete<IBus>(_url);
  }

  getObjArr(route: string) : Observable<any[]> {
    let _url = this.url + `/${route}`;
    return this.http.get<any[]>(_url);
  }

}
