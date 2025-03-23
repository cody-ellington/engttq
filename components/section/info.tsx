interface Feature {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
  }
  
  interface Feature13Props {
    heading?: string;
    features?: Feature[];
  }
  
  const Feature13 = ({
    heading = "A better way to build websites",
    features = [
      {
        id: "feature-1",
        title: "Chuyên sâu, tương tác thực tế",
        subtitle: "KHÓA HỌC OFFLINE",
        description:
          "Trải nghiệm học trực tiếp với giảng viên giàu kinh nghiệm trong môi trường lớp học bài bản. Khóa học offline của chúng tôi mang đến các hoạt động thực hành, thảo luận nhóm và hướng dẫn cá nhân giúp nâng cao kỹ năng hiệu quả.",
        image: "img/BI1.jpg",
      },
      {
        id: "feature-2",
        title: "Thiết kế linh hoạt, tiện lợi",
        subtitle: "KHOÁ HỌC ONLINE",
        description:
          "Học mọi lúc, mọi nơi với các khóa học trực tuyến tương tác. Truy cập bài giảng video chất lượng cao, lớp học trực tuyến và bài tập thực hành phù hợp với tiến độ học tập của bạn.",
        image: "img/BI2.jpg",
      },
    ],
  }: Feature13Props) => {
    return (
      <div className="py-16 inner-section">
        <div className="container">
          {/* <h2 className="text-3xl font-medium lg:text-4xl">{heading}</h2> */}
          <div className=" grid gap-9 lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col justify-between rounded-lg bg-[#f1f5f6]" data-aos="fade-up"
              >
                <div className="flex justify-between gap-10 border-b">
                  <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
                    <p className="text-xs text-muted-foreground">
                      {feature.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-4xl">{feature.title}</h3>
                  </div>
                  <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 text-muted-foreground md:p-8">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export { Feature13 };
  