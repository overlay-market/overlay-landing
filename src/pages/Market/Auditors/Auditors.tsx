import {FeedCard, ListRow, Icon, Link} from '../../../components'
import Spearbit_Logo from '../../../assets/icons/spearbit-logo.png'

const data = [
  {
    name: 'Spearbit',
    link: 'https://github.com/overlay-market/v1-core/blob/main/audits/spearbit/audit.pdf',
    icon: `${Spearbit_Logo}`,
  },
]

const Auditors = ({header}: {header: string}) => {
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

export default Auditors
