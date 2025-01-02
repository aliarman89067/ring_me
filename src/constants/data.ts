type Quote = {
  quote: string;
  author: string;
}[];

export const quotes: Quote = [
  {
    quote:
      '“All our dreams can come true, if we have the courage to pursue them.”',
    author: '—Walt Disney',
  },
  {
    quote: '“The secret of getting ahead is getting started.”',
    author: '—Mark Twain',
  },
  {
    quote:
      '“I\u2019ve missed more than 9,000 shots in my career. I\u2019ve lost almost 300 games. Twenty-six times I\u2019ve been trusted to take the game-winning shot and missed. I\u2019ve failed over and over and over again in my life, and that is why I succeed.”',
    author: '—Michael Jordan',
  },
  {
    quote:
      '“Don\u2019t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.”',
    author: '—Mary Kay Ash',
  },
  {
    quote:
      '“The best time to plant a tree was 20 years ago. The second best time is now.”',
    author: '―Chinese proverb',
  },
  {
    quote: '“It\u2019s hard to beat a person who never gives up.”',
    author: '—Babe Ruth',
  },
  {
    quote:
      '“I wake up every morning and think to myself, How far can I push this company in the next 24 hours?”',
    author: '—Leah Busque',
  },
  {
    quote:
      '“We need to accept that we won\u2019t always make the right decisions, that we\u2019ll screw up royally sometimes―understanding that failure is not the opposite of success, it\u2019s part of success.”',
    author: '―Arianna Huffington',
  },
  {
    quote:
      '“Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.”',
    author: '—Joss Whedon',
  },
];

type Ringtone = {
  label: string;
  uri: string;
}[];

export const ringtones: Ringtone = [
  {
    label: 'Cozy Autumn Day',
    uri: 'https://cloud.appwrite.io/v1/storage/buckets/6757540e002e7ca59dfe/files/67577d44000424d045b6/view?project=6757538b0012f7c73697&project=6757538b0012f7c73697&mode=admin',
  },
  {
    label: 'Good Night Lofi',
    uri: 'https://cloud.appwrite.io/v1/storage/buckets/6757540e002e7ca59dfe/files/67577f0800396a4108cb/view?project=6757538b0012f7c73697&project=6757538b0012f7c73697&mode=admin',
  },
  {
    label: 'Cozy Lofi Beat',
    uri: 'https://cloud.appwrite.io/v1/storage/buckets/6757540e002e7ca59dfe/files/67577fa20009195b1471/view?project=6757538b0012f7c73697&project=6757538b0012f7c73697&mode=admin',
  },
  {
    label: 'Cozy Room Piano Jazz',
    uri: 'https://cloud.appwrite.io/v1/storage/buckets/6757540e002e7ca59dfe/files/67578034001e987c7bcf/view?project=6757538b0012f7c73697&project=6757538b0012f7c73697&mode=admin',
  },
  {
    label: "Good'ol Day",
    uri: 'https://cloud.appwrite.io/v1/storage/buckets/6757540e002e7ca59dfe/files/675781930016ac786d51/view?project=6757538b0012f7c73697&project=6757538b0012f7c73697&mode=admin',
  },
];

export type Data =
  | {
      task: string;
      time: string;
      ringtone: string;
      repeat: 'Only Once' | 'Repeat';
      unixTime?: number;
    }[]
  | null;
