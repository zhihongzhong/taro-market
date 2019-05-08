import merchandiseImage from '../images/itemImage.jpg'

export const REPOSITORY = {
    SHOW_PRICE_FROM_HIGH_TO_LOW: 'REPOSITORY_SHOW_PRICE_FROM_HIGH_TO_LOW',
    SHOW_PRICE_FROM_LOW_TO_HIGH: 'REPOSITORY_SHOW_PRICE_FROM_LOW_TO_HIGH',
    SHOW_SALE_FROM_HIGH_TO_LOW: 'REPOSITORY_SHOW_SALE_FROM_HIGH_TO_LOW',
    SHOW_SALE_FROM_LOW_TO_HEIGH: 'REPOSITORY_SHOW_SALE_FROM_LOW_TO_HIGH',
    ADD_TO_REPOSITORY:'REPOSITORY_ADD_TO_REPOSITORY',
    SHOW_NORMAL: 'REPOSITORY_SHOW_NORMAL'
}

export const TEST_REPOSITOYR = 
{
  merchandises: [
    {
        id: 1,
        title: '马赛克 205g/包',
        desc: '关于马赛克的描述',
        vip: true,
        img: merchandiseImage,
        freeshipping: true,
        price: 19.44,
        reposNum: 97,
        vipPrice: 18.00,
        num:1,        
      },
      {
        id: 2,
        title: '马赛克 205g/包',
        desc: '关于马赛克的描述',
        vip: true,
        freeshipping: true,
        img: merchandiseImage,
        price: 20.44,
        vipPrice: 18.00,   
        reposNum: 99,
        num:1,       
      },
      {
        id: 3,
        title: '马赛克 205g/包',
        desc: '关于马赛克的描述',
        vip: true,
        img: merchandiseImage,
        freeshipping: true,
        price: 21.44,
        vipPrice: 18.00,   
        reposNum: 60,
        num:1,       
      }
],
filter: REPOSITORY.SHOW_NORMAL
}


export const TEST_MERCHANDISES = [
  {
    id: 1,
    title: '马赛克 205g/包',
    desc: '关于马赛克的描述',
    vip: true,
    img: merchandiseImage,
    freeshipping: true,
    price: 19.44,
    reposNum: 97,
    vipPrice: 18.00,
    num:1,        
  },
  {
    id: 2,
    title: '马赛克 205g/包',
    desc: '关于马赛克的描述',
    vip: true,
    freeshipping: true,
    img: merchandiseImage,
    price: 20.44,
    vipPrice: 18.00,   
    reposNum: 99,
    num:1,       
  },
  {
    id: 3,
    title: '马赛克 205g/包',
    desc: '关于马赛克的描述',
    vip: true,
    img: merchandiseImage,
    freeshipping: true,
    price: 21.44,
    vipPrice: 18.00,   
    reposNum: 60,
    num:1,       
  }
]