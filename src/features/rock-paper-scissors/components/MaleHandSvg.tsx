import { Image } from "@heroui/image";
import { motion } from "framer-motion";
import rockImage from "/assets/fight/male-rock.png"
import paperImage from "/assets/fight/male-paper.png"
import scissorImage from "/assets/fight/male-scissor.png"

interface MaleHandSvgProps {
  choice: "Rock" | "Paper" | "Scissor" | null;
}

export const MaleHandSvg = ({ choice }: MaleHandSvgProps) => {
  return (
    <motion.div
      key={choice}
      animate={{ x: 0, opacity: 1 }}
      className="text-8xl"
      initial={{ x: 200, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        duration: 0.5,
      }}
    >
      {choice === "Rock" && (
        <Image
          alt="Rock"
          src={rockImage}
          width={140}
        />
      )}
      {choice === "Paper" && (
        <Image alt="Paper" src={paperImage} width={140} />
      )}
      {choice === "Scissor" && (
        <Image alt="Scissor" src={scissorImage} width={140} />
      )}
    </motion.div>
  );
};
