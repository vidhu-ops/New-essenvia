/**
 * One distinct image per SKU — count/size in copy must match the photo metaphor (no 14-pack using 28-pack art).
 */
export const productImageBySku: Record<string, { src: string; alt: string }> = {
  "TD-L-LIQ": {
    src: "https://images.unsplash.com/photo-1610557892470-55d9e80d0ae5?auto=format&fit=crop&w=400&q=80",
    alt: "Single large bottle of liquid laundry detergent",
  },
  "GN-L-LIQ": {
    src: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80",
    alt: "Gain liquid laundry detergent bottle",
  },
  "CH-12": {
    src: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a42?auto=format&fit=crop&w=400&q=80",
    alt: "Small pack of toilet paper rolls (12 rolls)",
  },
  "CH-24": {
    src: "https://images.unsplash.com/photo-1584556811151-0937af8d6d38?auto=format&fit=crop&w=400&q=80",
    alt: "Family pack of toilet paper rolls (24 rolls)",
  },
  "BN-6": {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80",
    alt: "Paper towel multi-roll pack",
  },
  "CS-POD-14": {
    src: "https://images.unsplash.com/photo-1628779237761-b44a21a40c65?auto=format&fit=crop&w=400&q=80",
    alt: "Small dishwasher detergent pod tub (14 count)",
  },
  "CS-POD-43": {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80",
    alt: "Large dishwasher detergent pod tub (43 count)",
  },
  "DW-STD": {
    src: "https://images.unsplash.com/photo-1563453569142-9b23bc44f887?auto=format&fit=crop&w=400&q=80",
    alt: "Dish soap bottle",
  },
  "GL-LG": {
    src: "https://images.unsplash.com/photo-1605600659873-14ec6e02e7e0?auto=format&fit=crop&w=400&q=80",
    alt: "Box of large drawstring garbage bags",
  },
  "GL-KT": {
    src: "https://images.unsplash.com/photo-1603048297172-c92544798e5a?auto=format&fit=crop&w=400&q=80",
    alt: "Kitchen-size garbage bags",
  },
  "SF-LS": {
    src: "https://images.unsplash.com/photo-1600857062245-322fad7a1b9e?auto=format&fit=crop&w=400&q=80",
    alt: "Fabric softener bottle",
  },
  "CL-AP": {
    src: "https://images.unsplash.com/photo-1585421514722-0f3cee465a4e?auto=format&fit=crop&w=400&q=80",
    alt: "All-purpose spray cleaner",
  },
  "WP-80": {
    src: "https://images.unsplash.com/photo-1584483762885-9fceb580700a?auto=format&fit=crop&w=400&q=80",
    alt: "Canister of disinfecting wipes (80 count)",
  },
  "CS-POD": {
    src: "https://images.unsplash.com/photo-1628779237761-b44a21a40c65?auto=format&fit=crop&w=400&q=80",
    alt: "Dishwasher pods",
  },
};

export function imageForSku(skuCode: string, customerDescription: string): { src: string; alt: string } {
  return (
    productImageBySku[skuCode] ?? {
      src: "https://images.unsplash.com/photo-1585417252836-008ac47035ee?auto=format&fit=crop&w=400&q=80",
      alt: customerDescription,
    }
  );
}
