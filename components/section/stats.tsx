import { ArrowRight } from "lucide-react";

interface Stats8Props {
  heading?: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
  stats?: Array<{
    id: string;
    value: string;
    label: string;
  }>;
}

const Stats8 = ({
  heading = "Những con số ấn tượng về giáo dục",
  description = "Giúp học sinh và giáo viên tiếp cận những phương pháp học tập hiệu quả hơn",
  stats = [
    {
      id: "stat-1",
      value: "95%+",
      label: "Học sinh tham gia học tập tích cực hơn",
    },
    {
      id: "stat-2",
      value: "1.2tr",
      label: "Mức tiết kiệm trung bình mỗi năm",
    },
    {
      id: "stat-3",
      value: "300+",
      label: "Trường học và đại học đã hợp tác",
    },
    {
      id: "stat-4",
      value: "98.7%",
      label: "Giáo viên và học sinh hài lòng",
    },
  ],
}: Stats8Props) => {
  return (
    <div className="py-32 inner-section">
      <div className="container" data-aos="fade-up">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-4xl">{heading}</h2>
          <p>{description}</p>
        </div>
        <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-5">
              <div className="text-6xl font-bold">{stat.value}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Stats8 };
