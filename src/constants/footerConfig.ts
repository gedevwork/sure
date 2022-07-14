type TFooterItem = {
  href: string;
  label: string;
};
type TFooterSection = {
  title: string;
  items: TFooterItem[];
};

const footerConfig: TFooterSection[] = [
  {
    title: 'Enterprise Solutions',
    items: [
      { href: 'https://www.sureapp.com/brands', label: 'Global Brands' },
      { href: 'https://www.sureapp.com/carriers', label: 'Insurance Carriers' },
      {
        href: 'https://www.sureapp.com/connect',
        label: 'eCommerce & Marketplaces',
      },
    ],
  },
  {
    title: 'Platform Features',
    items: [
      {
        href: 'https://sureapp.com/insurance-platform#Distribution',
        label: 'Distribution',
      },
      {
        href: 'https://sureapp.com/insurance-platform#Policy',
        label: 'Policy',
      },
      {
        href: 'https://sureapp.com/insurance-platform#Claims',
        label: 'Claims',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        href: 'https://www.sureapp.com/resources',
        label: 'Resources',
      },
      {
        href: 'https://www.sureapp.com/blog/blog',
        label: 'Blog',
      },
      {
        href: 'https://www.sureapp.com/blog/press',
        label: 'Press',
      },
    ],
  },
];

export default footerConfig;
