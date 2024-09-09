import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CSSIcon from "@/assets/icons/css3.svg"
import NextIcon from "@/assets/icons/next-js.svg"
import MysqlIcon from "@/assets/icons/mysql-3.svg"
import PrismaIcon from "@/assets/icons/prisma.svg"
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import rissImage from "@/assets/images/risscoding.png";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CSSIcon,
  },
  {
    title: 'Next',
    iconType: NextIcon,
  },
  {
    title: 'Prisma ORM',
    iconType: PrismaIcon,
  },
  {
    title: 'MySQL',
    iconType: MysqlIcon,

  },
]

const hobbies = [
  {
    title: 'Basket',
    emoji: '🏀',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📷',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Music',
    emoji: '🎧',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '7%',
    top: '35%',
  },
  {
    title: 'Fitness',
    emoji: '🏋',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Guitar',
    emoji: '🎸',
    left: '45%',
    top: '70%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '70%',
    top: '45%',
  }
]

export const AboutSection = () => {
  return <div className="py-20 lg:py-28">
    <div className="container">
    <SectionHeader 
    eyebrow="Siapa Faris Febrian?"    
    title="Lihat Dunia saya" 
    description="Kenali siapa saya, apa yang saya lakukan, dan apa yang menginspirasi saya"/>
    <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
    <Card className="h-[320px] md:col-span-2 lg:col-span-1">
      <CardHeader title="Data saya" description="Nama saya Muhammad Faris Febrian Ramdan, siswa aktif SMK Negeri 4 Bandung jurusan rekayasa perangkat lunak." className="text-sm"/>
      <div className="w-52 mx-auto  mt-2 md:mt-0">
      </div>
    </Card>
    <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
      <CardHeader title="Alat Saya" description="Jelajahi teknologi dan alat yang saya pakai untuk membuat karya digital." className="" />
      <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
      <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
    </Card>
    </div>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
    <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
      <CardHeader title="Hobi Saya" description="Jelajahi minat dan hobi saya di luar dunia digital." className="px-6 py-6"/>
      <div className="relative flex-1">
        {hobbies.map(hobby => (
          <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
            left: hobby.left,
            top: hobby.top,
          }} 
          >
            <span className="font-medium text-gray-950">{hobby.title}</span>
            <span>{hobby.emoji}</span>
          </div>
        ))}
      </div>
    </Card>
    <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
        <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r  size-20 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
        <Image 
        src={smileMemoji} 
        alt="riss smile" 
        className="size-20"/>
        </div>
    </Card>
    </div>
  </div>
  </div>
  </div>
};
