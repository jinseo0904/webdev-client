import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  // Shared styling for Kambaz-style input boxes, which is reusable
  const input = "w-full rounded border border-gray-300 px-3 py-2"
  return (
    <div id="wd-assignments-editor" className="p-4">
      <label htmlFor="wd-name" className="mb-1 block">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" className={input} />
      <br />
      <br />
      <textarea id="wd-description" className={`${input} h-48`}>
        The assignment is available online. Submit a link to the landing page of your Web application running on Vercel.
      </textarea>
      <br />
      <table className="w-full border-separate  border-spacing-y-4">
        <tbody>
          <tr>
            <td align="right" valign="top" className="w-40 pt-2 pr-4 text-sm">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} className={input} />
            </td>
          </tr>
          {/* Complete on your own — see checklist below */}
          <tr>
            <td align="right" valign="top" className="w-40 pt-2 pr-4 text-sm">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" className={input}>
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECTS">PROJECTS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top" className="w-40 pt-2 pr-4 text-sm">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" className={input}>
                <option value="Percentage">Percentage</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top" className="w-40 pt-2 pr-4 text-sm">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              {/* Submission type box */}
              <div className="rounded border border-gray-300 p-4 leading-9">
                <select id="wd-submission-type" className={input}>
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
              </div>
            </td>
          </tr>

          {/* Assign to :
            Assign section — Assign to (wd-assign-to), Due (wd-due-date), Available from (wd-available-from), Until (wd-available-until)*/}
          <tr>
            <td align="right" valign="top" className="w-40 pt-2 pr-4 text-sm">
              <label>Assign</label>
            </td>
            <td>
              {/* Assign box */}
              <div className="rounded border border-gray-300 p-4">
                <label htmlFor="wd-assign-to" className="mb-1 block">Assign to</label>
                <select id="wd-assign-to" className={input}>
                  <option value="Everyone">Everyone</option>
                </select>
                <br />
                <br />
                <label htmlFor="wd-due-date" className="mb-1 block">Due</label>
                <input
                  type="date"
                  defaultValue="2026-09-27"
                  min="2026-01-01"
                  max="2027-12-31"
                  id="wd-due-date"
                  className={input}
                />
                <br />
                <br />
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label htmlFor="wd-available-from" className="mb-1 block">Available from</label>
                    <input
                      type="date"
                      defaultValue="2026-09-20"
                      min="2026-01-01"
                      max="2027-12-31"
                      id="wd-available-from"
                      className={input}
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="wd-available-until" className="mb-1 block">Until</label>
                    <input
                      type="date"
                      defaultValue="2026-09-27"
                      min="2026-01-01"
                      max="2027-12-31"
                      id="wd-available-until"
                      className={input}
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
      <label htmlFor="wd-ai-editor-notes" className="mb-1 block">Sample notes</label>
      <textarea id="wd-ai-editor-notes" className={`${input} h-48`} />
      <br />
      <hr className="my-4 border-gray-300" />
      {/* Move buttons to the right */}
      <div className="flex justify-end gap-2">
        <Link href={`/courses/${cid}/assignments`}>
          <button id="wd-cancel" type="button" className="rounded bg-gray-200 px-4 py-2 text-black">
            Cancel
          </button>
        </Link>
        <Link href={`/courses/${cid}/assignments`}>
          <button id="wd-save" type="submit" className="rounded bg-red-600 ml-2 px-4 py-2 text-white">
            Save
          </button>
        </Link>
      </div>
    </div>
  );
}