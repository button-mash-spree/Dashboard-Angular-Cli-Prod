import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodosService{

    private apiUrl : string = "http://dashboardtaskservice.azurewebsites.net/api/tasks";
    //private apiUrl : string = "http://127.0.0.1:9090/api/tasks";

    private options = new RequestOptions({ headers: new Headers({'Content-Type':'application/x-www-form-urlencoded'})});
    constructor(private http : Http){}

    public getTodos() : Promise<Todo[]>{
        return this.http.get(this.apiUrl, this.options)
                        .toPromise()
                        .then(res => res.json());
    }

    addTodo(text : string){
        return this.http.post(this.apiUrl, "taskText="+text, this.options)
                        .toPromise()
                        .then(res => res.json());
    }

    deleteTodo(todo: Todo){
        let url = `${this.apiUrl}/${todo._id}`;

        return this.http.delete(url, this.options)
                        .toPromise()
                        .then(res => res.json());
    }

    toggleTodo(todo: Todo) : Promise<Todo[]>{
        let url = `${this.apiUrl}/${todo._id}`;

        return this.http.put(url, "isCompleted=" + !todo.isCompleted, this.options)
                        .toPromise()
                        .then(res => res.json());
    }
}