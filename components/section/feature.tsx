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
    description = "Unlock your full potential with Tân Thanh Quang English Center. Expert-led courses, interactive learning, and personalized support for all ages.",
    feature1 = {
      title: "Interactive and engaging classes",
      description:
        "Creating intuitive user experiences with modern interface design principles and user-centered methodologies.",
      image: "img/taking-notes-at-team-meeting.jpg",
    },
    feature2 = {
      title: "Experienced and certified teachers",
      description:
        "Building websites that look and function perfectly across all devices and screen sizes.",
      image: "img/thoughtful-students-talk.jpg",
    },
    feature3 = {
      title: "Flexible schedules for all learners",
      description:
        "Seamlessly incorporating your brand identity into every aspect of your website's design.",
      image: "img/four-students-study-flatlay.jpg",
    },
    feature4 = {
      title: "IELTS, TOEIC, and communication-focused programs",
      description:
        "Ensuring fast loading times and smooth performance through optimized code and assets.",
      image: "img/student-back-to-school-supplies.jpg",
    },
  }: Feature166Props) => {
    return (
      <section className="py-16">
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
      </section>
    );
  };
  
  export { Feature166 };
  