import { loadProject, deleteproject, getprojects ,deletetask,togglecompletion} from "./projectlist";

function displayTasks(project) {
    const content = document.getElementById("content");

    content.innerHTML = "";

    project.tasks.forEach(task => {
        const div = document.createElement("div");

        div.classList.add("task-card");
//fsfs
div.innerHTML = `

    <h3>${task.name}</h3>

    <p class="task-date">
        📅 Due: ${task.duedate || "No date"}
    </p>

    <p class="task-desc">
        ${task.description || "No description"}
    </p>

    <div class="task-footer">

        <span class="priority ${task.priority}">
            ${task.priority.toUpperCase()}
        </span>

        <span class="status">
            ${task.completed ? "✅ Done" : "⏳ Pending"}
        </span>

    </div>

    <div class="task-buttons">

        <button class="toggle-task">
            ${task.completed ? "Undo" : "Complete"}
        </button>

        <button class="delete-task btn">
            Delete
        </button>

    </div>
`;
    const deleteBtn = div.querySelector(".delete-task");
    const toggleBtn =div.querySelector(".toggle-task");
deleteBtn.addEventListener("click", () => {

    deletetask(project.id, task.id);

    const updated = loadProject(project.id);

    displayTasks(updated);

});


    toggleBtn.addEventListener("click", () => {

    togglecompletion(project.id, task.id);

    const updated = loadProject(project.id);

    displayTasks(updated);

});


        content.appendChild(div);
    });


}

function displayprojects(projects,setCurrentProject) {
    const content =
        document.getElementById("projectslist");

    content.innerHTML = "";

    projects.forEach(project => {

        const div = document.createElement("div");

        div.classList.add("project-card");

       


        div.innerHTML = `
            <p>${project.name}</p>

            <button class="delete-project">
                Delete Project
            </button>
        `;

div.addEventListener("click", () => {

    setCurrentProject(project.id);

    const current = loadProject(project.id);

    displayTasks(current);

});

        const deleteBtn =
            div.querySelector(".delete-project");

deleteBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    deleteproject(project.id);

    displayprojects(getprojects(), setCurrentProject);

    const remainingProjects = getprojects();

    // no projects left
    if (remainingProjects.length === 0) {

        document.getElementById("content").innerHTML =
            "<p>No projects left</p>";

        return;
    }

    // show current selected project
    const current = loadProject(remainingProjects[0].id);

    displayTasks(current);

});

        content.appendChild(div);
    });
}

export { displayTasks, displayprojects };