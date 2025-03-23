interface Logo {
    name: string;
    logo: string;
    className: string;
  }
  
  interface Logos8Props {
    title?: string;
    subtitle?: string;
    logos?: Logo[];
  }
  
  const Logos8 = ({
    title = "Chứng Chỉ Tiếng Anh Được Công Nhận",
    subtitle = "Chương trình của chúng tôi được thiết kế để giúp bạn đạt được các chứng chỉ tiếng Anh được công nhận trên toàn cầu, mở ra nhiều cơ hội học tập và nghề nghiệp.",
    logos = [
      {
        name: "IELTS",
        logo: "logo/ielts.svg",
        className: "h-7 w-auto",
      },
      {
        name: "MICHIGAN",
        logo: "logo/MICHIGAN.png",
        className: "h-5 w-auto",
      },
      {
        name: "TOEFL",
        logo: "logo/toefl.png",
        className: "h-6 w-auto",
      },
      {
        name: "CAMBRIDGE",
        logo: "logo/cambridge.png",
        className: "h-5 w-auto",
      },
      {
        name: "Pearson",
        logo: "logo/Pearson.webp",
        className: "h-6 w-auto",
      },
    ],
  }: Logos8Props) => {
    return (
      <div className="py-16 inner-section">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="mt-1 text-muted-foreground">{subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-12">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  width={109}
                  height={48}
                  className={logo.className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export { Logos8 };
  