import type { noticeType, redirectLinkType, studentDetailType } from "./types";

export function getStudentDetails(): studentDetailType {
  const info = document.querySelector(".gradient-border-button-active");
  const imgURL = info?.querySelector("img")?.src ?? "";
  const name = info?.querySelector("h4")?.textContent?.trim() ?? "";
  const rollNo = info?.querySelector("small")?.textContent?.trim() ?? "";
  return {
    imgURL,
    name,
    rollNo,
  };
}

export function getRedirectLinks(): redirectLinkType[] {
  const linkElements = document.querySelectorAll(".important-links a");

  return Array.from(linkElements).map((link) => {
    const name = link.querySelector("span")?.textContent?.trim() ?? "";
    const url = (link as HTMLAnchorElement).href;

    return {
      name,
      url,
    };
  });
}

export function getPDFLinks(): Record<string, string> {
  const anchors = document.querySelectorAll<HTMLAnchorElement>(".tab-overflow ul li a");
  const PDFLinks: Record<string, string> = {
    guideBook: "",
    sop: "",
  };

  for (const a of anchors) {
    const text = a.textContent?.trim();
    if (text === "Guidebook") PDFLinks.guideBook = a.href;
    if (text === "SOP of Hostellers") PDFLinks.sop = a.href;
  }

  return PDFLinks;
}

export function getNoticeList(): noticeType[] {
  const noticeList = document.querySelectorAll("#noticesList .list-item");

  return Array.from(noticeList).map((notice) => {
    const anchors = notice.querySelectorAll("a");
    return {
      noticeTitle: anchors[1]?.textContent?.trim() ?? "",
      date: anchors[2]?.textContent?.trim() ?? "",
      URL: anchors[1]?.href ?? "",
    };
  });
}
