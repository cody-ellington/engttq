interface Feature {
    title: string;
    description: string;
    image: string;
  }
  
  interface Feature166Props {
    heading: string;
    description?: string;
    feature1?: Feature;
    feature2?: Feature;
    feature3?: Feature;
    feature4?: Feature;
  }
  
  const Feature166 = ({
    heading = "Blocks built with Shadcn & Tailwind",
    description = "Phát huy tối đa tiềm năng của bạn cùng Trung tâm Anh ngữ Tân Thanh Quang.",
    feature1 = {
      title: "Lớp học tương tác và sinh động",
      description:
        "Trải nghiệm học tập trực quan với phương pháp giảng dạy hiện đại, lấy người học làm trung tâm.",
      image: "img/taking-notes-at-team-meeting.jpg",
    },
    feature2 = {
      title: "Giáo viên giàu kinh nghiệm và được chứng nhận",
      description:
        "Đội ngũ giảng viên chuyên nghiệp, giảng dạy hiệu quả cho mọi đối tượng học viên.",
      image: "img/thoughtful-students-talk.jpg",
    },
    feature3 = {
      title: "Lịch học linh hoạt cho mọi người",
      description:
        "Dễ dàng sắp xếp thời gian học phù hợp với nhu cầu cá nhân.",
      image: "img/four-students-study-flatlay.jpg",
    },
    feature4 = {
      title: "Chương trình IELTS, TOEIC và giao tiếp",
      description:
        "Học tập hiệu quả với lộ trình được tối ưu hóa, giúp bạn đạt mục tiêu nhanh chóng.",
      image: "img/student-back-to-school-supplies.jpg",
    },
  }: Feature166Props) => {
    return (
      <div className="py-16 inner-section">
        <div className="container">
          <div className="mb-24 flex flex-col items-center gap-6" data-aos="flip-left">
            <h1 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
              {heading}
            </h1>
            <p className="text-center text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
              {description}
            </p>
          </div>
          <div className="relative flex justify-center" data-aos="zoom-in">
            <div className="relative flex w-full flex-col border border-muted2 md:w-1/2 lg:w-full">
              <div className="relative flex flex-col lg:flex-row">
                <div className="flex flex-col justify-between border-b border-solid border-muted2 p-10 lg:w-3/5 lg:border-b-0 lg:border-r">
                  <h2 className="text-xl font-semibold">{feature1.title}</h2>
                  <p className="text-muted-foreground">{feature1.description}</p>
                  <img
                    src={feature1.image}
                    alt={feature1.title}
                    className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                  />
                </div>
                <div className="flex flex-col justify-between p-10 lg:w-2/5">
                  <h2 className="text-xl font-semibold">{feature2.title}</h2>
                  <p className="text-muted-foreground">{feature2.description}</p>
                  <img
                    src={feature2.image}
                    alt={feature2.title}
                    className="mt-8 aspect-[1.45] h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="relative flex flex-col border-t border-solid border-muted2 lg:flex-row">
                <div className="flex flex-col justify-between border-b border-solid border-muted2 p-10 lg:w-2/5 lg:border-b-0 lg:border-r">
                  <h2 className="text-xl font-semibold">{feature3.title}</h2>
                  <p className="text-muted-foreground">{feature3.description}</p>
                  <img
                    src={feature3.image}
                    alt={feature3.title}
                    className="mt-8 aspect-[1.45] h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-10 lg:w-3/5">
                  <h2 className="text-xl font-semibold">{feature4.title}</h2>
                  <p className="text-muted-foreground">{feature4.description}</p>
                  <img
                    src={feature4.image}
                    alt={feature4.title}
                    className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export { Feature166 };
  