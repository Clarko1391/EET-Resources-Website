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


const mainNavToggle = (navigateTo, navHighlight) => {
    let mainNavArray = [heroPage, calendarPage, researchPage, knowledgePage, toolboxPage];
    let navBtnArray = [homeBtn, calendarBtn, researchBtn, knowledgeBtn, toolboxBtn, aboutBtn, contributeBtn, studyTipsBtn];
    mainNavArray.forEach(page => {
            page.classList.remove('active');
            page.classList.add('inactive');
        }); 
    navBtnArray.forEach(button => {
            button.classList.remove('navHighlight');
        });
    navigateTo.classList.remove('inactive');
    navigateTo.classList.add('active');
    navHighlight.classList.add('navHighlight');
}

homeBtn.addEventListener("click", ()=> {mainNavToggle(heroPage, homeBtn)});
calendarBtn.addEventListener("click", ()=> {mainNavToggle(calendarPage, calendarBtn)});
researchBtn.addEventListener("click", ()=> {mainNavToggle(researchPage, researchBtn)});
knowledgeBtn.addEventListener("click", ()=> {mainNavToggle(knowledgePage, knowledgeBtn)});
toolboxBtn.addEventListener("click", ()=> {mainNavToggle(toolboxPage, toolboxBtn)});
// aboutBtn.addEventListener("click", (aboutBtn)=> {mainNavToggle(aboutBtn)});
// contributeBtn.addEventListener("click", (contributeBtn)=> {mainNavToggle(contributeBtn)});
// studyTipsBtn.addEventListener("click", (studyTipsBtn)=> {mainNavToggle(studyTipsBtn)});
