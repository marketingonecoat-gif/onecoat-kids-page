/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Leaf, 
  CheckCircle, 
  Droplets, 
  Wind, 
  Activity,
  Shield, 
  Sparkles, 
  ArrowRight, 
  Quote,
  ShieldCheck,
  Palette,
  Check
} from "lucide-react";

const Navigation = () => (
  <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/15">
    <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-7xl mx-auto">
      <div className="font-serif font-bold text-xl text-primary tracking-tight">
        CÙNG BÉ LỚN KHÔN
      </div>
      <div className="hidden md:flex gap-8 items-center font-serif text-lg tracking-tight">
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Sản Phẩm</a>
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Công Nghệ</a>
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Dự Án</a>
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Blog</a>
      </div>
      <button className="gradient-btn px-6 py-2 rounded-full hover:scale-105 active:opacity-80 font-medium text-sm">
        Nhận Tư Vấn
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-12 md:pt-24 pb-20 md:pb-32 px-6 lg:px-8 overflow-hidden bg-surface">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-5 space-y-8 z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm border border-outline-variant/15">
          <Leaf className="text-primary w-4 h-4 fill-primary/20" />
          <span>Paint & More - Sơn bảo vệ sức khỏe</span>
        </div>
        <h1 className="font-serif text-5xl lg:text-7xl text-on-surface leading-[1.1] tracking-tight">
          Không gian và Màu Sắc <br/><span className="text-primary italic">nuôi dưỡng tuổi thơ</span>
        </h1>
        <p className="font-sans text-lg text-on-surface-variant leading-relaxed max-w-md">
          Khởi tạo một môi trường sống trong lành với chất lượng không khí hoàn hảo, hỗ trợ tối đa cho sự phát triển thể chất và tinh thần của trẻ trong những năm tháng đầu đời.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="gradient-btn px-8 py-4 rounded-full font-bold text-base hover:scale-[1.02] ambient-shadow flex items-center justify-center gap-2">
            Tư vấn miễn phí
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-transparent text-primary border border-outline-variant/30 px-8 py-4 rounded-full font-bold text-base hover:bg-white transition-colors flex items-center justify-center gap-2">
            Khám phá công nghệ
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7 relative"
      >
        <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="relative rounded-xl overflow-hidden aspect-[4/3] ambient-shadow border border-outline-variant/15">
          <img 
            alt="Japandi nursery room with warm natural sunlight" 
            className="object-cover w-full h-full object-center" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeMAq3terFA05ZFzCfOvkOInQRX9mZBsWBd2iQwhDIO-_R2olB807s5vw9rgWjvojoP52VV9eTaO_OnaWXrMHKjO-Sh8DLvO0OpQx6uUr6Wst55F-hRvkQxFRXxkpCc7_yqcOp0pdgXSPwDfG-83BeUWaRVAV136Y7kK_bE3q3zzHEfdSBGV5gVl_NkVOWi1B7uzxFFltbPneajFBmLduofWEdDyuhhJwXozb1TCfahFnKrjVj0CXHmY4CxgF2wBZDP1BuP8z9Tg"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg ambient-shadow border border-outline-variant/15 max-w-[200px]"
        >
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="text-secondary w-6 h-6 fill-secondary/20" />
            <span className="font-serif font-bold text-on-surface">15+ Năm</span>
          </div>
          <p className="text-xs text-on-surface-variant leading-tight">Kinh nghiệm kiến tạo không gian sống chuẩn quốc tế.</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const StorySection = () => (
  <section className="py-24 px-6 lg:px-8 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="order-2 lg:order-1 relative"
      >
        <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] ambient-shadow">
          <img 
            alt="Peaceful baby sleeping in a clean nursery" 
            className="object-cover w-full h-full object-center" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4srmxdZ7_YdauO_qtx9DMPWSaJeVo12Rf_V6p7DTMmLdhc3RTOyxyzgRZFMahPtnmiDGxv2DMlV4jHDaBhi4PM2iKx4r1VE33KeX0yxGDdsvPcIkJRNsVBILtyQzH0iwz-3FeYDbfj_Vfvp3KSaYu5PxNge8TloYWXNM5jkO_YYaJaDiAAc8_g_UrWzbzswvU6HMBP8vjlM1aEmgAAx_UKx0XL929MI1Ky-wMYgRMYJiTwQ6sRhs3wInVuHv6iTz6muNbmsb9jQ"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="order-1 lg:order-2 space-y-8"
      >
        <Quote className="w-12 h-12 text-primary/20 rotate-180" />
        <h2 className="font-serif text-4xl lg:text-5xl text-on-surface leading-tight">
          Không gian đầu đời,<br/>
          <span className="text-primary italic">nền tảng trọn đời.</span>
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Năm tháng đầu đời, trẻ dành hơn 80% thời gian trong phòng. Đây không chỉ là nơi ngủ, mà là "The Nurturing Sanctuary" - một không gian nuôi dưỡng tiềm thức, kích thích trí não và bảo vệ sức khỏe từ những hơi thở đầu tiên.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Chúng tôi tin rằng, một căn phòng hoàn hảo không chỉ đẹp ở ánh nhìn, mà phải thực sự an toàn và "thở" cùng nhịp đập của bé.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const DangersSection = () => (
  <section className="py-24 px-6 lg:px-8 bg-surface">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <span className="text-primary tracking-widest text-sm font-bold mb-4 block uppercase font-serif">Góc Khuất</span>
      <h2 className="font-serif text-4xl text-on-surface mb-6">Những nguy cơ vô hình trong phòng bé</h2>
      <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Sơn tường thông thường tiềm ẩn những rủi ro lâu dài mà mắt thường không thể nhìn thấy.</p>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { 
          icon: <Wind className="w-6 h-6" />, 
          title: "Khí độc VOCs", 
          text: "Hợp chất hữu cơ dễ bay hơi từ sơn thông thường có thể gây kích ứng hệ hô hấp non nớt của trẻ.",
          color: "bg-error-container text-error"
        },
        { 
          icon: <Droplets className="w-6 h-6" />, 
          title: "Nấm Mốc Tiềm Ẩn", 
          text: "Độ ẩm cao gây nấm mốc trên tường, phát tán bào tử vào không khí ảnh hưởng trực tiếp đến sức khỏe.",
          color: "bg-tertiary-container text-on-tertiary-container"
        },
        { 
          icon: <Activity className="w-6 h-6" />, 
          title: "Mùi Sơn Hóa Học", 
          text: "Mùi hắc khó chịu kéo dài nhiều tuần sau khi sơn, làm gián đoạn giấc ngủ và sự thoải mái của bé.",
          color: "bg-secondary-container text-on-secondary-container"
        }
      ].map((card, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/20 hover:shadow-lg transition-transform hover:-translate-y-1"
        >
          <div className={`w-14 h-14 rounded-full ${card.color} flex items-center justify-center mb-6`}>
            {card.icon}
          </div>
          <h3 className="font-serif text-xl text-on-surface mb-3 font-bold">{card.title}</h3>
          <p className="text-on-surface-variant leading-relaxed">{card.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const FeaturesGrid = () => (
  <section className="py-24 px-6 lg:px-8 bg-surface-container-low">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <span className="text-primary tracking-widest text-sm font-bold mb-4 block uppercase font-serif">Giải Pháp Trọn Vẹn</span>
      <h2 className="font-serif text-4xl text-on-surface mb-6">Hệ sinh thái <span className="text-primary">OneCoat For Kids</span></h2>
    </div>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="p-6">
        <div className="text-4xl font-serif text-primary/30 mb-4">01</div>
        <h4 className="font-serif font-bold text-lg mb-2">KEISOUDO</h4>
        <p className="text-on-surface-variant text-sm">Bức tường hô hấp tự nhiên</p>
      </div>
      <div className="p-6 border-t md:border-t-0 md:border-l border-outline-variant/20">
        <div className="text-4xl font-serif text-secondary/30 mb-4">02</div>
        <h4 className="font-serif font-bold text-lg mb-2">Chalkboard</h4>
        <p className="text-on-surface-variant text-sm">Góc sáng tạo không giới hạn</p>
      </div>
      <div className="p-6 border-t md:border-t-0 md:border-l border-outline-variant/20">
        <div className="text-4xl font-serif text-tertiary/30 mb-4">03</div>
        <h4 className="font-serif font-bold text-lg mb-2">Dura-Poxy</h4>
        <p className="text-on-surface-variant text-sm">Bề mặt bền bỉ, dễ lau chùi</p>
      </div>
    </div>
  </section>
);

const DetailSections = () => (
  <>
    {/* Section 4: KEISOUDO */}
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-xs tracking-wider rounded-full uppercase">Công nghệ lõi</div>
          <h2 className="font-serif text-4xl text-on-surface">Bức tường "Thở" với <br/><span className="text-primary italic">KEISOUDO</span></h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Được chiết xuất từ tảo cát tự nhiên, sơn KEISOUDO hoạt động như một "lá phổi thụ động" cho căn phòng, mang đến môi trường trong lành tuyệt đối.
          </p>
          <ul className="space-y-4 pt-4">
            {[
              { title: "Hấp thụ VOCs & Khử mùi", text: "Lọc sạch không khí, loại bỏ mùi hôi và các chất độc hại vô hình." },
              { title: "Kiểm soát độ ẩm thông minh", text: "Ngăn chặn hoàn toàn sự hình thành nấm mốc trong những ngày nồm ẩm." },
              { title: "Nâng niu giấc ngủ sâu", text: "Không gian thoáng đãng giúp bé ngủ ngon hơn, sâu giấc hơn." }
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle className="text-primary mt-1 w-5 h-5 flex-shrink-0" />
                <div>
                  <strong className="font-serif block text-on-surface">{feature.title}</strong>
                  <p className="text-sm text-on-surface-variant">{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="relative">
          <img 
            alt="Texture of healthy wall paint" 
            className="rounded-[2rem] object-cover w-full aspect-square ambient-shadow" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9mRRN-CGJFXv8tEflLmg59Z5dJ5_8-k-ELxG-eLHrN6xYFiRgb_kj9hFxho8dFNlYXd9N0xwFbo8V5BJ6xZD8L-A8xxX0UnJHqJQwop4udmeuzkdTcyCtk9is0-_8BPrXHmMNy-9dcix6Mo1UmEljMkRBKVmRk3GtcAB3wyavzxN1Y9Oww-Y0iZ3Dsd0akVN0_Yg1QDBAvYa7oX81FZ1-bkv-ecKV337ZoOnl_V5_b-ctt_R4vA7fGhh5F3gxYi9SosQrIYzu4A"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>

    {/* Section 5: Chalkboard */}
    <section className="py-24 px-6 lg:px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <img 
            alt="Child drawing on a chalkboard wall" 
            className="rounded-[2rem] object-cover w-full aspect-square ambient-shadow" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArinZA_1TgZ3qk1CUq40lutLf6WG4zD6Jh2ENV0G_sfAZ1E3K6C_d239DZM6p1Tjjb4YgwDp2AtSY8j3Xq39NabkWqIW1y1xG5uPDn6RWcg7_DT5RYnuk_mZE_BOWDlABIn0nBQGrzFrYdo1IQpacs-GCcQ1Jit5XnZ0rAsPHF90DRuS0BwTXNDm7CzUsuyGgXHBQdxk8FxdQZCTTusRi7UE8wsm48JJb0BqKjz3fIg5KsXr67s5klJgKWVkD6jBYJVxqtex9XAQ"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 lg:order-2 space-y-6">
          <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary font-bold text-xs tracking-wider rounded-full uppercase">Không gian phát triển</div>
          <h2 className="font-serif text-4xl text-on-surface">Chalkboard - <br/><span className="text-secondary italic">Góc sáng tạo của riêng con</span></h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Biến một mảng tường thành bức tranh khổng lồ. Từ 2 tuổi trở lên, trí tưởng tượng của trẻ cần không gian để bay bổng.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Tạo ra một "Studio Mini" ngay trong phòng, nơi bé tự do vẽ, học và thể hiện bản thân mà cha mẹ không phải lo lắng về việc làm hỏng tường nhà.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Section 6: Dura-Poxy */}
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
          <div className="inline-block px-3 py-1 bg-tertiary/10 text-tertiary font-bold text-xs tracking-wider rounded-full uppercase">Bảo vệ tối ưu</div>
          <h2 className="font-serif text-4xl text-on-surface">Dura-Poxy - <br/><span className="text-tertiary italic">Bền bỉ cùng năm tháng</span></h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Khu vực vui chơi thường xuyên bị vấy bẩn và trầy xước. Sơn Dura-Poxy là lớp lá chắn hoàn hảo cho những khu vực "tần suất cao".
          </p>
          <ul className="space-y-4 pt-4">
            <li className="flex items-center gap-3">
              <Sparkles className="text-tertiary w-5 h-5" />
              <span className="text-on-surface-variant">Dễ dàng lau chùi mọi vết bẩn cứng đầu.</span>
            </li>
            <li className="flex items-center gap-3">
              <Shield className="text-tertiary w-5 h-5" />
              <span className="text-on-surface-variant">Chống trầy xước vượt trội so với sơn thông thường.</span>
            </li>
            <li className="flex items-center gap-3">
              <Palette className="text-tertiary w-5 h-5" />
              <span className="text-on-surface-variant">Bề mặt mịn màng, giữ màu sắc tươi mới lâu dài.</span>
            </li>
          </ul>
        </motion.div>
        <div className="relative">
          <img 
            alt="Clean and minimal nursery" 
            className="rounded-[2rem] object-cover w-full aspect-square ambient-shadow" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXNg7G4VJJr_ljrZ_h-KRTcLA1i8ot6sofUXzTMaf6tCMv6fKtMkHwOYV2qqY5bcvRr9PhTIaCr15eed8eQT3ERSa82wxrURqDNWVrQbN7uwrNJy469nVG3Y186fszTNv4Hkv4sDu9WPr3G0b3dpWYaMW5HGPKvHeiID2BBmzPNDMah28OXlgC4BBSbaekaD-Q6df6VdVc4wBtmOsNzGO8yGh0-l9YhpNgT4YdvRHeEl0t8tOd2Zc0D1NCtKfG0S99ZEegG4Swng"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  </>
);

const ShowcaseSection = () => (
  <section className="py-12 bg-surface">
    <div className="max-w-[90rem] mx-auto px-4">
      <div className="relative rounded-3xl overflow-hidden aspect-video ambient-shadow group">
        <img 
          alt="Japandi style nursery" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7SfXjZHLGpLWnmbleWKdMX2hVKcQ58V0Dl5FPRg-cs3EfeGcoQXLSG6FmIHA9gK4u5FDlQGhWnsJ6XASJuoI6DMtnhusLlTjRZW7M4u5WzjbuZOK10Mqp74zkC053zXNLGyG6af6IeASLBKdfSZfKZyGlHkRMM_mXTtdT9Fafh8gL90XNfwzW1yPySL-TD_dhnSyvtgmZlLye1W6Eg9MNpaFZeI8scSjFpurvDXtsspyLbc7TPeEJGc7tvRpk0adCQKz7O-0Wsw"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
        <div className="absolute bottom-6 md:bottom-16 left-6 md:left-16 right-6">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-sm border border-white/30">#Minimal</span>
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-sm border border-white/30">#Warm</span>
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-sm border border-white/30">#Natural</span>
          </div>
          <h3 className="font-serif text-3xl md:text-5xl text-white font-bold">Thẩm mỹ Japandi tinh tế</h3>
        </div>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section className="py-24 px-6 lg:px-8 bg-surface-container-low">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-[2rem] p-8 md:p-12 ambient-shadow border border-outline-variant/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-error text-white font-bold px-6 py-2 rounded-bl-xl text-sm">Ưu đãi giới hạn</div>
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl mb-4 text-on-surface">Gói Kiến Tạo "Nurturing Sanctuary"</h2>
          <p className="text-on-surface-variant">Giải pháp trọn gói cho phòng ngủ tiêu chuẩn (15-20m2)</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-outline-variant/20 pb-10 mb-10 gap-8">
          <div className="space-y-4">
            {[
              "Sơn mảng chính KEISOUDO (Bảo vệ hô hấp)",
              "Sơn góc sáng tạo Chalkboard (Vẽ phấn)",
              "Sơn Dura-Poxy các mảng còn lại (Dễ lau chùi)",
              "Chi phí thi công trọn gói chuẩn Nhật"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Check className="text-primary w-5 h-5" />
                <span className="text-on-surface">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-right">
            <div className="line-through text-on-surface-variant opacity-50 text-xl font-serif mb-1">8.190.000 VNĐ</div>
            <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">6.500.000 VNĐ</div>
            <div className="text-on-surface-variant text-sm bg-surface-container px-4 py-2 rounded-lg inline-block">
              Giá trị đầu tư: ~114.000 VNĐ/tháng (trong 5 năm)
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="gradient-btn px-10 py-4 rounded-full font-bold text-lg hover:scale-105 shadow-xl inline-flex items-center gap-2">
            Đăng ký nhận ưu đãi
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="py-24 px-6 lg:px-8 bg-surface">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="font-serif text-3xl text-on-surface mb-12 opacity-80 font-medium">Hơn 15 năm kinh nghiệm đồng hành cùng các dự án tiêu chuẩn cao</h2>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        {["SAIGON PEARL", "ETOWN", "MASTERI", "VINHOMES"].map((logo) => (
          <span key={logo} className="font-serif text-2xl font-bold tracking-[0.2em]">{logo}</span>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="py-24 px-6 lg:px-8 bg-primary-container text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    <div className="max-w-4xl mx-auto relative z-10 text-center">
      <h2 className="font-serif text-4xl md:text-5xl mb-6 font-bold leading-tight">Hãy để chúng tôi cùng bạn<br/>chuẩn bị món quà đầu đời hoàn hảo nhất.</h2>
      <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
        Một không gian khỏe mạnh hôm nay là nền tảng vững chắc cho tương lai rạng rỡ của con ngày mai.
      </p>
      <form className="bg-white p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-bold text-on-surface mb-2">Họ và Tên</label>
            <input className="w-full rounded-xl border-none bg-surface-container-high focus:ring-2 focus:ring-primary px-4 py-3 text-on-surface" placeholder="Nhập tên của bạn" type="text" />
          </div>
          <div>
            <label className="block text-sm font-bold text-on-surface mb-2">Số điện thoại</label>
            <input className="w-full rounded-xl border-none bg-surface-container-high focus:ring-2 focus:ring-primary px-4 py-3 text-on-surface" placeholder="09xx xxx xxx" type="tel" />
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-bold text-on-surface mb-2">Diện tích phòng bé dự kiến (m2)</label>
          <input className="w-full rounded-xl border-none bg-surface-container-high focus:ring-2 focus:ring-primary px-4 py-3 text-on-surface" placeholder="Ví dụ: 15m2" type="text" />
        </div>
        <button className="w-full gradient-btn px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90" type="button">
          Nhận tư vấn cá nhân hóa miễn phí
        </button>
        <p className="text-center text-xs text-on-surface-variant mt-4">Chúng tôi cam kết bảo mật thông tin của bạn.</p>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full py-12 bg-surface-container px-6 md:px-8 border-t border-outline-variant/15">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <div className="font-serif text-lg font-bold text-primary mb-4 uppercase tracking-tighter">
          CÙNG BÉ LỚN KHÔN
        </div>
        <p className="text-sm leading-relaxed text-on-surface-variant opcity-70">
          © 2024 CÙNG BÉ LỚN KHÔN - Kiến tạo không gian chữa lành cho thế hệ tương lai.
        </p>
      </div>
      <div className="md:col-span-2 flex flex-wrap justify-end gap-x-12 gap-y-4 text-sm font-medium text-on-surface-variant">
        <a className="hover:text-primary transition-colors" href="#">Chính sách bảo mật</a>
        <a className="hover:text-primary transition-colors" href="#">Điều khoản sử dụng</a>
        <a className="hover:text-primary transition-colors" href="#">Liên hệ hợp tác</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <StorySection />
        <DangersSection />
        <FeaturesGrid />
        <DetailSections />
        <ShowcaseSection />
        <PricingSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

