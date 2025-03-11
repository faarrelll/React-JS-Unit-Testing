import Confetti, { ConfettiRef } from "@/components/ui/confetti";
import { useUserContext } from "@/hooks/useUserContext";
import MainLayout from "@/layout/main/MainLayout";
import { useRef } from "react";

export default function CongratulationsPage() {
  const confettiRef = useRef<ConfettiRef>(null);
  const { user } = useUserContext();
  return (
    <MainLayout>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Thanks <span className="text-primary">{user?.firstName}</span> for
          your purchase!
        </span>

        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-0 size-full"
          onMouseEnter={() => {
            confettiRef.current?.fire({});
          }}
        />
      </div>
    </MainLayout>
  );
}
