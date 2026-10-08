export interface WorkItem {
  id: string;
  title: string;
  category: 'wedding' | 'celebration' | 'brand';
  categoryLabel: string;
  location?: string;
  type: 'video' | 'image';
  src: string;
  poster?: string;
  aspectRatio?: string;
}

export const WORK_ITEMS: WorkItem[] = [
  {
    id: 'mr-mrs-ozoh',
    title: 'Mr & Mrs Ozoh — Two Families, One Union',
    category: 'wedding',
    categoryLabel: 'Wedding',
    location: 'Canberra, ACT',
    type: 'video',
    src: 'https://customer-assets.emergentagent.com/job_sosa-portfolio/artifacts/q01f3sig_MR%20%26%20MRS%20OZOH%F0%9F%A4%8DA%20beautiful%20union%20of%20two%20hearts%2C%20two%20families%2C%20honouring%20culture%2C%20celebrating%20lov.mp4',
    poster: 'https://customer-assets.emergentagent.com/job_sosa-portfolio/artifacts/p8y7x4rj_Everything%E2%80%99s%20Hallelujah%F0%9F%96%A4%E2%9D%A4%EF%B8%8F%23fyp%20%23foryou.jpg',
  },
  {
    id: 'michael-favour',
    title: 'Michael + Favour — Igbo Kwenu',
    category: 'wedding',
    categoryLabel: 'Wedding',
    location: 'Sydney, NSW',
    type: 'video',
    src: 'https://customer-assets.emergentagent.com/job_sosa-portfolio/artifacts/7wd3o9ae_MICHAEL%20%2B%20FAVOURTraditional%20wedding%20was%20a%20blast%F0%9F%A4%8D%20IGBO%20KWENU%23foryou%20%23igboweddingng%20%23igbotraditio.mp4',
    poster: 'https://customer-assets.emergentagent.com/job_sosa-portfolio/artifacts/p8y7x4rj_Everything%E2%80%99s%20Hallelujah%F0%9F%96%A4%E2%9D%A4%EF%B8%8F%23fyp%20%23foryou.jpg',
  },
  {
    id: '70th-birthday',
    title: '70th Birthday Celebration',
    category: 'celebration',
    categoryLabel: 'Celebration',
    type: 'video',
    src: '/videos/70th-birthday.mp4',
  },
  {
    id: 'unique-restaurant',
    title: 'Exquisite Brand Content',
    category: 'brand',
    categoryLabel: 'Brand',
    type: 'video',
    src: '/videos/unique-restaurant.mp4',
  },
  {
    id: 'soft-life-40th',
    title: 'A 40th, Soft-Life Edition',
    category: 'celebration',
    categoryLabel: 'Celebration',
    location: 'Canberra, ACT',
    type: 'video',
    src: 'https://customer-assets.emergentagent.com/job_sosa-portfolio/artifacts/kf5jllay_A%20beautiful%2040th%20birthday%20celebration%20%F0%9F%A4%8ESoft%20life%2C%20elegance%2C%20and%20a%20woman%20stepping%20into%20a%20new%20cha.mp4',
    poster: 'https://customer-assets.emergentagent.com/job_sosa-portfolio/artifacts/p8y7x4rj_Everything%E2%80%99s%20Hallelujah%F0%9F%96%A4%E2%9D%A4%EF%B8%8F%23fyp%20%23foryou.jpg',
  },
  {
    id: 'life-is-story',
    title: 'Your Life Is Your Story',
    category: 'brand',
    categoryLabel: 'Brand',
    location: 'Sydney, NSW',
    type: 'video',
    src: 'https://customer-assets.emergentagent.com/job_sosa-portfolio/artifacts/cq79z8w9_Your%20life%20is%20your%20story%F0%9F%AB%B6%F0%9F%8F%BE%23foryou%20%23viral%20%23content%20%23fashion%20%23fashionista.mp4',
    poster: 'https://customer-assets.emergentagent.com/job_sosa-portfolio/artifacts/p8y7x4rj_Everything%E2%80%99s%20Hallelujah%F0%9F%96%A4%E2%9D%A4%EF%B8%8F%23fyp%20%23foryou.jpg',
  },
  {
    id: 'behind-the-lens',
    title: 'Behind The Lens — Sosa',
    category: 'brand',
    categoryLabel: 'Brand',
    location: 'Canberra, ACT',
    type: 'image',
    src: 'https://customer-assets.emergentagent.com/job_sosa-portfolio/artifacts/p8y7x4rj_Everything%E2%80%99s%20Hallelujah%F0%9F%96%A4%E2%9D%A4%EF%B8%8F%23fyp%20%23foryou.jpg',
  },
];
