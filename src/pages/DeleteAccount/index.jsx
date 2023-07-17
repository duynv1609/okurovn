import FormDelete from "../../components/FormDeleteAccount";
import Footer from "../../components/CustomerFooter";
import { motion } from "framer-motion";

function DeleteAccount() {
    return (
        <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between h-full w-full  bg-okuro-background-contact"
        >
            <FormDelete />
            <Footer />
        </motion.div>
    );
}

export default DeleteAccount;
