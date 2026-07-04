export interface SubjectResult {
  name: string;
  score: number;
  grade: string;
}

export interface StudentResult {
  id: string;
  name: string;
  class: string;
  term: string;
  subjects: SubjectResult[];
  overallAverage: number;
  overallGrade: string;
  overallRemark: string;
}

export const CURRENT_TERM = "Michaelmas Term 2024";
export const TOTAL_STUDENTS = 5;

export const GRADING_SCALE = [
  { min: 90, max: 100, grade: "A+", remark: "Distinction" },
  { min: 80, max: 89, grade: "A", remark: "Excellent" },
  { min: 70, max: 79, grade: "B", remark: "Very Good" },
  { min: 60, max: 69, grade: "C", remark: "Good" },
  { min: 50, max: 59, grade: "D", remark: "Pass" },
  { min: 0, max: 49, grade: "F", remark: "Fail" },
];

export const getGradeInfo = (score: number) => {
  return GRADING_SCALE.find((g) => score >= g.min && score <= g.max) || GRADING_SCALE[5];
};

export const STUDENTS: StudentResult[] = [
  {
    id: "FRC-25-01",
    name: "Arthur Pendelton",
    class: "Year 11",
    term: "Michaelmas Term 2024",
    subjects: [
      { name: "Mathematics", score: 92, grade: "A+" },
      { name: "English Literature", score: 85, grade: "A" },
      { name: "Physics", score: 88, grade: "A" },
      { name: "Latin", score: 76, grade: "B" },
      { name: "History", score: 91, grade: "A+" },
      { name: "Chemistry", score: 84, grade: "A" }
    ],
    overallAverage: 86.0,
    overallGrade: "A",
    overallRemark: "An exemplary term. Arthur continues to uphold the finest traditions of the College."
  },
  {
    id: "FRC-25-02",
    name: "Beatrice Sterling",
    class: "Year 11",
    term: "Michaelmas Term 2024",
    subjects: [
      { name: "Mathematics", score: 78, grade: "B" },
      { name: "English Literature", score: 94, grade: "A+" },
      { name: "Physics", score: 72, grade: "B" },
      { name: "Latin", score: 88, grade: "A" },
      { name: "History", score: 85, grade: "A" },
      { name: "Chemistry", score: 68, grade: "C" }
    ],
    overallAverage: 80.8,
    overallGrade: "A",
    overallRemark: "A highly commendable effort, particularly in the humanities."
  },
  {
    id: "FRC-25-03",
    name: "Charles Kensington",
    class: "Year 10",
    term: "Michaelmas Term 2024",
    subjects: [
      { name: "Mathematics", score: 65, grade: "C" },
      { name: "English Literature", score: 70, grade: "B" },
      { name: "Biology", score: 82, grade: "A" },
      { name: "French", score: 58, grade: "D" },
      { name: "Geography", score: 75, grade: "B" },
      { name: "Art", score: 95, grade: "A+" }
    ],
    overallAverage: 74.1,
    overallGrade: "B",
    overallRemark: "Charles is finding his stride, though focus in languages must improve."
  },
  {
    id: "FRC-25-04",
    name: "Diana Montgomery",
    class: "Year 12",
    term: "Michaelmas Term 2024",
    subjects: [
      { name: "Further Mathematics", score: 98, grade: "A+" },
      { name: "Physics", score: 95, grade: "A+" },
      { name: "Chemistry", score: 92, grade: "A+" },
      { name: "Economics", score: 89, grade: "A" }
    ],
    overallAverage: 93.5,
    overallGrade: "A+",
    overallRemark: "An extraordinary academic showing. Diana is a credit to her house and the College."
  },
  {
    id: "FRC-25-05",
    name: "Edward Fairfax",
    class: "Year 9",
    term: "Michaelmas Term 2024",
    subjects: [
      { name: "Mathematics", score: 52, grade: "D" },
      { name: "English Literature", score: 64, grade: "C" },
      { name: "Physics", score: 45, grade: "F" },
      { name: "Latin", score: 55, grade: "D" },
      { name: "History", score: 60, grade: "C" },
      { name: "Chemistry", score: 50, grade: "D" }
    ],
    overallAverage: 54.3,
    overallGrade: "D",
    overallRemark: "A challenging term for Edward. We expect a renewed commitment to his studies."
  }
];

export const searchStudent = async (id: string): Promise<StudentResult | null> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  const student = STUDENTS.find(s => s.id.toUpperCase() === id.toUpperCase().trim());
  return student || null;
};
