export const techStacks = [
  {
    description: "The React Framework for Production",
    title: "Next.js",
    src: "/next.svg",
    ctaText: "Learn More",
    ctaLink: "https://nextjs.org",
    content: () => {
      return (
        <p>
          Next.js is a powerful React framework that enables features like
          server-side rendering and static site generation. In this project, we
          use Next.js 15.1.6 with the new App Router, providing enhanced routing
          capabilities and improved performance.
          <br /> <br />
          The framework offers features like automatic code splitting, optimized
          image handling through the Image component, and built-in API routes.
          We leverage these features along with the latest React 19 to build a
          modern, performant web application.
        </p>
      );
    },
  },
  {
    description: "Utility-First CSS Framework",
    title: "Tailwind CSS",
    src: "/tailwind.svg",
    ctaText: "Learn More",
    ctaLink: "https://tailwindcss.com",
    content: () => {
      return (
        <p>
          Tailwind CSS is our choice for styling, providing a highly
          customizable and utility-first CSS framework. We use it in conjunction
          with shadcn/ui components for consistent design patterns.
          <br /> <br />
          The project utilizes Tailwind&apos;s features like dark mode support
          through next-themes, animations via tailwindcss-animate, and custom
          configurations for a unique design system. The combination with
          class-variance-authority and clsx enables dynamic and maintainable
          styling.
        </p>
      );
    },
  },
  {
    description: "UI Component Library",
    title: "shadcn/ui & Radix",
    src: "/shadcn.svg",
    ctaText: "Learn More",
    ctaLink: "https://ui.shadcn.com",
    content: () => {
      return (
        <p>
          Our UI is built using shadcn/ui components, which are based on Radix
          UI primitives. This combination provides accessible, customizable
          components that maintain consistency across the application.
          <br /> <br />
          We utilize various Radix UI components like dropdown menus and slots,
          styled with Tailwind CSS. The components are fully customizable and
          follow best practices for web accessibility and user interaction.
        </p>
      );
    },
  },
];
