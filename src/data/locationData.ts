
export interface LocationData {
  name: string;
  state: string;
  title: string;
  description: string;
  localFeatures: string[];
  phoneNumber?: string;
  email?: string;
}

export const locationData: Record<string, LocationData> = {
  texas: {
    name: "Texas",
    state: "TX",
    title: "Best Web Development Agency in Texas",
    description: "Leading web development services across the Lone Star State. From Austin's tech scene to Houston's business district, we deliver exceptional digital solutions.",
    localFeatures: [
      "Serving Austin, Houston, Dallas, San Antonio",
      "Local Texas business expertise",
      "Oil & Gas industry web solutions",
      "E-commerce for Texas retailers"
    ],
    phoneNumber: "(555) 123-4567",
    email: "hello@devcraft.com"
  },
  california: {
    name: "California",
    state: "CA", 
    title: "Top Web Developers in California",
    description: "Premium web development services from Silicon Valley to Los Angeles. We understand California's innovative tech landscape.",
    localFeatures: [
      "Silicon Valley tech expertise",
      "Los Angeles creative solutions", 
      "San Francisco startup experience",
      "Entertainment industry specialists"
    ],
    phoneNumber: "(555) 123-4567",
    email: "hello@devcraft.com"
  },
  newyork: {
    name: "New York",
    state: "NY",
    title: "Leading Web Development in New York",
    description: "Cutting-edge web solutions for the Big Apple. From Wall Street fintech to Brooklyn startups, we've got you covered.",
    localFeatures: [
      "Wall Street fintech solutions",
      "NYC startup expertise",
      "Fashion & media industry focus",
      "24/7 support across all boroughs"
    ],
    phoneNumber: "(555) 123-4567", 
    email: "hello@devcraft.com"
  },
  florida: {
    name: "Florida",
    state: "FL",
    title: "Best Web Developers in Florida",
    description: "Sunshine State web development services. From Miami's vibrant scene to Orlando's tourism industry.",
    localFeatures: [
      "Miami beach business solutions",
      "Orlando tourism websites",
      "Tampa Bay area expertise", 
      "Real estate & hospitality focus"
    ],
    phoneNumber: "(555) 123-4567",
    email: "hello@devcraft.com"
  }
};
