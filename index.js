const inq= require("inquirer");
const tDisplay= require("console.table");
const fetch= require("node-fetch");
let url;
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

let addD={
        type: "input",
        message: "What is the name of the department you would like to add?",
        name:"addDName"
}

let addR=[
    {
        type: "input",
        message: "What is the name of the role you would like to add?",
        name: "rName"
    },
    {
        type: "list",
        message: "What is the role's given salary?",
        name: "rSal",
        choices:[
            100000,
            90000,
            80000,
            70000,
            60000,
            50000
        ]
    },
    {
        type: "choice",
        message: "What department number does this role belong to?",
        name: "dID",
        choices: [
            1,
            2,
            3,
            4,
            5
        ]
    }
]

let addE=[
    {
        type: "input",
        message: "What is the employee's first name?",
        name: "fName"
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "lName"
    },
    {
        type: "list",
        message: "What role number is this employee?",
        name: "eRole",
        choices:[
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ]
    },
    {
        type: "choice",
        message: "What is this employees manager id?",
        name: "eMan",
        choices: [
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ]
    }
]

let update=[
    {
        type: "input",
        message: "What is the employee's id?",
        name: "eID"
    },
    {
        type: "list",
        message: "What is the employee's new roleID?",
        name: "eRole",
        choices:[
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ]
    }
]

async function selection(option){
    switch(option){
        case "dep":
            url= `${url}departments/all`;
            mess= await fetch(url, {method: "GET"}).then((res) => res.json()).then((data)=>{return data});
            break;
        case "role":
            url= `${url}roles/all`;
            mess= await fetch(url, {method: "GET"}).then((res) => res.json()).then((data)=>{return data});
            break;
        case "emp":
            url= `${url}employees/all`;
            mess= await fetch(url, {method: "GET"}).then((res) => res.json()).then((data)=>{return data});
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
    if(mess){
        console.table(mess);
    }
    chosenPrompt(option);
}

async function chosenPrompt(option){
    let pData;
    let choices= await inq.prompt(option).then((res)=> {return res});
    if(isPost){
        if(option.length==5){
            const {fName, lName, eRole, eMan} = choices;
            pData= await fetch(url, {
                method: "POST",
                body: {
                    "first_name": fName,
                    "last_name": lName,
                    "role_id": eRole,
                    "manager_id": eMan
                }
            }).then((res) => res.json()).then((data)=>{return data});
            console.log(pData, `\n Sucessful post.`);
            init();
        } else if(option.length==3){
            const {rName, rSal, dID} = choices;
            pData= await fetch(url, {
                method: "POST",
                body: {
                    "title": rName,
                    "salary": rSal,
                    "dep_id": dID,
                }
            }).then((res) => res.json()).then((data)=>{return data});
            console.log(pData, `\n Sucessful post.`);
            init();
        } else{
            const {addDName} = choices;
            console.log(choices, addDName)
            pData= await fetch(url, {
                method: "POST",
                body: {
                    "dep_name": addDName
                }
            }).then((res) => res.json()).then((data)=>{return data});
            console.log(pData, `\n Sucessful post.`);
            init();
        }
    } 
    if(isPut){
        const {eId, eRole} = choices;
        pData= await fetch(url, {
            method: "PUT",
            body: {
                "id": eId,
                "role_id": eRole
            }
        }).then((res) => res.json()).then((data)=>{return data});
        console.log(pData, `\n Sucessful put.`);
        init();
    } 
    init();
}

async function init(){
    url= "http://localhost:3001/";
    let choice = await inq.prompt(landing).then((res)=> {return res.landing});
    switch (choice){
        case "View all departments.":
            selection("dep");
            break;
        case "View all roles.":
            selection("role");
            break;
        case "View all employees.":
            selection("emp");
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