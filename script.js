
    //   const API = {
    //     all: "https://phi-lab-server.vercel.app/api/v1/lab/issues",
    //     single: (id) => `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`,
    //     search: (text) =>
    //       `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${encodeURIComponent(text)}`
    //   };

    //   const DEMO_USER = {
    //     username: "admin",
    //     password: "admin123"
    //   };

    //   const state = {
    //     allIssues: [],
    //     activeTab: "all",
    //     searchedIssues: null
    //   };

    //   function showElement(id) {
    //     document.getElementById(id).classList.remove("hide");
    //   }

    //   function hideElement(id) {
    //     document.getElementById(id).classList.add("hide");
    //   }

    //   function formatDate(dateString) {
    //     if (!dateString) return "N/A";

    //     const date = new Date(dateString);

    //     return date.toLocaleDateString("en-US", {
    //       month: "numeric",
    //       day: "numeric",
    //       year: "numeric"
    //     });
    //   }

    //   function getPriorityBadge(priority) {
    //     const value = (priority || "").toLowerCase();

    //     if (value === "high") {
    //       return `<span class="inline-flex items-center px-2 py-[2px] rounded-full text-[9px] font-semibold bg-red-50 text-red-400 border border-red-100 uppercase">HIGH</span>`;
    //     }

    //     if (value === "medium") {
    //       return `<span class="inline-flex items-center px-2 py-[2px] rounded-full text-[9px] font-semibold bg-amber-50 text-amber-500 border border-amber-100 uppercase">MEDIUM</span>`;
    //     }

    //     if (value === "low") {
    //       return `<span class="inline-flex items-center px-2 py-[2px] rounded-full text-[9px] font-semibold bg-slate-100 text-slate-400 border border-slate-200 uppercase">LOW</span>`;
    //     }

    //     return `<span class="inline-flex items-center px-2 py-[2px] rounded-full text-[9px] font-semibold bg-slate-100 text-slate-400 border border-slate-200 uppercase">N/A</span>`;
    //   }

    //   function getStatusDot(status) {
    //     return status === "open" ? "bg-green-500" : "bg-purple-500";
    //   }

    //   function getTopBorder(status) {
    //     return status === "open" ? "bg-green-400" : "bg-purple-400";
    //   }

    //   function getStatusBadge(status) {
    //     if (status === "open") {
    //       return `<span class="inline-flex items-center px-2 py-[2px] rounded-full text-[9px] font-semibold bg-green-50 text-green-500 border border-green-100 capitalize">${status}</span>`;
    //     }

    //     return `<span class="inline-flex items-center px-2 py-[2px] rounded-full text-[9px] font-semibold bg-purple-50 text-purple-500 border border-purple-100 capitalize">${status}</span>`;
    //   }

    //   function getLabelBadges(labels) {
    //     if (!labels || !labels.length) {
    //       return `<span class="inline-flex items-center px-2 py-[2px] rounded-full text-[9px] font-semibold bg-slate-100 text-slate-400 border border-slate-200 uppercase">NO LABEL</span>`;
    //     }

    //     return labels
    //       .map((label, index) => {
    //         const themes = [
    //           "bg-red-50 text-red-400 border-red-100",
    //           "bg-amber-50 text-amber-500 border-amber-100",
    //           "bg-emerald-50 text-emerald-500 border-emerald-100",
    //           "bg-sky-50 text-sky-500 border-sky-100",
    //           "bg-pink-50 text-pink-400 border-pink-100"
    //         ];

    //         const picked = themes[index % themes.length];

    //         return `<span class="inline-flex items-center px-2 py-[2px] rounded-full text-[9px] font-semibold border uppercase ${picked}">${label}</span>`;
    //       })
    //       .join("");
    //   }

    //   function setActiveTab(tabName) {
    //     state.activeTab = tabName;

    //     const tabs = document.querySelectorAll(".tab-btn");

    //     tabs.forEach((tab) => {
    //       if (tab.dataset.tab === tabName) {
    //         tab.className =
    //           "tab-btn h-8 px-5 rounded-sm bg-indigo-600 text-white text-[11px] font-medium";
    //       } else {
    //         tab.className =
    //           "tab-btn h-8 px-5 rounded-sm bg-white border border-slate-200 text-slate-500 text-[11px] font-medium";
    //       }
    //     });
    //   }

    //   function getWorkingIssues() {
    //     if (state.searchedIssues) {
    //       return state.searchedIssues;
    //     }
    //     return state.allIssues;
    //   }

    //   function filterByTab(issues) {
    //     if (state.activeTab === "open") {
    //       return issues.filter((issue) => issue.status === "open");
    //     }

    //     if (state.activeTab === "closed") {
    //       return issues.filter((issue) => issue.status === "closed");
    //     }

    //     return issues;
    //   }

    //   function updateIssueCount(count) {
    //     document.getElementById("issueCount").textContent = count;
    //   }

    //   function renderIssues(issues) {
    //     const container = document.getElementById("issuesContainer");
    //     container.innerHTML = "";

    //     if (!issues.length) {
    //       hideElement("issuesContainer");
    //       showElement("emptyState");
    //       return;
    //     }

    //     hideElement("emptyState");
    //     showElement("issuesContainer");

    //     issues.forEach((issue) => {
    //       const card = document.createElement("div");

    //       card.className =
    //         "issue-card bg-white border border-slate-200 rounded-md overflow-hidden cursor-pointer";

    //       card.innerHTML = `
    //         <div class="h-[2px] ${getTopBorder(issue.status)}"></div>

    //         <div class="p-3">
    //           <div class="flex items-center justify-between gap-2">
    //             <div class="flex items-center gap-1.5">
    //               <span class="w-2 h-2 rounded-full ${getStatusDot(issue.status)}"></span>
    //               <span class="text-[9px] text-slate-400 capitalize">${issue.status || "N/A"}</span>
    //             </div>

    //             ${getPriorityBadge(issue.priority)}
    //           </div>

    //           <h3 class="mt-3 text-[11px] leading-[16px] font-semibold text-slate-800 line-clamp-2">
    //             ${issue.title || "No Title"}
    //           </h3>

    //           <p class="mt-2 text-[9px] leading-[14px] text-slate-400 line-clamp-3">
    //             ${issue.description || "No description available."}
    //           </p>

    //           <div class="mt-3 flex flex-wrap gap-1.5">
    //             ${getLabelBadges(issue.labels)}
    //           </div>

    //           <div class="mt-4 text-[9px] text-slate-400 leading-4">
    //             <p>#${issue.id || "N/A"} by ${issue.author || "Unknown"}</p>
    //             <p>${formatDate(issue.createdAt)}</p>
    //           </div>
    //         </div>
    //       `;

    //       card.addEventListener("click", function () {
    //         openIssueModal(issue.id);
    //       });

    //       container.appendChild(card);
    //     });
    //   }

    //   function renderCurrentState() {
    //     const workingIssues = getWorkingIssues();
    //     const filteredIssues = filterByTab(workingIssues);

    //     updateIssueCount(filteredIssues.length);
    //     renderIssues(filteredIssues);
    //   }

    //   function showLoader() {
    //     showElement("loader");
    //     hideElement("issuesContainer");
    //     hideElement("emptyState");
    //   }

    //   function hideLoader() {
    //     hideElement("loader");
    //   }

    //   async function loadAllIssues() {
    //     showLoader();

    //     try {
    //       const response = await fetch(API.all);
    //       const result = await response.json();

    //       state.allIssues = result.data || [];
    //       state.searchedIssues = null;

    //       renderCurrentState();
    //     } catch (error) {
    //       const container = document.getElementById("issuesContainer");
    //       container.innerHTML = `
    //         <div class="col-span-full py-10 text-center">
    //           <p class="text-red-500 font-medium">Failed to load issues.</p>
    //         </div>
    //       `;
    //       showElement("issuesContainer");
    //     } finally {
    //       hideLoader();
    //     }
    //   }

    //   async function handleSearch() {
    //     const searchInput = document.getElementById("searchInput");
    //     const searchText = searchInput.value.trim();

    //     if (!searchText) {
    //       state.searchedIssues = null;
    //       renderCurrentState();
    //       return;
    //     }

    //     showLoader();

    //     try {
    //       const response = await fetch(API.search(searchText));
    //       const result = await response.json();

    //       state.searchedIssues = result.data || [];
    //       renderCurrentState();
    //     } catch (error) {
    //       const container = document.getElementById("issuesContainer");
    //       container.innerHTML = `
    //         <div class="col-span-full py-10 text-center">
    //           <p class="text-red-500 font-medium">Search failed.</p>
    //         </div>
    //       `;
    //       showElement("issuesContainer");
    //     } finally {
    //       hideLoader();
    //     }
    //   }

    //   async function openIssueModal(id) {
    //     const modal = document.getElementById("issueModal");
    //     const modalBody = document.getElementById("modalBody");

    //     modal.classList.remove("hide");
    //     modal.classList.add("flex");

    //     modalBody.innerHTML = `
    //       <div class="py-10 flex items-center justify-center">
    //         <div class="spinner"></div>
    //       </div>
    //     `;

    //     try {
    //       const response = await fetch(API.single(id));
    //       const result = await response.json();
    //       const issue = result.data;

    //       modalBody.innerHTML = `
    //         <div>
    //           <h3 class="text-xl font-bold text-slate-800 leading-tight">
    //             ${issue.title || "No Title"}
    //           </h3>

    //           <div class="mt-2 flex items-center gap-2 flex-wrap">
    //             ${getStatusBadge(issue.status)}
    //             <span class="text-[10px] text-slate-400">
    //               by ${issue.author || "Unknown"} • ${formatDate(issue.createdAt)}
    //             </span>
    //           </div>

    //           <p class="mt-4 text-[11px] leading-5 text-slate-500">
    //             ${issue.description || "No description available."}
    //           </p>

    //           <div class="mt-5 grid grid-cols-2 gap-4">
    //             <div>
    //               <p class="text-[10px] text-slate-400 mb-1">Assignee:</p>
    //               <p class="text-[11px] font-semibold text-slate-700">
    //                 ${issue.assignee || "N/A"}
    //               </p>
    //             </div>

    //             <div>
    //               <p class="text-[10px] text-slate-400 mb-1">Priority:</p>
    //               <div>${getPriorityBadge(issue.priority)}</div>
    //             </div>
    //           </div>

    //           <div class="mt-4">
    //             <div class="flex flex-wrap gap-1.5">
    //               ${getLabelBadges(issue.labels)}
    //             </div>
    //           </div>

    //           <div class="mt-5 flex justify-end">
    //             <button
    //               id="closeInsideModal"
    //               class="h-7 px-3 rounded-sm bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] font-medium"
    //             >
    //               Close
    //             </button>
    //           </div>
    //         </div>
    //       `;

    //       document
    //         .getElementById("closeInsideModal")
    //         .addEventListener("click", closeModal);
    //     } catch (error) {
    //       modalBody.innerHTML = `
    //         <div class="py-8 text-center">
    //           <p class="text-red-500 font-medium">Failed to load issue details.</p>
    //         </div>
    //       `;
    //     }
    //   }

    //   function closeModal() {
    //     const modal = document.getElementById("issueModal");
    //     modal.classList.add("hide");
    //     modal.classList.remove("flex");
    //   }

    //   function showMainPage() {
    //     hideElement("loginPage");
    //     showElement("mainPage");
    //   }

    //   function showLoginPage() {
    //     hideElement("mainPage");
    //     showElement("loginPage");
    //   }

    //   function handleLogin(event) {
    //     event.preventDefault();

    //     const username = document.getElementById("username").value.trim();
    //     const password = document.getElementById("password").value.trim();
    //     const loginError = document.getElementById("loginError");

    //     if (
    //       username === DEMO_USER.username &&
    //       password === DEMO_USER.password
    //     ) {
    //       loginError.classList.add("hide");
    //       showMainPage();
    //       loadAllIssues();
    //     } else {
    //       loginError.textContent = "Invalid username or password.";
    //       loginError.classList.remove("hide");
    //     }
    //   }

    //   function handleTabClick(event) {
    //     const clickedTab = event.target.dataset.tab;
    //     setActiveTab(clickedTab);
    //     renderCurrentState();
    //   }

    //   function resetToLoginOnReload() {
    //     showLoginPage();

    //     const mainPage = document.getElementById("mainPage");
    //     mainPage.classList.add("hide");
    //   }

    //   function attachEvents() {
    //     document
    //       .getElementById("loginForm")
    //       .addEventListener("submit", handleLogin);

    //     document
    //       .getElementById("tabAll")
    //       .addEventListener("click", handleTabClick);

    //     document
    //       .getElementById("tabOpen")
    //       .addEventListener("click", handleTabClick);

    //     document
    //       .getElementById("tabClosed")
    //       .addEventListener("click", handleTabClick);

    //     document
    //       .getElementById("searchInput")
    //       .addEventListener("keydown", function (event) {
    //         if (event.key === "Enter") {
    //           handleSearch();
    //         }
    //       });

    //     document
    //       .getElementById("newIssueBtn")
    //       .addEventListener("click", handleSearch);

    //     document
    //       .getElementById("issueModal")
    //       .addEventListener("click", function (event) {
    //         if (event.target.id === "issueModal") {
    //           closeModal();
    //         }
    //       });
    //   }

    //   function init() {
    //     attachEvents();
    //     resetToLoginOnReload();
    //     setActiveTab("all");
    //   }

    //   init();
