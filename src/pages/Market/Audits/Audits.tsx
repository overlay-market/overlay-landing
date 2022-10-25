import {FeedCard, ListRow, Icon, Link} from '../../../components'
import Spearbit_Logo from '../../../assets/icons/spearbit-logo.png'
import LeastAuthority_Logo from '../../../assets/icons/leastauthority-logo.png'

const data = [
  {
    name: 'Least Authority',
    link: 'https://github.com/overlay-market/v1-core/blob/main/audits/leastauthority/audit.pdf',
    icon: `${LeastAuthority_Logo}`,
  },
  {
    name: 'Spearbit',
    link: 'https://github.com/overlay-market/v1-core/blob/main/audits/spearbit/audit.pdf',
    icon: `${Spearbit_Logo}`,
  },
]

const Audits = ({header}: {header: string}) => {
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
          <Link key={key} href={auditor.link}>
            {auditor.name}
          </Link>
        </ListRow>
      ))}
    </FeedCard>
  )
}

export default Audits
