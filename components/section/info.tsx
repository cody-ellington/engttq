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
        title: "Built for immersive learning and real-time interaction",
        subtitle: "FOR OFFLINE COURSE",
        description:
          "Experience face-to-face learning with expert instructors in a structured classroom environment. Our offline courses provide hands-on activities, group discussions, and personalized mentorship to enhance your skills effectively.",
        image: "img/grad-student-with-cap-and-diploma.jpg",
      },
      {
        id: "feature-2",
        title: "Designed for flexibility and convenience",
        subtitle: "FOR OFFLINE COURSE",
        description:
          "Learn anytime, anywhere with our interactive online courses. Access high-quality video lectures, live sessions, and practical exercises tailored to your pace and schedule.",
        image: "img/three-students-holding-diplomas.jpg",
      },
    ],
  }: Feature13Props) => {
    return (
      <section className="py-16">
        <div className="container">
          {/* <h2 className="text-3xl font-medium lg:text-4xl">{heading}</h2> */}
          <div className=" grid gap-9 lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col justify-between rounded-lg bg-[#d0e6ff]" data-aos="fade-up"
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
      </section>
    );
  };
  
  export { Feature13 };
  