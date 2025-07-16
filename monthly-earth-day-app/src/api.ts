export interface Event {
  date: Date;
  title: string;
  description: string;
}

export const fetchEvents = async (): Promise<Event[]> => {
  // Simulate fetching data from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      const events: Event[] = [
        { date: new Date(2023, 10, 22), title: 'Monthly Cleanup', description: 'Join us for a community cleanup at Central Park.' },
        { date: new Date(2023, 11, 5), title: 'Tree Planting Initiative', description: 'Help us plant trees in the new city park.' },
        { date: new Date(2024, 0, 22), title: 'January Action Day', description: 'Focus on reducing single-use plastics.' },
        { date: new Date(2024, 1, 14), title: 'Valentine\'s Day Tree Planting', description: 'Plant a tree for someone you love!' },
        { date: new Date(2024, 2, 20), title: 'Spring Equinox Cleanup', description: 'Welcome spring with a community cleanup.' },
        { date: new Date(2024, 3, 22), title: 'Earth Day Celebration', description: 'Our annual big Earth Day event!' },
      ];
      resolve(events);
    }, 500); // Simulate network delay
  });
};

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: Date;
  tags: string[];
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  // Simulate fetching data from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      const blogPosts: BlogPost[] = [
        { id: '1', title: 'The Importance of Reducing Plastic Waste', excerpt: 'Discover simple steps you can take to reduce your plastic footprint and help protect our oceans and wildlife.', imageUrl: 'https://via.placeholder.com/400x200?text=Plastic+Waste', author: 'Nick', date: new Date(2023, 10, 15), tags: ['plastic', 'waste reduction', 'ocean'] },
        { id: '2', title: 'Composting 101: A Beginner\'s Guide', excerpt: 'Learn how to turn your kitchen scraps into valuable compost for your garden. It\'s easier than you think!', imageUrl: 'https://via.placeholder.com/400x200?text=Composting+101', author: 'Maria Silva', date: new Date(2023, 10, 20), tags: ['composting', 'gardening', 'zero waste'] },
        { id: '3', title: '5 Ways to Save Water at Home', excerpt: 'Simple and effective tips to conserve water in your daily routine and lower your utility bills.', imageUrl: 'https://via.placeholder.com/400x200?text=Save+Water', author: 'Green Advocate', date: new Date(2023, 11, 1), tags: ['water conservation', 'home tips'] },
        { id: '4', title: 'The Benefits of Planting Native Trees', excerpt: 'Learn why planting native trees is crucial for supporting local ecosystems and biodiversity.', imageUrl: 'https://via.placeholder.com/400x200?text=Native+Trees', author: 'Forest Keeper', date: new Date(2023, 11, 10), tags: ['trees', 'biodiversity', 'ecosystem'] },
      ];
      resolve(blogPosts);
    }, 700); // Simulate network delay
  });
};

export interface CommunityPost {
  id: string;
  author: string;
  content: string;
  simulatedMediaUrl: string | null;
  likes: number;
  comments: number;
}

export const fetchCommunityPosts = async (): Promise<CommunityPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const communityPosts: CommunityPost[] = [
        { id: 'cp1', author: 'EcoWarrior123', content: 'Just finished my park cleanup! So much litter, but felt great to make a difference. #MonthlyEarthDay #Cleanup', simulatedMediaUrl: 'https://via.placeholder.com/400x300?text=Cleanup+Photo', likes: 15, comments: 3 },
        { id: 'cp2', author: 'GreenThumb', content: 'My new tree sapling is in the ground! Hoping it grows big and strong. 🌱 #PlantATree #EarthDayEveryMonth', simulatedMediaUrl: 'https://via.placeholder.com/400x300?text=Tree+Photo', likes: 25, comments: 7 },
        { id: 'cp3', author: 'WasteReducer', content: 'Switched to reusable produce bags at the grocery store today. Small step, big impact! #PlasticFree #SustainableLiving', simulatedMediaUrl: null, likes: 10, comments: 1 },
      ];
      resolve(communityPosts);
    }, 800); // Simulate network delay
  });
};

