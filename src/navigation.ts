import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/'),
        },
        {
          text: 'Benefits',
          href: getPermalink('/#benefits'),
        },
        {
          text: 'Where to Start',
          href: getPermalink('/#steps'),
        },
        {
          text: 'FAQs',
          href: getPermalink('/#faqs'),
        },
        {
          text: 'Stats',
          href: getPermalink('/#stats'),
        },
      ],
    },
    {
      text: 'Mentor App',
      links: [
        {
          text: 'About App',
          href: getPermalink('/mentor'),
        },
        {
          text: 'Features',
          href: getPermalink('/mentor#features'),
        },
        {
          text: 'Process',
          href: getPermalink('/mentor#process'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/mentor#pricing'),
        },
        {
          text: 'Benefits',
          href: getPermalink('/mentor#benefits'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    // {
    //   text: 'Blog',
    //   href: getBlogPermalink(),
    // },
  ],
  actions: [{ text: 'Register', href: getPermalink('/contact'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Generic',
      links: [
        { text: 'Roadmap', href: '#' },
        { text: 'Terms & Conditions', href: '#' },
        { text: 'Privacy Policy', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Documentation', href: '#' },
        { text: 'Contact Information', href: '#' },
        { text: 'Social Media', href: '#' },
      ],
    },
    {
      title: 'Mentor App',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Process', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Benefits', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'FAQ', href: '#' },
        { text: 'Stats', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/uniteelabs' },
  ],
  footNote: '© 2025 Unitee Labs. All rights reserved.',
};
