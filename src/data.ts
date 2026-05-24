/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { VesakEvent, CardTemplate } from "./types";

export const VESAK_EVENTS: VesakEvent[] = [
  {
    id: "thorana",
    titleSi: "මහා වෙසක් තොරණ ප්‍රදර්ශනය",
    titleEn: "The Grand Vesak Thorana (Pandol)",
    descriptionSi: "විදුලි බුබුළු දසදහස් ගණනින් විචිත්‍රවත් වන 'සුවණ්ණසාම ජාතකය' ඇතුළත් මහා ඩිජිටල් තොරණ.",
    descriptionEn: "A magnificent pandol lit up with tens of thousands of colorful bulbs, depicting the sacred 'Suwannasama Jataka' story.",
    datesSi: "මැයි 26 සිට 31 දක්වා",
    datesEn: "May 26 to 31",
    timeSi: "සවස 7.00 සිට මධ්‍යම රාත්‍රී දක්වා",
    timeEn: "7:00 PM onwards till midnight",
    iconName: "Sparkles",
    badgeSi: "සුවිශේෂී",
    badgeEn: "Featured",
    longDescriptionSi: "නාමල්තලාව වෙසක් කලාපයේ ප්‍රධානතම ආකර්ෂණය වන මෙම මහා වෙසක් තොරණ දේශීය ශිල්පීන්ගේ අනභිභවනීය නිමැවුමකි. සුවණ්ණසාම ජාතක කතා වස්තුව ඇසුරින් නිර්මාණය කර ඇති මෙහි විචිත්‍රවත් විදුලි ආලෝක රටා සහ මනරම් හඬ කැවීම් ඇතුළත් වේ.",
    longDescriptionEn: "The primary attraction of the Namalthalawa Vesak Zone, this grand pandol is a masterpiece by local craftsmen. Narrating the Suwannasama Jataka, it features thousands of computerized lights synchronized with an captivating audio drama."
  },
  {
    id: "kudu",
    titleSi: "දැවැන්ත වෙසක් කූඩු ප්‍රදර්ශනය හා තරඟය",
    titleEn: "Vesak Lantern Exhibition & Competition",
    descriptionSi: "අතීත උරුමය හා නවීන තාක්‍ෂණය සුසංයෝගීව නිර්මාණය කළ අලංකාර වෙසක් කූඩු රැසක ප්‍රදර්ශනයක්.",
    descriptionEn: "A vibrant exhibition showcasing breathtakingly complex, rotating Vesak lanterns crafted using traditional and modern materials.",
    datesSi: "මැයි 26 සිට 31 දක්වා",
    datesEn: "May 26 to 31",
    timeSi: "සවස 6.30 සිට රාත්‍රී 11.30 දක්වා",
    timeEn: "6:30 PM to 11:30 PM",
    iconName: "Compass",
    badgeSi: "විශාලතම",
    badgeEn: "Mega",
    longDescriptionSi: "ප්‍රාදේශීය තරුණ නිර්මාණකරුවන්ගේ අත්කම් විස්කම් විදහාපාන දැවැන්ත වෙසක් කූඩු සහ භ්‍රමණය වන වෙසක් නිර්මාණ 50කට අධික සංඛ්‍යාවක් මෙහිදී ප්‍රදර්ශනය කෙරේ. හොඳම නිර්මාණ සඳහා වටිනා මුදල් ත්‍යාග පිරිනැමේ.",
    longDescriptionEn: "Featuring over 50 giant intricate, rotating, and fully mechanical or neon-lit Vesak lanterns. This competition brings out the maximum creativity of local schools, youth clubs, and creative designers from across the district."
  },
  {
    id: "dansela",
    titleSi: "නොමිලේ පැවැත්වෙන මහා දන්සල",
    titleEn: "The Grand Community Dansela (Food Stall)",
    descriptionSi: "සැදැහැවතුන් වෙනුවෙන් නොමිලයේ පිරිනමන රසවත් රොටි, කඩල සහ සිසිල් පැන් දන්සල.",
    descriptionEn: "Generous free food stall serving hot coconut flatbreads, seasoned chickpeas, and refreshing herbal drinks to all visitors.",
    datesSi: "මැයි 26, 27, 28 සහ 29",
    datesEn: "May 26, 27, 28 and 29",
    timeSi: "පස්වරු 5.30 සිට අවසන් වනතුරු",
    timeEn: "5:30 PM onwards until fully served",
    iconName: "FlameKindling",
    badgeSi: "පුණ්‍ය කර්මය",
    badgeEn: "Alms",
    longDescriptionSi: "පැමිණෙන සියලු සැදැහැවතුන්ට සංග්‍රහ කිරීම සඳහා නාමල්තලාව ගම්වාසීන්ගේ මූලිකත්වයෙන් සංවිධානය කරනු ලබන වෙසක් දන්සල් මාලාවකි. මෙහිදී උණුසුම් පොල් රොටි, කෝපි සහ දේශීය ඔසු පැන් නොමිලේ පිරිනමනු ලබයි.",
    longDescriptionEn: "Organized warmly by the residents of Namalthalawa to foster community spirit. The dansela welcomes everybody with hot coconut roti with spicy lunu miris, traditional herbal tea, and sweet sweet-meats."
  },
  {
    id: "bhakthigee",
    titleSi: "මිහිරි බැති ගී සරණිය",
    titleEn: "Bhakthi Gee (Devotional Songs Recital)",
    descriptionSi: "නාමල්තලාව දහම් පාසල් සිසු දැරියන් සහ ප්‍රදේශයේ කලාකරුවන් ඉදිරිපත් කරන ශ්‍රවණ රමණීය බැති ගී.",
    descriptionEn: "Serene devotional chorus recitals by Dhamma school children and local singers floating on a beautifully decorated stage.",
    datesSi: "මැයි 29, 30 සහ 31",
    datesEn: "May 29, 30 and 31",
    timeSi: "රාත්‍රී 7.30 සිට රාත්‍රී 10.00 දක්වා",
    timeEn: "7:30 PM to 10:00 PM",
    iconName: "Music",
    badgeSi: "මිහිරි",
    badgeEn: "Serential",
    longDescriptionSi: "කලාපය මධ්‍යයේ ඇති ජල මණ්ඩප වේදිකාවේ සිට ගායනා කරන මෙම මිහිරි බැති ගී මාලාව පරිසරයට එක් කරන්නේ අසිරිබර නිසංසල වෙසක් අත්දැකීමකි. සාම්ප්‍රදායික වාද්‍ය භාණ්ඩ රැසකින් මෙය සුසංයෝගී වේ.",
    longDescriptionEn: "Performed from a beautifully illuminated floating water stage. The harmonious voices of children chanting traditional Buddhist stanzas and elegant devotional songs will drift through the evening breeze."
  },
  {
    id: "pahan",
    titleSi: "දහස් පහන් ආලෝක පූජාව",
    titleEn: "10,000 Clay Oil Lamp Pooja",
    descriptionSi: "නාමල්තලාව පුරාණ රජමහා විහාර බිමේදී පැවැත්වෙන ලක්ෂයක පහන් පූජාව සහ පොහොය දින මහා ධර්මානුශාසනාව.",
    descriptionEn: "A magnificent lighting of thousands of traditional clay oil lamps at the temple grounds accompanied by a meditation session.",
    datesSi: "මැයි 31 (වෙසක් පසළොස්වක පොහෝ දින)",
    datesEn: "May 31 (Vesak Full Moon Poya Day)",
    timeSi: "සවස 6.00 සිට රාත්‍රී 9.30 දක්වා",
    timeEn: "6:00 PM to 9:30 PM",
    iconName: "Flame",
    badgeSi: "උතුම්",
    badgeEn: "Sacred",
    longDescriptionSi: "භක්තිමත් වෙසක් පොහෝ දින සන්ධ්‍යාවේදී මුළු විහාර බිමම මැටි පහන් දසදහස් ගණනින් ආලෝකවත් කර සමස්ත ලෝකයාටම නිදුක් නිරෝගී සුවය පතා මහා ආශිර්වාද පූජාවක් සහ භාවනා වැඩසටහනක් මෙහිදී සිදු කෙරේ.",
    longDescriptionEn: "Under the silver rays of the Vesak Full Moon, the ancient temple grounds will be adorned with 10,000 flickering clay oil lamps. Guests can join the mass chanting, mindfulness meditation, and mental healing session."
  }
];

