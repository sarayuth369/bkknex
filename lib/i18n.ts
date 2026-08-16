export type Lang = "en" | "th";

export const LANG_STORAGE_KEY = "bkknex-language";
export const DEFAULT_LANG: Lang = "en";

export type Dict = {
  nav: {
    solutions: string;
    technology: string;
    vision: string;
    about: string;
    exploreSmfCta: string;
    switchToEnglish: string;
    switchToThai: string;
    openMenu: string;
    closeMenu: string;
    home: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    description: string;
    ctaExplore: string;
    ctaDiscover: string;
    scroll: string;
  };
  solutions: {
    eyebrow: string;
    title1: string;
    title2: string;
    description: string;
    active: string;
    comingSoon: string;
    inDevelopment: string;
    smf: { title: string; subtitle: string; desc: string; cta: string };
    space: { title: string; subtitle: string; desc: string };
    ai: { title: string; subtitle: string; desc: string };
  };
  vision: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { label: string; note: string }[];
  };
  technology: {
    eyebrow: string;
    title1: string;
    title2: string;
    description: string;
    core: { eyebrow: string; title: string; desc: string };
    items: { name: string; tag: string; desc: string }[];
    online: string;
  };
  about: {
    eyebrow: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    p3: string;
    labels: { origin: string; focus: string; horizon: string };
    values: { origin: string; focus: string; horizon: string };
  };
  founder: {
    eyebrow: string;
    quote: string;
    title: string;
    location: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    tagline: string;
    location: string;
    solutions: string;
    technology: string;
    corporate: string;
    space: string;
    ai: string;
    techList: string[];
    about: string;
    contact: string;
    copyright: string;
    comingSoon: string;
  };
  meta: {
    title: string;
    description: string;
  };
};

