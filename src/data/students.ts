export interface SubjectResult {
  name: string;
  grade: string;
}

export interface StudentResult {
  id: string;
  name: string;
  class: string;
  term: string;
  subjects: SubjectResult[];
  overallGrade: string;
  overallRemark: string;
}

export const CURRENT_TERM = "Forbes Entrance Exams 2026";
export const TOTAL_STUDENTS = 31;
export const GRADING_SCALE = [
  { grade: "A", min: 80, max: 100, remark: "Excellent" },
  { grade: "B", min: 70, max: 79, remark: "Very Good" },
  { grade: "C", min: 60, max: 69, remark: "Good" },
  { grade: "D", min: 50, max: 59, remark: "Fair" },
  { grade: "F", min: 0, max: 49, remark: "Fail" },
];

export const STUDENTS: StudentResult[] = [
  {
    id: "FRC-26-68",
    name: "Bilal Fa'iz Ho",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "C" },
      { name: "Creative Writing", grade: "B" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "C" },
      { name: "Science", grade: "C" },
      { name: "Social Studies", grade: "B" },
    ],
    overallGrade: "B",
    overallRemark:
      "A fair performance. Bilal is encouraged to consolidate skills before the term begins.",
  },
  {
    id: "FRC-26-20",
    name: "Hibbatullah Abdulkadri",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "A" },
      { name: "Creative Writing", grade: "B" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "C" },
      { name: "Science", grade: "A" },
      { name: "Social Studies", grade: "B" },
    ],
    overallGrade: "B",
    overallRemark:
      "A pleasing performance overall. Hibbatullah is well placed to thrive with continued effort.",
  },
  {
    id: "FRC-26-52",
    name: "Khadeeja Basheer",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "C" },
      { name: "Social Studies", grade: "B" },
    ],
    overallGrade: "C",
    overallRemark:
      "A fair performance. Khadija is encouraged to consolidate skills before the term begins.",
  },
  {
    id: "FRC-26-11",
    name: "Salima Shahid Hassan",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "A" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "C" },
      { name: "Social Studies", grade: "C" },
    ],
    overallGrade: "C",
    overallRemark:
      "A pleasing performance overall. Salima is well placed to thrive with continued effort.",
  },
  {
    id: "FRC-26-82",
    name: "Bello Bello Muhammad",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "A" },
      { name: "Creative Writing", grade: "B" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "A" },
      { name: "Science", grade: "B" },
      { name: "Social Studies", grade: "B" },
    ],
    overallGrade: "B",
    overallRemark:
      "A good, steady result. Bello shows promise, with room to strengthen certain areas.",
  },
  {
    id: "FRC-26-76",
    name: "Mubashir Abdulrahman Liman",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "C" },
      { name: "Science", grade: "B" },
      { name: "Social Studies", grade: "A" },
    ],
    overallGrade: "B",
    overallRemark:
      "A fair performance. Mubashshir is encouraged to consolidate skills before the term begins.",
  },
  {
    id: "FRC-26-25",
    name: "Musa Kalimullah Muhammad",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "C" },
    ],
    overallGrade: "C",
    overallRemark:
      "A pleasing performance overall. Musa is well placed to thrive with continued effort.",
  },
  {
    id: "FRC-26-36",
    name: "Yasmin T. Musa",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "C" },
      { name: "Creative Writing", grade: "D" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "D" },
    ],
    overallGrade: "D",
    overallRemark:
      "A very good result. Yasmin shows solid promise and a good foundation to build upon.",
  },
  {
    id: "FRC-26-50",
    name: "Zainab Sanusi Bala",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "C" },
    ],
    overallGrade: "C",
    overallRemark:
      "A highly commendable performance. Zaynab demonstrates consistent strength across subjects.",
  },
  {
    id: "FRC-26-42",
    name: "Sakina Ibrahim",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "B" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "C" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "A" },
    ],
    overallGrade: "C",
    overallRemark:
      "A good, steady result. Sakina shows promise, with room to strengthen certain areas.",
  },
  {
    id: "FRC-26-55",
    name: "Fatima A. Tafida",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "D" },
    ],
    overallGrade: "C",
    overallRemark:
      "An excellent result. Fatima shows strong readiness for the rigours of the College curriculum.",
  },
  {
    id: "FRC-26-57",
    name: "Fatima Muhammad Hussain",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "C" },
    ],
    overallGrade: "D",
    overallRemark:
      "A very good result. Fatima shows solid promise and a good foundation to build upon.",
  },
  {
    id: "FRC-26-77",
    name: "Kamil Shafi'u",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "A" },
      { name: "Creative Writing", grade: "A" },
      { name: "Comprehension", grade: "B" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "C" },
    ],
    overallGrade: "C",
    overallRemark:
      "A good, steady result. Kamil shows promise, with room to strengthen certain areas.",
  },
  {
    id: "FRC-26-29",
    name: "Jamila Lawal Mato",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "C" },
    ],
    overallGrade: "C",
    overallRemark:
      "A fair performance. Jamila is encouraged to consolidate skills before the term begins.",
  },
  {
    id: "FRC-26-69",
    name: "Fatima Muhammad Abdulkarim",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "D" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "D" },
    ],
    overallGrade: "D",
    overallRemark:
      "A very good result. Fatima shows solid promise and a good foundation to build upon.",
  },
  {
    id: "FRC-26-65",
    name: "Ahmad Ishaq Khalid",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "C" },
      { name: "Science", grade: "C" },
      { name: "Social Studies", grade: "B" },
    ],
    overallGrade: "B",
    overallRemark:
      "A good, steady result. Ahmad shows promise, with room to strengthen certain areas.",
  },
  {
    id: "FRC-26-72",
    name: "Abdallah Abdallah Bello",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "C" },
      { name: "Science", grade: "C" },
      { name: "Social Studies", grade: "D" },
    ],
    overallGrade: "B",
    overallRemark:
      "A pleasing performance overall. Abdallah is well placed to thrive with continued effort.",
  },
  {
    id: "FRC-26-80",
    name: "Fadila Ali Abba",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "C" },
      { name: "Science", grade: "C" },
      { name: "Social Studies", grade: "C" },
    ],
    overallGrade: "C",
    overallRemark:
      "A pleasing performance overall. Fadila is well placed to thrive with continued effort.",
  },
  {
    id: "FRC-26-61",
    name: "Jason Yablabu'ul Yabilsu",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "A" },
      { name: "Creative Writing", grade: "A" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "B" },
      { name: "Science", grade: "A" },
      { name: "Social Studies", grade: "A" },
    ],
    overallGrade: "A",
    overallRemark:
      "An excellent result. Jason shows strong readiness for the rigours of the College curriculum.",
  },
  {
    id: "FRC-26-66",
    name: "Ahmad Yusuf Magaji",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "C" },
      { name: "Creative Writing", grade: "D" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "D" },
    ],
    overallGrade: "C",
    overallRemark:
      "A pleasing performance overall. Ahmad is well placed to thrive with continued effort.",
  },
  {
    id: "FRC-26-59",
    name: "Hajara Abdulaziz Kazir",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "A" },
      { name: "Creative Writing", grade: "A" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "C" },
      { name: "Science", grade: "C" },
      { name: "Social Studies", grade: "B" },
    ],
    overallGrade: "C",
    overallRemark:
      "A good, steady result. Hajara shows promise, with room to strengthen certain areas.",
  },
  {
    id: "FRC-26-95",
    name: "Treasure S. Bazo",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "C" },
      { name: "Science", grade: "B" },
      { name: "Social Studies", grade: "B" },
    ],
    overallGrade: "B",
    overallRemark:
      "A good, steady result. Treasure shows promise, with room to strengthen certain areas.",
  },
  {
    id: "FRC-26-89",
    name: "Abdallah Kabir Barau",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "D" },
      { name: "Creative Writing", grade: "D" },
      { name: "Comprehension", grade: "D" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "D" },
    ],
    overallGrade: "D",
    overallRemark:
      "A good, steady result. Abdallah shows promise, with room to strengthen certain areas.",
  },
  {
    id: "FRC-26-73",
    name: "Muhammad Ashraf Yunusa",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "D" },
      { name: "Creative Writing", grade: "D" },
      { name: "Comprehension", grade: "D" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "D" },
    ],
    overallGrade: "D",
    overallRemark:
      "A pass mark overall. Muhammad should focus on strengthening foundational skills ahead of admission.",
  },
  {
    id: "FRC-26-43",
    name: "Stephen A. Musa",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "D" },
      { name: "Creative Writing", grade: "B" },
      { name: "Comprehension", grade: "C" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "C" },
      { name: "Social Studies", grade: "D" },
    ],
    overallGrade: "D",
    overallRemark:
      "A very good result. Stephen shows solid promise and a good foundation to build upon.",
  },
  {
    id: "FRC-26-18",
    name: "Al-Amin Usman Maigari",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "C" },
      { name: "Creative Writing", grade: "A" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "C" },
    ],
    overallGrade: "C",
    overallRemark:
      "A pleasing performance overall. Alameen is well placed to thrive with continued effort.",
  },
  {
    id: "FRC-26-47",
    name: "Abubakar Jafar Abubakar",
    class: "Grade 8",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "D" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "B" },
      { name: "Mathematics", grade: "B" },
      { name: "Science", grade: "B" },
      { name: "Social Studies", grade: "B" },
    ],
    overallGrade: "D",
    overallRemark:
      "A fair performance. Abubakar is encouraged to consolidate skills before the term begins.",
  },
  {
    id: "FRC-26-81",
    name: "Fatima Isa",
    class: "Grade 9",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "D" },
      { name: "Creative Writing", grade: "B" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "D" },
    ],
    overallGrade: "D",
    overallRemark:
      "A very good result. Fatima shows solid promise and a good foundation to build upon.",
  },
  {
    id: "FRC-26-40",
    name: "Abdulkarim Murtala",
    class: "Grade 10",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "C" },
      { name: "Creative Writing", grade: "B" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "C" },
      { name: "Social Studies", grade: "A" },
    ],
    overallGrade: "C",
    overallRemark:
      "A pleasing performance overall. Abdulkareem is well placed to thrive with continued effort.",
  },
  {
    id: "FRC-26-53",
    name: "Hauwa Khalid",
    class: "Grade 10",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "A" },
      { name: "Mathematics", grade: "C" },
      { name: "Science", grade: "B" },
      { name: "Social Studies", grade: "A" },
    ],
    overallGrade: "C",
    overallRemark:
      "A very good result. Hauwa shows solid promise and a good foundation to build upon.",
  },
  {
    id: "FRC-26-71",
    name: "Auwal Isa",
    class: "Grade 10",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "C" },
      { name: "Creative Writing", grade: "C" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "C" },
      { name: "Social Studies", grade: "B" },
    ],
    overallGrade: "C",
    overallRemark:
      "A good, steady result. Auwal shows promise, with room to strengthen certain areas.",
  },
];

export const searchStudent = async (
  id: string,
): Promise<StudentResult | null> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  const student = STUDENTS.find(
    (s) => s.id.toUpperCase() === id.toUpperCase().trim(),
  );
  return student || null;
};