import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.orderLineItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.subscriptionLineItem.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.user.deleteMany();
  await prisma.productSku.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.category.deleteMany();
  await prisma.subscriptionPackage.deleteMany();

  const hash = await bcrypt.hash("essentra-demo", 10);

  await prisma.user.createMany({
    data: [
      { email: "admin@essentra.ca", passwordHash: hash, role: "ADMIN", name: "Admin Owner" },
      { email: "rep@essentra.ca", passwordHash: hash, role: "SALES_REP", name: "Sam Rep", repTerritory: "Toronto 4" },
      { email: "warehouse@essentra.ca", passwordHash: hash, role: "WAREHOUSE", name: "Warehouse Lead" },
    ],
  });

  await prisma.subscriptionPackage.createMany({
    data: [
      {
        slug: "essential",
        name: "Essentra Essential",
        priceCents: 8499,
        minInternalCostCents: 0,
        maxInternalCostCents: 6200,
        sortOrder: 1,
      },
      {
        slug: "family",
        name: "Essentra Family",
        priceCents: 9499,
        minInternalCostCents: 6201,
        maxInternalCostCents: 8200,
        sortOrder: 2,
      },
      {
        slug: "plus",
        name: "Essentra Plus",
        priceCents: 10499,
        minInternalCostCents: 8201,
        maxInternalCostCents: 999999,
        sortOrder: 3,
      },
    ],
  });

  const categories = [
    { slug: "laundry", name: "Laundry detergent", sortOrder: 1 },
    { slug: "toilet-paper", name: "Toilet paper", sortOrder: 2 },
    { slug: "paper-towels", name: "Paper towels", sortOrder: 3 },
    { slug: "dishwasher", name: "Dishwasher pods", sortOrder: 4 },
    { slug: "dish-soap", name: "Dish soap", sortOrder: 5 },
    { slug: "garbage-large", name: "Large garbage bags", sortOrder: 6 },
    { slug: "garbage-kitchen", name: "Kitchen garbage bags", sortOrder: 7 },
    { slug: "fabric-softener", name: "Fabric softener", sortOrder: 8 },
    { slug: "cleaner", name: "All-purpose cleaner", sortOrder: 9 },
    { slug: "wipes", name: "Disinfecting wipes", sortOrder: 10 },
  ];
  for (const c of categories) {
    await prisma.category.create({ data: c });
  }

  const brands = ["Tide", "Gain", "Charmin", "Bounty", "Cascade", "Dawn", "Glad", "Hefty"];
  for (const name of brands) {
    await prisma.brand.create({ data: { name } });
  }

  const cat = async (slug: string) => prisma.category.findUniqueOrThrow({ where: { slug } });
  const brand = async (name: string) => prisma.brand.findUniqueOrThrow({ where: { name } });

  const skus: Parameters<typeof prisma.productSku.create>[0]["data"][] = [
    {
      skuCode: "TD-L-LIQ",
      categoryId: (await cat("laundry")).id,
      brandId: (await brand("Tide")).id,
      productName: "Tide liquid detergent",
      sizeLabel: "Large",
      wholesaleCostCents: 1249,
      customerDescription: "Tide liquid, large",
      inventoryOnHand: 120,
      warehouseBin: "A-04",
    },
    {
      skuCode: "GN-L-LIQ",
      categoryId: (await cat("laundry")).id,
      brandId: (await brand("Gain")).id,
      productName: "Gain liquid detergent",
      sizeLabel: "Large",
      wholesaleCostCents: 1099,
      customerDescription: "Gain liquid, large",
      inventoryOnHand: 80,
      warehouseBin: "A-05",
    },
    {
      skuCode: "CH-24",
      categoryId: (await cat("toilet-paper")).id,
      brandId: (await brand("Charmin")).id,
      productName: "Charmin Ultra Soft",
      sizeLabel: "24 rolls",
      wholesaleCostCents: 1899,
      customerDescription: "Charmin Ultra Soft, 24 rolls",
      inventoryOnHand: 200,
      warehouseBin: "B-11",
    },
    {
      skuCode: "BN-6",
      categoryId: (await cat("paper-towels")).id,
      brandId: (await brand("Bounty")).id,
      productName: "Bounty paper towels",
      sizeLabel: "6 rolls",
      wholesaleCostCents: 899,
      customerDescription: "Bounty, 6 rolls",
      inventoryOnHand: 150,
      warehouseBin: "B-14",
    },
    {
      skuCode: "CS-POD",
      categoryId: (await cat("dishwasher")).id,
      brandId: (await brand("Cascade")).id,
      productName: "Cascade pods",
      sizeLabel: "Large pack",
      wholesaleCostCents: 749,
      customerDescription: "Cascade pods, large pack",
      inventoryOnHand: 90,
      warehouseBin: "C-02",
    },
    {
      skuCode: "DW-STD",
      categoryId: (await cat("dish-soap")).id,
      brandId: (await brand("Dawn")).id,
      productName: "Dawn dish soap",
      sizeLabel: "Standard",
      wholesaleCostCents: 399,
      customerDescription: "Dawn dish soap",
      inventoryOnHand: 110,
      warehouseBin: "C-09",
    },
    {
      skuCode: "GL-LG",
      categoryId: (await cat("garbage-large")).id,
      brandId: (await brand("Glad")).id,
      productName: "Glad large garbage bags",
      sizeLabel: "Large box",
      wholesaleCostCents: 549,
      customerDescription: "Glad large garbage bags",
      inventoryOnHand: 70,
      warehouseBin: "D-03",
    },
    {
      skuCode: "GL-KT",
      categoryId: (await cat("garbage-kitchen")).id,
      brandId: (await brand("Glad")).id,
      productName: "Glad kitchen bags",
      sizeLabel: "Medium",
      wholesaleCostCents: 449,
      customerDescription: "Glad kitchen bags",
      inventoryOnHand: 85,
      warehouseBin: "D-04",
    },
    {
      skuCode: "SF-LS",
      categoryId: (await cat("fabric-softener")).id,
      brandId: (await brand("Gain")).id,
      productName: "Gain fabric softener",
      sizeLabel: "Large",
      wholesaleCostCents: 599,
      customerDescription: "Gain fabric softener",
      inventoryOnHand: 60,
      warehouseBin: "A-08",
    },
    {
      skuCode: "CL-AP",
      categoryId: (await cat("cleaner")).id,
      brandId: (await brand("Hefty")).id,
      productName: "Multi-surface cleaner",
      sizeLabel: "Spray",
      wholesaleCostCents: 349,
      customerDescription: "All-purpose cleaner",
      inventoryOnHand: 95,
      warehouseBin: "E-01",
    },
    {
      skuCode: "WP-80",
      categoryId: (await cat("wipes")).id,
      brandId: (await brand("Hefty")).id,
      productName: "Disinfecting wipes",
      sizeLabel: "80 count",
      wholesaleCostCents: 499,
      customerDescription: "Disinfecting wipes, 80 count",
      inventoryOnHand: 100,
      warehouseBin: "E-02",
    },
  ];

  for (const data of skus) {
    await prisma.productSku.create({ data });
  }

  console.log("Seeded Essentra platform (demo password: essentra-demo)");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
