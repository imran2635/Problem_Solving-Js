function variables() {
  const items = [
    {
      productId: 180,
      name: "Nike react phantom run flyknit 2",
      sku: "NJC48508-Pink-X",
      price: {
        regular: {
          value: 718,
          text: "$718.00",
        },
        special: {
          value: 718,
          text: "$718.00",
        },
      },
      image: {
        alt: "Nike react phantom run flyknit 2",
        url: "https://demositefiles.blob.core.windows.net/images/catalog/1742/9873/plv3335-Pink-listing.png",
      },
      url: "/men/nike-react-phantom-run-flyknit-2-180",
    },
    {
      productId: 171,
      name: "Nike react infinity run flyknit",
      sku: "NJC44141-Purple-L",
      price: {
        regular: {
          value: 543,
          text: "$543.00",
        },
        special: {
          value: 543,
          text: "$543.00",
        },
      },
      image: {
        alt: "Nike react infinity run flyknit",
        url: "https://demositefiles.blob.core.windows.net/images/catalog/9381/3866/plv3878-Purple-listing.png",
      },
      url: "/nike-react-infinity-run-flyknit-171",
    },
    {
      productId: 160,
      name: "Nike odyssey react flyknit 2",
      sku: "NJC93155-Pink-XL",
      price: {
        regular: {
          value: 857,
          text: "$857.00",
        },
        special: {
          value: 857,
          text: "$857.00",
        },
      },
      image: {
        alt: "Nike odyssey react flyknit 2",
        url: "https://demositefiles.blob.core.windows.net/images/catalog/1939/9584/plv6734-Pink-listing.png",
      },
      url: "/women/nike-odyssey-react-flyknit-2-160",
    },
  ];
  console.log(items[1].price.regular.text);
}

variables();
