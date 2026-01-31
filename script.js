/* ================== DATA ================== */

const departments = [
  { name: "Computer Science & Eng.", icon: "fa-laptop-code" },
  { name: "Electronics & Comm.", icon: "fa-microchip" },
  { name: "Electrical Engineering", icon: "fa-bolt-lightning" },
  { name: "Mechanical Engineering", icon: "fa-gears" },
  { name: "Civil Engineering", icon: "fa-bridge" },
  { name: "Chemical Engineering", icon: "fa-flask-vial" },
  { name: "Materials & Metallurgical Engineering", icon: "fa-industry" }
];

const subjects = {
  "Computer Science & Eng.": {
    3: ["Discrete Mathematics","Principles of Programming Language","Data Structure and Algorithm","Database Management System","Digital Circuit Design","Fundamental of Design Methods"],
    4: ["Fundamental of Entrepreneurship","Software Engineering","Computer System Organization","Theory Of Computation","Data Communication","Algorithm Design & Analysis"],
    5: ["Operating Systems","Compiler Design","Computer Networks","Statistical Models for Data Interpretation and Analysis","Artificial Intelligence"],
    6: ["Engineering Management","Machine Learning","Digital Image Processing","Network & System Security"],
    7: ["Engineering Economics and IPR","Data Warehouse & Mining","Computer Vision & Image Processing"],
    8: ["Major Project","Industrial Training","Seminar"]
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
    3: ["MATHEMATICS - 3","Fundamentals of Entrepreneurship ","Engineering Thermodynamics","Mechanics of Materials","Material Science and Engineering ","Mechanical Drawing and CAD "],
    4: ["Mathematics-4","Fundamentals of Design","Machine Design-1","MECHANICS  OF MACHINES","Manufacturing Processes-1","Industrial Engineering and Operations Research"],
    5: ["Engineering Management","Machine Design 2","I.C. Engines and Gas Turbines","Fluid Mechanics and Hydraulic Machine","Electrical Machines"],
    6: ["Data Structures and Algorithm","Heat and Mass Transfer","Turbomachines ","Manufacturing Processes-2","Automobile Engineering"],
    7: ["Engineering Economics and IPR","Refrigeration and Air Conditioning"],
    8: ["Elective –A Group","Elective –B Group","Elective –C Group"]
  },

  "Electrical Engineering": {
    3: ["Applied Numerical Methods ","Fundamentals of Design Methods","EM Fields and Materials","EMEC-I","Network Analysis","Measurement and Instrumentation"],
    4: ["Fundamentals of Entrepreneurship","Power Systems","EMEC-II","Electronic Devices & Circuits","Generation of Electrical Power","Signals and Systems"],
    5: ["Data Structures and Algorithm","Power Electronics","Power System Protection","Linear Control system","Utilization of Electrical Energy","Department Elective-1"],
    6: ["Engineering Management","Electrical Drives","Microprocessor and Microcontrollers","Modern Control System","Department Elective-2"], 
    7: ["Engineering Economics and IPR","EMEC-III","Department Elective-3","Department Elective-4"], 
    8: ["Department Elective-5","Department Elective-6","Internship/ Major Project","General Proficiency"]
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
    8: ["Major Project","Internship","Seminar"]
  },

  "Materials & Metallurgical Engineering": {
   3: ["Engineering Mathematics-III","Thermodynamics of Materials","Structure of Materials","Physical Metallurgy","Manufacturing Processes"],
   4: ["Mechanical Metallurgy","Phase Equilibria","Materials Characterization","Extractive Metallurgy","Corrosion Engineering"],
   5: ["Heat Treatment","Powder Metallurgy","Non-Ferrous Extractive Metallurgy","Ceramics and Refractories","Polymer Science"],
   6: ["Composite Materials","Failure Analysis","Advanced Materials","Metal Forming Technology"],
   7: ["Nanomaterials","Surface Engineering","Quality Control and Inspection"],
   8: ["Major Project","Industrial Training / Internship","Seminar"]
  }


};


/* ================== FILE DATA (REAL FILES) ================== */

