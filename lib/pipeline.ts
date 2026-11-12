export const PRODUCTION_STAGES = ["QUEUED", "PACKING", "QC", "READY_FOR_DISPATCH"] as const;
export type ProductionStage = (typeof PRODUCTION_STAGES)[number];

export const DELIVERY_STAGES = ["UNASSIGNED", "ASSIGNED", "OUT_FOR_DELIVERY", "DELIVERED", "FAILED"] as const;
export type DeliveryStage = (typeof DELIVERY_STAGES)[number];

export function nextProductionStage(current: string): ProductionStage | null {
  const i = PRODUCTION_STAGES.indexOf(current as ProductionStage);
  if (i < 0 || i >= PRODUCTION_STAGES.length - 1) return null;
  return PRODUCTION_STAGES[i + 1];
}

export function nextDeliveryStage(current: string): DeliveryStage | null {
  const i = DELIVERY_STAGES.indexOf(current as DeliveryStage);
  if (i < 0 || i >= DELIVERY_STAGES.length - 1) return null;
  return DELIVERY_STAGES[i + 1];
}
