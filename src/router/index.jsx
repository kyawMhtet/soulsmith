import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import HomePage from "../pages/HomePage";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services";
import Product from "../pages/Product";
import Team from "../pages/Team";
import NotFound from "../pages/NotFound";
import SectionA from "../pages/Sub-Services/SectionA";
import SectionA1 from "../pages/Sub-Services/SectionA1";
import SectionB from "../pages/Sub-Services/SectionB";
import SectionC from "../pages/Sub-Services/SectionC";
import SectionA2 from "../pages/Sub-Services/SectionA2";
import SectionA3 from "../pages/Sub-Services/SectionA3";
import SectionA4 from "../pages/Sub-Services/SectionA4";
import SectionA5 from "../pages/Sub-Services/SectionA5";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: '/services/Psychological Support: Psychotherapy & Counseling',
                element: <SectionA />
            },
            {
                path: '/services/Psychological Support: Psychotherapy & Counseling/Listening Service and Mindfulness Practice',
                element: <SectionA1 />
            },

            {
                path: '/services/Healing & Therapy',
                element: <SectionB />
            },

            {
                path: '/services/Body - Mind - Soul Mixology Service',
                element: <SectionC />
            },

            {
                path: '/services/Psychological Support: Psychotherapy & Counseling/Counseling',
                element: <SectionA2 />
            },
            {
                path: '/services/Psychological Support: Psychotherapy & Counseling/Psychotherapy',
                element: <SectionA3 />
            },
            {
                path: '/services/Psychological Support: Psychotherapy & Counseling/Arts Psychotherapy',
                element: <SectionA4 />
            },
            {
                path: '/services/Psychological Support: Psychotherapy & Counseling/Therapeutic Workshop',
                element: <SectionA5 />
            },
            {
                path: '/product',
                element: <Product />
            },
            {
                path: '/team',
                element: <Team />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);


export default router
