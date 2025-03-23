import {
    DollarSign,
    MessagesSquare,
    PersonStanding,
    Timer,
    Zap,
    ZoomIn,
  } from "lucide-react";
  
  interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
  }
  
  interface Feature17Props {
    heading?: string;
    subheading?: string;
    features?: Feature[];
  }
  
  const Feature17 = ({
    heading = "Giá trị cốt lõi",
    subheading = "Features",
    features = [
      {
        title: "Chất lượng giảng dạy",
        description:
          "Cam kết cung cấp những khóa học chất lượng cao với đội ngũ giảng viên giàu kinh nghiệm và chuyên môn, giúp học viên phát triển toàn diện kỹ năng tiếng Anh.",
        icon: <Timer className="size-4 md:size-6" />,
      },
      {
        title: "Phương pháp học sáng tạo",
        description:
          "Áp dụng các phương pháp học hiện đại, sáng tạo và dễ tiếp cận, giúp học viên cảm thấy hứng thú và tiếp thu nhanh chóng.",
        icon: <Zap className="size-4 md:size-6" />,
      },
      {
        title: "Môi trường học tập thân thiện",
        description:
          "Tạo dựng một môi trường học tập thân thiện, tích cực và khuyến khích sự giao tiếp, trao đổi giữa học viên và giảng viên.",
        icon: <ZoomIn className="size-4 md:size-6" />,
      },
      {
        title: "Đào tạo theo nhu cầu cá nhân",
        description:
          "Chú trọng vào việc phát triển khả năng ngôn ngữ của mỗi học viên dựa trên mục tiêu và nhu cầu học tập riêng biệt.",
        icon: <PersonStanding className="size-4 md:size-6" />,
      },
      {
        title: "Đội ngũ giảng viên chuyên nghiệp",
        description:
          "Đội ngũ giảng viên của chúng tôi không chỉ giỏi chuyên môn mà còn luôn tận tâm và hỗ trợ học viên trong suốt quá trình học.",
        icon: <DollarSign className="size-4 md:size-6" />,
      },
      {
        title: "Cam kết phát triển bền vững",
        description:
          "Chúng tôi luôn nỗ lực không ngừng để nâng cao chất lượng đào tạo, đáp ứng nhu cầu của học viên và đóng góp vào sự phát triển của cộng đồng.",
        icon: <MessagesSquare className="size-4 md:size-6" />,
      },
    ],
  }: Feature17Props) => {
    return (
      <section className="py-16 inner-section">
        <div className="container mx-auto max-w-screen-xl">
          <p className="mb-4 text-xs text-muted-foreground md:pl-5">
            {subheading}
          </p>
          <h2 className="text-3xl font-medium md:pl-5 lg:text-4xl">{heading}</h2>
          <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
            {features.map((feature, idx) => (
              <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
                <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="font-medium md:mb-2 md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export { Feature17 };
  