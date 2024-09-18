import ImageCard from "@/components/shared/card/image-card";
import DynamicImage from "@/components/shared/image/dynamic-image";
import StaticImage from "@/components/shared/image/static-image";

import party from "@/../public/party.jpg";

const REMOTE_IMAGE_URL =
  "https://images.unsplash.com/photo-1486591978090-58e619d37fe7";

export default function Home() {
  return (
    <section>
      <div className="grid sm:grid-cols-2 gap-2">
        {/* <ImageCard
          cardTitle="Static Image"
          cardDescription="Image loaded using StaticImage component"
          cardContent={<StaticImage src={party} alt="Party" />}
          cardFooter="Image loaded using StaticImage component"
        /> */}
        <ImageCard
          cardTitle="Dynamic Image"
          cardDescription="Image loaded using DynamicImage component"
          cardContent={<DynamicImage src={'/party.jpg'} alt="Image 1" />}
          cardFooter="Image loaded using DynamicImage component"
        />
      </div>
    </section>
  );
}
