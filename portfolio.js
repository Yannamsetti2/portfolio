document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1."
        },
        {
            title: "Project 2",
            description: "Description of project 2."
        },
        {
            title: "Project 3",
            description: "Description of project 3."
        }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectItem);
    });
});
