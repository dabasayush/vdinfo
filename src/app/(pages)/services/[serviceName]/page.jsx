"use client"

import { useParams } from 'next/navigation';
import ServiceBanner from '../../../../components/banners/ServiceBanner'
import AboutAndForm from '../../../../components/servicePageComp/AboutAndForm'
import Discuss from '../../../../components/servicePageComp/Discuss'
import ToolsWeUse from '../../../../components/toolsweuse/ToolsWeUse';
import Footer from '../../../../components/Footer';
import ClientReview from '../../../../components/clientReview/ClientReview';
import OurPartners from '../../../../components/ourPartners/OurPartners';
import Reviews from '../../../../components/reviews/Reviews';
import FaqSection from '../../../../components/Faqs/FaqSection';
import HomeBlogs from '../../../../components/home/HomeBlogs';

const serviceData = {
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'This is the digital marketing service page.',
    discuss: {
        title: 'Ready to Discuss Your Digital Marketing',
        flipCards: [
          { image: '/images/ad.jpg', serviceTitle: 'SEO Optimization', serviceContent: 'SEO Specialist' },
          { image: '/images/ad.jpg', serviceTitle: 'Content Marketing', serviceContent: 'Content Creator' },
          { image: '/images/ad.jpg', serviceTitle: 'Social Media Management', serviceContent: 'Social Media Manager' },
        ]
    },
    toolsweuse:{
        content:'At VD Infotech, we leverage the best digital marketing tools to ensure optimal performance for our clients. Our arsenal includes Google Analytics for in-depth data analysis and performance tracking. We utilize SEMrush and Ahrefs for keyword research and SEO insights, while Moz helps us enhance our overall digital marketing strategies. For PPC campaigns, we rely on Google AdWords to maximize ROI. We also use Meta for social media marketing and HubSpot for effective lead generation. Additionally, Mailchimp enables us to execute successful email marketing campaigns, driving engagement and conversions for your business.',
      images: [
        {imageSrc:'/images/home/tools/b.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/s.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/corel.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/m.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/ga.webp', alt:'tool image'},
        {imageSrc:'/images/home/tools/gt.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/h.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/a.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/moz.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/semrush.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/ai.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/ps.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/pr.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/us.png', alt:'tool image'},
      ]
    }
  },
  'design-and-development': {
    title: 'Design and Development',
    description: 'This is the design and development service page.',
    discuss: {
        title: 'Let’s Discuss Your Design and Development',
        flipCards: [
          { image: '/images/client-img.jpg', serviceTitle: 'SEO Optimization', serviceContent: 'SEO Specialist' },
          { image: '/images/client-img.jpg', serviceTitle: 'Content Marketing', serviceContent: 'Content Creator' },
          { image: '/images/client-img.jpg', serviceTitle: 'Social Media Management', serviceContent: 'Social Media Manager' },
        ]
    },
    toolsweuse:{
        content:'At VD Infotech, we leverage the best digital marketing tools to ensure optimal performance for our clients. Our arsenal includes Google Analytics for in-depth data analysis and performance tracking. We utilize SEMrush and Ahrefs for keyword research and SEO insights, while Moz helps us enhance our overall digital marketing strategies. For PPC campaigns, we rely on Google AdWords to maximize ROI. We also use Meta for social media marketing and HubSpot for effective lead generation. Additionally, Mailchimp enables us to execute successful email marketing campaigns, driving engagement and conversions for your business.',
      images: [
        {imageSrc:'/images/home/tools/b.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/s.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/corel.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/m.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/ga.webp', alt:'tool image'},
        {imageSrc:'/images/home/tools/gt.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/h.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/a.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/moz.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/semrush.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/ai.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/ps.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/pr.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/us.png', alt:'tool image'},
      ]
    }
  },
  'software-development': {
    title: 'Software Development',
    description: 'This is the software development service page.',
    discuss: {
        title: 'Ready to Discuss Your Software Development',
        flipCards: [
          { image: '/images/bp.png', serviceTitle: 'SEO Optimization', serviceContent: 'SEO Specialist' },
          { image: '/images/dm.png', serviceTitle: 'Content Marketing', serviceContent: 'Content Creator' },
          { image: '/images/pm.png', serviceTitle: 'Social Media Management', serviceContent: 'Social Media Manager' },
        ]
    },
    toolsweuse:{
        content:'At VD Infotech, we leverage the best digital marketing tools to ensure optimal performance for our clients. Our arsenal includes Google Analytics for in-depth data analysis and performance tracking. We utilize SEMrush and Ahrefs for keyword research and SEO insights, while Moz helps us enhance our overall digital marketing strategies. For PPC campaigns, we rely on Google AdWords to maximize ROI. We also use Meta for social media marketing and HubSpot for effective lead generation. Additionally, Mailchimp enables us to execute successful email marketing campaigns, driving engagement and conversions for your business.',
      images: [
        {imageSrc:'/images/home/tools/b.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/s.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/corel.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/m.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/ga.webp', alt:'tool image'},
        {imageSrc:'/images/home/tools/gt.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/h.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/a.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/moz.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/semrush.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/ai.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/ps.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/pr.png', alt:'tool image'},
        {imageSrc:'/images/home/tools/us.png', alt:'tool image'},
      ]
    }
  },
};

export default function ServicePage() {
  const params = useParams();
  const { serviceName } = params;

  // Find service data based on dynamic route
  const service = serviceData[serviceName];

  if (!service) {
    return <h1>Service not found</h1>;
  }

  return (
    <div>
        <ServiceBanner />
        <AboutAndForm />
        <Discuss data={service.discuss} flipCards={service.discuss} />
        <ToolsWeUse data={service.toolsweuse}/>
        <ClientReview />
        <OurPartners />
        <Reviews />
        <FaqSection />
        <HomeBlogs />
        <Footer/>
    </div>
  );
}