export interface Action {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string; // More detailed description
  icon: any; // Font Awesome icon object
  materials?: string[]; // Optional list of suggested materials
  steps?: string[]; // Optional list of suggested steps
}

// Placeholder action data
export const fetchActions = async (): Promise<Action[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const actions: Action[] = [
        {
          id: 'litter-cleanup',
          title: 'Pick Up Litter',
          shortDescription: 'Help keep our parks and streets clean.',
          longDescription: 'Dedicate some time to pick up trash in your local park, beach, or neighborhood. Every piece counts!',
          icon: faTrash,
          materials: ['Gloves', 'Trash bags', 'Litter picker (optional)'],
          steps: ['Choose a location.', 'Gather your supplies.', 'Pick up litter safely.', 'Dispose of trash properly.'],
        },
        {
          id: 'plant-tree',
          title: 'Plant a Tree',
          shortDescription: 'Contribute to a greener planet.',
          longDescription: 'Find a suitable location and plant a native tree. Trees provide oxygen, support wildlife, and combat climate change.',
          icon: faTree,
          materials: ['Sapling or seed', 'Shovel', 'Watering can'],
          steps: ['Choose a native tree species.', 'Find a planting location.', 'Dig a hole.', 'Plant the tree and water it.'],
        },
        {
          id: 'reduce-plastic',
          title: 'Reduce Single-Use Plastic',
          shortDescription: 'Minimize your plastic footprint.',
          longDescription: 'Identify ways to reduce your reliance on single-use plastics in your daily life. Use reusable bags, water bottles, and containers.',
          icon: faRecycle,
          materials: ['Reusable shopping bags', 'Reusable water bottle', 'Reusable containers'],
          steps: ['Assess your plastic usage.', 'Identify single-use items.', 'Find reusable alternatives.', 'Educate others.'],
        },
        // Add more actions here...
      ];
      resolve(actions);
    }, 600); // Simulate network delay
  });
};

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
}

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const testimonials: Testimonial[] = [
        { id: 't1', author: 'Anya K.', quote: 'Monthly Earth Day actions have made me more conscious of my daily habits. Small changes really add up!' },
        { id: 't2', author: 'Ben T.', quote: 'Joining the monthly cleanups is a great way to connect with my community and make a visible difference.' },
        { id: 't3', author: 'Chen L.', quote: 'The resources provided make it easy to understand how to take effective action for the planet.' },
      ];
      resolve(testimonials);
    }, 500); // Simulate network delay
  });
};

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: Date;
  tags: string[];
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  // Simulate fetching data from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      const blogPosts: BlogPost[] = [
        { id: '1', title: 'The Importance of Reducing Plastic Waste', excerpt: 'Discover simple steps you can take to reduce your plastic footprint and help protect our oceans and wildlife.', imageUrl: 'https://via.placeholder.com/400x200?text=Plastic+Waste', author: 'Nick', date: new Date(2023, 10, 15), tags: ['plastic', 'waste reduction', 'ocean'] },
        { id: '2', title: 'Composting 101: A Beginner\'s Guide', excerpt: 'Learn how to turn your kitchen scraps into valuable compost for your garden. It\'s easier than you think!', imageUrl: 'https://via.placeholder.com/400x200?text=Composting+101', author: 'Maria Silva', date: new Date(2023, 10, 20), tags: ['composting', 'gardening', 'zero waste'] },
        { id: '3', title: '5 Ways to Save Water at Home', excerpt: 'Simple and effective tips to conserve water in your daily routine and lower your utility bills.', imageUrl: 'https://via.placeholder.com/400x200?text=Save+Water', author: 'Green Advocate', date: new Date(2023, 11, 1), tags: ['water conservation', 'home tips'] },
        { id: '4', title: 'The Benefits of Planting Native Trees', excerpt: 'Learn why planting native trees is crucial for supporting local ecosystems and biodiversity.', imageUrl: 'https://via.placeholder.com/400x200?text=Native+Trees', author: 'Forest Keeper', date: new Date(2023, 11, 10), tags: ['trees', 'biodiversity', 'ecosystem'] },
      ];
      resolve(blogPosts);
    }, 700); // Simulate network delay
  });
};