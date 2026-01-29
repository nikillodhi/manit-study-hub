/* ================== DATA ================== */

const departments = [
  { name: "Computer Science & Eng.", icon: "fa-laptop-code" },
  { name: "Electronics & Comm.", icon: "fa-microchip" },
  { name: "Electrical Engineering", icon: "fa-bolt-lightning" },
  { name: "Mechanical Engineering", icon: "fa-gears" },
  { name: "Civil Engineering", icon: "fa-bridge" },
  { name: "Chemical Engineering", icon: "fa-flask-vial" }
];

const subjects = {
  "Computer Science & Eng.": {
    3: ["Discrete Mathematics","Principles of Programming Language","Data Structure and Algorithm","Database Management System","Digital Circuit Design","Fundamental of Design Methods"],
    4: ["Fundamental of Entrepreneurship","Software Engineering","Computer System Organization","Theory Of Computation","Data Communication","Algorithm Design & Analysis"],
    5: ["Operating Systems","Compiler Design","Computer Networks","Statistical Models for Data Interpretation and Analysis","Artificial Intelligence"],
    6: ["Engineering Management","Machine Learning","Digital Image Processing","Network & System Security"],
    7: ["Engineering Economics and IPR","Data Warehouse & Mining","Computer Vision & Image Processing"],
    8: ["Major Project","Industrial Training / Internship","Seminar"]
  },

  "Civil Engineering": {
    3: ["Fluid Mechanics","Surveying","Highway Engineering","Strength of Materials","Mathmatics-3"],
    4: ["Design of RCC","Geotechnical Engineering","Advance Surveying","Structural Mechanics","Wastewater Treatment","Building and planning"],
    5: ["Design of RCC","Environmental Engineering","Fluid Mechanics"],
    6: ["Irrigation Engineering","Foundation Engineering"],
    7: ["Construction Planning"],
    8: ["Major Project","Internship","Seminar"]
  },

  "Mechanical Engineering": {
    3: ["Thermodynamics","Material Science"],
    4: ["Machine Design","Heat Transfer"],
    5: ["CAD/CAM","Dynamics"],
    6: ["Robotics","Manufacturing"],
    7: ["Operations Research"],
    8: ["Major Project"]
  },

  "Electrical Engineering": {
    3: ["Network Analysis","Electrical Measurements","Analog Electronics"],
    4: ["Control Systems","Power Systems","Electrical Machines"],
    5: ["Microprocessors","Power Electronics"],
    6: ["Renewable Energy Systems"], 
    7: ["High Voltage Engineering"], 
    8: ["Major Project","Internship","Seminar"]
  },

  "Electronics & Comm.": { 
    3: ["Signals and Systems","Electronic Devices","Digital Electronics"], 
    4: ["Analog Communication","Microcontrollers","Electromagnetic Theory"],
    5: ["Digital Communication","VLSI Design"], 
    6: ["Wireless Communication"], 
    7: ["Embedded Systems"], 
    8: ["Major Project","Internship","Seminar"] 
  },

  "Chemical Engineering": { 
    3: ["Material and Energy Balance","Chemical Process Calculations"],
    4: ["Fluid Flow","Chemical Engineering Thermodynamics"], 
    5: ["Mass Transfer","Heat Transfer"], 
    6: ["Chemical Reaction Engineering"], 
    7: ["Process Control"], 
    8: ["Major Project","Internship","Seminar"] }

};


/* ================== FILE DATA (REAL FILES) ================== */

const resources = {
  "Software Engineering": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: [
      {
        name: "Software Engineering Syllabus",
        file: "assets/CSE/sem4/Software Engineering/Syllabus/SE Syllabus.pdf"
      }
    ]
  },

  "Computer System Organization": {
    Notes: [],
    PYQ: [],
    Books: [
      {
        name: "Computer System Organization Book",
        file: "assets/CSE/sem4/Computer System Organization/Books/Computer System Organization.pdf"

      }
    ],
    Syllabus: [
      {
        name: "Computer System Organization Syllabus",
        file: "assets/CSE/sem4/Computer System Organization/Syllabus/CSO Syllabus.pdf"
      }
    ]
  },

  "Algorithm Design & Analysis": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: [
      {
          name: "Algorithm Design & Analysis Syllabus",
          file: "assets/CSE/sem4/Algorithm Design & Analysis/Syllabus/ADA Syllabus.pdf"
      }
    ]
  },

  "Theory Of Computation": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: [
      {
          name: "Theory Of Computation Syllabus",
          file: "assets/CSE/sem4/Theory Of Computation/Syllabus/TOC Syllabus.pdf"
      }
    ]
  },

  "Data Communication": {
    Notes: [],
    PYQ: [],
    Books: [
      {
        name: "Data Communication Book",
        file: "assets/CSE/sem4/Data Communication/Books/Data Communication.pdf"
      }
    ],
    Syllabus: [
      {
        name: "Data Communication Syllabus",
        file: "assets/CSE/sem4/Data Communication/Syllabus/DC Syllabus.pdf"
      }
    ]
  },

  "Fundamental of Entrepreneurship": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: [
      {
        name: "Fundamental of Entrepreneurship Syllabus",
        file: "assets/CSE/sem4/Fundamental of Entrepreneurship/Syllabus/FOE Syllabus.pdf"
      }
    ]
  }
};

