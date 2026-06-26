import { SlChemistry } from "react-icons/sl";
import { RxScissors } from "react-icons/rx";

const AboutUs = () => {

    const stats = [
        { num: "B2B", label: "Global buyer network" },
        { num: "2-in-1", label: "Industry expertise" },
        { num: "100%", label: "Commitment to quality" },
    ];

    const values = [
        {
            icon: <RxScissors />,
            title: "Garment Manufacturing",
            desc: "We receive manufacturing orders from international buyers and coordinate full-cycle production — from fabric sourcing and cutting to stitching, finishing, and delivery. Quality control is embedded at every stage.",
        },
        {
            icon: <SlChemistry />,
            title: "Industrial Chemical Solutions",
            desc: "We supply and provide consultative support for industrial chemicals used in textile and manufacturing processes — ensuring safe, compliant, and effective chemical inputs for production environments.",
        },
    ];

    const team = [
        {
            initials: "MK",
            name: "Md Kamruzzaman",
            role: "Founder & Managing Director",
            bio: "Leads the overall vision and operations of Trust Trade International, overseeing both the garment manufacturing arm and industrial chemical solutions business.",
            color: "bg-blue-100 text-blue-700",
        },
        {
            initials: "AR",
            name: "Abdur Rahman",
            role: "Co-founder",
            bio: "Plays a key role in establishing the company's buyer relationships and strategic direction, bringing industry knowledge and a strong network to the business.",
            color: "bg-green-100 text-green-700",
        },
        {
            initials: "SB",
            name: "Shahinur Begum",
            role: "Partner",
            bio: "Contributes to the company's operational strength and stakeholder relationships, ensuring that commitments to clients are consistently met.",
            color: "bg-purple-100 text-purple-700",
        },
        {
            initials: "MM",
            name: "Md Mostafizur Rahman",
            role: "Partner",
            bio: "Supports the company's growth across both service lines, bringing hands-on expertise in manufacturing coordination and industrial supply operations.",
            color: "bg-orange-100 text-orange-700",
        },
    ];


    return (
        <div className="lg:w-4/6 mx-auto">
            <div className="pb-16 lg:mt-20">
                <h1 className="text-3xl lg:text-4xl font-medium leading-[1.1] tracking-tight text-gray-900">
                    Your trusted partner in{" "}<em className="not-italic text-blue-600 font-serif">garment manufacturing</em> and industrial solutions</h1>
                <p className="mt-6 text-gray-500 leading-relaxed">
                    We bridge global buyers with expert manufacturing, delivering precision-made garments and reliable industrial chemical solutions from Bangladesh to the world.
                </p>

                {/* Stats */}
                <div className="mt-14 grid grid-cols-3 divide-x divide-neutral-300 border border-neutral-300 rounded-xl overflow-hidden">
                    {stats.map((s) => (
                        <div key={s.label} className="px-6 py-5">
                            <p className="text-3xl font-medium tracking-tight text-gray-900">{s.num}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Mission ── */}
            <div>
                <p className="text-lg tracking-widest text-neutral-600 uppercase mb-3">Our mission</p>
                <div className="grid grid-cols-2 gap-12 items-start">
                    <blockquote className="font-serif text-xl leading-relaxed italic border-l-2 border-blue-500 pl-5 text-gray-900">
                        {`"We don't just fulfill orders — we build long-term partnerships founded on trust, precision, and reliable delivery."`}
                    </blockquote>
                    <p className="text-sm leading-7 text-gray-500">
                        {`Trust Trade International was founded with a clear purpose: to serve as a dependable bridge between international buyers and high-quality manufacturers in Bangladesh's garment industry — while also offering specialized industrial chemical solutions to meet modern production demands.`}
                        <br /><br />
                        Our leadership brings decades of combined experience in sourcing, manufacturing, and industrial supply chains. Every order we handle reflects our core commitment — quality that satisfies, timelines that are kept, and relationships that last.
                    </p>
                </div>
            </div>

            {/* ── Values ── */}
            <div className="py-16">
                <p className="text-lg tracking-widest text-neutral-600 uppercase mb-3">What we do</p>
                <div className="grid grid-cols-2 gap-3">
                    {values.map((v) => (
                        <div
                            key={v.title}
                            className="bg-white border border-gray-200 rounded-xl p-5"
                        >
                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-base mb-3">
                                {v.icon}
                            </div>
                            <h3 className="text-sm font-medium text-gray-900 mb-1">{v.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Team ── */}
            <div className="pb-16">
                <p className="text-lg tracking-widest text-neutral-600 uppercase mb-3">The team</p>
                <div className="grid grid-cols-2 gap-4">
                    {team.map((p) => (
                        <div
                            key={p.name}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-5"
                        >
                            <div
                                className={`w-12 h-12 rounded-full font-semibold flex items-center justify-center text-sm mb-3 ${p.color}`}
                            >
                                {p.initials}
                            </div>
                            <p className="text-sm font-medium text-gray-900">{p.name}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{p.role}</p>
                            <p className="text-xs text-gray-500 leading-relaxed mt-2">{p.bio}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AboutUs;