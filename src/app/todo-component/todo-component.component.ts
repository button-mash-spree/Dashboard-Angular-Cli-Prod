import { Injectable, Component, OnInit, Input } from '@angular/core';
import { Todo } from './../todo';
import { TodosService } from './../todos-service.service';

@Component({
    selector: "todo",
    template: `<div align = 'center'>
                    <form (submit) = "addTask($event, taskInput.value); taskInput.value=''" style="display:inline-flex">
                        <input type="text" #taskInput placeholder="Next important task" style="width: 25vw"><button type="submit" class="add-button">
                                <i class="material-icons">add</i>
                            </button>

                    </form>
                    <div *ngIf="todos.length">
                        <div class="todo-item" width='30vw' *ngFor="let todo of todos" style="display:inline-flex">
                            <div style="float:left; width:5vw">
                                <button class="icon-button" (click)="toggle(todo)">
                                    <i class="material-icons">{{todo.isCompleted ? 'check_box' : 'check_box_outline_blank'}}</i>
                                </button>
                            </div>
                            <div style="float:left; width:25vw; word-break: break-all">
                                <span [class.striken]="todo.isCompleted">{{todo.taskText}}</span>
                            </div>
                            <div style="float:right; width:5vw">
                                <button class="icon-button" (click)="delete(todo)" style="float:right">
                                    <i class="material-icons">delete</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
})
export class TodoComponent implements OnInit{

    todos: Todo[];

    constructor(private todoService: TodosService){
        this.todos=[];
    }

    ngOnInit(){
        this.todoService.getTodos().then(todos=> this.todos = todos);
    }

    addTask(event:Event, newTaskValue:string){
        event.preventDefault();
        this.todoService.addTodo(newTaskValue).then(todos=>this.todos = todos);
    }

    toggle(todo:Todo){
        this.todoService.toggleTodo(todo).then(todos => this.todos = todos);
    }

    delete(todo: Todo){
        this.todoService.deleteTodo(todo).then(todos => this.todos = todos);
    }
}