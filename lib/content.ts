export type Language = "zh" | "en";

export const imageNames = {
  hero: "hero-campus-building.jpg",
  plane: "paper-plane.svg",
  swing: "swing-student.jpg",
  founder: "founder-yvonne.jpg",
  chef: "chef-lam.jpg",
  charcoal: "food-charcoal-sandwich.jpg",
  coffee: "food-coffee.jpg",
  pasta: "food-pasta.jpg",
  burger: "food-burger.jpg",
  mountAustin: "branch-mount-austin.jpg",
  gaya: "branch-gaya.jpg",
  bicycle: "bicycle-student.png"
};

export const seoByLanguage = {
  zh: {
    title: "初中一校 High School Kopitiam | JB 校园主题咖啡馆",
    description:
      "初中一校是一间位于 Johor Bahru 的校园主题咖啡馆，拥有 Mount Austin 与高雅分行，主打校园怀旧空间、特色美食、咖啡、甜点与聚会体验。"
  },
  en: {
    title: "High School Kopitiam | Campus Theme Café in Johor Bahru",
    description:
      "High School Kopitiam is a campus-themed café in Johor Bahru with Mount Austin and Gaya branches, offering nostalgic school-inspired interiors, signature food, coffee, desserts, and gathering experiences."
  }
};

