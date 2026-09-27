export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Name and ID</h5>
      <label htmlFor="wd-profile-first-name">First name:</label>
      <input id="wd-profile-first-name" placeholder="First name" defaultValue="Jin-seo" />
      <br />
      <label htmlFor="wd-profile-last-name">Last name:</label>
      <input id="wd-profile-last-name" placeholder="Last name" defaultValue="Kim" />
      <br />
      <label htmlFor="wd-profile-student-id">Student ID:</label>
      <input
        id="wd-profile-student-id"
        type="password"
        placeholder="Student ID"
        defaultValue="002316489"
      />
      <br />

      <h5>About me</h5>
      <label htmlFor="wd-profile-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-profile-bio"
        cols={50}
        rows={4}
        defaultValue="I am Jin-seo Kim, a 3rd year PhD student who wants to learn how to build full-stack web applications."
      />
      <br />

      <h5>Class standing</h5>
      <input type="radio" name="wd-profile-standing" id="wd-profile-freshman" />
      <label htmlFor="wd-profile-freshman">Freshman</label>
      <br />
      <input type="radio" name="wd-profile-standing" id="wd-profile-sophomore" />
      <label htmlFor="wd-profile-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="wd-profile-standing" id="wd-profile-junior" />
      <label htmlFor="wd-profile-junior">Junior</label>
      <br />
      <input type="radio" name="wd-profile-standing" id="wd-profile-senior" />
      <label htmlFor="wd-profile-senior">Senior</label>
      <br />
      <input type="radio" name="wd-profile-standing" id="wd-profile-graduate" defaultChecked />
      <label htmlFor="wd-profile-graduate">Graduate</label>
      <br />

      <h5>Enrollment status</h5>
      <input type="radio" name="wd-profile-enrollment" id="wd-profile-full-time" defaultChecked />
      <label htmlFor="wd-profile-full-time">Full-time</label>
      <br />
      <input type="radio" name="wd-profile-enrollment" id="wd-profile-part-time" />
      <label htmlFor="wd-profile-part-time">Part-time</label>
      <br />
      <input type="radio" name="wd-profile-enrollment" id="wd-profile-auditing" />
      <label htmlFor="wd-profile-part-time">Auditing</label>
      <br />

      <h5>Interests</h5>
      <input type="checkbox" id="wd-profile-interest-react"/>
      <label htmlFor="wd-profile-interest-react">React</label>
      <br />
      <input type="checkbox" id="wd-profile-interest-typescript"/>
      <label htmlFor="wd-profile-interest-typescript">TypeScript</label>
      <br />
      <input type="checkbox" id="wd-profile-interest-databases" />
      <label htmlFor="wd-profile-interest-databases">Databases</label>
      <br />
      <input type="checkbox" id="wd-profile-interest-ux" defaultChecked/>
      <label htmlFor="wd-profile-interest-ux">UX design</label>
      <br />
      <input type="checkbox" id="wd-profile-interest-hci" defaultChecked/>
      <label htmlFor="wd-profile-interest-ux">Human-Computer Interaction</label>
      <br />

      <h5>Major</h5>
      <label htmlFor="wd-profile-major">Major:</label>
      <select id="wd-profile-major" defaultValue="PHI">
      <option value="PHI">Personal Health Informatics</option>
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="CE">Computer Engineering</option>
        <option value="IS">Information Systems</option>
      </select>
      <br />

      <h5>Topics to deepen this term</h5>
      <label htmlFor="wd-profile-topics">Topics:</label>
      <br />
      <select id="wd-profile-topics" multiple defaultValue={["JS", "NODE"]}>
        <option value="HTML">HTML and CSS</option>
        <option value="JS">JavaScript</option>
        <option value="REACT">React</option>
        <option value="NODE">Node.js</option>
        <option value="MONGO">MongoDB</option>
      </select>
      <br />

      <h5>Contact and dates</h5>
      <label htmlFor="wd-profile-email">School email:</label>
      <input
        id="wd-profile-email"
        type="email"
        placeholder="kim.jinseo@northeastern.edu"
        defaultValue="kim.jinseo@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-profile-grad-year">Expected graduation year:</label>
      <input
        id="wd-profile-grad-year"
        type="number"
        min="2026"
        max="2032"
        defaultValue="2029"
      />
      <br />
      <label htmlFor="wd-profile-start-date">Program start date:</label>
      <input id="wd-profile-start-date" type="date" defaultValue="2024-09-04" />
      <br />
      <label htmlFor="wd-profile-excitement">How excited I am about this course (0–10):</label>
      <input
        id="wd-profile-excitement"
        type="range"
        min="0"
        max="10"
        defaultValue="10"
      />
      <br />

      <button id="wd-profile-save" type="submit">
        Save
      </button>
      <button id="wd-profile-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
