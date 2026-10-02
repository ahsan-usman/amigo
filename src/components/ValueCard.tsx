import { useTranslation } from "react-i18next"

export function ValueCard({
  num,
  title,
  text,
}: {
  accentFront?: string
  accentBack?: string
  iconBgFront?: string
  icon?: string
  num: string
  title: string
  text: string
}) {
  const { t } = useTranslation()
  return (
    <div
      className="w-full lg:flex-1 h-[220px] md:h-[240px] relative bg-white flex flex-col items-center justify-center p-6 md:p-8 text-center shadow-[0px_8px_24px_-4px_rgba(7,102,140,0.15)] cursor-pointer"
      style={{
        borderRadius: "50%",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-1.5 md:gap-2 max-w-[85%]">
        <p className="font-['Lora:Bold'] font-bold text-[#5bc1f6] text-sm md:text-[15px] tracking-wider">
          {num}
        </p>
        <h3 className="font-['Lora:Bold'] font-bold text-[#105f8c] text-lg md:text-xl lg:text-[22px]">
          {t(`values.items.${title}.title`)}
        </h3>
        <p className="font-['Inter:Regular'] font-normal text-[#2a5d7a] text-xs md:text-[13px] leading-[1.6] mt-1">
          {t(`values.items.${title}.text`)}
        </p>
      </div>
    </div>
  )
}