const resources = {
  /* 4th sem*/ 
  "Software Engineering": {
    Notes: [
      {
        name: "SE-january-Notes",
        file: "assets/CSE/sem4/Software Engineering/Notes/SE-january-Notes.pdf"
      }
    ],
    PYQ: [
      {
        name: "SE-MIDTERM-2025",
        file: "assets/CSE/sem4/Software Engineering/PYQ/SE-MIDTERM-2025.pdf"
      }
    ],
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
    PYQ: [
      {
         name: "CSO-MIDTERM-2025",
         file: "assets/CSE/sem4/Computer System Organization/PYQ/CSO-MIDTERM-2025.pdf"
      },
      {
         name: "CSO-MINITEST-2025",
         file: "assets/CSE/sem4/Computer System Organization/PYQ/CSO-MINITEST-2025.pdf"
      }
    ],
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
    PYQ: [
      {
         name: "ADA-MIDTERMM-2025",
         file: "assets/CSE/sem4/Algorithm Design & Analysis/Pyq/ADA-MIDTERMM-2025.pdf"
      }
    ],
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
    PYQ: [
      {
         name: "TOC-MIDTERMM-2025",
         file: "assets/CSE/sem4/Theory Of Computation/PYQ/TOC-MIDTERMM-2025.pdf"
      }
    ],
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
    PYQ: [
      {
         name: "FOE-MIDTERMM-2025",
         file: "assets/CSE/sem4/Fundamental of Entrepreneurship/PYQ/FOE-MIDTERMM-2025.pdf"
      }
    ],
    Books: [],
    Syllabus: [
      {
        name: "Fundamental of Entrepreneurship Syllabus",
        file: "assets/CSE/sem4/Fundamental of Entrepreneurship/Syllabus/FOE Syllabus.pdf"
      }
    ]
  },

  /* 3th sem*/
  "Data Structure and Algorithm": {
    Notes: [],
    PYQ: [
      {
         name: "DS-MIDTERM-2024",
         file: "assets/CSE/sem3/Data Structure and Algorithm/PYQ/DS-MIDTERM-2024.pdf"
      },
      {
         name: "DS-ENDTERM-2024",
         file: "assets/CSE/sem3/Data Structure and Algorithm/PYQ/DS-ENDTERM-2024.pdf"
      }
    ],
    Books: [],
    Syllabus: [
      {
        name: "Data Structure and Algorithm Syllabus",
        file: "assets/CSE/sem3/Data Structure and Algorithm/Syllabus/DSA-Syllabus.pdf"
      }
    ]
  },

  "Discrete Mathematics": {
    Notes: [],
    PYQ: [
      {
         name: "DM-MINITEST-2024",
         file: "assets/CSE/sem3/Discrete Mathematics/PYQ/DM-MINITEST-2024.pdf"
      },
      {
         name: "DM-MIDTERM-2024",
         file: "assets/CSE/sem3/Discrete Mathematics/PYQ/DM-MIDTERM-2024.pdf"
      },
      {
        name: "DM-ENDTERM-2024",
         file: "assets/CSE/sem3/Discrete Mathematics/PYQ/DM-ENDTERM-2024.pdf"
      }
    ],
    Books: [],
    Syllabus: [
      {
        name: "Discrete Mathematics Syllabus",
        file: "assets/CSE/sem3/Discrete Mathematics/Syllabus/DM-Syllabus.pdf"

      }
    ]
  },

  "Database Management System": {
    Notes: [],
    PYQ: [
      {
         name: "DBMS-MIDTERM-2024",
         file: "assets/CSE/sem3/Database Management System/PYQ/DBMS-MIDTERM-2024.pdf"
      },
      {
         name: "DBMS-ENDTERM-2024",
         file: "assets/CSE/sem3/Database Management System/PYQ/DBMS-ENDTERM-2024.pdf"
      }
    ],
    Books: [],
    Syllabus: [
      {
        name: "Database Management System Syllabus",
        file: "assets/CSE/sem3/Database Management System/Syllabus/DBMS-Syllabus.pdf"
      }
    ]
  },

  "Digital Circuit Design": {
    Notes: [],
    PYQ: [
      {
          name: "DCD-MIDTERM-2024",
          file: "assets/CSE/sem3/Digital Circuit Design/PYQ/DCD-MIDTERM-2024.pdf"
      },
      {
          name: "DCD-ENDTERM-2024",
          file: "assets/CSE/sem3/Digital Circuit Design/PYQ/DCD-ENDTERM-2024.pdf"
      }
    ],
    Books: [],
    Syllabus: [
      {
        name: "Digital Circuit Design Syllabus",
        file: "assets/CSE/sem3/Digital Circuit Design/Syllabus/DCD-Syllabus.pdf"
      }
    ]
  },

  "Principles of Programming Language": {
    Notes: [],
    PYQ: [
      {
          name: "PPL-MIDTERM-2024",
          file: "assets/CSE/sem3/Principles of Programming Language/PYQ/PPL-MIDTERM-2024.pdf"
      },
      {
          name: "PPL-ENDTERM-2024",
          file: "assets/CSE/sem3/Principles of Programming Language/PYQ/PPL-ENDTERM-2024.pdf"
      }
    ],
    Books: [],
    Syllabus: [
      {
        name: "Principles of Programming Language Syllabus",
        file: "assets/CSE/sem3/Principles of Programming Language/Syllabus/PPL-Syllabus.pdf"
      }
    ]
  },

  "Fundamental of Design Methods": {
    Notes: [],
    PYQ: [
      {
          name: "FOD-MIDTERM-2024",
          file: "assets/CSE/sem3/Fundamental of Design Methods/PYQ/FOD-MIDTERM-2024.pdf" 
      },
      {
          name: "FOD-ENDTERM-2024",
          file: "assets/CSE/sem3/Fundamental of Design Methods/PYQ/FOD-ENDTERM-2024.pdf" 
      }
    ],
    Books: [],
    Syllabus: [
      {
        name: "Fundamental of Design Methods Syllabus",
        file: "assets/CSE/sem3/Fundamental of Design Methods/Syllabus/FOD-Syllabus.pdf"
      }
    ]
  },

  /* 5th sem */
  "Operating Systems": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },

   "": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },

   "": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },

   "": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },

   "": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },


/* 6th sem */
   "Engineering Management": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },

   "Machine Learning": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },

   "Digital Image Processing": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },

   "Network & System Security": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },

  /* 7th sem */
   "Computer Vision & Image Processing": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },

   "Data Warehouse & Mining": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },

  "Engineering Economics and IPR": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },

  /* 8th sem */
  "Industrial Training": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },

  "Major Project": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },

  "Seminar": {
    Notes: [],
    PYQ: [],
    Books: [],
    Syllabus: []
  },
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
