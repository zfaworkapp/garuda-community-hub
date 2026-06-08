import { programs } from "@/lib/data";

export default function Programs() {
  return (
    <section className="bg-[#FBFBFC] py-16 lg:py-20">
      <div className="container-x">
        <h2 className="heading mx-auto w-fit text-center text-3xl lg:text-[34px]">
          Program Utama Kami
          <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-garuda-red" />
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {programs.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col items-center rounded-xl border border-gray-100 bg-cream px-4 py-7 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="text-garuda-red transition-transform group-hover:scale-110">
                <Icon size={34} strokeWidth={1.8} />
              </div>
              <h3 className="mt-4 text-[13px] font-extrabold uppercase leading-tight tracking-wide text-ink">
                {title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
