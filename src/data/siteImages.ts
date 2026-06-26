export type SiteImage = {
  image: string;
  altZh: string;
  altEn: string;
  replaceName: string;
};

export const siteImages = {
  logo: {
    image: "/images/site/logo-high-school-kopitiam.png",
    altZh: "初中一校 High School Kopitiam 标志",
    altEn: "High School Kopitiam logo",
    replaceName: "logo-high-school-kopitiam.png"
  },
  hero: {
    desktop: "/images/site/hero-campus.jpg",
    mobile: "/images/site/hero-campus-mobile.jpg",
    altZh: "初中一校校园主题咖啡馆封面",
    altEn: "High School Kopitiam campus themed cafe hero image",
    replaceName: "hero-campus.jpg"
  },
  heroCard: {
    image: "/images/gallery/library-scene.jpg",
    altZh: "\u6821\u56ed\u56fe\u4e66\u9986\u4e0e\u56de\u5fc6\u4e66\u67b6",
    altEn: "Campus library shelves and nostalgic school memories",
    replaceName: "library-scene.jpg"
  },
  about: {
    image: "/images/site/about-cafe.jpg",
    altZh: "校园主题咖啡馆环境",
    altEn: "Campus themed cafe interior",
    replaceName: "about-cafe.jpg"
  },
  swing: {
    image: "/images/site/swing-campus.jpg",
    altZh: "校园秋千与回忆空间",
    altEn: "Campus swing and memory corner",
    replaceName: "swing-campus.jpg"
  },
  founder: {
    image: "/images/site/founder-yvonne.jpg",
    altZh: "创办人 Yvonne 临时形象照",
    altEn: "Founder Yvonne temporary portrait",
    replaceName: "founder-yvonne.jpg"
  },
  chef: {
    image: "/images/site/chef-lam.jpg",
    altZh: "资深主厨 Chef Lam 临时形象照",
    altEn: "Senior Chef Lam temporary portrait",
    replaceName: "chef-lam.jpg"
  },
  branchMountAustin: {
    image: "/images/site/branch-mount-austin.jpg",
    altZh: "Mount Austin 分行临时外观照片",
    altEn: "Mount Austin branch temporary exterior photo",
    replaceName: "branch-mount-austin.jpg"
  },
  branchGaya: {
    image: "/images/site/branch-gaya.jpg",
    altZh: "高雅 Gaya 分行临时外观照片",
    altEn: "Gaya branch temporary exterior photo",
    replaceName: "branch-gaya.jpg"
  },
  bicycle: {
    image: "/images/site/bicycle-student.jpg",
    altZh: "校园单车与黄昏校园路",
    altEn: "Student bicycle on a golden hour campus road",
    replaceName: "bicycle-student.jpg"
  },
  afterSchoolLight: {
    image: "/images/site/after-school-light.jpg",
    altZh: "课后时光的校园阳光",
    altEn: "After-school golden campus light",
    replaceName: "after-school-light.jpg"
  },
  oldStudyDesk: {
    image: "/images/site/old-study-desk.jpg",
    altZh: "旧课桌与校园回忆",
    altEn: "Old study desk and school memories",
    replaceName: "old-study-desk.jpg"
  },
  memoryCorner: {
    image: "/images/site/memory-corner.jpg",
    altZh: "校园回忆角落",
    altEn: "Nostalgic campus memory corner",
    replaceName: "memory-corner.jpg"
  },
  principalSign: {
    image: "/images/site/principal-sign.png",
    altZh: "\u6821\u957f\u63a8\u8350\u724c\u88c5\u9970",
    altEn: "Principal recommendation sign decoration",
    replaceName: "principal-sign.png"
  },
  paperPlane: {
    image: "/paper-plane.svg",
    altZh: "纸飞机装饰",
    altEn: "Paper plane decoration",
    replaceName: "paper-plane.svg"
  }
} as const;

export type SiteImageKey = keyof typeof siteImages;
