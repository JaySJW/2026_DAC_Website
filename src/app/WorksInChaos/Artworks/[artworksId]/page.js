import cardData from '../../../../data/WorksInChaosData/cardData';
import ArtworkDetailsClient from './ArtworkDetailsClient';

export async function generateStaticParams() {
  return cardData.map((card) => ({
    artworksId: card.link,
  }));
}

export default function ArtworkDetailsPage({ params }) {
  return <ArtworkDetailsClient params={params} />;
}
