import cardData from '../../../../data/physarum-polycephalum/cardData';
import ArtworkPageClient from './ArtworkPageClient';

export async function generateStaticParams() {
  return cardData.map((card) => ({
    artworksId: card.link,
  }));
}

export default function ArtworkPage({ params }) {
  return <ArtworkPageClient params={params} />;
}
