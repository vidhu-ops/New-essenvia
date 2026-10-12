export type BuildSelections = {
  householdSize: string;
  laundryBrand: "tide" | "gain" | "other";
  laundryFormat: "liquid" | "pods";
  toiletPaperQty: "normal" | "high";
  paperTowelQty: "normal" | "high";
  fabricSoftener: boolean;
};

export const defaultBuildSelections: BuildSelections = {
  householdSize: "2",
  laundryBrand: "tide",
  laundryFormat: "liquid",
  toiletPaperQty: "normal",
  paperTowelQty: "normal",
  fabricSoftener: true,
};
