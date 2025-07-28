import { Image } from "@heroui/image";
import { motion } from "framer-motion";

interface MaleHandSvgProps {
    choice: 'Rock' | 'Paper' | 'Scissor' | null;
}

export const MaleHandSvg = ({ choice }: MaleHandSvgProps) => {
    return (
        <motion.div
            key={choice}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 0.5,
            }}
            className="text-8xl"
        >
            {choice === 'Rock' && (
                <Image
                    width={140}
                    className=""
                    src="assets/fight/male-rock.png" 
                    alt="Rock" />
            )}
            {choice === 'Paper' && (
                <Image
                    width={140}
                    src="assets/fight/male-paper.png" 
                    alt="Paper" 
                />
            )}
            {choice === 'Scissor' && (
                <Image
                    width={140}
                    src="assets/fight/male-scissor.png" 
                    alt="Scissor" />
            )}
        </motion.div>
    );
};
