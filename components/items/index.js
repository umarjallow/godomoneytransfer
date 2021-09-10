import {
    TrendingDownIcon,
    TrendingUpIcon,
    SwitchVerticalIcon,
    TableIcon,
    LightBulbIcon,
    ChartPieIcon
  } from '@heroicons/react/outline'

const menu = {
    items:[
            {
                url: '/dashboard',
                Icon: ChartPieIcon, 
                title: 'Accueil'
            },
            {
                url: '/send',
                Icon: TrendingUpIcon,
                title: 'Envoi'
            },
            {
                url: '/withdrawal',
                Icon: TrendingDownIcon,
                title: 'Retrait'
            },
            {
                url: '/payment',
                Icon: SwitchVerticalIcon,
                title: 'Paiement'
            },
            {
                url: '/transactions',
                Icon: TableIcon,
                title: 'Transactions'
            },
            {
                url: '/account',
                Icon: LightBulbIcon,
                title: 'Compte'
            }
    ]    
}

export default menu