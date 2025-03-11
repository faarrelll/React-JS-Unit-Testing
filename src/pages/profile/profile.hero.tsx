import { FadeText } from "@/components/ui/fade-text";
import { User } from "@/lib/interfaces";

export default function ProfileHeroSection({ user }: { user: User | null }) {
  return (
    <section className="h-[200px] md:h-[300px] w-full relative overflow-hidden group">
      <img
        src={user?.background}
        alt="hero"
        className="w-full h-full object-cover bg-bottom bg-no-repeat"
      />

      <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10  translate-y-28 group-hover:z-10 group-hover:translate-y-0 group-hover:backdrop-blur-sm bg-gradient-to-t from-black to-transparent flex justify-center items-center transition-all duration-300">
        <div className="container flex flex-col items-center text-center">
          <FadeText
            className="text-2xl md:text-5xl font-bold p-3 text-white text-center"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.3 } },
            }}
            text={`${user?.firstName} ${user?.lastName ?? ""}`}
          />
          <FadeText
            className="text-sm text-white"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.6 } },
            }}
            text={`${user?.email}`}
          />
        </div>
      </div>
    </section>
  );
}
