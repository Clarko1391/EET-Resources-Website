// MAIN NAVIGATION HOOKS AND CLASS TOGGLE FUNCTION
const homeBtn = document.getElementById('homeBtn');
const calendarBtn = document.getElementById('calendarBtn');
const researchBtn = document.getElementById('researchBtn');
const knowledgeBtn = document.getElementById('knowledgeBtn');
const toolboxBtn = document.getElementById('toolboxBtn');
const aboutBtn = document.getElementById('aboutBtn');
const contributeBtn = document.getElementById('contributeBtn');
const studyTipsBtn = document.getElementById('studyTipsBtn');
const heroPage = document.getElementById('heroPage');
const calendarPage = document.getElementById('calendarPage');
const researchPage = document.getElementById('researchPage');
const knowledgePage = document.getElementById('knowledgePage');
const toolboxPage = document.getElementById('toolboxPage');


const mainNavToggle = (navigateTo) => {
    let mainNavArray = [heroPage, calendarPage, researchPage, knowledgePage, toolboxPage];
    mainNavArray.forEach(page => {
        if(!page.classList.contains('inactive')) {
            page.classList.remove('active');
            page.classList.add('inactive');
        }  
    });
    navigateTo.classList.remove('inactive');
    navigateTo.classList.add('active');
}

homeBtn.addEventListener("click", ()=> {mainNavToggle(heroPage)});
calendarBtn.addEventListener("click", ()=> {mainNavToggle(calendarPage)});
researchBtn.addEventListener("click", ()=> {mainNavToggle(researchPage)});
knowledgeBtn.addEventListener("click", ()=> {mainNavToggle(knowledgePage)});
toolboxBtn.addEventListener("click", ()=> {mainNavToggle(toolboxPage)});
// aboutBtn.addEventListener("click", (aboutBtn)=> {mainNavToggle(aboutBtn)});
// contributeBtn.addEventListener("click", (contributeBtn)=> {mainNavToggle(contributeBtn)});
// studyTipsBtn.addEventListener("click", (studyTipsBtn)=> {mainNavToggle(studyTipsBtn)});
