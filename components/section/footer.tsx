interface MenuItem {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  }
  
  interface Footer2Props {
    logo?: {
      url: string;
      src: string;
      alt: string;
      title: string;
    };
    tagline?: string;
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
      text: string;
      url: string;
    }[];
  }
  
  const Footer2 = ({
    logo = {
      src: "img/logo-white.png",
      alt: "blocks for shadcn/ui",
      title: "",
      url: "/",
    },
    tagline = "",
    menuItems = [
      {
        title: "Khoá học",
        links: [
          { text: "Lớp 1", url: "#" },
          { text: "Lớp 2", url: "#" },
          { text: "Lớp 3", url: "#" },
          { text: "Lớp 4", url: "#" },
          { text: "Lớp 5", url: "#" },
        ],
      },
      {
        title: "Chứng chỉ",
        links: [
          { text: "TOEIC", url: "#" },
          { text: "TOEFL", url: "#" },
          { text: "IELTS", url: "#" },
          { text: "CAMBRIDGE", url: "#" },
        ],
      },
      {
        title: "Tài nguyên",
        links: [
          { text: "Câu hỏi thường gặp", url: "#" },
          { text: "Liên hệ", url: "#" },
        ],
      },
      {
        title: "Mạng xã hội",
        links: [
          { text: "Facebook", url: "#" },
          { text: "Instagram", url: "#" },
        ],
      },
    ],
    copyright = "© 2025 Copyright. All rights reserved.",
    bottomLinks = [
      { text: "Terms and Conditions", url: "#" },
      { text: "Privacy Policy", url: "#" },
    ],
  }: Footer2Props) => {
    return (
      <div className="pt-16 pb-2 footer-inner-section">
        <div className="container">
          <footer>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              <div className="col-span-2">
                <div className="flex items-center gap-2 lg:justify-start">
                  <a href="/">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      title={logo.title}
                      className="h-52"
                    />
                  </a>
                  <p className="text-xl font-semibold">{logo.title}</p>
                </div>
                <p className="mt-4 font-bold">{tagline}</p>
              </div>
              {menuItems.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium"
                      >
                        <a href={link.url}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
              <p>{copyright}</p>
              <ul className="flex gap-4">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx} className="underline hover:text-primary">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </footer>
        </div>
      </div>
    );
  };
  
  export { Footer2 };
  