const en: Dict = {
  nav: {
    solutions: "Solutions",
    technology: "Technology",
    vision: "Vision",
    about: "About",
    exploreSmfCta: "Explore SMF IoT",
    switchToEnglish: "Switch language to English",
    switchToThai: "Switch language to Thai",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "BKKNEX home",
  },
  hero: {
    badge: "BKKNEX · Bangkok, Thailand",
    title1: "Building What",
    title2: "Comes Next.",
    subtitle: "Next-generation technology from Bangkok.",
    description:
      "We build intelligent technologies that connect the physical world, expand human capability, and shape the future.",
    ctaExplore: "Explore Solutions",
    ctaDiscover: "Discover BKKNEX",
    scroll: "Scroll",
  },
  solutions: {
    eyebrow: "/ Our Solutions",
    title1: "Technology for",
    title2: "What Comes Next.",
    description:
      "From intelligent agriculture to space and artificial intelligence, BKKNEX develops technology platforms designed for the next generation.",
    active: "Active",
    comingSoon: "Coming Soon",
    inDevelopment: "Currently in development",
    smf: {
      title: "SMF IoT",
      subtitle: "Smart Farm Intelligence",
      desc: "Intelligent farming powered by IoT, sensors, automation and real-time data.",
      cta: "Explore SMF IoT",
    },
    space: {
      title: "SPACE",
      subtitle: "Technology Beyond Earth",
      desc: "Exploring technology beyond Earth.",
    },
    ai: {
      title: "AI",
      subtitle: "Intelligent Systems",
      desc: "Intelligent systems for a smarter future.",
    },
  },
  vision: {
    eyebrow: "/ The BKKNEX Vision",
    title: "From Earth to Beyond.",
    description:
      "BKKNEX explores the intersection of connected systems, intelligent software and emerging technologies — building solutions that move technology forward.",
    steps: [
      { label: "Physical World", note: "The world as it is" },
      { label: "IoT", note: "Sensors · Connectivity" },
      { label: "Data", note: "Signals become insight" },
      { label: "AI", note: "Models · Reasoning" },
      { label: "Intelligence", note: "Systems that decide" },
      { label: "Next World", note: "Extended possibility" },
    ],
  },
  technology: {
    eyebrow: "/ Technology",
    title1: "Built on Next-Generation",
    title2: "Technology",
    description:
      "A single ecosystem of interconnected technologies — designed to scale from a farm sensor to an orbital system.",
    core: {
      eyebrow: "Core · BKKNEX",
      title: "Interconnected by design",
      desc: "Every technology feeds the next. Signals become data. Data becomes intelligence. Intelligence becomes action.",
    },
    items: [
      {
        name: "IoT",
        tag: "Connected Systems",
        desc: "Connected physical systems.",
      },
      { name: "AI", tag: "Reasoning", desc: "Intelligent decision systems." },
      { name: "Automation", tag: "Action", desc: "Technology that acts." },
      {
        name: "Data",
        tag: "Intelligence Layer",
        desc: "Turning information into intelligence.",
      },
      {
        name: "Space Technology",
        tag: "Beyond Earth",
        desc: "Extending technology beyond Earth.",
      },
    ],
    online: "ONLINE",
  },
  about: {
    eyebrow: "/ About BKKNEX",
    title1: "Building What",
    title2: "Comes Next.",
    p1: "BKKNEX is a technology company focused on building what comes next.",
    p2: "We develop and explore technologies across connected systems, intelligent software, automation and emerging technology platforms.",
    p3: "Starting from Bangkok, our vision is to build technology with the potential to reach beyond borders — and eventually beyond Earth.",
    labels: { origin: "Origin", focus: "Focus", horizon: "Horizon" },
    values: { origin: "Bangkok, TH", focus: "Deep Tech", horizon: "Beyond Earth" },
  },
  founder: {
    eyebrow: "/ Founder's Note",
    quote:
      "We will harness Thailand's technology and innovation to sustainably enhance the productivity and quality of Thai agriculture for a better future.",
    title: "CEO / Founder, BKKNEX",
    location: "BKKNEX · Bangkok",
  },
  cta: {
    eyebrow: "/ Next",
    title: "The Next Is Already Being Built.",
    description:
      "Explore the technologies we're building today — and the possibilities we're preparing for tomorrow.",
    ctaPrimary: "Explore BKKNEX Solutions",
    ctaSecondary: "Visit SMF IoT",
  },
  footer: {
    tagline: "Building What Comes Next.",
    location: "Next-generation technology from Bangkok, Thailand.",
    solutions: "Solutions",
    technology: "Technology",
    corporate: "Corporate",
    space: "Space",
    ai: "AI",
    techList: ["IoT", "AI", "Automation", "Data", "Space Technology"],
    about: "About",
    contact: "Contact",
    copyright: "© 2026 BKKNEX. All rights reserved.",
    comingSoon: "Coming Soon",
  },
  meta: {
    title: "BKKNEX — Building What Comes Next.",
    description:
      "BKKNEX is a technology company from Bangkok building next-generation solutions across IoT, AI, automation, data and emerging technologies.",
  },
};

