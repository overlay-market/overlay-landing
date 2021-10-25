import { FeedCard, ListRow, Icon, Link } from '../../../components';
import PeckshieldIcon from "../../../assets/icons/peckshield-logo.png";

const data = [
  { name: "Peckshield", link: "https://peckshield.com/en", icon: `${PeckshieldIcon}` }
];

const Auditors = ({
  header
}:{
  header: string
}) => {
  return (
    <FeedCard header={header}>
        {data.map((auditor, key) => (
            <ListRow>
              <Icon 
                height={24} 
                width={24} 
                margin={'0 5px 0 0'} 
                src={auditor.icon} 
                alt={`${auditor.name} Icon`} 
                />
                <Link
                    key={key}
                    href={auditor.link}
                    >
                    {auditor.name}
                </Link>
            </ListRow>
        ))}
    </FeedCard>
  )
};

export default Auditors;