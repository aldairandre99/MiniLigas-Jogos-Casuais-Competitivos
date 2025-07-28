import { Image } from "@heroui/image";
import { motion } from "framer-motion";

interface FemaleSvgProps {
    choice: 'Rock' | 'Paper' | 'Scissor' | null;
}

export const FemaleSvg = ({ choice }: FemaleSvgProps) => {
    return (
        <motion.div
            key={choice} // força re-render quando muda a escolha
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 0.5,
                delay: 0.3,
            }}
            className="text-8xl"
        >
            {choice === 'Rock' && (
                <Image
                    width={140}
                    className=""
                    src="assets/fight/female-rock.png"
                    alt="Rock" />
            )}
            {choice === 'Paper' && (
                <Image
                    width={140}
                    className="rotate-180"
                    src="assets/fight/male-paper.png"
                    alt="Paper"
                />
            )}
            {choice === 'Scissor' && (
                <Image
                    width={140}
                    src="assets/fight/female-scissor.png"
                    alt="Scissor" />
            )}
        </motion.div>
    );
};
