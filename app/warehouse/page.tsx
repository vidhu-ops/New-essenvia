import { ConsoleLayout } from "@/components/essentra/ConsoleLayout";
import { OrderStatusButton } from "@/components/warehouse/OrderStatusButton";
import { prisma } from "@/lib/prisma";

export default async function WarehousePage() {
  const orders = await prisma.order.findMany({
    include: {
      customer: true,
      lines: { include: { sku: { include: { brand: true } } } },
    },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return (
    <ConsoleLayout title="Warehouse" allowed={["WAREHOUSE", "ADMIN", "MANAGER"]}>
      <h1 className="font-display text-2xl text-ink">Fulfillment</h1>
      <p className="mt-2 text-sm text-ink-muted">Pick, pack, and update delivery status. Barcode scanning can plug in here.</p>
      <ul className="mt-8 space-y-4">
        {orders.map((o) => (
          <li key={o.id} className="rounded-lg border border-line bg-paper-warm p-5">
            <div className="flex flex-wrap justify-between gap-2">
              <span className="font-mono font-medium">{o.orderNumber}</span>
              <span className="text-sm text-ink-muted">{o.status.replaceAll("_", " ")}</span>
            </div>
            <p className="mt-1 text-sm">
              {o.customer.firstName} {o.customer.lastName} · {o.customer.city}
            </p>
            <ul className="mt-3 space-y-1 text-sm text-ink-muted">
              {o.lines.map((l) => (
                <li key={l.id}>
                  {l.sku.brand.name} {l.sku.productName} × {l.quantity} · bin {l.sku.warehouseBin}
                </li>
              ))}
            </ul>
            <OrderStatusButton orderId={o.id} status={o.status} />
          </li>
        ))}
        {orders.length === 0 && <p className="text-ink-muted">No orders yet — complete a test checkout on the website.</p>}
      </ul>
    </ConsoleLayout>
  );
}
