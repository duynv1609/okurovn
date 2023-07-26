import Contact from "../../components/CustomerContact";
import Footer from "../../components/HealthcareFooter";
import { motion } from "framer-motion";

function HomeCustomer() {
    return (
        <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between h-full min-h-screen w-full bg-okuro-background-contact "
        >
            <Contact Hid={true} />
            <Footer />
        </motion.div>
    );
}

export default HomeCustomer;
