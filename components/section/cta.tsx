import { Button } from "@/components/ui/button";

interface Cta11Props {
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Cta11 = ({
  heading = "Ready to elevate your learning?",
  description = "Join thousands of students and educators using our platform to unlock new opportunities.",
  buttons = {
    primary: {
      text: "Liên hệ",
      url: "/contact",
    },
    secondary: {
      text: "Các khoá học",
      url: "/course",
    },
  },
}: Cta11Props) => {
  return (
    <div className="py-16 inner-section">
      <div className="container">
        <div className="flex flex-col items-center rounded-lg bg-[#d0e6ff] p-8 text-center md:rounded-xl lg:p-16">
          <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            {buttons.secondary && (
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
            {buttons.primary && (
              <Button className="w-full sm:w-auto" asChild>
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cta11 };
