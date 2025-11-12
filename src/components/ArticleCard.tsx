import Link from "next/link";
import Image from "next/image";

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
  const content = (
    <>
      <div className="p-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-t-xl">
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
        <h3 className="text-lg md:text-xl font-bold leading-snug mb-3 gradient-impactune-text group-hover:opacity-80 transition-all duration-200">
          {title}
        </h3>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600 font-medium">{date}</p>
          <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </>
  );

  return (
    <div className="max-w-sm mx-auto shadow-lg rounded-xl overflow-hidden bg-white group hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-100">
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
