import { FaCheckCircle, FaFileImport, FaCreativeCommons, FaHome, FaRegLightbulb, FaStream } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdAnnouncement, MdDoNotDisturbAlt } from "react-icons/md";
import { TbDeviceAnalytics } from "react-icons/tb";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaFileImport className="me-1 shrink-0 text-base" /> Import Existing Content
      </button>
      {/* ...repeat full-width bordered buttons for Import from Commons,
             Choose Home Page, and the rest... */}
             <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaCreativeCommons className="me-1 shrink-0 text-base" /> Import from Commons
      </button>

      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaHome className="me-1 shrink-0 text-base" /> Choose Home Page
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaStream className="me-1 shrink-0 text-base" /> View Course Stream
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <MdAnnouncement className="me-1 shrink-0 text-base" /> New Announcement
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <TbDeviceAnalytics className="me-1 shrink-0 text-base" /> New Analytics
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <IoIosNotifications className="me-1 shrink-0 text-base" /> View Course Notifications
      </button>
      <button
        id="wd-ai-status"
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaRegLightbulb className="me-1 shrink-0 text-base" /> Sample action
      </button>
    </div>
  );
}

// export default function CourseStatus() {
//     return (
//       <div id="wd-course-status">
//         <h2>Course Status</h2>
//         <button>Unpublish</button> <button>Publish</button>
//         <br />
//         <br />
//         <button>Import Existing Content</button>
//         <br />
//         <button>Import from Commons</button>
//         <br />
//         <button>Course Home Page</button>
//         <br />
//         <button>View Course Stream</button>
//         <br />
//         <button>View Announcement</button>
//         <br />
//         <button>View Analytics</button>
//         <br />
//         {/* Complete the remaining status actions on your own */}
//         <button>View Course Notifications</button>
//       </div>
//     );
//   }