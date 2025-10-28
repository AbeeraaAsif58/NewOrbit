const fs = require('fs');
const path = require('path');

// Mapping of project slugs to their live URLs from Heloix.com
const projectUrlMap = {
  // Finance
  'properloan-nbfc-finance-mortgage-startup-sourcing-loans-credit-cards': 'https://properloan.com',
  'investdrive-hyip-crypto-investment-management-platform': 'https://investdrive.online',
  'quotora-live-trading-market-analysis-portfolio-watching-list-subscriptions': 'https://cryptolla.online',
  'bankovia-online-banking-with-dps-loan': 'https://demo.swipebank.com',
  'payoutcard-complete-virtual-credit-card-solution': 'https://www.ufglab.com',
  'capturepay-start-your-own-secure-online-payment-gateway': 'https://capturepay.online',

  // B2B
  'cloud-prospects-lead-management-system-and-sales-crm': 'https://cloudprospects.com',
  'business-brawn-complete-saas-business-management': 'https://businessbrawn.com',
  'account-tap-khatabook-clone-android-application': 'https://accounttap.com',
  'close-sourcing-b2b-ecommerce-bulk-discount': 'https://closesourcing.com',

  // SAAS
  'vyapaar-complete-saas-business-stock-management-pos-invoicing': 'https://vyapaar.com',
  'fooddeck-saas-contactless-multi-restaurant-qr-menu-maker': 'https://www.ufglab.com',
  'ultreno-saas-project-management-system': 'https://www.ufglab.com',

  // Healthcare
  'healthy-web-hospital-management-system': 'https://www.ufglab.com',
  'phroma-pharmacy-management-system': 'https://www.ufglab.com',
  'doctor-corps-hospital-management-system': 'https://www.ufglab.com',
  'hospitalcore-complete-saas-hospital-management-system': 'https://hospitalcore.com',
  'all-healed-diagnostic-pathology-lab-management-system': 'https://www.ufglab.com',
  'hospiva-hospital-management-system': 'https://www.ufglab.com',

  // Education
  'school-silo-multi-school-management-system': 'https://www.ufglab.com',
  'skillsly-ultimate-elearning-website': 'https://www.ufglab.com',
  'hostelstead-hostel-room-management-system': 'https://www.ufglab.com',
  'libraxo-library-management-system-website': 'https://www.ufglab.com',
  'skillbuzz-udemy-clone-online-courses-learning-management-system': 'https://www.ufglab.com',

  // Ecommerce
  'grocery-space-grocery-multi-store-customer-store-driver-apps-bigbasket-clone': 'https://groceryspace.online',
  'buyyu-fashion-lifestyle-ecommerce-platform-mobileapp': 'https://buyyu.online',
  'bunnpay-complete-ecommerce': 'https://www.ufglab.com',
  'bona-kart-multivendor-ecommerce-platform-android-ios-apps': 'https://www.ufglab.com',

  // Restaurant
  'mexicata-complete-restaurant-pos': 'https://www.ufglab.com',
  'food-desk-restaurant-management-software-website': 'https://www.ufglab.com',
  'foodinga-zomato-clone-multiple-restaurant-food-ordering-website-customer-merchant-driver-android-ios-apps': 'https://www.ufglab.com',
  'lilplates-restaurant-food-delivery-system-with-admin-panel-delivery-man-app-restaurant-pos': 'https://www.ufglab.com',
  'ordercreator-saas-restaurant-qr-menu-whatsapp-online-ordering-reservation-system': 'https://ordercreator.com',

  // Travel
  'travoila-complete-travel-portal': 'https://travoila.com',
  'cargosilo-courier-management-system': 'https://www.ufglab.com',
  'secretbus-bus-reservation-system': 'https://www.ufglab.com',
  'hoteltitan-hotel-resort-booking-application': 'https://www.ufglab.com',
  'hotelnerd-hotel-resort-booking-system': 'https://www.ufglab.com',

  // Grocery
  'farm-grocery-ecommerce-grocery-food-pharmacy-android-apps': 'https://www.ufglab.com',
  'dixiedaily-dunzo-clone-multivendor-food-grocery-ecommerce-parcel-pharmacy-delivery-website-3-mobile-apps-customer-store-driver-apps': 'https://www.ufglab.com',

  // Real Estate
  'extraacre-real-estate-portal-multiple-users-android-app': 'https://www.ufglab.com',
  'gigabrick-real-estate-portal-website': 'https://www.ufglab.com',
  'citysquid-innovative-real-estate-investment-platform': 'https://www.ufglab.com',
  'brickwick-real-estate-portal-multilingual': 'https://www.ufglab.com',

  // Digital Marketing
  'heytext-bulk-sms-application-for-marketing': 'https://www.ufglab.com',
  'order-vcard-portfolio-vcard-builder-saas-multi-user-profile': 'https://www.ufglab.com',
  'sendnova-bulk-email-sms-and-whatsapp-messaging-application': 'https://www.ufglab.com',
  'mailmill-bulk-email-marketing-software-application': 'https://www.ufglab.com',
  'inboxer-bulk-email-marketing-saas-application': 'https://www.ufglab.com',

  // Directory
  'practova-appointment-booking-with-time-slot-app-practo-clone': 'https://www.ufglab.com',
  'urban-better-home-services-business-listing-handyman-booking-app': 'https://urbanbetter.com',
  'binnic-business-suite': 'https://binnic.com',
  'couponlife-affiliate-submitting-coupons-application': 'https://www.ufglab.com',

  // Social
  'fuzetube-video-sharing-platform-youtube-clone': 'https://www.ufglab.com',
  'fantica-premium-content-creators-saas-platform-onlyfans-clone': 'https://fantica.com',
  'friendza-social-networking-platform-facebook-clone': 'https://www.ufglab.com',
  'nexagram-instagram-clone-image-photo-sharing-social-network-platform': 'https://www.ufglab.com',
  'qwestions-questions-and-answers-platform-like-quora': 'https://www.ufglab.com',
  'janoo-dating-platform-like-tinder-badoo': 'https://janoo.com',

  // Dating
  'futureshaadi-matrimony-web-application-android-ios-app': 'https://futureshaadi.com',
  'rishtey-shaadi-clone-matrimony-android-ios-app': 'https://rishtey.com',

  // Matrimony
  'futureshaadi-matrimony-web-application-android-ios-app': 'https://futureshaadi.com',
  'rishtey-shaadi-clone-matrimony-android-ios-app': 'https://rishtey.com',

  // Entertainment
  'juqe-adult-video-platform': 'https://www.ufglab.com',
  'tokito-android-ios-media-app-creating-sharing-short-videos-tiktok-moj-clone': 'https://www.ufglab.com',
  'pixelpear-oot-platform-netflix-clone-live-tv-movies-streaming-platform': 'https://www.ufglab.com',

  // Games
  'hpl11-dream-11-clone-fantasy-app': 'https://www.ufglab.com',
  'ludo-hg-ludo-tournament-betting': 'https://www.ufglab.com',
  'fortunefantasy-online-betting-platform-1xbet-clone': 'https://www.ufglab.com',

  // Fantasy
  'aviator-real-money-aviator-game': 'https://www.ufglab.com',
  'color-iq-real-money-colour-prediction-game': 'https://www.ufglab.com',
  'byte-lottery-live-online-lottery-application-with-mlm': 'https://www.ufglab.com',
  'lottery-whale-live-lottery-betting-application': 'https://www.ufglab.com',

  // Human Resource
  'hr-logics-hrm-payroll-project-management': 'https://www.ufglab.com',
  'bold-jobs-freelancer-job-board-system': 'https://www.ufglab.com',
  'recruitrabbit-saas-human-resource-management': 'https://www.ufglab.com',
  'resumesy-complete-saas-resume-builder': 'https://www.ufglab.com',
  'freelance-mall-freelancing-marketplace-platform-upwork-fiverr-clone': 'https://www.ufglab.com',
  'recruitpool-complete-saas-recruitment-manager-ats-application-tracking-system': 'https://www.ufglab.com',

  // Tools and Utilities
  'jiffymeet-video-conference-app-and-website-for-live-class-meeting-webinar-online-training': 'https://www.ufglab.com',
  'propertyplus-society-property-tenant-and-maintenance-management-system': 'https://www.ufglab.com',
  'sonicvox-text-to-speech-as-saas-machine-learning-deep-learning': 'https://sonicvox.com',
  'smartcitizens-property-management-system-with-tenant-maintenance': 'https://www.ufglab.com',
  'writetalent-saas-openai-content-text-image-voice-chat-code-transcript-and-video-generator': 'https://writetalent.com',
  'records-book-saas-digital-record-management-system': 'https://www.ufglab.com',

  // Artificial Intelligence
  'writingo-ai-content-writer-copyright-generator': 'https://writingo.com',
  'inbitcoin-ai-prompt-buy-selling-marketplace': 'https://www.ufglab.com',
  'thinkgpt-chatgpt-openai-mobile-app': 'https://www.ufglab.com',
  'aitini-chatgpt-saas-writing-assistant': 'https://aitini.com',

  // Automobile
  'carinian-used-car-buy-sell-dealership-website-apps': 'https://carinian.com',
  'garagify-garage-vehicle-service-management-system': 'https://garagify.com',
  'carenting-car-bike-scooter-vehicle-rental-platform': 'https://carenting.com',
  'trackingbit-fleet-management-system-live-gps-tracking': 'https://trackingbit.com',
  'parkingrabbit-saas-vehicle-parking-management-system': 'https://parkingrabbit.com',
  'parkingrabbit-daily': 'https://www.ufglab.com',

  // Blockchain
  'cryptoquiver-ico-sto-token-sale-management-ico-admin': 'https://cryptoquiver.com',
  'cryptologia-cryptocurrency-buy-sell-exchange-mlm-system': 'https://cryptologia.com',

  // News & Media
  'newsshelf-news-portal-android-ios-mobile-apps': 'https://www.ufglab.com',
  'indie-news-newspaper-blog-multilingual-news-portal-ai-writer-content-generator': 'https://www.ufglab.com',
  'shortnews-short-news-app-inshorts-clone': 'https://www.ufglab.com',

  // ERP & CRM
  'zyial-salon-booking-management-system': 'https://www.ufglab.com',
  'heytext-bulk-sms-application-marketing': 'https://www.ufglab.com',
  'delivery-dart-bulk-email-sms-marketing-software': 'https://www.ufglab.com'
};

