export type Frequency = "light" | "typical" | "heavy";

export type BuildSelections = {
  householdSize: "1" | "2" | "3" | "4" | "5+";
  laundryFrequency: Frequency;
  dishesFrequency: Frequency;
  cleaningFrequency: Frequency;
  laundryBrand: "tide" | "gain";
  /** Optional category slugs beyond the core auto basket */
  extras: string[];
};

export const defaultBuildSelections: BuildSelections = {
  householdSize: "2",
  laundryFrequency: "typical",
  dishesFrequency: "typical",
  cleaningFrequency: "typical",
  laundryBrand: "tide",
  extras: [],
};

export const extraCategories: { slug: string; label: string; hint: string }[] = [
  { slug: "fabric-softener", label: "Fabric softener", hint: "Optional — add if you always use it" },
  { slug: "wipes", label: "Extra disinfecting wipes", hint: "Second pack for busy kitchens" },
  { slug: "garbage-large", label: "Extra large garbage bags", hint: "Basement or yard bins" },
];
