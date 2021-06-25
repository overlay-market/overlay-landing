import React from 'react'
import { FeedCard, Link } from '../../../components';

const data = [
    { name: "Polychain", link: "https://polychain.capital/" },
    { name: "1kx", link: "https://twitter.com/1kxnetwork?lang=en" },
    { name: "ParaFi", link: "https://www.parafi.capital/" },
    { name: "The LAO", link: "https://www.thelao.io/" },
    { name: "MetaCartel", link: "https://metacartel.xyz/" },
];

interface StakeholdersProps {
  header: string;
}

const Stakeholders: React.FC<StakeholdersProps> = ({header}) => {
    return (
      <FeedCard header={header}>
        {data.map((stakeholder) => (
          <Link
            href={stakeholder.link}
            marginBottom={"10px"}
            newWindow={true}
            >
            {stakeholder.name}
            </Link>
        ))}
      </FeedCard>
    );
}

export default Stakeholders;