export const content = {
  zh: {
    brand: "初中一校",
    brandSub: "High School Kopitiam",
    nav: {
      home: "首页",
      about: "关于我们",
      food: "今日食堂",
      branches: "校园分行",
      gallery: "校园回忆录",
      contact: "联系我们",
      cta: "预订 / 外带"
    },
    hero: {
      eyebrow: "JB 校园主题咖啡馆",
      title: "欢迎回到初中一校",
      subtitle: "一杯咖啡，一份回忆，一段青春。",
      description:
        "这里不只是一间咖啡馆。这里是一座收藏青春回忆的校园。从纸飞机飞过的那一刻开始，你已经回到那些年最单纯、最温暖的时光。",
      primary: "进入校园",
      secondary: "查看菜单",
      noticeTitle: "今日上课时间",
      noticeDays: "Monday - Sunday",
      noticeTime: "08:00 AM - 06:00 PM",
      campus: "JB Campus",
      campuses: ["Mount Austin", "高雅 Gaya"]
    },
    about: {
      title: "那些年，我们一起长大的地方",
      subtitle: "Back to the days we never forgot.",
      paragraphs: [
        "初中一校是一间以校园回忆为主题的咖啡馆。我们把课室、黑板、学生桌椅、校园角落与美食结合在一起，让每一位走进来的顾客，都像重新回到学生时代。",
        "这里有熟悉的校园气息，也有认真烹调的美食。你可以和朋友聊天、和家人聚餐、拍照打卡，也可以一个人坐下来，慢慢喝一杯咖啡。"
      ],
      quote: "青春也许会毕业，但回忆永远不会离校。"
    },
    campus: {
      title: "校园里的咖啡馆",
      subtitle: "A café hidden inside your school memories.",
      paragraphs: [
        "有些地方，不是因为豪华才让人记得，而是因为它让你想起从前的自己。",
        "初中一校用校园主题打造一个轻松、温暖、有记忆点的用餐空间。黑板、课桌、书本、纸飞机、秋千和阳光，每一个角落都适合拍照，也适合慢慢坐下来享受生活。"
      ],
      polaroids: ["课后阳光", "旧课桌", "回忆角落"]
    },
    people: {
      founder: {
        title: "创办人的初心",
        subtitle: "The heart behind the school.",
        role: "Founder Yvonne",
        paragraphs: [
          "初中一校由 Yvonne 创办。她相信，一间好的咖啡馆不只是卖食物，而是创造人与人之间的回忆。",
          "她希望每一位来到初中一校的人，都可以暂时放下生活的忙碌，回到那个简单、开心、充满笑声的学生时代。"
        ],
        quote: "我们想做的不只是一间 Café，而是一间让人想再回来一次的校园。"
      },
      chef: {
        title: "每一道料理，都值得认真对待",
        subtitle: "Crafted by experience, served with heart.",
        role: "Senior Chef Lam",
        paragraphs: [
          "初中一校的美食由资深 Chef Lam 用心打造。凭着多年餐饮经验，Chef Lam 坚持选用合适食材，用稳定的手艺和细心的烹调，把每一道餐点做到有味道、有温度、有记忆点。",
          "从主食、轻食、甜点到饮品，每一道料理都希望让顾客吃得开心，也吃得放心。"
        ],
        quote: "真正好吃的料理，是吃完以后还会想念。"
      }
    },
    food: {
      title: "今日食堂推荐",
      subtitle: "Today’s Canteen Favourites",
      intro:
        "来到初中一校，当然要好好享受一顿属于校园时光的美食。这里有咖啡、早午餐、主食、甜点和特色饮料，无论是朋友聚会、家庭用餐，还是下午茶打卡，都能找到适合你的味道。",
      button: "查看完整菜单",
      badge: "校长推荐",
      items: [
        { name: "爆浆竹炭三明治", sub: "Charcoal Signature Sandwich", category: "校长推荐", image: imageNames.charcoal },
        { name: "招牌咖啡", sub: "Signature Latte", category: "招牌咖啡", image: imageNames.coffee },
        { name: "校园汉堡", sub: "School Burger", category: "食堂主食", image: imageNames.burger },
        { name: "奶油意面", sub: "Creamy Pasta", category: "课后主食", image: imageNames.pasta },
        { name: "经典鸡扒", sub: "Classic Chicken Chop", category: "食堂主食", image: imageNames.pasta },
        { name: "特色炒饭", sub: "Signature Fried Rice", category: "校长推荐", image: imageNames.burger },
        { name: "巧克力蛋糕", sub: "Chocolate Cake", category: "课后甜点", image: imageNames.charcoal },
        { name: "水果茶", sub: "Fruit Tea", category: "青春饮品", image: imageNames.coffee }
      ]
    },
    why: {
      title: "为什么大家喜欢回来这里？",
      subtitle: "More than food. It is a feeling.",
      items: [
        { title: "校园主题空间", text: "黑板、课桌、纸飞机和校园布置，打造满满回忆感的用餐体验。" },
        { title: "适合拍照打卡", text: "每一个角落都像校园纪念册，非常适合朋友聚会和社交分享。" },
        { title: "资深厨师团队", text: "由 Chef Lam 用心打造餐点，让环境好看，食物也好吃。" },
        { title: "JB 两家分行", text: "Mount Austin 与高雅分行，方便顾客选择最靠近的校园。" }
      ]
    },
    branches: {
      title: "我们的校园分校",
      subtitle: "Choose your campus.",
      map: "Google Map 导航",
      whatsapp: "WhatsApp 预订",
      items: [
        { name: "Mount Austin \u5206\u884c", sub: "Mount Austin Campus", address: "57, Jalan Austin Heights 8/5, 81100 Johor Bahru, Johor Darul Ta'zim", image: imageNames.mountAustin },
        { name: "\u9ad8\u96c5\u5206\u884c", sub: "Gaya Campus", address: "57, Jalan Austin Heights 8/5, 81100 Johor Bahru, Johor Darul Ta'zim", image: imageNames.gaya }
      ]
    },
    gallery: {
      title: "校园回忆录",
      subtitle: "Moments worth keeping.",
      intro: "有些照片，不是为了证明我们去过哪里，而是为了记得当时的心情。",
      categories: ["环境", "美食", "朋友聚会", "校园角落"],
      items: [
        { title: "午后课室", category: "环境", image: imageNames.hero },
        { title: "食堂推荐", category: "美食", image: imageNames.charcoal },
        { title: "秋千旁边", category: "校园角落", image: imageNames.swing },
        { title: "咖啡时光", category: "美食", image: imageNames.coffee },
        { title: "Mount Austin", category: "朋友聚会", image: imageNames.mountAustin },
        { title: "高雅 Gaya", category: "环境", image: imageNames.gaya }
      ]
    },
    reviews: {
      title: "同学们的留言",
      subtitle: "What our classmates say.",
      label: "\u540c\u5b66\u7559\u8a00",
      items: [
        "今天不是来喝咖啡，而是来找回青春。",
        "环境很有特色，食物也很好吃，很适合朋友聚会和拍照。",
        "很喜欢校园主题，纸飞机、黑板、课桌都很有感觉。"
      ],
    },
    finalStory: {
      title: "骑上单车，出发吧。",
      subtitle: "Every visit is a little journey back.",
      bellLine: "\u5f53\u949f\u58f0\u54cd\u8d77\uff0c\u6211\u4eec\u521d\u4e2d\u4e00\u6821\u89c1\uff01",
      paragraphs: [
        "也许我们早就离开校园，但那些年留下来的感觉，一直都在。",
        "当你来到初中一校，喝一杯咖啡，吃一份美食，和朋友聊一聊从前，你会发现，青春其实从来没有走远。"
      ],
      button: "欢迎回来，同学"
    },
    contact: {
      title: "\u6821\u957f\u5ba4 Contact Us",
      subtitle: "Reservation, gathering, or a little question.",
      intro: "想订位、询问菜单、举办聚会或了解更多，欢迎联系我们。",
      fields: { name: "Name", phone: "Phone", branch: "Branch", message: "Message" },
      whatsapp: "WhatsApp Us",
      send: "Send Message",
      placeholders: {
        whatsapp: "016-8863621",
        facebook: "https://www.facebook.com/profile.php?id=100063529394723",
        instagram: "https://www.instagram.com/highschoolkopitiam"
      },
      social: [
        { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100063529394723" },
        { label: "Instagram", href: "https://www.instagram.com/highschoolkopitiam" },
        { label: "TikTok", href: "#" },
        { label: "Google Review", href: "#" }
      ],
      copyright: "© 2026 初中一校 High School Kopitiam. All Rights Reserved."
    }
  },
  en: {
    brand: "High School Kopitiam",
    brandSub: "Form 1 School Café",
    nav: {
      home: "Home",
      about: "Our Story",
      food: "Canteen Picks",
      branches: "Campuses",
      gallery: "Memory Book",
      contact: "Contact",
      cta: "Reserve / Takeaway"
    },
    hero: {
      eyebrow: "Campus Theme Café in Johor Bahru",
      title: "Welcome Back to High School Kopitiam",
      subtitle: "Coffee, comfort food, and the school days you kept somewhere soft.",
      description:
        "This is not just a café. It is a campus built for old memories, warm tables, and little moments that feel familiar the second you walk in.",
      primary: "Enter Campus",
      secondary: "View Menu",
      noticeTitle: "Today’s Class Hours",
      noticeDays: "Monday - Sunday",
      noticeTime: "08:00 AM - 06:00 PM",
      campus: "JB Campus",
      campuses: ["Mount Austin", "Gaya"]
    },
    about: {
      title: "The Place We Grew Up With",
      subtitle: "Back to the days we never forgot.",
      paragraphs: [
        "High School Kopitiam is a campus-themed café inspired by classrooms, chalkboards, old desks, school corners, and the quiet warmth of food shared with people you care about.",
        "Come for a meal, stay for the feeling. It is made for family dinners, coffee dates, photo moments, and those afternoons when you simply want to sit down and remember who you used to be."
      ],
      quote: "Youth may graduate, but memories never leave school."
    },
    campus: {
      title: "A Café Inside Your School Memories",
      subtitle: "A café hidden inside your school memories.",
      paragraphs: [
        "Some places stay with us not because they are grand, but because they bring back a version of ourselves we almost forgot.",
        "Here, chalkboards, desks, notebooks, paper planes, swings, and sunlight come together in a dining space that feels calm, photogenic, and quietly emotional."
      ],
      polaroids: ["After-school light", "Old study desk", "Memory corner"]
    },
    people: {
      founder: {
        title: "The Founder’s Heart",
        subtitle: "The heart behind the school.",
        role: "Founder Yvonne",
        paragraphs: [
          "Founded by Yvonne, High School Kopitiam was created with a simple belief: a good café should serve more than food. It should give people a place to make memories.",
          "She hopes every guest can pause the rush of daily life and return, even briefly, to the easy laughter and innocence of school days."
        ],
        quote: "We are not only building a café. We are building a campus people want to come back to."
      },
      chef: {
        title: "Every Dish Deserves Care",
        subtitle: "Crafted by experience, served with heart.",
        role: "Senior Chef Lam",
        paragraphs: [
          "The menu is led by Senior Chef Lam, whose years of kitchen experience bring steadiness, care, and flavour to every plate.",
          "From mains and light bites to desserts and drinks, each item is prepared to feel comforting, memorable, and worth returning for."
        ],
        quote: "A truly good dish is the one you still think about after the table is cleared."
      }
    },
    food: {
      title: "Today’s Canteen Favourites",
      subtitle: "Signature food for slow campus days.",
      intro:
        "From coffee and brunch to mains, desserts, and house drinks, the menu is made for family meals, friendly catch-ups, afternoon tea, and photos worth keeping.",
      button: "View Full Menu",
      badge: "Principal’s Pick",
      items: [
        { name: "Charcoal Signature Sandwich", sub: "Warm, crisp, and full of comfort", category: "Principal’s Pick", image: imageNames.charcoal },
        { name: "Signature Latte", sub: "A smooth cup for slow afternoons", category: "Signature Coffee", image: imageNames.coffee },
        { name: "School Burger", sub: "A nostalgic canteen favourite", category: "Canteen Mains", image: imageNames.burger },
        { name: "Creamy Pasta", sub: "Rich, mellow, and familiar", category: "After School Mains", image: imageNames.pasta },
        { name: "Classic Chicken Chop", sub: "A satisfying plate with heart", category: "Canteen Mains", image: imageNames.pasta },
        { name: "Signature Fried Rice", sub: "Comfort food with wok warmth", category: "Principal’s Pick", image: imageNames.burger },
        { name: "Chocolate Cake", sub: "A sweet finish after class", category: "After School Desserts", image: imageNames.charcoal },
        { name: "Fruit Tea", sub: "Bright, fresh, and easy to share", category: "School Drinks", image: imageNames.coffee }
      ]
    },
    why: {
      title: "Why Guests Keep Coming Back",
      subtitle: "More than food. It is a feeling.",
      items: [
        { title: "Campus-Themed Interior", text: "Chalkboards, desks, paper planes, and school details create a dining experience filled with memory." },
        { title: "Made for Photos", text: "Every corner feels like a page from a school yearbook, perfect for gatherings and social sharing." },
        { title: "Experienced Kitchen Team", text: "Chef Lam leads the menu with food that is as thoughtful as the setting." },
        { title: "Two JB Campuses", text: "Visit us at Mount Austin or Gaya, and choose the campus closest to your day." }
      ]
    },
    branches: {
      title: "Our Campuses",
      subtitle: "Choose your campus.",
      map: "Google Map",
      whatsapp: "WhatsApp Booking",
      items: [
        { name: "Mount Austin Campus", sub: "Mount Austin Branch", address: "57, Jalan Austin Heights 8/5, 81100 Johor Bahru, Johor Darul Ta'zim", image: imageNames.mountAustin },
        { name: "Gaya Campus", sub: "Gaya Branch", address: "57, Jalan Austin Heights 8/5, 81100 Johor Bahru, Johor Darul Ta'zim", image: imageNames.gaya }
      ]
    },
    gallery: {
      title: "Campus Memory Book",
      subtitle: "Moments worth keeping.",
      intro: "Some photos are not taken to prove where we went. They are taken to remember how we felt.",
      categories: ["Environment", "Food", "Friends", "School Corners"],
      items: [
        { title: "Afternoon Classroom", category: "Environment", image: imageNames.hero },
        { title: "Canteen Favourite", category: "Food", image: imageNames.charcoal },
        { title: "Beside the Swing", category: "School Corners", image: imageNames.swing },
        { title: "Coffee Hour", category: "Food", image: imageNames.coffee },
        { title: "Mount Austin", category: "Friends", image: imageNames.mountAustin },
        { title: "Gaya", category: "Environment", image: imageNames.gaya }
      ]
    },
    reviews: {
      title: "Notes From Our Classmates",
      subtitle: "What our classmates say.",
      label: "Classmate note",
      items: [
        "I came for coffee, but somehow found a little piece of my youth.",
        "The setting is full of character, the food is comforting, and it is perfect for gathering with friends.",
        "The campus theme feels thoughtful. The paper planes, chalkboards, and desks bring everything together."
      ],
    },
    finalStory: {
      title: "Ride Out, Slowly.",
      subtitle: "Every visit is a little journey back.",
      bellLine: "When the bell rings, we will meet at High School Kopitiam.",
      paragraphs: [
        "Maybe we left school years ago, but the feeling of those days still knows the way home.",
        "Come in for coffee, food, and an old conversation with friends. You may realise youth was never as far away as you thought."
      ],
      button: "Welcome Back, Classmate"
    },
    contact: {
      title: "Contact The Office",
      subtitle: "Reservation, gathering, or a little question.",
      intro: "For reservations, menu enquiries, private gatherings, or anything you would like to ask, we would be happy to hear from you.",
      fields: { name: "Name", phone: "Phone", branch: "Branch", message: "Message" },
      whatsapp: "WhatsApp Us",
      send: "Send Message",
      placeholders: {
        whatsapp: "016-8863621",
        facebook: "https://www.facebook.com/profile.php?id=100063529394723",
        instagram: "https://www.instagram.com/highschoolkopitiam"
      },
      social: [
        { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100063529394723" },
        { label: "Instagram", href: "https://www.instagram.com/highschoolkopitiam" },
        { label: "TikTok", href: "#" },
        { label: "Google Review", href: "#" }
      ],
      copyright: "© 2026 High School Kopitiam. All Rights Reserved."
    }
  }
} as const;
