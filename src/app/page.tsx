"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "@fontsource/lobster/400.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Section from "@/components/Section";
import MenuCard from "@/components/MenuCard";
import StarsBG from "@/components/StarsBG";
import ArtisteCard from "@/components/ArtisteCard";

const menu = [
	"Sandwich 5€",
	"Andouillette",
	"Kefta",
	"Merguez",
	"Frites 3€",
	"Boissons fraîches",
	"Vins",
	"Bières",
	"Café et thés",
];

const infos = [
	{ label: "📍 Lieu", value: "2 place St Georges, 71390 Messey-sur-Grosne" },
	{ label: "🕕 Heure", value: "À partir de 18h" },
	{ label: "🎟️ Entrée", value: "Gratuite" },
];

const photos = {
	mobile: "/poulet1.jpg",
	tablet: "/poulet2.jpg",
	desktop: "/poulet3.jpg",
	extra: "/poulet4.jpg",
};

function useDevicePhoto() {
	const [src, setSrc] = useState(photos.desktop);
	useEffect(() => {
		const update = () => {
			if (window.innerWidth < 640) setSrc(photos.mobile);
			else if (window.innerWidth < 1024) setSrc(photos.tablet);
			else if (window.innerWidth < 1440) setSrc(photos.desktop);
			else setSrc(photos.extra);
		};
		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, []);
	return src;
}

function MusicNotesBG() {
	const [notes, setNotes] = useState<{
		left: number;
		delay: number;
		color: string;
		icon: string;
	}[]>([]);
	useEffect(() => {
		const generated = Array.from({ length: 12 }).map((_, i) => ({
			left: Math.random() * 100,
			delay: Math.random() * 6,
			color: ["#7c3aed", "#f59e42", "#e11d48", "#10b981"][i % 4],
			icon: ["🎵", "🎶", "🎸", "🎷", "👽", "🧠"][i % 6],
		}));
		setNotes(generated);
	}, []);
	return (
		<div className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden">
			{notes.map((note, i) => (
				<span
					key={i}
					className="absolute animate-music-note top-[-40px] text-3xl opacity-40"
					style={{
						left: `${note.left}%`,
						animationDelay: `${note.delay}s`,
						color: note.color,
					}}
				>
					{note.icon}
				</span>
			))}
		</div>
	);
}

export default function Home() {
	const photo = useDevicePhoto();
	return (
		<div className="relative min-h-screen flex flex-col bg-black overflow-hidden">
			<div id="stars-bg" className="pointer-events-none select-none fixed inset-0 z-0"></div>
			<StarsBG />
			<MusicNotesBG />
			<Header />
			<div className="relative w-full" style={{ height: "28vh", minHeight: 140 }}>
				<Image
					src={photo}
					alt="Poulet ambiance"
					fill
					priority
					className="object-cover w-full h-full"
					style={{ objectPosition: "top center", opacity: 0.85 }}
				/>
				<div className="absolute inset-0 flex items-center justify-center">
					<Image
						src={photo}
						alt="Poulet ambiance zoom"
						width={220}
						height={140}
						className="rounded-xl shadow-2xl border-4 border-white object-contain bg-white/70"
						style={{ maxWidth: "80%", maxHeight: "80%" }}
					/>
				</div>
			</div>
			<Main>
				<div className="w-full flex flex-col items-center justify-center">
					<div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-10 max-w-[60vw] px-2 md:px-4 lg:px-8 xl:px-12 mt-12">
						<div className="flex-1 flex flex-col items-end">
							{/* Suppression du titre h2, seul le badge reste au-dessus de la card */}
							<Section className="w-full flex justify-end">
								<MenuCard menu={menu} />
							</Section>
						</div>
						<div className="flex-1 flex flex-col items-start">
							<Section className="w-full flex justify-start">
								<ArtisteCard />
							</Section>
						</div>
					</div>
					{/* Bloc infos pratiques aligné */}
					<div className="w-full flex justify-center mt-10 mb-8">
						<Section className="w-full max-w-[60vw]">
							<div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch w-full">
								{infos.map((info, i) => (
									<div
										key={i}
										className="flex-1 bg-gradient-to-br from-[#1a0e2a] via-[#2d133d] to-[#1a0e2a] rounded-3xl shadow-2xl border-4 border-white px-6 py-6 flex flex-col items-center justify-start min-w-[180px] w-full animate-pulse-slow"
									>
										<span className="inline-block bg-gradient-to-r from-[#2d133d] via-[#3a1d5c] to-[#1a0e2a] text-white font-extrabold rounded-full px-6 py-2 text-xl md:text-2xl mb-3 shadow border-2 border-pink-400 drop-shadow-lg mt-0 self-center text-center">
											{info.label}
										</span>
										<span className="text-lg md:text-2xl font-bold text-white text-center drop-shadow-lg tracking-wide mt-2">
											{info.value}
										</span>
									</div>
								))}
							</div>
						</Section>
					</div>
				</div>
			</Main>
			<Footer />
			<style jsx global>{`
				@keyframes music-note {
					0% {
						transform: translateY(0) scale(1) rotate(-10deg);
						opacity: 0.4;
					}
					80% {
						opacity: 0.7;
					}
					100% {
						transform: translateY(110vh) scale(1.2) rotate(10deg);
						opacity: 0;
					}
				}
				.animate-music-note {
					animation: music-note 7s linear infinite;
				}
			`}</style>
		</div>
	);
}
