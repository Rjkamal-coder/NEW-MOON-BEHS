/* SUBJECTS and EXAMS. Each grade group has its own six subjects.
   Marks in students.js (half:[...] and final:[...]) must follow the order of that grade's subjects below. */
const SUBJECTS={
 g1_5:['Burmese','English','Mathematics','Science','Social Studies','Life Skills'],
 g6_9:['Burmese','English','Mathematics','Science','Geography','History'],
 g10_12:['Burmese','English','Mathematics','Chemistry','Physics','Biology']
};
const subs=g=>g<=5?SUBJECTS.g1_5:g<=9?SUBJECTS.g6_9:SUBJECTS.g10_12;
const ALLSUB=[...new Set(Object.values(SUBJECTS).flat())];
const EX={half:'Half Year Examination',final:'Final Examination'};
/* ACADEMIC YEARS shown in the Year selector on Leaderboard, Subject Rankings and Results.
   CURRENT_YEAR is selected automatically. When a new year starts, change CURRENT_YEAR (and add the next year to YEARS if needed). */
const YEARS=['23-24','25-26','26-27','27-28','28-29'];
const CURRENT_YEAR='26-27';
