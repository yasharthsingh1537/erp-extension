import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getNoticeList, getPDFLinks, getRedirectLinks, getStudentDetails } from "./parser";
import { Separator } from "@/components/ui/separator";
import { ScrollArea} from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import {
  CalendarDays,
  ClipboardCheck,
  LoaderCircle,
  LogOut,
  SquareUserRound,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "My Account": SquareUserRound,
  "Time Table": CalendarDays,
  "My Attendance": ClipboardCheck,
  Logout: LogOut,
};

function Home() {
  const redirectLinks = getRedirectLinks();
  const PDFLinks = getPDFLinks();
  const notices = getNoticeList();
  const studentDetails = getStudentDetails();
  return (
    <div className="h-full flex flex-col">
      {/* upper part */}
      <div className="flex h-4/5">
        {/* left side */}
        <div className="h-full w-1/3">
          {/* student details */}
          <div className="h-1/2">
            <div className="h-full flex flex-col justify-center items-center">
              <Avatar className="ring-2 ring-red-500">
                <AvatarImage src={studentDetails.imgURL} alt={studentDetails.name} />
              </Avatar>
              <div className="flex flex-col text-white gap-1">
                <p className="border-2 rounded-2xl py-1.5 px-1 bg-black">{studentDetails.name}</p>
                <p className="border-2 rounded-2xl py-1.5 px-1 bg-black">{studentDetails.rollNo}</p>
              </div>
            </div>
          </div>
          <Separator className="mx-2"/>
          {/* links to other pages */}
          <div className="flex flex-wrap gap-3">
            {redirectLinks
              .filter((link) => link.name !== "Placement" && link.name !== "Library")
              .map((link, i) => {
                const Icon = icons[link.name] ?? LoaderCircle;
                return (
                  <Card key={i} size="sm" className="p-0">
                    <a
                      href={link.url}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-white" />
                      <span className="font-medium text-white">{link.name}</span>
                    </a>
                  </Card>
                );
              })}
          </div>
        </div>
        {/* right side */}
        <div className="h-full w-2/3 flex flex-col">
          <p className="w-fit">Notice Board</p>
          <ScrollArea className="h-full">
            <div className="flex flex-col gap-2 p-1">
              {notices.map((notice, i) => (
                <Card key={i}>
                  <a
                    href={notice.URL}
                    className="block rounded-lg p-4 shadow hover:shadow-md transition"
                  >
                    <span className="block font-medium">{notice.noticeTitle}</span>
                    <span className="block text-sm text-muted-foreground">{notice.date}</span>
                  </a>
                </Card>
              ))}
            </div>
            {/* <ScrollBar orientation="vertical" /> */}
          </ScrollArea>
        </div>
      </div>
      {/* lower part */}
      <div className="flex h-1/5">
        {/* left side */}
        <div className="flex">
          <div className="flex flex-col">
            <h3>Vision</h3>
            <p>
              To achieve excellence in professional education and create an ecosystem for the
              holistic development of all stakeholders.
            </p>
          </div>
          <div className="flex flex-col">
            <h3>Mission</h3>
            <p>
              To provide an environment of effective learning and innovation transforming students
              into dynamic, responsible and productive professionals in their respective fields, who
              are capable of adapting to the changing needs of the industry and society.
            </p>
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col">
          <a href={PDFLinks.guideBook}>Guidebook</a>
          <a href={PDFLinks.sop}>SOP of Hostellers</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
