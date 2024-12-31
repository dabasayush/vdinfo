"use client"

import useAllPosts from '../../hooks/useAllPosts';

import LoaderSpinner from '../loader/LoaderSpinner';
import HeroBanner from './HeroBanner';
import BestDigitalCompany from './BestDigitalCompany';
import SeoWorks from './SeoWorks';
import AboutFounder from './AboutFounder';
import WeBuild from './WeBuild';
import CertifiedDigitalMarketing from './CertifiedDigitalMarketing';
import ToolsWeUse from '../toolsweuse/ToolsWeUse';
import ClientReview from '../clientReview/ClientReview';
import OurPartners from '../ourPartners/OurPartners';
import FaqSection from '../Faqs/FaqSection';
import ProcessWeFollow from './ProcessWeFollow';
import Team from './Team';
import HomeBlogs from './HomeBlogs';
import Footer from '../Footer';
import Reviews from '../reviews/Reviews';
export default function HomePage() {


    const toolsweuse = {
      content:'At VD Infotech, we leverage the best digital marketing tools to ensure optimal performance for our clients. Our arsenal includes Google Analytics for in-depth data analysis and performance tracking. We utilize SEMrush and Ahrefs for keyword research and SEO insights, while Moz helps us enhance our overall digital marketing strategies. For PPC campaigns, we rely on Google AdWords to maximize ROI. We also use Meta for social media marketing and HubSpot for effective lead generation. Additionally, Mailchimp enables us to execute successful email marketing campaigns, driving engagement and conversions for your business.',
      images: [
        {imageSrc:'./images/home/tools/b.png', alt:'tool image'},
        {imageSrc:'./images/home/tools/s.png', alt:'tool image'},
        {imageSrc:'./images/home/tools/corel.png', alt:'tool image'},
        {imageSrc:'./images/home/tools/m.png', alt:'tool image'},
        {imageSrc:'./images/home/tools/ga.webp', alt:'tool image'},
        {imageSrc:'./images/home/tools/gt.png', alt:'tool image'},
        {imageSrc:'./images/home/tools/h.png', alt:'tool image'},
        {imageSrc:'./images/home/tools/a.png', alt:'tool image'},
        {imageSrc:'./images/home/tools/moz.png', alt:'tool image'},
        {imageSrc:'./images/home/tools/semrush.png', alt:'tool image'},
        {imageSrc:'./images/home/tools/ai.png', alt:'tool image'},
        {imageSrc:'./images/home/tools/ps.png', alt:'tool image'},
        {imageSrc:'./images/home/tools/pr.png', alt:'tool image'},
        {imageSrc:'./images/home/tools/us.png', alt:'tool image'},
      ]
    }

    // const {data:blogs, isError, isLoading} = useAllPosts();
    // if (isError) return <><h3>Failed to load!</h3></>
    // if (isLoading) return <LoaderSpinner />
      
  return (
    <div>
        <HeroBanner />
        <BestDigitalCompany />
        <SeoWorks />
        <AboutFounder />
        <WeBuild />
        <ProcessWeFollow />
        <CertifiedDigitalMarketing />
        <ToolsWeUse data={toolsweuse}/>
        <OurPartners />
        <ClientReview />
        <Reviews />
        <FaqSection />
        <Team />
        {/* {
          blogs?.posts.length > 0 ?
            <HomeBlogs post ={blogs}/>
          : <>No Blog Found!</>
        } */}
        <Footer />
    </div>
  )
}
