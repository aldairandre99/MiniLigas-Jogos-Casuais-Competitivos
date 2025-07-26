import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@heroui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { Image } from "@heroui/image"
import { useAuthStore } from '@/store/auth-store'
import { useSoundStore } from '@/store/sound'


const steps = [
  {
    key: "scissors",
    title: "Tesoura",
    emojiList: ["✌️", "✊", "🖐️"],
    highlight: 0,
    image: "/assets/Group-4.png",
  },
  {
    key: "rock",
    title: "Pedra",
    emojiList: ["✌️", "✊", "🖐️"],
    highlight: 1,
    image: "/assets/Group-2.png",
  },
  {
    key: "paper",
    title: "Papel",
    emojiList: ["✌️", "✊", "🖐️"],
    highlight: 2,
    image: "/assets/Group-6.png",
  },
]

export default function OnboardingFlow() {
  const [stepIndex, setStepIndex] = useState(0)
  const navigate = useNavigate()
  const current = steps[stepIndex]
  const currentUser = useAuthStore((u) => u.currentUser)
  const isPlaying = useSoundStore((s) => s.isPlaying)

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex((prev) => prev + 1)
    } else {
      if (currentUser) {
        navigate('/game')
      } else {
        navigate("/login")
      }

    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex">
      <div className="relative w-full max-w-[320px] mx-auto flex flex-col items-center justify-between h-full z-10 gap-y-20">

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-orange-400"
            initial={{ width: 0 }}
            animate={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-y-8"
          >
            <motion.div
              key={current.image}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={current.image}
                alt={current.title}
                width={160}
                height={160}
              />
            </motion.div>

            <div className="flex justify-center gap-6">
              {current.emojiList.map((emoji, index) => (
                <span
                  key={index}
                  className={`${index === current.highlight ? "text-yellow-400 text-3xl" : "text-white text-2xl"}`}
                >
                  {emoji}
                </span>
              ))}
            </div>

            <h1 className="dark:text-white text-4xl font-bold">{current.title}</h1>

            <div className='flex gap-x-2'>
              {(stepIndex === 1 || stepIndex === 2) && (
                <Button
                  onPress={() => {
                    if (isPlaying) {
                      const audio = new Audio("/sounds/swipe-audio-1.mp3");
                      audio.volume = 0.5;
                      audio.play().then(() => {
                        setStepIndex(stepIndex - 1);
                      }).catch(() => {
                        setStepIndex(stepIndex - 1);
                      });
                    } else {
                      setStepIndex(stepIndex - 1);
                    }
                  }}
                  className="bg-gray-200 text-gray-700 hover:bg-gray-300 text-lg font-semibold"
                >
                  Voltar
                </Button>
              )}
              <Button
                onPress={() => {
                  console.log(isPlaying)
                  if (isPlaying) {
                    const audio = new Audio("/sounds/swipe-audio-1.mp3");
                    audio.volume = 0.5;
                    audio.play().then(() => {
                      handleNext();
                    }).catch(() => {
                      handleNext();
                    });
                  } else {
                    handleNext();
                  }
                }}
                className="bg-[#FBC399] text-gray-700 hover:bg-orange-300 text-lg font-semibold"
              >
                {stepIndex === steps.length - 1 ? "Iniciar" : "Próximo"}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
