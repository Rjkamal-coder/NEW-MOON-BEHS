NEW MOON school site - how to edit

Open index.html in a browser. Keep all folders together.

data/students.js      add students and their Half Year / Final marks (one student per line)
data/teachers.js      teachers and their photos
data/applications.js  admission applications list
data/lessons.js, worksheets.js, papers.js   PDF lists (files go in files/...)
data/practice.js, vocabulary.js              typed text by grade
data/activities.js    school activities (pictures in photos/activities/)
data/news.js          newsroom stories (pictures go in photos/news/)
data/subjects.js      subject names for each grade group, and exam names
data/config.js        application form address, Facebook link, encoded WhatsApp/email
photos/students/      student pictures
js/certificate.js     certificate wording and design
css/style.css         colours and layout
js/                   page code (normally no need to edit)

To add a result: copy one line in data/students.js, change id, roll, g, name, and the six marks in half:[...] and final:[...]
(order depends on grade - see data/subjects.js:
 Grades 1-5: Burmese, English, Mathematics, Science, Social Studies, Life Skills
 Grades 6-9: Burmese, English, Mathematics, Science, Geography, History
 Grades 10-12: Burmese, English, Mathematics, Chemistry, Physics, Biology). Ranks and grades are automatic.

ACADEMIC YEARS: Leaderboard, Subject Rankings and Results have a Year selector (23-24, 25-26, 26-27, 27-28, 28-29).
The current year (26-27) is selected automatically. Students without a y:'..' field belong to the current year.
EVERY YEAR:
1. Copy the student lines from data/students.js and paste them into data/past-results.js (inside the [ ]).
2. In data/students.js change y, g and roll for continuing students (keep the id); set half:[] and final:[].
   Remove students who left (their copy stays in past-results.js).
3. Change CURRENT_YEAR in data/subjects.js.
