export const rows = [
  {
    id: "1",
    moduleName: "Child Wellbeing",
    author: "Saranya Loganathan",
    program: "Mind Matters",
    status: "Active",
    publishDate: "22 Nov 2025",
  },
  {
    id: "2",
    moduleName: "Anti Bullying Methods",
    author: "Saranya Loganathan",
    program: "Mind Matters Jr.",
    status: "Draft",
    publishDate: "19 Nov 2025",
  },
];
export const headers = [

  { key: "moduleName", header: "Module Name" },
  { key: "author", header: "Author" },
  { key: "program", header: "Program" },
  { key: "status", header: "Status" },
  { key: "publishDate", header: "Publish Date" },
  {key:"cell actions",header:""}
];

export const dropdownData = {
  "Mind Matter": {
    categories:{
    "Engineering":{
        tagGroups:{
            "1st Year":{},
            "2nd Year":{},
            "3rd Year":{},
            "4th Year":{},
            "5th Year":{},
            "Teaching Staff":{},
            "Non - teaching Staff":{},
            "More":{}
        }
    },
    "Arts and science":{
        tagGroups:{}
    },
    "Arts and science Women":{
        tagGroups:{}
    },
    "Polytechnic":{
        tagGroups:{}
    },
    "Maritime":{
        tagGroups:{}
    }
    },
    services:{
        "Group Discussionn":{},
        "Skill Developement":{},
        "WorkShop ":{},
        "Life Skill Training":{},
        "Awarness Campaign":{},
        "Program Follow-up":{},
        "Emergency & Crisis Management":{},
        "Creative Therapy":{},
        "Focus group":{}
    }
  },
  "Mind Matter Junior": {
    categories:{
        "CBSE School":{
           tagGroups:{}
        },
        "School(matric)":{
            tagGroups:{}
        },
        "School(Gov)":{
             tagGroups:{
                "1st Grade":{},
                "2nd Grade":{},
                "3rd Grade":{},
                "4th Grade":{},
                "Non - teaching Staff":{},
                "Staff Training":{}
            }

        }
    },
    services:{
        "Personality Counselling Session": {},
        "Skill Building Workshop": {},
        "Career & Academic Guidance": {},
        "Digital Wellbeing & Cyber Awareness": {},
        "Exam Readiness & Focus Coaching": {},
        "Community & Social Responsibility Program": {},
        "Creative Therapies": {},
        "Group Wellness Circles": {},
        "Focus Group": {}
    }
  },
  "Work Well": {
    categories:{
        "Work Well Corporate":{
            tagGroups:{
                "Professional Staff":{},
                "Support Staff":{}
            },
            services:{
                "Employee Wellness Evaluation": {},
                "Individual Session": {},
                "Group Wellness Session": {},
                "Skill Development": {},
                "Performance Coaching": {},
                "Employee Assistance Program": {},
                "Workshop": {},
                "Culture Activation Program": {},
                "Emergency and Crisis Management": {},
                "Lunch and Learn Session": {},
                "Leadership Coaching": {},
                "Leadership & Culture": {},
                "Workforce Wellbeing Insights": {}
            }
        },
        "work Well Seafarers":{
            tagGroups:{
                "Professional Staff":{},
                "Support Staff":{}
            },
            services:{
                  "Psychological Balance & Regulation Care": {},
                    "Crew Alignment Program": {},
                    "Early Detection Program": {},
                    "Crisis Containment Program": {},
                    "Safety - Critical Mental Fitness": {},
                    "Long - Voyage Sustainability": {},
                    "Leadership Stability at Sea": {},
                    "Cultural Harmony & Team Dynamics": {},
                    "Family Wellness Continuity": {},
                    "Digital & Discreet Access Support": {},
                    "Training Skill Building & Awareness": {},
                    "Wellbeing Analytics & Admin": {}
            }
        },
        "More":{}
    }
  },
  "Soul Sister": {
    categories: {},
  services: {}
  },
  "Safe Home": {
    categories: {},
  services: {}
  },
  Custom: {
    categories: {},
  services: {}
  }
};