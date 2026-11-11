"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const existing = assignments.find((a) => a._id === aid);
  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? {
      _id: aid as string,
      title: "New Assignment",
      course: cid as string,
      description: "New Assignment Description",
      points: 100,
      due: "",
      available: "",
      until: "",
    },
  );

  const save = () => {
    if (existing) {
      updateAssignment(assignment);
    } else {
      addAssignment(assignment);
    }
    router.push(`/courses/${cid}/assignments`);
  };

  // Shared styling for Kambaz-style input boxes, which is reusable
  const input = "w-full rounded border border-gray-300 px-3 py-2"
  return (
    <div id="wd-assignments-editor" className="p-4">
      <label htmlFor="wd-name" className="mb-1 block">Assignment Name</label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className={input}
      />
      <div id="wd-assignment-id" className="mt-1 text-sm text-gray-500">
        Assignment id: {aid}
      </div>
      <br />
      <br />
      <textarea
        id="wd-description"
        value={assignment.description}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        className={`${input} h-48`}
      />
      <br />
      <table className="w-full border-separate  border-spacing-y-4">
        <tbody>
          <tr>
            <td align="right" valign="top" className="w-40 pt-2 pr-4 text-sm">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                type="number"
                value={assignment.points}
                onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
                className={input}
              />
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
                  value={assignment.due}
                  onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
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
                      value={assignment.available}
                      onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
                      id="wd-available-from"
                      className={input}
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="wd-available-until" className="mb-1 block">Until</label>
                    <input
                      type="date"
                      value={assignment.until ?? assignment.due}
                      onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
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
        <button
          id="wd-save"
          type="button"
          onClick={save}
          className="rounded bg-red-600 ml-2 px-4 py-2 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}