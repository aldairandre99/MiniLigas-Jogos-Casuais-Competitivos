import { Image } from "@heroui/image";
import { motion } from "framer-motion";

interface FemaleSvgProps {
  choice: "Rock" | "Paper" | "Scissor" | null;
}

export const FemaleSvg = ({ choice }: FemaleSvgProps) => {
  return (
    <motion.div
      key={choice} // força re-render quando muda a escolha
      animate={{ x: 0, opacity: 1 }}
      className="text-8xl"
      initial={{ x: -200, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        duration: 0.5,
        delay: 0.3,
      }}
    >
      {choice === "Rock" && (
        <Image
          alt="Rock"
          className=""
          src="/assets/fight/female-rock.png"
          width={140}
        />
      )}
      {choice === "Paper" && (
        <Image
          alt="Paper"
          className="rotate-180"
          src="/assets/fight/male-paper.png"
          width={140}
        />
      )}
      {choice === "Scissor" && (
        <Image
          alt="Scissor"
          src="/assets/fight/female-scissor.png"
          width={140}
        />
      )}
    </motion.div>
  );
};
