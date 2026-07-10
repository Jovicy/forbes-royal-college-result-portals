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
  placementRemark: string; // NEW
}

export const CURRENT_TERM = "Forbes Entrance Exams 2026";
export const TOTAL_STUDENTS = 31;
export const GRADING_SCALE = [
  { grade: "A", min: 80, max: 100, remark: "Higher Distinction / Excellent" },
  { grade: "B", min: 60, max: 79, remark: "Lower Distinction / Very Good" },
  { grade: "C", min: 40, max: 59, remark: "Credit" },
  { grade: "D", min: 0, max: 39, remark: "Pass" },
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
      "Bilal exhibited a brilliant performance in Creative Writing, Comprehension and Social Studies. He requires further efforts to attain ideal standards in Mathematics, Grammar and Science. ",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support him as he strives to excel.",
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
      "Hibbatullah expresses thoughts with remarkable coherence and creativity in her writing.  Her performance in all subjects is generally commendable, with notable room for improvement in Mathematics.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support her as she strives to excel.",
  },
  {
    id: "FRC-26-52",
    name: "Khadeeja Bashir",
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
      "Khadija recorded tremendous success in her attempts across all aspects of English Language and Social Studies. Significant shortfalls were however observed in Mathematics, requiring targeted interventions to rectify.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support her in achieving her full potential.",
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
      "Salima demonstrated impressive fluency in Creative Writing and Comprehension. She also did appreciably well in other subjects assessed, although extensive support is needed to groom her mathematics skills to optimal standards.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support her as she strives to excel.",
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
      "Bello portrayed exceptional skills in core English concepts and mathematics. His performance in other subjects evaluated is also laudable.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support him as he strives to excel.",
  },
  {
    id: "FRC-26-76",
    name: "Mubashsir Abdulrahman",
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
      "Mubashir’s performance in language skills, science and social studies is exemplary. With more effort, he will attain optimal levels in Mathematics and Creative Writing as well.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support him as he strives to excel.",
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
      "Musa portrayed profound levels of fluency in Grammar and Comprehension. He also did appreciably well in Social Studies and Creative Writing. Targeted interventions are however required to revamp his skills in Mathematics and Science.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support him as he strives to excel.",
  },
  {
    id: "FRC-26-36",
    name: "Yasmin Tanimu",
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
      "Yasmin displayed an impressive ability to analyze written text and did appreciably well in Grammar. However, her performance in other subjects assessed falls significantly short of ideal standards",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support her as she strives to excel.",
  },
  {
    id: "FRC-26-50",
    name: "Zaynab Sanusi Bala",
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
      "Zainab’s performance in English Language is exemplary. However, personalized intervention is needed to favourably accelerate her growth in Mathematics and Science.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support her as she strives to excel.",
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
      "Sakina did impressively well in the core areas of language skills evaluated. Her performance in Social Studies is also commendable, while more effort is required to achieve excellence in Mathematics and Science.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support her in achieving her full potential.",
  },
  {
    id: "FRC-26-55",
    name: "Fatima Abdulrasheed Tafida",
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
      "Fatima achieved significant success in her attempts in language skills. While she shows good potential, extensive support is required to enable her achieve excellence across Mathematics, Science and Social Studies.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support her as she strives to excel.",
  },
  {
    id: "FRC-26-69",
    name: "Fatima Mohammed Abdulakarim",
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
      "Fatima’s showed commendable skill in Grammar and Comprehension. However, her performance across all other subjects evaluated reveal significant skill gaps, requiring extensive support to bridge. ",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended, but it is conditional upon a review of her performance.",
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
      "Fatima demonstrated exceptional skill in Comprehension and Grammar. However, she will require personalized intervention in Mathematics and Science to neutralize challenges observed. ",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended, but it is conditional upon a review of her performance.",
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
      "Kamil recorded impressive success in comprehension, creative writing and grammar. With more committed efforts, shortfalls noted in Mathematics and Science will be effectively neutralized.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support him as he strives to excel.",
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
      "Jamila demonstrates  strong literacy skills, excelling notably in Grammar and Comprehension. Her performance in Mathematics and Science however requires further refinement to attain desired levels of fluency.",
    placementRemark:
      "Conclusively, exam results indicate that Jamila has not yet mastered the essential curriculum standards. To establish a stronger academic foundation and prevent future learning gaps, placement in Grade 6 is highly recommended for the upcoming school year.",
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
      "Ahmad’s performance portrays profound comprehension and grammar skills. He also  demonstrates good potential in Mathematics, Science and Creative Writing with room for improvement.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support him as he strives to excel.",
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
      "Abdallah demonstrated a stellar performance in Comprehension and Grammar. The outcome of his assessment in other subjects is also good, with significant room for improvement in Social Studies. ",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support him as he strives to excel.",
  },
  {
    id: "FRC-26-80",
    name: "Fadila Aliyu Abba",
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
      "Fadila demonstrated commendable ability in Grammar and Comprehension. She also showed good potentials across all other subjects assessed.  ",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended, but it is conditional upon a review of her performance",
  },
  {
    id: "FRC-26-61",
    name: "Jason Yadlaku'ul Yabilsu",
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
      "Jason's performance reflects remarkable competency across all the subjects assessed. His creative thinking and general cognitive ability is impressive.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support him in achieving his full potential.",
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
      "Ahmad portrayed commendable skill in Comprehension and performed reasonably well in Grammar. Significant shortfalls were however noted in Creative Writing, Science and Social Studies. With personalized support, he will attain excellence.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended, but it is conditional upon a review of his performance.",
  },
  {
    id: "FRC-26-38",
    name: "Fadeel Abdulmalik Duruguwa",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "C" },
      { name: "Social Studies", grade: "C" },
    ],
    overallGrade: "B",
    overallRemark:
      "Fadeel achieved a distinctive performance in Grammar, Comprehension and Social Studies. However, targeted intervention is required to  build confidence in Mathematics.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support him as he strives to excel.",
  },
  {
    id: "FRC-26-78",
    name: "Saeed Abdulmalik Duruguwa",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "A" },
      { name: "Creative Writing", grade: "B" },
      { name: "Comprehension", grade: "B" },
      { name: "Mathematics", grade: "C" },
      { name: "Science", grade: "B" },
      { name: "Social Studies", grade: "B" },
    ],
    overallGrade: "B",
    overallRemark:
      "Saeed’s performance shows a consistent trend of excellence in most subjects assessed. While his achievement in Mathematics is good, he is encouraged to strive for more impressive outcomes.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support him as he strives to excel.",
  },
  {
    id: "FRC-26-28",
    name: "Fatima Batula Ibrahim",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "C" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "C" },
      { name: "Science", grade: "C" },
      { name: "Social Studies", grade: "A" },
    ],
    overallGrade: "B",
    overallRemark:
      "Fatima portrayed outstanding fluency in grammar, comprehension and social studies. With further commitment, she shows a potential to attain excellence in Mathematics and Creative Writing too.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support her as she strives to excel.",
  },
  {
    id: "FRC-26-59",
    name: "Hajara Abdulazeez Kazir",
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
      "Hajara’s competence in language skills is truly exceptional. We encourage her to diligently nurture her potential in Mathematics and Science to attain further excellence.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support her in achieving her full potential.",
  },
  {
    id: "FRC-26-95",
    name: "Treasure Silaemka Bazo",
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
      "Treasure demonstrated commendable ability in most aspects of language skills, science and social studies, with notable room for improvement in creative writing and mathematics. ",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support her as she strives to excel.",
  },
  {
    id: "FRC-26-67",
    name: "Maryam Muhammad Shehu",
    class: "Grade 7",
    term: "Forbes Entrance Exams 2026",
    subjects: [
      { name: "Grammar", grade: "B" },
      { name: "Creative Writing", grade: "B" },
      { name: "Comprehension", grade: "A" },
      { name: "Mathematics", grade: "D" },
      { name: "Science", grade: "D" },
      { name: "Social Studies", grade: "C" },
    ],
    overallGrade: "C",
    overallRemark:
      "Maryam’s abilities across all aspects of language skills is quite remarkable. However, she requires targeted intervention to  attain desired levels of fluency in Mathematics and Science.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support her in achieving her full potential.",
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
      "Abdallah is commended for his effort to attempt questions across all subjects assessed. Our findings reveal that he requires comprehensive academic intervention to address widespread gaps and build foundational literacy and numeracy skills.",
    placementRemark:
      "Conclusively, exam results indicate that Abdallah has not yet mastered the essential curriculum standards. To establish a stronger academic foundation and prevent future learning gaps, placement in Grade 6 is highly recommended for the upcoming school year.",
  },
  {
    id: "FRC-26-73",
    name: "Muhammad Yunusa",
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
      "Ashraf is commended for his effort to attempt questions across all subjects assessed. Nonetheless, he requires personalized academic support, particularly in math, science, and comprehension, to rectify foundational learning gaps and favourably accelerate his growth",
    placementRemark:
      "Conclusively, to establish a stronger academic foundation and prevent future learning gaps, placement in Grade 6 is highly recommended.",
  },
  {
    id: "FRC-26-43",
    name: "Stephen Abana Musa",
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
      "Stephen’s attempt in Creative Writing and Comprehension was quite good. The outcome of his assessment in Grammar, Math and Social Studies reflect extensive shortfalls, requiring significant support to neutralize.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended, but it is conditional upon a review of his performance.",
  },
  {
    id: "FRC-26-18",
    name: "Alameen Usman",
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
      "Alameen portrayed impressive competency in Comprehension and Creative Writing. However, significant effort is required to revamp his skills in Mathematics  and Science to optimal standards. ",
    placementRemark:
      "Conclusively, a provisional placement in Grade 7 is recommended while we continue to support him as he strives to excel.",
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
      "Abubakar’s conversance with Comprehension is quite good. He also demonstrated remarkable ability in Math, Science and Social Studies. His Grammar skills however require extensive refinement.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 8 is recommended, but it is conditional upon a review of his performance.",
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
      "Fatima excelled tremendously in Creative Writing and Comprehension, but struggled to meet standard benchmarks across other disciplines evaluated.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 9 is recommended, but it is conditional upon a review of her performance.",
  },
  {
    id: "FRC-26-40",
    name: "Abdulkareem Murtala",
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
      "Abdulkareem excels significantly in creative writing and civic education. With more committed efforts, he will attain significant improvements in Mathematics and Science.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 10 is recommended while we continue to support him as he strives to excel.",
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
      "Hauwa demonstrated impressive skills in Grammar, Creative Writing, Science and Civic Studies. While she shows good potential in Mathematics, significant effort is required to achieve more excellent outcomes.",
    placementRemark:
      "Conclusively, a provisional placement in Grade 10 is recommended while we continue to support her in achieving her full potential.",
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
      "Auwal did commendably well in Civic Studies and shows good potential in Creative Writing, Grammar and Science. However, he requires extensive support to neutralize challenges observed in Mathematics. ",
    placementRemark:
      "Conclusively, a provisional placement in Grade 10 is recommended, but it is conditional upon a review of his performance.",
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
