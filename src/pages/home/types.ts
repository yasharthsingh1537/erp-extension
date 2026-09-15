export type homeIcon = "home" | "timetable" | "attendance" | "logout" | "circle";

export interface redirectLinkType {
  name: string;
  url: string;
}

export interface studentDetailType {
  imgURL: string;
  name: string;
  rollNo: string;
}

export interface noticeType {
  noticeTitle: string;
  date: string;
  URL: string;
}
 