/* ================== STATE ================== */

let grid, title;
let currentDept = "";
let currentSem = "";
let currentSubject = "";

/* ================== UI FLOW ================== */

/* ---- Departments ---- */
function showDepts() {
  title.innerText = "Select Your Department";
  grid.innerHTML = departments.map(d => `
    <div class="card" onclick="showSems('${d.name}')">
      <i class="fas ${d.icon}"></i>
      <h3>${d.name}</h3>
    </div>
  `).join("");
}

/* ---- Semesters ---- */
function showSems(dept) {
  currentDept = dept;
  title.innerText = dept;

  let html = `
    <div class="back-card" onclick="showDepts()" style="grid-column:1/-1;">
      ← Back to Departments
    </div>
  `;

  for (let i = 3; i <= 8; i++) {
    html += `
      <div class="card" onclick="showSubjects('${dept}', ${i})">
        <i class="fas fa-graduation-cap"></i>
        <h3>Semester ${i}</h3>
      </div>
    `;
  }

  grid.innerHTML = html;
}

/* ---- Subjects ---- */
function showSubjects(dept, sem) {
  currentDept = dept;
  currentSem = sem;

  title.innerText = `${dept} - Semester ${sem}`;
  const list = subjects[dept]?.[sem];

  let html = `
    <div class="back-card" onclick="showSems('${dept}')" style="grid-column:1/-1;">
      ← Back to Semesters
    </div>
  `;

  if (!list) {
    html += `<div class="card"><h3>Coming Soon</h3></div>`;
  } else {
    list.forEach(sub => {
      html += `
        <div class="card" onclick="showCategories('${sub}')">
          <i class="fas fa-book"></i>
          <h3>${sub}</h3>
        </div>
      `;
    });
  }

  grid.innerHTML = html;
}

/* ---- Categories (Notes / PYQ / Books / Syllabus) ---- */
function showCategories(subject) {
  currentSubject = subject;
  title.innerText = subject;

  let html = `
    <div class="back-card" onclick="showSubjects(currentDept, currentSem)"
         style="grid-column:1/-1;">
      ← Back to Subjects
    </div>
  `;

  ["Notes", "PYQ", "Books", "Syllabus"].forEach(type => {
    html += `
      <div class="card" onclick="showFiles('${type}')">
        <i class="fas fa-file"></i>
        <h3>${type}</h3>
      </div>
    `;
  });

  grid.innerHTML = html;
}

/* ---- Files (Unit-wise PDFs) ---- */
function showFiles(type) {
  title.innerText = `${currentSubject} - ${type}`;

  let html = `
    <div class="back-card" onclick="showCategories(currentSubject)"
         style="grid-column:1/-1;">
      ← Back to Categories
    </div>
  `;

  const files = resources[currentSubject]?.[type];

  // ✅ EMPTY STATE
  if (!files || files.length === 0) {
    html += `
      <div class="card" style="grid-column:1/-1; text-align:center;">
        <h3 style="font-size:1.2rem;">😕 No resources available yet</h3>
        <p style="color:#94a3b8;margin:10px 0;">
          Be the first one to help your juniors!
        </p>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8uZDnEvTDk8scf7Shh8ecgAOXIo6nhDw5UXSUYWf8umrT7Q/viewform"
           target="_blank"
           class="premium-upload-btn"
           style="display:inline-block;margin-top:10px;">
          <i class="fas fa-cloud-arrow-up"></i> Contribute Resources
        </a>
      </div>
    `;

    grid.innerHTML = html;
    return;
  }

  // ✅ FILE LIST
  files.forEach(f => {
    html += `
      <div class="card">
        <h3>${f.name}</h3>
        <button onclick="openModal('${f.name}','${f.file}')">
          View | Download
        </button>
      </div>
    `;
  });

  grid.innerHTML = html;
}


/* ================== MODAL ================== */

function openModal(name, file) {
  document.getElementById("modalTitle").innerText = name;
  document.getElementById("viewBtn").href = file;
  document.getElementById("downloadBtn").href = file;
  document.getElementById("resourceModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("resourceModal").style.display = "none";
}

/* ================== INIT ================== */

document.addEventListener("DOMContentLoaded", () => {
  grid = document.getElementById("gridWrapper");
  title = document.getElementById("dynamicTitle");
  showDepts();
});
