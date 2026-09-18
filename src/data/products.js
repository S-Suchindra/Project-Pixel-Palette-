const products = {
  movie: {
    label: 'Movies',
    title: 'A film for the mood you are in.',
    intro: 'Stories for slow evenings, rainy afternoons, and those nights when you want to watch something that stays with you.',
    accent: 'coral',
    items: [
      { title: 'Aadujeevitham', type: 'FEATURE FILM', price: 12, image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80', description: 'A moving story of resilience, distance, and finding your way home.' },
      { title: 'Coyote & Acme', type: 'FEATURE FILM', price: 8, image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80', description: 'A playful adventure with a little chaos and a lot of heart.' },
      { title: 'Gatto', type: 'ANIMATED FILM', price: 18, image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80', description: 'A charming night-time tale for anyone who still loves a little magic.' },
    ],
  },
  webinars: {
    label: 'Classes', title: 'Pull up a chair and join in.', intro: 'Friendly live sessions with people who have tried things, learned a lot, and are happy to share what helped.', accent: 'blue',
    items: [
      { title: 'Classroom Basics', type: 'LIVE CLASS', price: 24, image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80', description: 'A relaxed class for building confidence one useful step at a time.' },
      { title: 'Learn Together', type: 'GROUP CLASS', price: 19, image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80', description: 'A friendly space to ask questions, practice, and keep going.' },
      { title: 'The Live Lesson', type: 'CLASS REPLAY', price: 14, image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=900&q=80', description: 'A clear, practical lesson you can return to whenever you need it.' },
    ],
  },
  ebooks: {
    label: 'E-Books', title: 'For your next quiet hour.', intro: 'Books and field guides full of useful thoughts, gentle prompts, and ideas worth carrying around.', accent: 'yellow',
    items: [
      { title: 'The Book Stack', type: 'E-BOOK', price: 18, image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80', description: 'A hands-on companion for turning a spark into something real.' },
      { title: 'Open New Pages', type: 'ESSAY COLLECTION', price: 11, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80', description: 'A warm collection of notes on reading, care, and paying attention.' },
      { title: 'The Reading Hour', type: 'DIGITAL BOOK', price: 15, image: 'https://images.unsplash.com/photo-1455885666463-92e2a5a8d3c3?auto=format&fit=crop&w=900&q=80', description: 'A calm little guide for making more room to read and think.' },
    ],
  },
  softwares: {
    label: 'Apps', title: 'Little helpers for big ideas.', intro: 'Simple apps for getting organized, making things clearer, and leaving more energy for the work itself.', accent: 'lavender',
    items: [
      { title: 'Make Space For It', type: 'NOTION TEMPLATE', price: 9, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80', description: 'A tidy home for projects, notes, plans, and all the loose ends.' },
      { title: 'Lumen Display Typeface', type: 'FONT FAMILY', price: 24, image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80', description: 'A friendly font with enough character to make a heading feel like yours.' },
      { title: 'Little List', type: 'DESKTOP APP', price: 16, image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=80', description: 'A quiet spot for the things you do not want to forget.' },
    ],
  },
  audios: {
    label: 'Music', title: 'Press play on a better mood.', intro: 'Music for making, walking, resting, and giving your day a little more texture.', accent: 'green',
    items: [
      { title: 'Citrus & Cedar', type: 'SAMPLE PACK', price: 16, image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80', description: 'Sunlit field recordings and textured loops for your next idea.' },
      { title: 'The Slow Down', type: 'AUDIO SERIES', price: 13, image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80', description: 'Small, gentle pauses for when your brain needs a little quiet.' },
      { title: 'Night Bus Radio', type: 'MIXTAPE', price: 10, image: 'https://images.unsplash.com/photo-1571266028243-d220c9c3b80d?auto=format&fit=crop&w=900&q=80', description: 'A warm late-night mix for making things after dark.' },
    ],
  },
};

export default products;
