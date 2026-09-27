import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
    const { cid } = await params;
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" />
        <br />
        <br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" defaultValue={100} />
              </td>
            </tr>
            {/* Complete on your own — see checklist below */}
            <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
            <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECTS">PROJECTS</option>
            </select>
            </td>
            </tr>

            <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
            <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
            </select>
            </td>
            </tr>

            <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
            <select id="wd-submission-type">
                <option value="Online">Online</option>
            </select>
            <br></br>
            <h5>Online Entry Options</h5>
            <input type="checkbox" name="wd-online-entry" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" name="wd-online-entry" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input type="checkbox" name="wd-online-entry" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input type="checkbox" name="wd-online-entry" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" name="wd-online-entry" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
            </tr>

            {/* Assign to :
            Assign section — Assign to (wd-assign-to), Due (wd-due-date), Available from (wd-available-from), Until (wd-available-until)*/}
            <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
            <select id="wd-assign-to">
                <option value="Everyone">Everyone</option>
            </select>
            </td>
            </tr>

            <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
            <input
              type="date"
              defaultValue="2026-09-27"
              min="2026-01-01"
              max="2027-12-31"
              id="wd-due-date"
            />
            </td>
            </tr>
            
          </tbody>
        </table>
        <Link href={`/courses/${cid}/assignments`}>
          <button id="wd-cancel" type="button">
            Cancel
          </button>
        </Link>
        <Link href={`/courses/${cid}/assignments`}>
          <button id="wd-save" type="submit">
            Save
          </button>
        </Link>
      </div>
    );
  }