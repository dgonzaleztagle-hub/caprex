'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, ArrowLeft, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const LOGO = '/prospectos/caprex/logo.png';
const WA_LINK = 'https://wa.me/56926198159?text=Hola%2C%20quiero%20una%20propuesta%20personalizada%20para%20mi%20empresa';

export default function MisionYVisionPage() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const s = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', s);
        return () => window.removeEventListener('scroll', s);
    }, []);

    const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }) };

    return (
        <div className="caprex-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');
                * { margin: 0; padding: 0; box-sizing: border-box; }
                html, body { margin: 0; padding: 0; background: #0B1526; min-height: 100%; width: 100%; }
                .caprex-root { background:#0B1526; color:#E2EAF8; font-family:'Inter',sans-serif; overflow-x:hidden; width: 100%; }
                .caprex-root h1,.caprex-root h2,.caprex-root h3,.caprex-root h4 { font-family:'Space Grotesk',sans-serif; letter-spacing:-0.05em; }
                .c-btn { display:inline-flex;align-items:center;gap:0.5rem;padding:1.2rem 2.8rem;border-radius:9999px;font-weight:800;font-size:0.9rem;letter-spacing:0.05em;text-transform:uppercase;transition:all 0.25s ease;cursor:pointer;border:none;font-family:'Space Grotesk',sans-serif; }
                .c-btn-primary { background:#2563EB;color:#fff;box-shadow:0 0 40px #2563EB44; text-decoration: none; }
                .c-btn-primary:hover { background:#1d4ed8;transform:scale(1.04);box-shadow:0 0 60px #2563EB66; }
                .c-btn-ghost { background:transparent;color:#E2EAF8;border:1.5px solid #1E3A5F;text-decoration:none; }
                .c-btn-ghost:hover { border-color:#2563EB;color:#2563EB; background:rgba(37,99,235,0.05); transform:scale(1.04); }
                .mission-vision-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
                
                @media(max-width:768px){
                    .mission-vision-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
                    .caprex-root section { padding-left: 1.25rem !important; padding-right: 1.25rem !important; padding-top: 6rem !important; padding-bottom: 4rem !important; }
                    .c-btn { padding: 0.85rem 1.4rem !important; font-size: 0.78rem !important; width: 100% !important; justify-content: center !important; }
                }
            `}</style>

            {/* NAV COMPARTIDO BÁSICO */}
            <nav style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
                padding: '1.25rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: scrolled ? 'rgba(11,21,38,0.94)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid #1E3A5F' : 'none',
                transition: 'all 0.4s',
            }}>
                <Link href="/">
                    <Image src={LOGO} alt="CAPREX" width={200} height={56} style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5)) drop-shadow(0 0 3px rgba(255,255,255,0.8))', width: '130px', height: '36px' }} priority />
                </Link>
                <Link href="/" className="c-btn c-btn-ghost" style={{ padding: '0.6rem 1.2rem', fontSize: '0.7rem', width: 'auto' }}>
                    <ArrowLeft size={14} /> Volver al Inicio
                </Link>
            </nav>

            {/* CONTENIDO PRINCIPAL */}
            <section style={{ padding: '10rem 2.5rem 6rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '0', right: '0', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle,#2563EB08 0%,transparent 70%)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%' }}>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span style={{ color: '#2563EB', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.3rem', textTransform: 'uppercase' }}>Nuestro Propósito</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 900, lineHeight: 1, marginTop: '1rem', letterSpacing: '-0.04em' }}>
                            Misión y <span style={{ color: '#2563EB' }}>Visión.</span>
                        </h1>
                    </motion.div>

                    <div className="mission-vision-grid" style={{ marginBottom: '4rem' }}>
                        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}
                            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.5rem', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Target size={28} color="#2563EB" />
                                </div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif" }}>Nuestra Misión</h2>
                            </div>
                            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8 }}>
                                Diseñar soluciones integrales en prevención de riesgos que vayan más allá del cumplimiento legal, generando impacto real en la seguridad, bienestar y productividad organizacional.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
                            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.5rem', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <TrendingUp size={28} color="#2563EB" />
                                </div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif" }}>Nuestra Visión</h2>
                            </div>
                            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8 }}>
                                Ser la consultora referente en Chile, reconocida por transformar la cultura preventiva e integrar la salud física y bienestar emocional como pilares del éxito.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} style={{ textAlign: 'center' }}>
                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="c-btn c-btn-primary" style={{ width: 'auto' }}>
                            <MessageCircle size={18} /> Hablemos de prevención
                        </a>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
