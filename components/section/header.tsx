import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "logo.png",
    alt: "logo",
    title: "",
  },
  menu = [
    { title: "Trang chủ", url: "/" },
    {
      title: "Khoá học",
      url: "/course",
      // items: [
      //   {
      //     title: "Grade 1",
      //     description: "The latest industry news, updates, and info",
      //     icon: <Book className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      //   {
      //     title: "Grade 2",
      //     description: "Our mission is to innovate and empower the world",
      //     icon: <Trees className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      //   {
      //     title: "Grade 3",
      //     description: "Browse job listing and discover our workspace",
      //     icon: <Sunset className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      //   {
      //     title: "Grade 4",
      //     description:
      //       "Get in touch with our support team or visit our community forums",
      //     icon: <Zap className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Chứng chỉ",
      url: "/certificate",
      // items: [
      //   {
      //     title: "TOEIC",
      //     description: "Get all the answers you need right here",
      //     icon: <Zap className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      //   {
      //     title: "TOEFL",
      //     description: "We are here to help you with any questions you have",
      //     icon: <Sunset className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      //   {
      //     title: "IELTS",
      //     description: "Check the current status of our services and APIs",
      //     icon: <Trees className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      //   {
      //     title: "CAMBRIDGE",
      //     description: "Our terms and conditions for using our services",
      //     icon: <Book className="size-5 shrink-0" />,
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Về chúng tôi",
      url: "/about",
    },
  ],
  auth = {
    login: { text: "Liên hệ", url: "/contact" },
    signup: { text: "Liên hệ", url: "/contact" },
  },
}: Navbar1Props) => {
  return (
    <div className="p-4 w-[80%] mx-auto">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a
              href={logo.url}
              className="flex items-center gap-2 text-blue-400"
            >
              <img src={logo.src} className="w-12" alt={logo.alt} />
              <span className="text-lg font-semibold">{logo.title}</span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild size="lg">
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg font-semibold">{logo.title}</span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="w-8" alt={logo.alt} />
                      <span className="text-lg font-semibold">
                        {logo.title}
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.text}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div>{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