export const CARD_TEMPLATES: CardTemplate[] = [
  {
    id: "golden-pahan",
    nameSi: "රන්වන් පහන් සිළුව",
    nameEn: "Golden Lamp Glow",
    bgGradient: "from-amber-950 via-neutral-900 to-amber-950",
    textColor: "text-amber-100",
    accentColor: "border-amber-500 bg-amber-500/20 text-amber-400"
  },
  {
    id: "royal-buddhist",
    nameSi: "ශාන්ත නිල් පැහැය",
    nameEn: "Sacred Blue Horizon",
    bgGradient: "from-blue-950 via-slate-900 to-indigo-950",
    textColor: "text-blue-100",
    accentColor: "border-blue-500 bg-blue-500/20 text-blue-300"
  },
  {
    id: "lotus-pink",
    nameSi: "නෙළුම් පෙති රෝස",
    nameEn: "Elegant Lotus Pink",
    bgGradient: "from-rose-950 via-stone-900 to-amber-950",
    textColor: "text-rose-100",
    accentColor: "border-rose-500 bg-rose-500/20 text-rose-300"
  },
  {
    id: "forest-serene",
    nameSi: "නිසංසල අරණ",
    nameEn: "Serene Forest Green",
    bgGradient: "from-emerald-950 via-neutral-900 to-stone-900",
    textColor: "text-emerald-100",
    accentColor: "border-emerald-500 bg-emerald-500/20 text-emerald-300"
  }
];

