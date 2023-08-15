//Layout
import LandingPageLayout from '../layouts/LandingPageLayout';
import CustomerLayout from '../layouts/CustomerLayout';
import HealthcareLayout from '../layouts/HealthcareLayout';

//page LandingPage
import LandingPage from '../pages/LandingPage';
import EMR from '../pages/EMR';
import DeleteAccount from '../pages/DeleteAccount';
import HealthcareAboutUs from '../pages/HealthcareAboutUs';
import HealthcarePhisicalCard from '../pages/HealthcarePhisicalCard';
import HealthcareNonPhisicalCard from '../pages/HealthcareNonPhisicalCard';
import HealthcareContact from '../pages/HealthcareContact';
import EducationAboutUs from '../pages/EducationAboutUs';
import EducationContact from '../pages/EducationContact';
import EducationUtilities from '../pages/EducationUtilities';
import Download from '../pages/Download';
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
        path: '/EMR',
        component: EMR,
        layout: LandingPageLayout,
        props: {
            heading: 'Trang chủ',
        },
    },
    {
        path: '/healthcare/contact',
        component: HealthcareContact,
        layout: HealthcareLayout,
        props: {
            heading: 'Liên hệ',
        },
    },
    {
        path: '/healthcare/phisical-card',
        component: HealthcarePhisicalCard,
        layout: HealthcareLayout,
        props: {
            heading: 'Thẻ vật lý',
        },
    },
    {
        path: '/healthcare/nonphisical-card',
        component: HealthcareNonPhisicalCard,
        layout: HealthcareLayout,
        props: {
            heading: 'Thẻ phi vật lý',
        },
    },
    {
        path: '/healthcare/about',
        component: HealthcareAboutUs,
        layout: HealthcareLayout,
        props: {
            heading: 'Về chúng tôi',
        },
    }, 
    {
        path: '/education/contact',
        component: EducationContact,
        layout: CustomerLayout,
        props: {
            heading: 'Liên hệ',
        },
    },
    {
        path: '/education/utilities',
        component: EducationUtilities,
        layout: CustomerLayout,
        props: {
            heading: 'Tiện ích',
        },
    },
    {
        path: '/education/about',
        component: EducationAboutUs,
        layout: CustomerLayout,
        props: {
            heading: 'Về chúng tôi',
        },
    }, {
        path: '/delete-account',
        component: DeleteAccount,
        layout: CustomerLayout,
        props: {
            heading: 'Xóa tài khoản',
        },
    }
    , {
        path: '/api/download/:code',
        component: Download,
        props: {
            heading: 'Download',
        },
    }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
