import {jobData} from "./job-filter.js";

export default function cardsData(){

  jobData.forEach(i => {
    let jobResult = document.querySelector(".job-cards-container");
    let jobCard = document.createElement("li");
    jobCard.classList.add("job-card","flex-c","relative");
    jobResult.appendChild(jobCard);
  
    let bookmarkBtn = document.createElement("span")
    bookmarkBtn.classList.add("bookmark-btn","absolute","material-symbols-outlined");
    bookmarkBtn.textContent = "bookmark";
    jobCard.appendChild(bookmarkBtn);
  
    let jobSource = document.createElement("div");
    jobSource.classList.add("job-result-source","flex-c");
    jobSource.innerHTML = 
    `
    <h3 class="job-title">${i.jobTitle}</h3>
    <span class="job-company">${i.company}</span>
    <span class="job-location">${i.location}</span>
    `;
    jobCard.appendChild(jobSource);
  
    let jobOtherDetails = document.createElement("div");
    jobOtherDetails.classList.add("job-other-details", "flex-c");
    jobOtherDetails.innerHTML = 
    `
    <span class="job-salary">${i.salary}</span>
    <span class="work-type">${i.workType[0]}</span>
    <span class="work-type">${i.workType[1]}</span>
    `;
    jobCard.appendChild(jobOtherDetails);
  
    let reqText = document.createElement("small");
    reqText.classList.add("job-requirements");
    reqText.textContent = "requirements";
  
    let jobReq = document.createElement("span");
    jobReq.classList.add("required-experience");
    jobReq.textContent = i.requiredExperience;
  
    let jobDate = document.createElement("small");
    jobDate.classList.add("date");
    jobDate.textContent = new Date(i.date);
  
    jobCard.appendChild(reqText);
    jobCard.appendChild(jobReq);
    jobCard.appendChild(jobDate);
    jobCard.setAttribute("value", i.jobTitle + " " + i.company);
    });
}


