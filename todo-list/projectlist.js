let projects = [
    {
        id: 1,
        name: "defaultproject",
        tasks: []
    }
];

let currentproject = 1;


function Addproject(name) {
    const newproject = {
        id: crypto.randomUUID(),
        name: name,
        tasks: []
    };

    projects.push(newproject);
}

function getprojects() {
    return projects;
}

function loadProject(projectid) {
    return projects.find(
        project => project.id === projectid
    );
}

function addtask(projectid, task) {
    const project = projects.find(
        p => p.id === projectid
    );

    if (project) {
        project.tasks.push(task);
    }
}

function deleteproject(projectid) {
    projects = projects.filter(
        project => project.id !== projectid
    );
        if(currentproject === projectid){

        currentproject = projects[0]?.id || null;
    }
}

function deletetask(projectid, taskid) {
    const project = projects.find(
        p => p.id === projectid
    );

    if (project) {
        project.tasks = project.tasks.filter(
            task => task.id !== taskid
        );
    }
}

function togglecompletion(projectid, taskid) {
    const project = projects.find(
        p => p.id === projectid
    );

    if (project) {
        const task = project.tasks.find(
            t => t.id === taskid
        );

        if (task) {
            task.completed = !task.completed;
        }
    }
}

function setCurrentProject(id){
    currentproject = id;
}

function getCurrentProject(){
    return currentproject;
}
export {
    addtask,
    loadProject,
    Addproject,
    deleteproject,
    deletetask,
    togglecompletion,
    getprojects,  setCurrentProject,
  getCurrentProject
};

