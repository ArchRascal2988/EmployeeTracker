const inq= require("inquirer");
const tDisplay= require("console.table");
let url= "http://localhost:3001/";
const fetch= require("node-fetch");
let isPost;
let isPut;
let mess;

const landing= {
    type: "list",
    message: "Welcome to the Employee Tracker. What would you like to do?",
    name: "landing",
    choices:[
        "View all departments.",
        "View all roles.",
        "View all employees.",
        "Add a department.",
        "Add a role.",
        "Add an employee.",
        "Update an employee's role."
    ]
}

const dep={
    type: "confirm",
    message: `${mess} \n Would you like to do something else?`,
    name: "depC"
}

const role={
    type: "confirm",
    message: `${mess} \n Would you like to do something else?`,
    name: "roleC"
}

const emp={
    type: "confirm",
    message:  `${mess} \n Would you like to do something else?`,
    name: "empC"
}

const addD={

}

const addR={
    
}

const addE={
    
}

const update={

}

async function selection(option){
    switch(option){
        case dep:
            url= `${url}departments/all`;
            console.log(url);
            mess= await fetch(url, {method: "GET"}).then((res) => res.json()).then((data)=>{return data});
            break;
        case role:
            url= `${url}roles/all`;
            mess= await fetch(url, {method: "GET"}).then((res) =>{ return res.json});
            break;
        case emp:
            url= `${url}employees/all`;
            mess= await fetch(url, {method: "GET"}).then((res) =>{ return res.json});
            break;
        case addD:
            url= `${url}departments/new`;
            isPost=true;
            break;
        case addR:
            url= `${url}roles/new`;
            isPost=true;
            break;
        case addE:
            url= `${url}employees/new`;
            isPost=true;
            break;
        case update:
            url= `${url}employees/update`;
            isPut=true;
            break;
    }
    console.log(mess);
    chosenPrompt(option);
}

async function chosenPrompt(option){
    if(isPost){

    } else if(isPut){

    } else{
        inq.prompt(option);
    }
}

async function init(){
    let choice = await inq.prompt(landing).then((res)=> {return res.landing});
    switch (choice){
        case "View all departments.":
            selection(dep);
            break;
        case "View all roles.":
            selection(role);
            break;
        case "View all employees.":
            selection(emp);
            break;
        case "Add a department.":
            selection(addD);
            break;
        case "Add a role.":
            selection(addR);
            break;
        case "Add an employee.":
            selection(addE);
            break; 
        case "Update an employee's role.":
            selection(update);
            break; 
    }
}


module.exports= init();