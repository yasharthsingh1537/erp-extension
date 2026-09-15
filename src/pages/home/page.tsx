import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getNoticeList, getPDFLinks, getRedirectLinks, getStudentDetails } from "./parser";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import {
  CalendarDays,
  ClipboardCheck,
  FileText,
  LoaderCircle,
  LogOut,
  SquareUserRound,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { studentDetailType } from "./types";

const icons: Record<string, LucideIcon> = {
  "My Account": SquareUserRound,
  "Time Table": CalendarDays,
  "My Attendance": ClipboardCheck,
  Logout: LogOut,
};

function Home() {
  const [studentDetails, setStudentDetails] = useState<studentDetailType>({
    imgURL: "",
    name: "",
    rollNo: "",
  });

  useEffect(() => {
    const loadStudentDetails = async () => {
      const details = getStudentDetails();
      setStudentDetails(details)
      await chrome.storage.local.set({
        studentDetails:details,
      })
    }
    loadStudentDetails();
  },[])

  const redirectLinks = getRedirectLinks();
  const PDFLinks = getPDFLinks();
  const notices = getNoticeList();
  return (
    <div className="h-screen flex flex-col">
      {/* upper part */}
      <div className="flex h-4/5">
        {/* left side */}
        <div className="h-full w-1/3 flex flex-col">
          {/* student details */}
          <div className="h-1/2">
            <div className="h-full flex flex-col justify-center items-center">
              <Avatar className="w-24 h-auto ring-2 ring-red-500">
                <AvatarImage src={studentDetails.imgURL} alt={studentDetails.name} />
              </Avatar>
              <div className="flex flex-col text-white gap-1">
                <p className="border-2 rounded-2xl py-1.5 px-1 bg-background">
                  {studentDetails.name}
                </p>
                <p className="border-2 rounded-2xl py-1.5 px-1 bg-background">
                  {studentDetails.rollNo}
                </p>
              </div>
            </div>
          </div>
          <Separator className="mx-2" />
          {/* links to other pages */}
          <div className="flex flex-wrap gap-3 justify-center items-center mx-3">
            {redirectLinks
              .filter((link) => link.name !== "Placement" && link.name !== "Library")
              .map((link, i) => {
                const Icon = icons[link.name] ?? LoaderCircle;
                return (
                  <Card key={i} size="sm" className="p-0 bg-chart-4">
                    <a
                      href={link.url}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition no-underline"
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
          <p className="w-fit text-white">Notice Board</p>
          <ScrollArea className="flex-1 min-h-0">
            <div className="flex flex-col gap-2 p-1">
              {notices.map((notice, i) => (
                <Card key={i}>
                  <a
                    href={notice.URL}
                    className="block rounded-lg p-4 shadow hover:shadow-md transition no-underline"
                  >
                    <div className="flex">
                      <FileText />
                      <span className="block font-medium">{notice.noticeTitle}</span>
                    </div>
                    <span className="block text-sm text-muted-foreground">{notice.date}</span>
                  </a>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="vertical"/>
          </ScrollArea>
        </div>
      </div>
      {/* lower part */}
      <div className="flex h-1/5 text-white shrink-0">
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
