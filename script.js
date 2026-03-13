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
        3: ["discrete-mathematics", "principles-of-programming-language", "data-structure-and-algorithm", "database-management-system", "digital-circuit-design", "fundamental-of-design-methods"],
        4: ["fundamental-of-entrepreneurship", "software-engineering", "computer-system-organization", "theory-of-computation", "data-communication", "algorithm-design-and-analysis"],
        5: ["operating-systems", "compiler-design", "computer-networks", "statistical-models-for-data-interpretation-and-analysis", "artificial-intelligence"],
        6: ["engineering-management", "machine-learning", "digital-image-processing", "network-and-system-security"],
        7: ["engineering-economics-and-ipr", "data-warehouse-and-mining", "computer-vision-and-image-processing"],
        8: ["major-project", "industrial-training", "seminar"]
    },


    "Civil Engineering": {
        3: ["fluid-mechanics", "surveying", "highway-engineering", "strength-of-materials", "mathematics-3"],
        4: ["design-of-rcc", "geotechnical-engineering", "advance-surveying", "structural-mechanics", "wastewater-treatment", "building-and-planning"],
        5: ["design-of-rcc", "environmental-engineering", "fluid-mechanics"],
        6: ["irrigation-engineering", "foundation-engineering"],
        7: ["construction-planning"],
        8: ["major-project", "internship", "seminar"]
    },

    "Mechanical Engineering": {
        3: ["mathematics-3", "fundamentals-of-entrepreneurship", "engineering-thermodynamics", "mechanics-of-materials", "material-science-and-engineering", "mechanical-drawing-and-cad"],
        4: ["mathematics-4", "fundamentals-of-design", "machine-design-1", "mechanics-of-machines", "manufacturing-processes-1", "industrial-engineering-and-operations-research"],
        5: ["engineering-management", "machine-design-2", "ic-engines-and-gas-turbines", "fluid-mechanics-and-hydraulic-machines", "electrical-machines"],
        6: ["data-structure-and-algorithm", "heat-and-mass-transfer", "turbomachines", "manufacturing-processes-2", "automobile-engineering"],
        7: ["engineering-economics-and-ipr", "refrigeration-and-air-conditioning"],
        8: ["elective-a", "elective-b", "elective-c"]
    },

    "Electrical Engineering": {
        3: ["applied-numerical-methods", "fundamentals-of-design-methods",
            "em-fields-and-materials", "emec-1", "network-analysis", "measurement-and-instrumentation"],
        4: ["fundamentals-of-entrepreneurship", "power-systems", "emec-2", "electronic-devices-and-circuits", "generation-of-electrical-power", "signals-and-systems"
        ],
        5: ["data-structure-and-algorithm", "power-electronics", "power-system-protection", "linear-control-system", "utilization-of-electrical-energy", "department-elective-1"],
        6: ["engineering-management", "electrical-drives", "microprocessor-and-microcontrollers", "modern-control-system", "department-elective-2"],
        7: ["engineering-economics-and-ipr", "emec-3", "department-elective-3", "department-elective-4"],
        8: ["department-elective-5", "department-elective-6", "internship-or-major-project", "general-proficiency"]
    },

    "Electronics & Comm.": {
        3: ["signals-and-systems", "electronic-devices", "digital-electronics"],
        4: ["analog-communication", "microcontrollers", "electromagnetic-theory"],
        5: ["digital-communication", "vlsi-design"],
        6: ["wireless-communication"],
        7: ["embedded-systems"],
        8: ["major-project", "internship", "seminar"]
    },

    "Chemical Engineering": {
        3: ["material-and-energy-balance", "chemical-process-calculations"],
        4: ["fluid-flow", "chemical-engineering-thermodynamics"],
        5: ["mass-transfer", "heat-transfer"],
        6: ["chemical-reaction-engineering"],
        7: ["process-control"],
        8: ["major-project", "internship", "seminar"]
    },

    "Materials & Metallurgical Engineering": {
        3: ["engineering-mathematics-3", "thermodynamics-of-materials", "structure-of-materials", "physical-metallurgy", "manufacturing-processes"],
        4: ["mechanical-metallurgy", "phase-equilibria", "materials-characterization", "extractive-metallurgy", "corrosion-engineering"],
        5: ["heat-treatment", "powder-metallurgy", "non-ferrous-extractive-metallurgy", "ceramics-and-refractories", "polymer-science"],
        6: ["composite-materials", "failure-analysis", "advanced-materials", "metal-forming-technology"],
        7: ["nanomaterials", "surface-engineering", "quality-control-and-inspection"],
        8: ["major-project", "industrial-training-or-internship", "seminar"]
    }
};


