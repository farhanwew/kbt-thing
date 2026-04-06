import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft,
  Leaf, 
  Activity, 
  Sprout, 
  Smartphone, 
  ShieldCheck,
  TrendingUp,
  Globe,
  Wind,
  Download
} from 'lucide-react';
import html2pdf from 'html2pdf.js';

const slides = [
  { id: 'title' },
  { id: 'problem' },
  { id: 'solution' },
  { id: 'business_model' },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExporting, setIsExporting] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      const element = document.getElementById('pdf-export-container');
      const opt = {
        margin:       0,
        filename:     'basalbuddy-pitch.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'px', format: [1200, 675], orientation: 'landscape' }
      };
      html2pdf().set(opt).from(element).save().then(() => {
        setIsExporting(false);
      });
    }, 100);
  };

  const renderSlideContent = (id) => {
    switch (id) {
      case 'title':
        return (
          <div className="flex flex-col h-full justify-between p-16 animate-in fade-in duration-700">
            <div className="flex items-center gap-4">
              <Leaf className="w-8 h-8 text-[#4a5d23]" />
              <span className="font-mono text-sm tracking-widest text-[#4a5d23] uppercase">Pitch Deck</span>
            </div>
            
            <div className="max-w-5xl">
              <h1 className="text-[8.5rem] font-black text-stone-900 tracking-tighter leading-none mb-8">
                basalbuddy.
              </h1>
              <p className="text-4xl text-stone-600 font-light max-w-3xl leading-snug">
                democratizing canopy health & early ganoderma detection for independent palm smallholders.
              </p>
            </div>

            <div className="w-full h-px bg-stone-300 mt-12 mb-4"></div>
            <div className="flex justify-between font-mono text-xs text-stone-500 uppercase tracking-widest">
              <span>Confidential</span>
              <span>2026</span>
            </div>
          </div>
        );
      
      case 'problem':
        return (
          <div className="h-full flex flex-col p-16 animate-in slide-in-from-right-8 duration-500 bg-[#f4f1ea]">
            <div className="flex items-start justify-between mb-16">
              <h2 className="text-6xl font-black text-stone-900 tracking-tighter">
                the crisis.
              </h2>
              <div className="font-mono text-sm tracking-widest text-[#8b5a2b] uppercase border border-[#8b5a2b] px-3 py-1">
                Problem Statement
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-x-16 gap-y-12 flex-1">
              <div className="border-t-2 border-stone-900 pt-6">
                <div className="text-[#8b5a2b] mb-4">
                  <Wind className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-stone-900 tracking-tight mb-4">The Silent Killer</h3>
                <p className="text-stone-600 text-xl font-light leading-relaxed">
                  Ganoderma (Basal Stem Rot) ruins yields and lingers in soil. By the time visual symptoms appear to the human eye, the tree is already dead and infecting the surrounding plot.
                </p>
              </div>
              
              <div className="border-t-2 border-stone-900 pt-6">
                <div className="text-[#4a5d23] mb-4">
                  <Activity className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-stone-900 tracking-tight mb-4">The Hardware Barrier</h3>
                <p className="text-stone-600 text-xl font-light leading-relaxed">
                  True multispectral drones cost upwards of $10,000. Smallholder farmers—who own 41% of plantations—literally cannot afford the hardware needed to detect stress early.
                </p>
              </div>

              <div className="col-span-2 bg-[#e8e4db] p-8 border border-stone-300 flex items-center justify-between mt-auto">
                 <span className="font-mono text-base text-stone-500 uppercase tracking-widest">Current Market Failure</span>
                 <span className="text-2xl text-stone-800 font-medium">Smallholders are priced out of precision agriculture.</span>
              </div>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="h-full flex flex-col p-16 animate-in slide-in-from-right-8 duration-500">
             <div className="flex items-start justify-between mb-16">
              <h2 className="text-6xl font-black text-stone-900 tracking-tighter">
                the approach.
              </h2>
              <div className="font-mono text-sm tracking-widest text-[#4a5d23] uppercase border border-[#4a5d23] px-3 py-1">
                Technical Pipeline
              </div>
            </div>
            
            <div className="flex gap-8 flex-1">
              <div className="flex-1 border border-stone-300 p-8 flex flex-col bg-white">
                <div className="text-[#8b5a2b] font-mono text-xl mb-8 border-b border-stone-200 pb-4">01.</div>
                <Smartphone className="w-12 h-12 text-stone-800 mb-6" />
                <h4 className="font-bold text-3xl text-stone-900 tracking-tight mb-4">RGB Acquisition</h4>
                <p className="text-stone-600 text-lg font-light leading-relaxed mb-4">
                  Farmer flies any commercial consumer drone (e.g., DJI Mini). We rely on standard 4K spatial resolution.
                </p>
                <div className="mt-auto font-mono text-sm text-stone-400 bg-stone-100 p-3">
                  // No radiometric calibration or IR-cut filter removals needed.
                </div>
              </div>
              
              <div className="flex-1 border border-stone-300 p-8 flex flex-col bg-[#f4f1ea]">
                <div className="text-[#8b5a2b] font-mono text-xl mb-8 border-b border-stone-300 pb-4">02.</div>
                <Sprout className="w-12 h-12 text-stone-800 mb-6" />
                <h4 className="font-bold text-3xl text-stone-900 tracking-tight mb-4">Spectral Hallucination</h4>
                <p className="text-stone-600 text-lg font-light leading-relaxed mb-4">
                  Pipeline uses a CycleGAN to approximate NIR/Red-Edge bands from structural RGB cues, fed into a U-Net / ViT for segmentation.
                </p>
                <div className="mt-auto font-mono text-sm text-[#8b5a2b] bg-[#e8e4db] p-3">
                  // Image-to-image translation bridges the hardware gap.
                </div>
              </div>
              
              <div className="flex-1 border border-[#4a5d23] p-8 flex flex-col bg-[#4a5d23] text-stone-100">
                <div className="text-[#a3b87a] font-mono text-xl mb-8 border-b border-[#5f7434] pb-4">03.</div>
                <ShieldCheck className="w-12 h-12 text-[#c2d49a] mb-6" />
                <h4 className="font-bold text-3xl text-white tracking-tight mb-4">Geo-Registered Inference</h4>
                <p className="text-[#c2d49a] text-lg font-light leading-relaxed mb-4">
                  Platform generates a segmented GeoTIFF heatmap, plotting exact RTK coordinates of anomalous canopies.
                </p>
                <div className="mt-auto font-mono text-sm text-[#4a5d23] bg-[#c2d49a] p-3">
                  // Targeted culling minimizes collateral yield loss.
                </div>
              </div>
            </div>
          </div>
        );

      case 'business_model':
        return (
          <div className="h-full flex flex-col p-12 animate-in slide-in-from-right-8 duration-500 bg-[#f4f1ea]">
            <div className="flex items-start justify-between mb-8">
              <h2 className="text-5xl font-black text-stone-900 tracking-tighter">
                commercialization.
              </h2>
            </div>
            
            <div className="flex gap-8 h-[calc(100%-4rem)]">
              {/* Left Column: Market Potential */}
              <div className="w-1/3 flex flex-col gap-6 h-full">
                <div className="bg-white border border-stone-300 p-8 flex-1 flex flex-col relative overflow-hidden">
                  <h3 className="font-bold text-lg mb-8 text-stone-800 tracking-tight uppercase font-mono text-sm">Market Potential</h3>
                  
                  <div className="relative w-full flex-1 flex items-end justify-center pb-0">
                    {/* TAM */}
                    <div className="absolute bottom-0 w-[300px] h-[150px] bg-stone-100 border-t-2 border-x-2 border-stone-300 rounded-t-full flex flex-col items-center pt-3 z-10 left-1/2 -translate-x-1/2">
                      <div className="text-stone-500 font-mono text-[11px] uppercase tracking-widest mb-1">Indonesia</div>
                      <div className="text-stone-800 font-black text-3xl leading-none">Rp 840B</div>
                      <div className="text-stone-500 text-[11px] uppercase tracking-wider mt-1">TAM</div>
                    </div>
                    {/* SAM */}
                    <div className="absolute bottom-0 w-[200px] h-[100px] bg-[#e6d5c3] border-t-2 border-x-2 border-[#8b5a2b] rounded-t-full flex flex-col items-center pt-2 z-20 left-1/2 -translate-x-1/2">
                      <div className="text-[#8b5a2b] font-mono text-[10px] uppercase tracking-widest mb-1 mt-1">Endemic</div>
                      <div className="text-stone-900 font-black text-2xl leading-none">Rp 130B</div>
                      <div className="text-[#8b5a2b] text-[10px] uppercase tracking-wider mt-1">SAM</div>
                    </div>
                    {/* SOM */}
                    <div className="absolute bottom-0 w-[110px] h-[55px] bg-[#4a5d23] border-t-2 border-x-2 border-[#2c3815] rounded-t-full flex flex-col items-center pt-3 z-30 left-1/2 -translate-x-1/2">
                      <div className="text-[#c2d49a] font-black text-lg leading-none mt-1">Rp 6.5B</div>
                      <div className="text-[#a3b87a] font-mono text-[9px] uppercase tracking-widest">SOM (3yr)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-900 p-6 border border-stone-800 shrink-0">
                  <h3 className="font-mono text-sm uppercase tracking-widest text-[#a3b87a] mb-3">
                    The Data Moat
                  </h3>
                  <p className="text-base text-stone-400 font-light leading-relaxed">
                    Farmers receive bankable replanting data. Basalbuddy acquires massive visual datasets to continuously fine-tune our base models.
                  </p>
                </div>
              </div>

              {/* Right Column: Revenue Streams */}
              <div className="w-2/3 flex flex-col gap-6 h-full">
                <div className="bg-white border border-stone-300 p-8 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg mb-8 text-stone-800 tracking-tight uppercase font-mono text-sm">Revenue Streams</h3>
                  <div className="grid grid-cols-3 gap-6 flex-1">
                    
                    {/* Tier 1 */}
                    <div className="border-t-2 border-stone-300 pt-4 flex flex-col group hover:border-[#8b5a2b] transition-colors">
                      <div className="text-stone-500 text-xs uppercase tracking-widest font-mono mb-2">Independent</div>
                      <div className="text-3xl font-black text-stone-900">Rp 25k</div>
                      <div className="text-sm text-stone-500 font-mono mb-6">/ha /scan</div>
                      <ul className="text-base text-stone-600 space-y-3 font-light">
                        <li className="flex items-start gap-2">Pay-as-you-go PDF reports</li>
                        <li className="flex items-start gap-2">No hardware required, any RGB drone</li>
                      </ul>
                    </div>

                    {/* Tier 2 */}
                    <div className="border-t-2 border-[#4a5d23] pt-4 flex flex-col bg-[#f9fafa] -mx-4 px-4 pb-4">
                      <div className="text-[#4a5d23] text-xs uppercase tracking-widest font-mono mb-2 flex justify-between">
                        <span>Koperasi</span>
                        <span className="bg-[#4a5d23] text-white px-1">TARGET</span>
                      </div>
                      <div className="text-3xl font-black text-stone-900">Rp 2.5m</div>
                      <div className="text-sm text-stone-500 font-mono mb-6">/month</div>
                      <ul className="text-base text-stone-600 space-y-3 font-light">
                        <li className="flex items-start gap-2">Covers up to 500 hectares</li>
                        <li className="flex items-start gap-2">Central management dashboard</li>
                        <li className="flex items-start gap-2">PSR replanting data prep</li>
                      </ul>
                    </div>

                    {/* Tier 3 */}
                    <div className="border-t-2 border-stone-300 pt-4 flex flex-col group hover:border-[#8b5a2b] transition-colors">
                      <div className="text-stone-500 text-xs uppercase tracking-widest font-mono mb-2">Enterprise</div>
                      <div className="text-3xl font-black text-stone-900">Rp 150m</div>
                      <div className="text-sm text-stone-500 font-mono mb-6">/year</div>
                      <ul className="text-base text-stone-600 space-y-3 font-light">
                        <li className="flex items-start gap-2">Direct API system integration</li>
                        <li className="flex items-start gap-2">Custom fine-tuned CV models</li>
                        <li className="flex items-start gap-2">Continuous monitoring portal</li>
                      </ul>
                    </div>

                  </div>
                </div>

                <div className="flex gap-6 shrink-0">
                  <div className="flex-1 bg-white border border-stone-300 p-6 flex items-start gap-4">
                     <Globe className="w-6 h-6 text-[#8b5a2b] shrink-0 mt-1"/>
                     <div>
                       <div className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-1">Impact</div>
                       <p className="text-base text-stone-800 font-light">Optimizes yield for the lower-middle class, directly reducing deforestation pressure.</p>
                     </div>
                  </div>
                  <div className="flex-1 bg-white border border-stone-300 p-6 flex items-start gap-4">
                     <TrendingUp className="w-6 h-6 text-[#4a5d23] shrink-0 mt-1"/>
                     <div>
                       <div className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-1">Financial</div>
                       <p className="text-base text-stone-800 font-light">Pure software play minimizes CAPEX. High margin scaling via cloud inference.</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Slide missing</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#1c1b1a] font-sans selection:bg-[#4a5d23] selection:text-white p-8 overflow-hidden">
      
      <div className="flex-1 w-full max-w-7xl mx-auto bg-[#fdfdfc] shadow-2xl relative flex flex-col border border-stone-800">
        
        <div className="flex-1 overflow-hidden relative">
           {renderSlideContent(slides[currentSlide].id)}
        </div>

        {/* Hidden Container for Exporting PDF */}
        {isExporting && (
          <div id="pdf-export-container" className="absolute -left-[9999px] top-0 w-[1200px] bg-white flex flex-col overflow-hidden">
            {slides.map(slide => (
              <div key={slide.id} className="h-[675px] w-full relative shrink-0 border-b border-stone-300">
                 {renderSlideContent(slide.id)}
              </div>
            ))}
          </div>
        )}

        {/* Brutalist Navigation Footer */}
        <div className="h-16 bg-stone-900 border-t border-stone-800 flex items-center justify-between px-8 shrink-0">
          <div className="font-mono text-xs text-stone-400 uppercase tracking-widest">
            Basalbuddy
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="text-stone-400 hover:text-white disabled:opacity-20 disabled:hover:text-stone-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-[2px] transition-all duration-300 ${idx === currentSlide ? 'bg-[#c2d49a] w-8' : 'bg-stone-700 w-4'}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="text-stone-400 hover:text-white disabled:opacity-20 disabled:hover:text-stone-400 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <div className="font-mono text-xs text-stone-400 uppercase tracking-widest">
              {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
            
            <button 
              onClick={handleExportPDF}
              disabled={isExporting}
              className="flex items-center gap-2 text-stone-400 hover:text-[#c2d49a] transition-colors border-l border-stone-800 pl-6 disabled:opacity-50 disabled:hover:text-stone-400"
            >
              <Download className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest pt-1">
                {isExporting ? 'Exporting...' : 'Export PDF'}
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}