// Function to add liveUrl to projects in a file
function addLiveUrlsToFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find all project objects and add liveUrl if it exists in our map
    const updatedContent = content.replace(
      /(\s*"slug":\s*"([^"]+)",\s*"image":\s*"[^"]+")(\s*})/g,
      (match, beforeSlug, slug, afterImage) => {
        const liveUrl = projectUrlMap[slug];
        if (liveUrl) {
          return `${beforeSlug},\n    "liveUrl": "${liveUrl}"${afterImage}`;
        }
        return match;
      }
    );

    // Also handle projects without image property
    const updatedContent2 = updatedContent.replace(
      /(\s*"slug":\s*"([^"]+)",\s*"image":\s*"[^"]+")(\s*)(\s*})/g,
      (match, beforeSlug, slug, space, afterImage) => {
        const liveUrl = projectUrlMap[slug];
        if (liveUrl && !match.includes('liveUrl')) {
          return `${beforeSlug},${space}"liveUrl": "${liveUrl}"${space}${afterImage}`;
        }
        return match;
      }
    );

    if (updatedContent2 !== content) {
      fs.writeFileSync(filePath, updatedContent2, 'utf8');
      console.log(`Updated ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all industry files
const industriesDir = path.join(__dirname, '../src/pages/Industries');
const files = fs.readdirSync(industriesDir).filter(file => file.endsWith('.jsx') && file !== 'ProjectDetail.jsx' && file !== 'IndustryTemplate.jsx');

console.log('Adding live URLs to industry pages...');

let updatedCount = 0;
files.forEach(file => {
  const filePath = path.join(industriesDir, file);
  if (addLiveUrlsToFile(filePath)) {
    updatedCount++;
  }
});

console.log(`\nCompleted! Updated ${updatedCount} files.`);