/*                   FILE DATA (REAL FILES)                      */
const resources = {

    /* ================= SEM 4 ================= */

    "software-engineering": {
        notes: [
            {
                name: "SE-JANUARY-NOTES",
                view: "https://drive.google.com/file/d/1ijcMbk2W_aDXX_8__pXfoK-lKvN74LAA/preview",
                download: "https://drive.google.com/uc?export=download&id=1ijcMbk2W_aDXX_8__pXfoK-lKvN74LAA"
            },
            {
                name: "SE_TILL-MIDSEM",
                view: "https://drive.google.com/file/d/1HK5Hf9y7UsA8Nq7R1fyS8ZXRCFiVxwFu/preview",
                download: "https://drive.google.com/uc?export=download&id=1HK5Hf9y7UsA8Nq7R1fyS8ZXRCFiVxwFu"
            },
        ],
        pyq: [
            {
                name: "SE-ENDTERM-2025",
                view: "https://drive.google.com/file/d/1CLB8faBUlZrk93KLcqcYKeIVkHIXMLGg/preview",
                download: "https://drive.google.com/uc?export=download&id=1CLB8faBUlZrk93KLcqcYKeIVkHIXMLGg"
            },
            {
                name: "SE-MIDTERM-2025",
                view: "https://drive.google.com/file/d/1oW92J2VWEMjk669R1DiP7R1j3jPvVP5X/preview",
                download: "https://drive.google.com/uc?export=download&id=1oW92J2VWEMjk669R1DiP7R1j3jPvVP5X"
            },
            {
                name: "SE Endterm 2024",
                view: "https://drive.google.com/file/d/1Bh1GGegc4FYRirumFD8xMvvOQc-PiScY/preview",
                download: "https://drive.google.com/uc?export=download&id=1Bh1GGegc4FYRirumFD8xMvvOQc-PiScY"
            },
            {
                name: "SE Midterm 2024",
                view: "https://drive.google.com/file/d/1gp77FpEbtsHA3MAOyByUNsS8EddQfXcj/preview",
                download: "https://drive.google.com/uc?export=download&id=1gp77FpEbtsHA3MAOyByUNsS8EddQfXcj"
            },
            {
                name: "SE Midterm 2023",
                view: "https://drive.google.com/file/d/1iNxaLv_-eFM7lPzJZboUlPnhyO-revSk/preview",
                download: "https://drive.google.com/uc?export=download&id=1iNxaLv_-eFM7lPzJZboUlPnhyO-revSk"
            },
            {
                name: "SE Minitest 2023",
                view: "https://drive.google.com/file/d/1t77D0foCoi5qMnLkUtD5HTh2YHa1K2HY/preview",
                download: "https://drive.google.com/uc?export=download&id=1t77D0foCoi5qMnLkUtD5HTh2YHa1K2HY"
            },
        ],
        books: [
            {
                name: "bypressman-7thedition",
                view: "https://drive.google.com/file/d/1k18CnBIpAqYM62xvNa8zOtzGPEdWSigh/preview",
                download: "https://drive.google.com/uc?export=download&id=1k18CnBIpAqYM62xvNa8zOtzGPEdWSigh"
            },
            {
                name: "byrajibmall-4thedition",
                view: "https://drive.google.com/file/d/1f1wXhJyetNph9v4Vknp8tf0wnnH_4i-z/preview",
                download: "https://drive.google.com/uc?export=download&id=1f1wXhJyetNph9v4Vknp8tf0wnnH_4i-z"
            },
        ],
        syllabus: [
            {
                name: "SE-Syllabus",
                view: "https://drive.google.com/file/d/1EBjiZRmtKsHRx1QaDLzYGoTGrL7ON7zk/preview",
                download: "https://drive.google.com/uc?export=download&id=1EBjiZRmtKsHRx1QaDLzYGoTGrL7ON7zk"
            }
        ]
    },

    "algorithm-design-and-analysis": {
        notes: [
            {
                name: "ADA-NOTES",
                view: "https://drive.google.com/file/d/13lCODsMOo4uqbEYDNj9InEn74ZiOMFZX/preview",
                download: "https://drive.google.com/uc?export=download&id=13lCODsMOo4uqbEYDNj9InEn74ZiOMFZX"
            },
            {
                name: "ADA_TILL-MIDSEM",
                view: "https://drive.google.com/file/d/1-a0PRvXhb2HhOSZYOq40tAWfea5YOtWU/preview",
                download: "https://drive.google.com/uc?export=download&id=1-a0PRvXhb2HhOSZYOq40tAWfea5YOtWU"
            },
        ],
        pyq: [

            {
                name: "ADA-ENDTERM-2025",
                view: "https://drive.google.com/file/d/1e1AHB7_h_ZaLgVQmVXNOur1E7_MWB4hq/preview",
                download: "https://drive.google.com/uc?export=download&id=1e1AHB7_h_ZaLgVQmVXNOur1E7_MWB4hq"
            },
            {
                name: "ADA-MIDTERM-2025",
                view: "https://drive.google.com/file/d/1gZM2rbVFKQWlHrnLulcBnjfvxdVoXNW3/preview",
                download: "https://drive.google.com/uc?export=download&id=1gZM2rbVFKQWlHrnLulcBnjfvxdVoXNW3"
            },
            {
                name: "ADA-ENDTERM-2023",
                view: "https://drive.google.com/file/d/1rSlA3m0EzeJspGWxts7KWNcL-0gFh-rV/preview",
                download: "https://drive.google.com/uc?export=download&id=1rSlA3m0EzeJspGWxts7KWNcL-0gFh-rV"
            },
            {
                name: "ADA-MIDTERM-2023",
                view: "https://drive.google.com/file/d/1tMnjrSQr9Q4uaTCFYYrz0F_h4bHb9i36/preview",
                download: "https://drive.google.com/uc?export=download&id=1tMnjrSQr9Q4uaTCFYYrz0F_h4bHb9i36"
            }

        ],
        books: [],
        syllabus: [
            {
                name: "ADA-Syllabus",
                view: "https://drive.google.com/file/d/1Yn-feTS2wbBgmqRuNbEgeUuxY2Axa2cr/preview",
                download: "https://drive.google.com/uc?export=download&id=1Yn-feTS2wbBgmqRuNbEgeUuxY2Axa2cr"
            }
        ]
    },

    "computer-system-organization": {
        notes: [
            {
                name: "CSO-NOTES",
                view: "https://drive.google.com/file/d/1TCC_8gzTZTSLRIWz0j1_53oP2wk_-5XS/preview",
                download: "https://drive.google.com/uc?export=download&id=1TCC_8gzTZTSLRIWz0j1_53oP2wk_-5XS"
            },
            {
                name: "CSO_TILL-MIDSEM",
                view: "https://drive.google.com/file/d/1crFy6-Xd1DXZ-8T8b_flTNJUvSH02eUP/preview",
                download: "https://drive.google.com/uc?export=download&id=1crFy6-Xd1DXZ-8T8b_flTNJUvSH02eUP"
            },
        ],
        pyq: [
            {
                name: "CSO-MINITEST-2025",
                view: "https://drive.google.com/file/d/1o0OMbbAVZnT_YzXKttTDJqmrcEO1ebON/preview",
                download: "https://drive.google.com/uc?export=download&id=1o0OMbbAVZnT_YzXKttTDJqmrcEO1ebON"
            },
            {
                name: "CSO-MIDTERM-2025",
                view: "https://drive.google.com/file/d/1Czyav7uUwrZQ75fubNLAfLD54GJ6gNIE/preview",
                download: "https://drive.google.com/uc?export=download&id=1Czyav7uUwrZQ75fubNLAfLD54GJ6gNIE"
            },
            {
                name: "CSO-ENDTERM-2025",
                view: "https://drive.google.com/file/d/1BUGk4ZCwS54DkrTjXQGL9uTnMw3hWB92/preview",
                download: "https://drive.google.com/uc?export=download&id=1BUGk4ZCwS54DkrTjXQGL9uTnMw3hWB92"
            },
            {
                name: "CSO-MIDTERM-2023",
                view: "https://drive.google.com/file/d/1oEsbp30LRwboBqA_rVkzOQe5bPm_dXf3/preview",
                download: "https://drive.google.com/uc?export=download&id=1oEsbp30LRwboBqA_rVkzOQe5bPm_dXf3"
            },
            {
                name: "CSO-ENDTERM-2023",
                view: "https://drive.google.com/file/d/1lcGP-QCLzZJlGn3hq3_yi4DBKsrNJ8CO/preview",
                download: "https://drive.google.com/uc?export=download&id=1lcGP-QCLzZJlGn3hq3_yi4DBKsrNJ8CO"
            }

        ],
        books: [
            {
                name: "CSO-BOOK",
                view: "https://drive.google.com/file/d/1C7u_ezOV5crrx7ONQAD69v3qWxW-gpZr/preview",
                download: "https://drive.google.com/uc?export=download&id=1C7u_ezOV5crrx7ONQAD69v3qWxW-gpZr"
            }
        ],
        syllabus: [
            {
                name: "CSO-Syllabus",
                view: "https://drive.google.com/file/d/14vrEHCIf6Bjjl3OiOVTP2uiBfH3dYVEI/preview",
                download: "https://drive.google.com/uc?export=download&id=14vrEHCIf6Bjjl3OiOVTP2uiBfH3dYVEI"
            },
        ]
    },

    "data-communication": {
        notes: [
            {
                name: "DC-NOTES",
                view: "https://drive.google.com/file/d/1zDW5-7fcNXpaiDQJpNDdYRIAm4ZWrCf5/preview",
                download: "https://drive.google.com/uc?export=download&id=1zDW5-7fcNXpaiDQJpNDdYRIAm4ZWrCf5"
            },
            {
                name: "DCN_TILL-MIDSEM",
                view: "https://drive.google.com/file/d/16UpvSBUOtBvj1UUtz7p8-Xfyw-JkOoC4/preview",
                download: "https://drive.google.com/uc?export=download&id=16UpvSBUOtBvj1UUtz7p8-Xfyw-JkOoC4"
            },
        ],
        pyq: [

            {
                name: "DC-MIDTERM-2025",
                view: "https://drive.google.com/file/d/1dOpDZk6MXIaxkHsh98B8-2XIU-HD5M-3/preview",
                download: "https://drive.google.com/uc?export=download&id=1dOpDZk6MXIaxkHsh98B8-2XIU-HD5M-3"
            },
            {
                name: "DC-ENDTERM-2025",
                view: "https://drive.google.com/file/d/1P-gx24f3V3GCpBeWlrQQGdzipGC6ZCxn/preview",
                download: "https://drive.google.com/uc?export=download&id=1P-gx24f3V3GCpBeWlrQQGdzipGC6ZCxn"
            },
            {
                name: "DC-ENDTERM-2023",
                view: "https://drive.google.com/file/d/1ySEY55kxkhnx-DZn8f19Id0KvIPYMLqf/preview",
                download: "https://drive.google.com/uc?export=download&id=1ySEY55kxkhnx-DZn8f19Id0KvIPYMLqf"
            },
            {
                name: "DC-MIDTERM-2023",
                view: "https://drive.google.com/file/d/18UDiGHoAm_ZZMO7Pap3Lp3wQPc39Mxlc/preview",
                download: "https://drive.google.com/uc?export=download&id=18UDiGHoAm_ZZMO7Pap3Lp3wQPc39Mxlc"
            },
        ],
        books: [
            {
                name: "DC-BOOK1",
                view: "https://drive.google.com/file/d/1F2qJzI3RKVm8yNSV8H7Di4K67DxFx98u/preview",
                download: "https://drive.google.com/uc?export=download&id=1F2qJzI3RKVm8yNSV8H7Di4K67DxFx98u"
            },


            {
                name: "DC-BOOK2",
                view: "https://drive.google.com/file/d/1DvlXno982RFwEFJYgTrNiMIIRxHUZKr5/preview",
                download: "https://drive.google.com/uc?export=download&id=1DvlXno982RFwEFJYgTrNiMIIRxHUZKr5"
            },

        ],
        syllabus: [
            {
                name: "DC-Syllabus",
                view: "https://drive.google.com/file/d/1ZtZVKrOXfg7gcN0z1ILgb5kVFer7tWJI/preview",
                download: "https://drive.google.com/uc?export=download&id=1ZtZVKrOXfg7gcN0z1ILgb5kVFer7tWJI"
            },
        ]
    },

    "theory-of-computation": {
        notes: [
            {
                name: "TOC Notes",
                view: "https://drive.google.com/file/d/10lmR_EYvgSkfGv8Uccy5od1S19TO4klm/preview",
                download: "https://drive.google.com/uc?export=download&id=10lmR_EYvgSkfGv8Uccy5od1S19TO4klm"
            },
            {
                name: "TOC_TILL-MIDSEM",
                view: "https://drive.google.com/file/d/1PTiMbG3Z4lWe4Lw-l6QpXhsCr4Ag4kpu/preview",
                download: "https://drive.google.com/uc?export=download&id=1PTiMbG3Z4lWe4Lw-l6QpXhsCr4Ag4kpu"
            },
        ],
        pyq: [
            {
                name: "TOC-MIDTERM-2025",
                view: "https://drive.google.com/file/d/1m8a-aAL4X3klBgDnIEoAoOyKJEWqKcZH/preview",
                download: "https://drive.google.com/uc?export=download&id=1m8a-aAL4X3klBgDnIEoAoOyKJEWqKcZH"
            },
            {
                name: "TOC-ENDTERM-2025",
                view: "https://drive.google.com/file/d/1AAvF9DSll1tePPKnJ0eCRJfM2PZ9pqOf/preview",
                download: "https://drive.google.com/uc?export=download&id=1AAvF9DSll1tePPKnJ0eCRJfM2PZ9pqOf"
            },
            {
                name: "TOC Endterm 2023",
                view: "https://drive.google.com/file/d/16NcXIAK1oRAF9kO--boDZ6sNg0k2mW87/preview",
                download: "https://drive.google.com/uc?export=download&id=16NcXIAK1oRAF9kO--boDZ6sNg0k2mW87"
            },
            {
                name: "TOC Endterm 2024",
                view: "https://drive.google.com/file/d/1I1qb-a9ddDGQ2U4FdAHZfqh7eXtuyXzv/preview",
                download: "https://drive.google.com/uc?export=download&id=1I1qb-a9ddDGQ2U4FdAHZfqh7eXtuyXzv"
            },
            {
                name: "TOC Midterm 2023",
                view: "https://drive.google.com/file/d/1kFbr8G1VwUCurhdrNIO3rrxMqYqQNWoc/preview",
                download: "https://drive.google.com/uc?export=download&id=1kFbr8G1VwUCurhdrNIO3rrxMqYqQNWoc"
            },
            {
                name: "TOC Midterm 2024",
                view: "https://drive.google.com/file/d/1JlLqbkkoO7fTN4poy6-V3T3XNkyeEFcE/preview",
                download: "https://drive.google.com/uc?export=download&id=1JlLqbkkoO7fTN4poy6-V3T3XNkyeEFcE"
            },


        ],
        books: [
            {
                name: "TOC-BOOK",
                view: "https://drive.google.com/file/d/1XWgsL9HorGoButA-vXL30fPSq3m-x1py/preview",
                download: "https://drive.google.com/uc?export=download&id=1XWgsL9HorGoButA-vXL30fPSq3m-x1py"
            }
        ],
        syllabus: [
            {
                name: "TOC-Syllabus",
                view: "https://drive.google.com/file/d/15Kq8DpHNZGMOaLwV2-kUsZCq6_i3MDD7/preview",
                download: "https://drive.google.com/uc?export=download&id=15Kq8DpHNZGMOaLwV2-kUsZCq6_i3MDD7"
            },
        ]
    },

    "fundamental-of-entrepreneurship": {
        notes: [
            {
                name: "FOE-JANUARY-NOTES",
                view: "https://drive.google.com/file/d/1WW2yeiYdaFjzibEvkZNnHBzArlSK4XPh/preview",
                download: "https://drive.google.com/uc?export=download&id=1WW2yeiYdaFjzibEvkZNnHBzArlSK4XPh"
            },
            {
                name: "FOE_TILL-MIDSEM",
                view: "https://drive.google.com/file/d/1K24cpDpEaj1uQzpmWcR-WJlJoRaeIj3t/preview",
                download: "https://drive.google.com/uc?export=download&id=1K24cpDpEaj1uQzpmWcR-WJlJoRaeIj3t"
            },
        ],
        pyq: [
            {
                name: "FOE-MIDTERM-2025",
                view: "https://drive.google.com/file/d/1D7glVWnM_ZMQftXLPtQ3Ac8Xrg5LVHB1/preview",
                download: "https://drive.google.com/uc?export=download&id=1D7glVWnM_ZMQftXLPtQ3Ac8Xrg5LVHB1"
            },

            {
                name: "FOE-ENDTERM-2025",
                view: "https://drive.google.com/file/d/1v-B063wPDPoRuox-dZVibteK6VQeeZau/preview",
                download: "https://drive.google.com/uc?export=download&id=1v-B063wPDPoRuox-dZVibteK6VQeeZau"
            },
            {
                name: "FOE-MIDTERM-2023",
                view: "https://drive.google.com/file/d/1YpF6ohuJbo4rzKqtZeO904BJi-LrDAwI/preview",
                download: "https://drive.google.com/uc?export=download&id=1YpF6ohuJbo4rzKqtZeO904BJi-LrDAwI"
            },
            {
                name: "FOE-ENDTERM-2024",
                view: "https://drive.google.com/file/d/1FA44-EZgs0JuwjBQdjOzDtKJItrv3yiA/preview",
                download: "https://drive.google.com/uc?export=download&id=1FA44-EZgs0JuwjBQdjOzDtKJItrv3yiA"
            }
        ],
        books: [
            {
                name: "Peter F. Drucker - Innovation and Enterpreneurship",
                view: "https://drive.google.com/file/d/1SjPNOvsrcidvVHlxq08N_ScfbuOvZgLJ/preview",
                download: "https://drive.google.com/uc?export=download&id=1SjPNOvsrcidvVHlxq08N_ScfbuOvZgLJ"
            },
            // Alex M. Thomas - Macroeconomics book
            {
                name: "ALEX-M-THOMAS-MACROECONOMICS",
                view: "https://drive.google.com/file/d/1s60XvhsSbJm6dXdQFOo84zRn78R_0f6L/preview",
                download: "https://drive.google.com/uc?export=download&id=1s60XvhsSbJm6dXdQFOo84zRn78R_0f6L"
            },

            // Bradley R. Schiller - The Micro Economy
            {
                name: "BRADLEY-R-SCHILLER-THE-MICRO-ECONOMY",
                view: "https://drive.google.com/file/d/1Q1pufSqE-5bvLhkSq2h9wK_YRUWffeyc/preview",
                download: "https://drive.google.com/uc?export=download&id=1Q1pufSqE-5bvLhkSq2h9wK_YRUWffeyc"
            },

            // Bruce R. Barringer & Duane Ireland - Entrepreneurship
            {
                name: "BRUCE-R-BARRINGER-DUANE-IRELAND-ENTREPRENEURSHIP",
                view: "https://drive.google.com/file/d/14s24lVVdf_U4wiXZ69KwgjGLH7RJkrE_/preview",
                download: "https://drive.google.com/uc?export=download&id=14s24lVVdf_U4wiXZ69KwgjGLH7RJkrE_"
            }
        ],
        syllabus: [
            {
                name: "FOE-Syllabus",
                view: "https://drive.google.com/file/d/1ARaCegWONHLAkJymTDDZEEfgVU3n_N_r/preview",
                download: "https://drive.google.com/uc?export=download&id=1ARaCegWONHLAkJymTDDZEEfgVU3n_N_r"
            },
        ]
    },

    /* ================= SEM 3 ================= */

    "data-structure-and-algorithm": {
        notes: [],
        pyq: [
            {
                name: "DS-ENDTERM-2024",
                view: "https://drive.google.com/file/d/1tSSTrwO3uGwopX5InQ-XZSKF8jmWQZSO/preview",
                download: "https://drive.google.com/uc?export=download&id=1tSSTrwO3uGwopX5InQ-XZSKF8jmWQZSO"
            },
            {
                name: "DS-ENDTERM-2024",
                view: "https://drive.google.com/file/d/14eSvgVtOnggQf5urgtM62VpLl5ZjW0Y4/preview",
                download: "https://drive.google.com/uc?export=download&id=14eSvgVtOnggQf5urgtM62VpLl5ZjW0Y4"
            },
            {
                name: "DS-MIDTERM-2024",
                view: "https://drive.google.com/file/d/1WhW6vX4MXkyEtVvRcIVU35iDV4LPCSmM/preview",
                download: "https://drive.google.com/uc?export=download&id=1WhW6vX4MXkyEtVvRcIVU35iDV4LPCSmM"
            },
            {
                name: "DS-MIDTERM-2025",
                view: "https://drive.google.com/file/d/1zfRXdPTKxqsl623kVLKfowLWVJj_JNVd/preview",
                download: "https://drive.google.com/uc?export=download&id=1zfRXdPTKxqsl623kVLKfowLWVJj_JNVd"
            },
            {
                name: "DS-MIDTERM-2022",
                view: "https://drive.google.com/file/d/1q0LKPfisKHHBXduTDgPGhuK07KeYrr5k/preview",
                download: "https://drive.google.com/uc?export=download&id=1q0LKPfisKHHBXduTDgPGhuK07KeYrr5k"
            },
            {
                name: "DS-ENDTERM-2022",
                view: "https://drive.google.com/file/d/1jVo3xoHBI9P-XtFkxnH9BS78okVJxkSD/preview",
                download: "https://drive.google.com/uc?export=download&id=1jVo3xoHBI9P-XtFkxnH9BS78okVJxkSD"
            },


        ],
        books: [],
        syllabus: [
            {
                name: "DS-Syllabus",
                view: "https://drive.google.com/file/d/18QES5xoswxyizbxdxLZ0RVUUtJ-qEqyZ/preview",
                download: "https://drive.google.com/uc?export=download&id=18QES5xoswxyizbxdxLZ0RVUUtJ-qEqyZ"
            }
        ]
    },

    "discrete-mathematics": {
        notes: [],
        pyq: [

            {
                name: "DM-ENDTERM-2025",
                view: "https://drive.google.com/file/d/1w0mIS8Y0pmW-XZtC6jBgtEvQF_lG0Zd_/preview",
                download: "https://drive.google.com/uc?export=download&id=1w0mIS8Y0pmW-XZtC6jBgtEvQF_lG0Zd_"
            },
            {
                name: "DM-ENDTERM-2024",
                view: "https://drive.google.com/file/d/17HzomNLdM6E3KSRMIeS6zKoJSQExqxrQ/preview",
                download: "https://drive.google.com/uc?export=download&id=17HzomNLdM6E3KSRMIeS6zKoJSQExqxrQ"
            },
            {
                name: "DM-MIDTERM-2024",
                view: "https://drive.google.com/file/d/1iwA0e7r8YOTw2Uv7pycofVZQK9-I74sl/preview",
                download: "https://drive.google.com/uc?export=download&id=1iwA0e7r8YOTw2Uv7pycofVZQK9-I74sl"
            },
            {
                name: "DM-MIDTERM-2025",
                view: "https://drive.google.com/file/d/10GZQKaIcuiujQx3gBoSgO0W5jAKVv7J1/preview",
                download: "https://drive.google.com/uc?export=download&id=10GZQKaIcuiujQx3gBoSgO0W5jAKVv7J1"
            },
            {
                name: "DM-MINITEST-2024",
                view: "https://drive.google.com/file/d/1meEW0JydOotsr6s1fWgO67BPpmPvqpMs/preview",
                download: "https://drive.google.com/uc?export=download&id=1meEW0JydOotsr6s1fWgO67BPpmPvqpMs"
            },
            {
                name: "DM-MINITEST",
                view: "https://drive.google.com/file/d/1R3E7u0D5DWZpBdKXSTxPcKho88SxhDs8/preview",
                download: "https://drive.google.com/uc?export=download&id=1R3E7u0D5DWZpBdKXSTxPcKho88SxhDs8"
            },
            {
                name: "DM-MIDTERM-2022",
                view: "https://drive.google.com/file/d/1ywpELfM8mi1pDBVSXnfriZgWjvqCmldA/preview",
                download: "https://drive.google.com/uc?export=download&id=1ywpELfM8mi1pDBVSXnfriZgWjvqCmldA"
            },
            {
                name: "DM-ENDTERM-2022",
                view: "https://drive.google.com/file/d/1P402QkTRhWb8KhKvZqTsnLxlRVK8Wj6a/preview",
                download: "https://drive.google.com/uc?export=download&id=1P402QkTRhWb8KhKvZqTsnLxlRVK8Wj6a"
            },






        ],
        books: [],
        syllabus: [
            {
                name: "DM-Syllabus",
                view: "https://drive.google.com/file/d/1U26zHRzd3Hp2PlU_rj02pS5xAig3F6mB/preview",
                download: "https://drive.google.com/uc?export=download&id=1U26zHRzd3Hp2PlU_rj02pS5xAig3F6mB"
            }
        ]
    },

    "database-management-system": {
        notes: [],
        pyq: [

            {
                name: "DBMS-ENDTERM-2024",
                view: "https://drive.google.com/file/d/1fLm1k-U6P3Xypll4BJZpSHoJC99YDZ5L/preview",
                download: "https://drive.google.com/uc?export=download&id=1fLm1k-U6P3Xypll4BJZpSHoJC99YDZ5L"
            },
            {
                name: "DBMS-ENDTERM-2025",
                view: "https://drive.google.com/file/d/1aBdoIJ_VDZaj1BewqZs_783sh-9fmSU3/preview",
                download: "https://drive.google.com/uc?export=download&id=1aBdoIJ_VDZaj1BewqZs_783sh-9fmSU3"
            },
            {
                name: "DBMS-ENDTERMLAB-2025",
                view: "https://drive.google.com/file/d/1eHRNelFC8hfdM_xkGBA4DEUP6Ae_XSHd/preview",
                download: "https://drive.google.com/uc?export=download&id=1eHRNelFC8hfdM_xkGBA4DEUP6Ae_XSHd"
            },
            {
                name: "DBMS-MIDTERM-2024",
                view: "https://drive.google.com/file/d/1xT0ZU-wIBED1Nke1vGaLFwViaIdBfbsS/preview",
                download: "https://drive.google.com/uc?export=download&id=1xT0ZU-wIBED1Nke1vGaLFwViaIdBfbsS"
            },

            {
                name: "DBMS-MINITEST-2022",
                view: "https://drive.google.com/file/d/19FwCiEpEbmdo5cYZ1ONxeaghsM76zxph/preview",
                download: "https://drive.google.com/uc?export=download&id=19FwCiEpEbmdo5cYZ1ONxeaghsM76zxph"
            },
            {
                name: "DBMS-MIDTERM-2022",
                view: "https://drive.google.com/file/d/1oVgO6r_VZuDR-4amTZD6UzsV0_wjdkgH/preview",
                download: "https://drive.google.com/uc?export=download&id=1oVgO6r_VZuDR-4amTZD6UzsV0_wjdkgH"
            },
            {
                name: "DBMS-ENDTERM-2022",
                view: "https://drive.google.com/file/d/15o5nIhgK3KpD_K37F6N5QYKhbMn2hWEB/preview",
                download: "https://drive.google.com/uc?export=download&id=15o5nIhgK3KpD_K37F6N5QYKhbMn2hWEB"
            },



        ],
        books: [],
        syllabus: [
            {
                name: "DBMS-Syllabus",
                view: "https://drive.google.com/file/d/10kIjlM8XcbIJ24S2c7t0-5jhp01Hlp4y/preview",
                download: "https://drive.google.com/uc?export=download&id=10kIjlM8XcbIJ24S2c7t0-5jhp01Hlp4y"
            }
        ]
    },

    "digital-circuit-design": {
        notes: [],
        pyq: [
            {
                name: "DCD-MIDTERM-2024",
                view: "https://drive.google.com/file/d/1F4BAz4jUN6v1Xsq1Y_HX6ZxMxx15sb0f/preview",
                download: "https://drive.google.com/uc?export=download&id=1F4BAz4jUN6v1Xsq1Y_HX6ZxMxx15sb0f"
            },
            {
                name: "DCD-ENDTERM-2024",
                view: "https://drive.google.com/file/d/1cjg-oYeBU2azTA1PeE79Yzw4UwNGxS1E/preview",
                download: "https://drive.google.com/uc?export=download&id=1cjg-oYeBU2azTA1PeE79Yzw4UwNGxS1E"
            },
            {
                name: "DCD-ENDTERM-2025",
                view: "https://drive.google.com/file/d/1vJHS5Mjg3E-UaGRqRN4qfyybvLTlvlKI/preview",
                download: "https://drive.google.com/uc?export=download&id=1vJHS5Mjg3E-UaGRqRN4qfyybvLTlvlKI"
            },
            {
                name: "DCD-MIDTERM-2022",
                view: "https://drive.google.com/file/d/15kVsT3rGh4HAbK17R_gUw9_aMswKrwtN/preview",
                download: "https://drive.google.com/uc?export=download&id=15kVsT3rGh4HAbK17R_gUw9_aMswKrwtN"
            },
            {
                name: "DCD-ENDTERM-2022",
                view: "https://drive.google.com/file/d/1FeiVNEGbid24ajogvi0VPTqS4yETLlku/preview",
                download: "https://drive.google.com/uc?export=download&id=1FeiVNEGbid24ajogvi0VPTqS4yETLlku"
            },


        ],
        books: [],
        syllabus: [
            {
                name: "DCD-Syllabus",
                view: "https://drive.google.com/file/d/1oLt-_C3BP7WUZZJQkX_pSzoyvLtZgYRE/preview",
                download: "https://drive.google.com/uc?export=download&id=1oLt-_C3BP7WUZZJQkX_pSzoyvLtZgYRE"
            }
        ]
    },

    "principles-of-programming-language": {
        notes: [],
        pyq: [
            {
                name: "PPL-ENDTERM-2025",
                view: "https://drive.google.com/file/d/1UxSgqN_HjSdYiYJB6gZq7y2IUtm-Ma6_/preview",
                download: "https://drive.google.com/uc?export=download&id=1UxSgqN_HjSdYiYJB6gZq7y2IUtm-Ma6_"
            },
            {
                name: "PPL-MIDTERMLAB-2025",
                view: "https://drive.google.com/file/d/1SJBqvST7DXCIpX-i19aLjQMx6MYkVgJ4/preview",
                download: "https://drive.google.com/uc?export=download&id=1SJBqvST7DXCIpX-i19aLjQMx6MYkVgJ4"
            },
            {
                name: "PPL-MIDTERM-2024",
                view: "https://drive.google.com/file/d/1T2-E_A8CDUNlarTq_IqgrhJ_ZNlCv3Dt/preview",
                download: "https://drive.google.com/uc?export=download&id=1T2-E_A8CDUNlarTq_IqgrhJ_ZNlCv3Dt"
            },
            {
                name: "PPL-MIDTERM-2025",
                view: "https://drive.google.com/file/d/11TApYxPDX4RWl_77G_iMChknJJhpEH4E/preview",
                download: "https://drive.google.com/uc?export=download&id=11TApYxPDX4RWl_77G_iMChknJJhpEH4E"
            },
            {
                name: "PPL-MIDTERM-2022",
                view: "https://drive.google.com/file/d/1GkB1jymWj1yakH4BOMqMdnyau2kjgqcb/preview",
                download: "https://drive.google.com/uc?export=download&id=1GkB1jymWj1yakH4BOMqMdnyau2kjgqcb"
            },
            {
                name: "PPL-ENDTERM-2022",
                view: "https://drive.google.com/file/d/16JVdfqJhamT0ar8s1f9E-6CT5GHGjI0j/preview",
                download: "https://drive.google.com/uc?export=download&id=16JVdfqJhamT0ar8s1f9E-6CT5GHGjI0j"
            },



        ],
        books: [],
        syllabus: [
            {
                name: "PPL-SyllabuS",
                view: "https://drive.google.com/file/d/1aFwbROpsfNYITj0nUE-iq-9TvOvrcI9q/preview",
                download: "https://drive.google.com/uc?export=download&id=1aFwbROpsfNYITj0nUE-iq-9TvOvrcI9q"
            }
        ]
    },

    "fundamental-of-design-methods": {
        notes: [],
        pyq: [
            {
                name: "FOD-ENDTERM-2024",
                view: "https://drive.google.com/file/d/17arz7aNqcEnCPUixscNv9ggu3nV63YIn/preview",
                download: "https://drive.google.com/uc?export=download&id=17arz7aNqcEnCPUixscNv9ggu3nV63YIn"
            },
            {
                name: "FOD-MIDTERM-2024",
                view: "https://drive.google.com/file/d/1_k15Y8PotI6vQR66RBQwoz9Bhejkr0B5/preview",
                download: "https://drive.google.com/uc?export=download&id=1_k15Y8PotI6vQR66RBQwoz9Bhejkr0B5"
            },
            {
                name: "FOD-ENDTERM-2025",
                view: "https://drive.google.com/file/d/1BXiJb7NuWHfOnD6QT7_fLn4xNbqXj-1W/preview",
                download: "https://drive.google.com/uc?export=download&id=1BXiJb7NuWHfOnD6QT7_fLn4xNbqXj-1W"
            },
            {
                name: "FOD-MIDTERM-2022",
                view: "https://drive.google.com/file/d/1M0ZYVo-7jN6roKYFelk3bv1dzP-CRrTr/preview",
                download: "https://drive.google.com/uc?export=download&id=1M0ZYVo-7jN6roKYFelk3bv1dzP-CRrTr"
            },
            {
                name: "FOD-ENDTERM-2022",
                view: "https://drive.google.com/file/d/1625zhWm0u5FgVtVVvrZRMPB2GqVLJdHm/preview",
                download: "https://drive.google.com/uc?export=download&id=1625zhWm0u5FgVtVVvrZRMPB2GqVLJdHm"
            },


        ],
        books: [],
        syllabus: [
            {
                name: "FOD-Syllabus",
                view: "https://drive.google.com/file/d/1hII2WxWAamAeYuW16iH_hXLQ6GqUvTKN/preview",
                download: "https://drive.google.com/uc?export=download&id=1hII2WxWAamAeYuW16iH_hXLQ6GqUvTKN"
            }
        ]
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
         <h3>${sub.replaceAll("-", " ").toUpperCase()}</h3>
        </div>
      `;
        });
    }

    grid.innerHTML = html;
}

/* ---- Categories (Notes / PYQ / Books / Syllabus) ---- */
function showCategories(subject) {
    currentSubject = subject;
    title.innerText = subject.replaceAll("-", " ").toUpperCase();



    let html = `
    <div class="back-card" onclick="showSubjects(currentDept, currentSem)"
         style="grid-column:1/-1;">
      ← Back to Subjects
    </div>
  `;

    ["notes", "pyq", "books", "syllabus"].forEach(type => {
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
    title.innerText =
        `${currentSubject.replaceAll("-", " ").toUpperCase()} - ${type.toUpperCase()}`;

    let html = `
    <div class="back-card" onclick="showCategories(currentSubject)"
         style="grid-column:1/-1;">
      ← Back to Categories
    </div>
    `;

    const files = resources[currentSubject]?.[type] || [];

    // ✅ Empty state
    if (files.length === 0) {
        html += `
        <div class="card" style="grid-column:1/-1; text-align:center;">
          <h3 style="font-size:1.2rem;">😕 No resources available yet</h3>
        </div>
        `;
        grid.innerHTML = html;
        return;
    }

    // ✅ File list render
    files.forEach(file => {
        html += `
        <div class="card">
          <i class="fa-solid fa-file-pdf"></i>
          <h3>${file.name}</h3>
          <button onclick='openModal(${JSON.stringify(file)})'>View</button>
        </div>
        `;
    });

    grid.innerHTML = html;
}

/* ================== MODAL ================== */
function openModal(file) {
    document.getElementById("modalTitle").innerText = file.name;

    const viewBtn = document.getElementById("viewBtn");
    const downloadBtn = document.getElementById("downloadBtn");

    viewBtn.href = file.view;
    viewBtn.target = "_blank";

    downloadBtn.href = file.download;
    downloadBtn.style.display = "block";

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
