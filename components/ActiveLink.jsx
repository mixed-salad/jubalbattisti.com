import {useRouter} from "next/router";
import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0
    },
    complete: {
        opacity: 1,
        transition: {
            duration: .5
        }
    }
}

const ActiveLink = ({children, href}) => {
    const router = useRouter();
    const style = {
        color: router.asPath === href ? "rgb(63, 63, 63)" : "inharit",
        fontWeight: router.asPath === href ? 500 : 300,
    }

    return (
        <motion.a initial="initial" animate="complete" variants={variants} style={style} href={href} className="navLinks__link">
            {children}
        </motion.a>
    )
}

export default ActiveLink;