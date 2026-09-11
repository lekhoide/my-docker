/** @odoo-module **/
'use strict';

import { Component, useState, markup, whenReady, useRef  } from "@odoo/owl";
import { useAutofocus } from "@web/core/utils/hooks";
import { mountComponent } from "@web/env";

export class Todoitem extends Component {
    static template = "awesome_owl.todoitem";
    static props = ["id", "description", "isCompleted", "*"]
    setup(env, ser){
        this.item = useState({
            id: this.props.id,
            description: this.props.description,
            isCompleted: this.props.isCompleted
        })
    }

    toggleState(ev) {
        if (this.item.isCompleted)  this.item.isCompleted = false;
        else this.item.isCompleted = true;

        // this.props.isCompleted = !this.props.isCompleted;
        if(this.props.onToggle) {
            this.props.onToggle(this.item.id)
        }
    }

    toggleRemove(ev){
        if(this.props.onChange) {
            this.props.onChange(this.item.id)
        }
    } 

}

export class Todolist extends Component {
    static template = "awesome_owl.todolist";
    static props = {};
    static components = {Todoitem}
    setup(env, ser){
        // this.todos = useState([
        //     {id: 1, description: "Học cách sử dụng t-foreach trong OWL", isCompleted: false},
        //     {id: 2, description: "Cài đặt môi trường Odoo 18", isCompleted: true},
        //     {id: 3, description: "Tìm hiểu về Reactive State", isCompleted: false}
        // ])
        this.todos = useState([]);
        this.inputRef = useRef("todo-input");
        useAutofocus({ refName: "todo-input" });
    }

    addTodo(ev) {
        const description = this.inputRef.el.value;
        if (!description) return
        this.todos.push({
            "id": this.todos.length + 1,
            "description": description,
            "isCompleted": false
        })
    }

    toggleState(elemId) {
        const list = this.todos;
        const item = list.find((elem) => elem.id === elemId);
        if (item) {
            // remove the element at index from list
            item.isCompleted = !item.isCompleted;
        }
    }

    removeTodo(elemId) {
        const list = this.todos;
        const index = list.findIndex((elem) => elem.id === elemId);
        if (index >= 0) {
            // remove the element at index from list
            list.splice(index, 1);
        }
    }

    get countPendingTasks() {
        return this.todos.filter((todo) => !todo.isCompleted).length;
    }

}

const config = {
    dev: true,
    name: "Owl Tutorial",
};

// Mount the Playground component when the document.body is ready
whenReady(() => mountComponent(Todolist, document.body, config));