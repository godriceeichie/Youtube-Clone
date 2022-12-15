let collapsedClass = "nav-collapsed";
let lsKey = "navCollapsed";
let mainContentCollapsed = "main-content-collapsed"
let lsKey2 = "mainContentCollapsed";
let contentSubjectsCollapsed = "content-subjects-collapsed"
let lsKey3 = "contentSubjectsCollapsed"

let navBar = document.querySelector(".big-side-bar");
let mainContent = document.querySelector(".main-content")
let contentSubjects = document.querySelector(".content-subjects")
let toggleBtn = document.querySelector(".menu-toggle")

if(localStorage.getItem(lsKey) === "true"){
    navBar.classList.add(collapsedClass)
    mainContent.classList.add(mainContentCollapsed)
    contentSubjects.classList.add(contentSubjectsCollapsed)
}

toggleBtn.addEventListener("click", () => {
    navBar.classList.toggle(collapsedClass);
    mainContent.classList.toggle(mainContentCollapsed);
    contentSubjects.classList.toggle(contentSubjectsCollapsed)
    localStorage.setItem(lsKey, navBar.classList.contains(collapsedClass));
    localStorage.setItem(lsKey2, mainContent.classList.contains(mainContentCollapsed))
    localStorage.setItem(lsKey3, contentSubjects.classList.contains(contentSubjectsCollapsed))
})