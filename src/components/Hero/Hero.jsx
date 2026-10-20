import { clampBuilder } from '@/helpers/clampBuilder';

export default function Hero() {
  const textSize = clampBuilder(45, 50);
  return (
    <section className="w-full pt-10.5 pb-12.5 bg-accent rounded-b-[30px] -mt-[1px]">
      <div className="flex flex-col items-center justify-items-center gap-6 px-5">
        <h1
          style={{ fontSize: textSize }}
          className="font-bold leading-none text-white "
        >
          Take good <span className="text-white/40">care</span> of your small
          pets
        </h1>
        <p className="text-sm tracking-tight text-white">
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
    </section>
  );
}