const th: Dict = {
  nav: {
    solutions: "โซลูชัน",
    technology: "เทคโนโลยี",
    vision: "วิสัยทัศน์",
    about: "เกี่ยวกับเรา",
    exploreSmfCta: "เข้าสู่ SMF IoT",
    switchToEnglish: "เปลี่ยนภาษาเป็นอังกฤษ",
    switchToThai: "เปลี่ยนภาษาเป็นไทย",
    openMenu: "เปิดเมนู",
    closeMenu: "ปิดเมนู",
    home: "หน้าแรก BKKNEX",
  },
  hero: {
    badge: "BKKNEX · กรุงเทพฯ ประเทศไทย",
    title1: "สร้างสรรค์สิ่งที่",
    title2: "จะเกิดขึ้นต่อไป",
    subtitle: "เทคโนโลยีแห่งอนาคตจากกรุงเทพฯ",
    description:
      "เราพัฒนาเทคโนโลยีอัจฉริยะที่เชื่อมโยงโลกทางกายภาพ เพิ่มขีดความสามารถของมนุษย์ และร่วมสร้างอนาคตที่ดียิ่งขึ้น",
    ctaExplore: "สำรวจโซลูชัน",
    ctaDiscover: "รู้จัก BKKNEX",
    scroll: "เลื่อน",
  },
  solutions: {
    eyebrow: "/ โซลูชันของเรา",
    title1: "เทคโนโลยี",
    title2: "สำหรับอนาคตที่กำลังมาถึง",
    description:
      "จากเกษตรอัจฉริยะ สู่อวกาศและปัญญาประดิษฐ์ BKKNEX มุ่งพัฒนาแพลตฟอร์มเทคโนโลยีสำหรับคนรุ่นต่อไป",
    active: "พร้อมใช้งาน",
    comingSoon: "เร็ว ๆ นี้",
    inDevelopment: "กำลังพัฒนา",
    smf: {
      title: "SMF IoT",
      subtitle: "ระบบเกษตรอัจฉริยะ",
      desc: "ยกระดับการเกษตรด้วย IoT เซนเซอร์ ระบบอัตโนมัติ และข้อมูลแบบเรียลไทม์",
      cta: "เข้าสู่ SMF IoT",
    },
    space: {
      title: "SPACE",
      subtitle: "เทคโนโลยีเหนือขอบเขตโลก",
      desc: "สำรวจและพัฒนาเทคโนโลยีเพื่อก้าวไปไกลกว่าโลก",
    },
    ai: {
      title: "AI",
      subtitle: "ระบบอัจฉริยะ",
      desc: "พัฒนาระบบอัจฉริยะเพื่ออนาคตที่ชาญฉลาดยิ่งขึ้น",
    },
  },
  vision: {
    eyebrow: "/ วิสัยทัศน์ BKKNEX",
    title: "จากโลก...สู่อนาคตที่ไกลกว่า",
    description:
      "BKKNEX สำรวจจุดบรรจบระหว่างระบบที่เชื่อมต่อกัน ซอฟต์แวร์อัจฉริยะ และเทคโนโลยีเกิดใหม่ เพื่อสร้างโซลูชันที่ขับเคลื่อนเทคโนโลยีไปข้างหน้า",
    steps: [
      { label: "Physical World", note: "โลกทางกายภาพ" },
      { label: "IoT", note: "เซนเซอร์ · การเชื่อมต่อ" },
      { label: "Data", note: "สัญญาณกลายเป็นข้อมูลเชิงลึก" },
      { label: "AI", note: "โมเดล · การใช้เหตุผล" },
      { label: "Intelligence", note: "ระบบที่ตัดสินใจได้" },
      { label: "Next World", note: "ขยายความเป็นไปได้" },
    ],
  },
  technology: {
    eyebrow: "/ เทคโนโลยี",
    title1: "ขับเคลื่อนด้วย",
    title2: "เทคโนโลยีแห่งอนาคต",
    description:
      "ระบบนิเวศเดียวที่รวมเทคโนโลยีเชื่อมต่อกัน — ออกแบบเพื่อขยายจากเซนเซอร์ในฟาร์มสู่ระบบในวงโคจร",
    core: {
      eyebrow: "แกนหลัก · BKKNEX",
      title: "เชื่อมโยงกันตั้งแต่การออกแบบ",
      desc: "ทุกเทคโนโลยีต่อยอดกัน สัญญาณกลายเป็นข้อมูล ข้อมูลกลายเป็นความอัจฉริยะ ความอัจฉริยะกลายเป็นการกระทำ",
    },
    items: [
      {
        name: "IoT",
        tag: "ระบบเชื่อมต่อ",
        desc: "ระบบทางกายภาพที่เชื่อมต่อถึงกัน",
      },
      {
        name: "AI",
        tag: "การใช้เหตุผล",
        desc: "ระบบอัจฉริยะเพื่อการตัดสินใจ",
      },
      {
        name: "Automation",
        tag: "การกระทำ",
        desc: "เทคโนโลยีที่สามารถทำงานได้อย่างอัตโนมัติ",
      },
      {
        name: "Data",
        tag: "ชั้นความอัจฉริยะ",
        desc: "เปลี่ยนข้อมูลให้กลายเป็นความอัจฉริยะ",
      },
      {
        name: "Space Technology",
        tag: "เหนือพื้นโลก",
        desc: "ขยายขอบเขตเทคโนโลยีให้ไกลกว่าพื้นโลก",
      },
    ],
    online: "ออนไลน์",
  },
  about: {
    eyebrow: "/ เกี่ยวกับ BKKNEX",
    title1: "สร้างสรรค์สิ่งที่",
    title2: "จะเกิดขึ้นต่อไป",
    p1: "BKKNEX คือบริษัทเทคโนโลยีที่มุ่งสร้างสรรค์นวัตกรรมสำหรับอนาคต",
    p2: "เราพัฒนาและสำรวจเทคโนโลยีในหลากหลายด้าน ทั้งระบบเชื่อมต่อ ซอฟต์แวร์อัจฉริยะ ระบบอัตโนมัติ และแพลตฟอร์มเทคโนโลยีเกิดใหม่",
    p3: "จากกรุงเทพฯ เรามุ่งสร้างเทคโนโลยีที่สามารถก้าวข้ามพรมแดน และในอนาคตอาจก้าวไปไกลกว่าพื้นโลก",
    labels: { origin: "ต้นกำเนิด", focus: "จุดมุ่งเน้น", horizon: "ขอบฟ้า" },
    values: {
      origin: "กรุงเทพฯ ไทย",
      focus: "Deep Tech",
      horizon: "เหนือพื้นโลก",
    },
  },
  founder: {
    eyebrow: "/ สารจากผู้ก่อตั้ง",
    quote:
      "เราจะนำเทคโนโลยีและนวัตกรรมของไทยมาใช้เพื่อยกระดับผลผลิตและคุณภาพของภาคการเกษตรไทยอย่างยั่งยืน เพื่ออนาคตที่ดียิ่งขึ้น",
    title: "ประธานเจ้าหน้าที่บริหาร / ผู้ก่อตั้ง BKKNEX",
    location: "BKKNEX · กรุงเทพฯ",
  },
  cta: {
    eyebrow: "/ ก้าวต่อไป",
    title: "อนาคตกำลังถูกสร้างขึ้นแล้ว",
    description:
      "สำรวจเทคโนโลยีที่เรากำลังสร้างในวันนี้ และความเป็นไปได้ที่เรากำลังเตรียมไว้สำหรับวันพรุ่งนี้",
    ctaPrimary: "สำรวจโซลูชันของ BKKNEX",
    ctaSecondary: "เยี่ยมชม SMF IoT",
  },
  footer: {
    tagline: "สร้างสรรค์สิ่งที่จะเกิดขึ้นต่อไป",
    location: "เทคโนโลยีแห่งอนาคตจากกรุงเทพมหานคร ประเทศไทย",
    solutions: "โซลูชัน",
    technology: "เทคโนโลยี",
    corporate: "องค์กร",
    space: "Space",
    ai: "AI",
    techList: ["IoT", "AI", "ระบบอัตโนมัติ", "ข้อมูล", "เทคโนโลยีอวกาศ"],
    about: "เกี่ยวกับเรา",
    contact: "ติดต่อเรา",
    copyright: "© 2026 BKKNEX สงวนลิขสิทธิ์",
    comingSoon: "เร็ว ๆ นี้",
  },
  meta: {
    title: "BKKNEX — สร้างสรรค์สิ่งที่จะเกิดขึ้นต่อไป",
    description:
      "BKKNEX บริษัทเทคโนโลยีจากกรุงเทพฯ มุ่งพัฒนาโซลูชันแห่งอนาคตด้าน IoT, AI, ระบบอัตโนมัติ ข้อมูล และเทคโนโลยีเกิดใหม่",
  },
};

export const translations: Record<Lang, Dict> = { en, th };
