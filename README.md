Web developer internship assessment report
Mobilicis India pvt ltd.

The project name is Sakura.
it's a job listing web application built for both employers(i.e, people who're hiring) and candidates(i.e, people who are looking for jobs) in japan.

The tech stack involved in this project is:
Next js
React js
Prisma
Mongo DB
Next-Auth
Tailwind CSS
Shadcn UI
Aceternity UI

The Workflow of the project:

Both the employers and candidates are first opted to sign in to the app. After signing in, they recieve their roles as well. If they aren't, they are forwarded to the choose page where they are opted to choose their role(i.e, employer or candidate). Following that, they're forwarded to the job listings page where the candidate can browse various jobs and the employer can post jobs or view applications. The employer can also delete the jobs he/she had posted. The job details include, job type(i.e, remote, onsite or hybrid), the job location(Japan only), the time the job was posted, the company, the job title and the job description. The candidate is able to search jobs via the title. 

The Mechanics:

The jobs, applications, user accounts and their details are stored in a mongo db database. Prisma ORM is utilised to query the database. Next js' latest feature, server actions is used to fetch data and update data in the backend, React js is used for the front end along with Aceternity UI and shadcn UI for a good looking design. Only the home page and the about japan page is public, rest of the pages require authentication for access, Next Auth is utilised there. The applications page is used to handle candidate applications where employers can approve or reject the applications. The updating and creating of jobs happen instantly which leaves no room for delays or lags making this application the fastest while also focusing on user experience. The app has been aesthetically designed while keeping in mind the japanese retro theme and dark night mode. It contains various scroll animations and transition effect wherever neccesary which makes this app prioritise better UI.

Conclusion:

Overall, this app is built in a well balanced way prioritising both the user experience and the functionality. Also, this app contains a free unauthorised page where visitors can read information on Japan, it's culture, regional locations, food and technology with colorful images and UI elements. With a robust system architecture and secure authentication system, this app maintains optimum speed as well as exceptional efficiency. It's deployed on the internet via Vercel.
