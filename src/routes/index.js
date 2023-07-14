//Layout
import LandingPageLayout from '../layouts/LandingPageLayout';
import CustomerLayout from '../layouts/CustomerLayout';

//page LandingPage
import LandingPage from '../pages/LandingPage';
import Contact from '../pages/Contact';
import Utilities from '../pages/Utilities';
import AboutUs from '../pages/AboutUs';

// Public routes
const publicRoutes = [
    //LandingPage
    {
        path: '/',
        component: LandingPage,
        layout: LandingPageLayout,
        props: {
            heading: 'Trang chủ',
        },
    },
    {
        path: '/contact',
        component: Contact,
        layout: CustomerLayout,
        props: {
            heading: 'Liên hệ',
        },
    },
    {
        path: '/utilities',
        component: Utilities,
        layout: CustomerLayout,
        props: {
            heading: 'Tiện ích',
        },
    },
    {
        path: '/about',
        component: AboutUs,
        layout: CustomerLayout,
        props: {
            heading: 'Về chúng tôi',
        },
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
