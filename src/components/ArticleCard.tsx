"use client"
import Link from "next/link";
import Image from "next/image";
import { useTheme } from '@/src/contexts/ThemeContext';

interface DocumentCardProps {
  title: string;
  imageSrc: string;
  date: string;
  cardLink?: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  imageSrc,
  date,
  cardLink,
}) => {
  const { theme } = useTheme();
  
  const content = (
    <>
      <div className={`p-4 rounded-t-xl ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
        <div className="flex justify-center">
          <div className="w-full max-w-[250px] aspect-2/3 relative">
            <Image
              src={imageSrc}
              alt={`Couverture du document: ${title}`}
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className={`text-lg md:text-xl font-bold leading-snug mb-3 group-hover:opacity-80 transition-all duration-200 ${theme === 'dark' ? 'text-white' : 'gradient-impactune-text'}`}>
          {title}
        </h3>
        <div className={`flex items-center justify-between mt-4 pt-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
          <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{date}</p>
          <svg className={`w-5 h-5 transition-colors ${theme === 'dark' ? 'text-gray-500 group-hover:text-blue-400' : 'text-gray-400 group-hover:text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </>
  );

  return (
    <div className={`max-w-sm mx-auto shadow-lg rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${
      theme === 'dark' 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-100'
    } border`}>
      {cardLink ? (
        <Link href={cardLink} className="block">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
};

export default DocumentCard;
