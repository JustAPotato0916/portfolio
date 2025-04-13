import SectionTitle from './SectionTitle.jsx';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { LuLink } from 'react-icons/lu';

const projectsInfo = [
  {
    name: 'Portfolio',
    description:
      '使用 React 作為前端框架，搭配 Tailwind CSS 進行樣式設計，並利用 GSAP 創建動態且引人入勝的動畫效果。這個組合使得個人網站變得視覺上令人驚艷，並提供流暢的用戶體驗。透過 React 的強大功能、Tailwind CSS 的統一設計風格，以及 GSAP 的動畫工具，實現了動態導覽列，打造出一個模組化、可維護且在不同設備上都能呈現最佳效果的個人網站。',
    skills: 'React | Tailwind CSS | GSAP',
    demoURL: 'https://portfolio-justapotato0916s-projects.vercel.app/',
    githubURL: 'https://github.com/JustAPotato0916/portfolio',
  },
  {
    name: 'ChatPDF',
    description:
      '整合了多項現代化技術以實現完整的用戶服務流程：透過 Clerk 提供無縫的第三方身份驗證（如 Google、GitHub）與註冊登入功能，搭配 Stripe 訂閱系統管理付費方案與支付流程，並利用 AWS S3 安全儲存用戶上傳的 PDF 文件。此外，系統內建智能聊天室，透過 OpenAI API 分析文件內容，提供即時且精準的問答互動，實現從身份驗證、付費訂閱到文件管理的全流程自動化，同時強化用戶體驗與數據安全性',
    skills: 'Next.js | TypeScript | Tailwind CSS | Stripe | Clerk | AWS',
    demoURL: '',
    githubURL: 'https://github.com/JustAPotato0916/ChatPDF',
  },
  {
    name: 'Netflix clone',
    description:
      '使用 Next.js 作為核心框架，重現 Netflix 的介面與功能，整合 Firebase Authentication 實現第三方登入（如 Google、GitHub）與用戶註冊流程，並透過 Firestore Database 儲存訂閱方案與用戶的訂閱狀態，確保實時數據同步與高可用性。電影資料則串接 TMDb API 動態獲取最新內容，包括海報、簡介與評分，同時結合 Next.js 的伺服器端渲染（SSR）與靜態生成（SSG）技術，優化首頁載入速度與 SEO 表現。全站採用響應式設計，支援跨裝置瀏覽，並透過 Firebase 安全規則強化數據權限管控，打造兼具流暢體驗與安全性的串流平台原型。',
    skills: 'Next.js | TypeScript | Tailwind CSS | Firebase',
    demoURL: 'https://netflix-redesign-nextjs.vercel.app/',
    githubURL: 'https://github.com/JustAPotato0916/netflix-redesign-nextjs',
  },
  {
    name: 'Nested comments',
    description:
      '使用 React 作為前端框架，打造一個互動性強的留言版，允許用戶發布和回覆留言。後端則採用 Fastify 來構建高效的 API 伺服器，並利用 Prisma 進行資料模型管理，連接 PostgreSQL 資料庫以儲存和管理留言數據。這個技術堆疊使得系統能夠提供快速、可靠且易於維護的留言功能，同時確保數據一致性和安全性。',
    skills: 'React | Prisma | Fastify | PostgreSQL',
    demoURL: '',
    githubURL: 'https://github.com/JustAPotato0916/nested-comments',
  },
];

const Card = ({ index }) => {
  const { name, description, skills, demoURL, githubURL } = projectsInfo[index];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="flex w-3/4 xl:w-1/2">
        <div className="border-sub border-1">
          <img src={`img/project-${index + 1}.png`} alt="Project Screenshot" />
        </div>
      </div>
      <div className="flex w-5/6 flex-col items-center gap-2">
        <p className="text-lg font-bold md:text-2xl">{name}</p>
        <p className="text-sub text-sm md:text-lg">{description}</p>
        <p className="text-center text-blue-500 md:text-lg">{skills}</p>
      </div>

      <div className="flex flex-row items-center text-green-500 md:text-lg">
        {(demoURL || githubURL) && <LuLink className="mt-1 mr-2 size-4" />}
        {demoURL && (
          <>
            <a href={demoURL} target="_blank">
              Demo
            </a>{' '}
            /{' '}
          </>
        )}

        {githubURL && (
          <a href={githubURL} target="_blank">
            Github
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const totalProjects = projectsInfo.length;
  const [cardIndex, setCardIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cardRef = useRef(null);

  useEffect(() => {
    Array.from({ length: totalProjects }, (_, index) => {
      const img = new Image();
      img.src = `img/project-${index + 1}.png`;
    });
  });

  const handleClick = (direction) => {
    setIsAnimating(true);

    gsap
      .timeline()
      .to(cardRef.current, {
        x: direction === 'next' ? -200 : 200,
        opacity: 0,
        zIndex: -1,
        duration: 0.5,
      })
      .call(() => changeCardIndex(direction))
      .set(cardRef.current, {
        x: direction === 'next' ? 200 : -200,
        opacity: 0,
        zIndex: 0,
        duration: 0.5,
      })
      .to(cardRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
      })
      .call(() => setIsAnimating(false));
  };

  const changeCardIndex = (direction) => {
    if (direction === 'next') {
      setCardIndex((prevIndex) =>
        prevIndex === totalProjects - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === 'prev') {
      setCardIndex((prevIndex) =>
        prevIndex === 0 ? totalProjects - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section id="projects" className="section overflow-y-hidden">
      <SectionTitle title="專案" subtitle="專案展示" />
      <div className="flex size-full items-center justify-center">
        <div className="mt-48 flex h-full w-full flex-row items-center justify-center gap-2 md:mt-32 md:gap-24">
          <div className="ml-1 flex flex-col items-center">
            <button
              className="text-sub cursor-pointer hover:text-black"
              disabled={isAnimating}
              onClick={() => {
                handleClick('prev');
              }}
            >
              <CiCircleChevLeft className="size-8 md:size-14" />
            </button>
          </div>
          <div
            ref={cardRef}
            className="border-sub h-2/3 rounded-4xl border-1 bg-white md:h-3/5 md:w-1/2 2xl:h-2/3"
          >
            <div className="flex size-full flex-col items-center justify-center">
              <Card index={cardIndex} />
            </div>
          </div>
          <div className="mr-1 flex flex-col items-center">
            <button
              className="text-sub cursor-pointer hover:text-black"
              disabled={isAnimating}
              onClick={() => {
                handleClick('next');
              }}
            >
              <CiCircleChevRight className="size-8 md:size-14" />
            </button>
          </div>
        </div>

        <p className="text-sub absolute bottom-4 md:bottom-1/12 2xl:bottom-8">
          {cardIndex + 1} / {totalProjects}
        </p>
      </div>
    </section>
  );
};
export default Projects;