export const DHAMMAPADA_QUOTES = [
  {
    si: "අරෝග්‍යපරමා ලාභා - සන්තුට්ඨිපරමං ධනං\nවිස්සාසපරමා ඤාතී - නිබ්බාණපරමං සුඛං",
    en: "Health is the greatest gift, contentment is the greatest wealth, trust is the best relative, Nibbana is the supreme bliss.",
    sourceSi: "ධම්මපදය - සුඛ වග්ගය",
    sourceEn: "Dhammapada - Sukha Vagga"
  },
  {
    si: "න හි වේරේන වේරානි - සම්මන්තීධ කුදාචනං\nඅවේරේන ච සම්මන්ති - ඒස ධම්මෝ සනන්තනෝ",
    en: "Hatred is never appeased by hatred in this world. By non-hatred alone is hatred appeased. This is law eternal.",
    sourceSi: "ධම්මපදය - යමක වග්ගය",
    sourceEn: "Dhammapada - Yamaka Vagga"
  },
  {
    si: "ධම්මපීති සුඛං සේති - විප්පසන්නෙන චේතසා\nඅරියප්පවේදිතේ ධම්මේ - සදා රමති පණ්ඩිතෝ",
    en: "He who drinks in the Dhamma lives happily with a serene mind. The wise man ever rejoices in the Dhamma made known by the Noble Ones.",
    sourceSi: "ධම්මපදය - පණ්ඩිත වග්ගය",
    sourceEn: "Dhammapada - Pandita Vagga"
  },
  {
    si: "මනොපුබ්බංගමා ධම්මා - මනොසෙට්ඨා මනොමයා\nමනසා චෙ පසන්නෙන - භාසති වා කරොති වා\nතතො නං සුඛමන්වේති - ඡායාව අනපායිනී",
    en: "Mind precedes all mental states. Mind is their chief; they are mind-made. If one speaks or acts with a pure mind, happiness follows him like a shadow that never departures.",
    sourceSi: "ධම්මපදය - යමක වග්ගය",
    sourceEn: "Dhammapada - Yamaka Vagga"
  }
];
