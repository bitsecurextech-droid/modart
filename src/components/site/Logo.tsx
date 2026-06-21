// src/components/site/Logo.tsx

export function Logo() {
  // 使用方案一：Cloudinary 直接生成圆形图片
  const logoSrc =
    "https://res.cloudinary.com/dtmgyzviw/image/upload/c_thumb,r_max/v1782051953/Screenshot_2026-06-21_072529_umumpu.png";

  return (
    <div className="flex items-center gap-2.5">
      {/* 圆形 Logo 图片 */}
      <img
        src={logoSrc}
        alt="MOD-Arts School of Music"
        className="h-12 w-12 object-cover" // 固定宽高，保持圆形
      />
      {/* 品牌名称文字 */}
      <div>
        <span className="font-display text-xl font-bold tracking-tight text-navy">
          MOD<span className="text-gold">Arts</span>
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/60">
          School of Music
        </span>
      </div>
    </div>
  );
}
