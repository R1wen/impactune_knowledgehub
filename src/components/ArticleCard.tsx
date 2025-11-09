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
  // Le wrapper principal peut être un lien si cardLink est fourni, sinon une div.
  const Wrapper = cardLink ? "a" : "div";
  const WrapperProps = cardLink ? { href: cardLink } : {};

  return (
    <div className="max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden bg-white group hover:shadow-xl transition duration-300 ease-in-out">
      <div className="p-4 bg-amber-50 rounded-t-lg">
        <div className="flex justify-center">
          <div className="w-full max-w-[250px] aspect-2/3 relative">
            <Image
              src={imageSrc}
              alt={`Couverture du document: ${title}`}
              fill
              style={{ objectFit: "contain" }}
              className="rounded-md"
              priority
            />
          </div>
        </div>
      </div>

      <div className="p-6">
        <Wrapper
          {...WrapperProps}
          className="text-lg md:text-xl font-semibold leading-snug mb-3 text-blue-700 group-hover:text-red-600 transition duration-150 ease-in-out"
        >
          {title}
        </Wrapper>
        <p className="text-gray-600 mt-5">{date}</p>
      </div>
    </div>
  );
};

export default DocumentCard;
