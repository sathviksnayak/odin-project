import {
    addtask,
    getprojects,Addproject,getCurrentProject,setCurrentProject,loadProject
} from "./projectlist";

import {
    displayprojects,
    displayTasks
} from "./dom";

import "./style.css"

const modal =
    document.querySelector(".modal");

const openBtn =
    document.getElementById("open");

const submitBtn =
    document.getElementById("close");


    const newprojectdialog=document.querySelector(".newproject");


    const addprojectbtn=document.getElementById("add-project")

    const addprobtn=document.getElementById("addpro")

displayprojects(getprojects(), setCurrentProject);

openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

submitBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const taskname =
        document.getElementById("task-name").value;

    const duedate =
        document.getElementById("due-date").value;

    const description =
        document.getElementById("description").value;

    const priority =
        document.getElementById("option").value;

    const newtask = {
        id: crypto.randomUUID(),
        name: taskname,
        duedate: duedate,
        description: description,
        priority: priority,
        completed: false
    };
document.getElementById("task-name").value = "";
document.getElementById("due-date").value = "";
document.getElementById("description").value = "";

    addtask(getCurrentProject(), newtask);
    const current = loadProject(getCurrentProject());
displayTasks(current);
    modal.classList.add("hidden");
});


addprojectbtn.addEventListener("click",()=>{
    newprojectdialog.classList.remove("hidden")

});

addprobtn.addEventListener("click",(e)=>{
    e.preventDefault();
     const projectname=document.getElementById("projectname").value
     document.getElementById("projectname").value = "";
Addproject(projectname);

const allprojects = getprojects();

const newest =
    allprojects[allprojects.length - 1];

setCurrentProject(newest.id);

displayprojects(allprojects, setCurrentProject);
     newprojectdialog.classList.add("hidden")

})


